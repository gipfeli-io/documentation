---
id: frontend-deployment
sidebar_position: 2
title: Frontend deployment
---

Our frontend is built with [React](https://reactjs.org/) using [Create React App](https://create-react-app.dev/) as a
skeleton builder. Currently, the build output is served via a lightweight [Nginx](https://www.nginx.com/) webserver.

:::tip Why we're using Nginx to serve a static website

Given that a React app is built and only consists of static files (Javascript, CSS, HTML, etc.), there are several ways
how these files can be served. Using Nginx is the most straightforward approach since its a basic webserver that serves
files and it comes with all amenities such as GZIP compression, routing and so on.

However, it could become more cost-efficient to drop Cloud Run and serve the files from a simple Storage Bucket. That
would require a Load Balancer, though, and at the moment the costs of adding a Load Balancer are far higher than using
Cloud Run.

:::

## Deployment steps

Deployment always happens when a push is sent to main or stage. This triggers
the [GitHub Action](https://github.com/gipfeli-io/gipfeli-frontend/blob/main/.github/workflows/ci.yml) that
performs the following steps:

1. Run all the the steps in the `test-and-build` job, consisting of
    1. Run tests
    2. Set up environment variables: Because our frontend is statically built, all environment variables need to be
       injected at buildtime, i.e. in this action's context. As such, they are added to `$GITHUB_ENV` which makes them
       available as normal environment variables to the build context. Since they are different for staging and main,
       they can be conditionally defined, and they may also use GitHub secrets.
    4. Build the container assigning it a unique name (`gcr.io/{project_id}/{app_name}-{environment}:{commit_sha}`) and
       providing the correct build args
    5. If we are pushing to either `stage` or `main`:
        1. establish connection to our Google Cloud account using the
           official [google-github-actions/auth](https://github.com/google-github-actions/auth) step.
        2. We can now use `gcloud` tools. First, we configure the container registry.
        3. We then push the image to the Google Cloud Container Registry
2. Depending on whether we push to `stage` or `main`, we run either the `deploy-stage` or the `deploy-main` job. They do
   the same but use different endpoints to deploy the correct environment. This takes the following steps:
    1. Authenticate with Google Cloud again
    2. Deploy the previously pushed image using `gcloud run deploy`
3. After this, the deployment starts, boots up our new image as a new CloudRun pod, performs healthchecks and gracefully
   replaces the previous running pod with our new pod, redirecting all traffic to this pod.

:::tip Sonarcloud

Because we do not use coverage analysis in the frontend as we do in the backend, we can use Sonarcloud's automatic scan.
This is the default for any repository that is configured within Sonarcloud and executes automatically on each action
run. It will also automagically create a comment on every pull request with a short summary.

:::
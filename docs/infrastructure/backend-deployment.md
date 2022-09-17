---
id: backend-deployment
sidebar_position: 3
title: Backend deployment
---

Our backend is built with [nest.js](https://nestjs.com/) and runs its own process to handle incoming API requests
via `npm run start:prod`.

## Deployment steps

Deployment always happens when a push is sent to main. This triggers
the [GitHub Action](https://github.com/gipfeli-io/gipfeli-api/blob/main/.github/workflows/deployment.yml) that performs
the following steps:

1. Run all the the steps in the `test-and-build` job, consisting of
    1. Setting up a local Postgresql instance as a service to be used within the context of this build step
    2. Install dependencies and run unit tests and e2e tests (against the Postgresql instance from step 1). Tests are
       run with coverage.
    3. Merge coverage reports - because Sonarcloud requires one single coverage
       file, [the unit and e2e reports have to be merged](https://github.com/gipfeli-io/gipfeli-api/tree/main#merging-coverage)
       for Sonarcloud to be able to find them.
    4. Run the Sonarcloud scan to check the repository. In contrast to the frontend, this is done explicitly as an
       action, which is required by Sonarcloud for running coverage analysis.
    5. Set up the Docker image name as an environment variable, because the image name is different depending on the
       environment.
    6. Build the container assigning it a unique name (`gcr.io/{project_id}/{app_name}-{environment}:{commit_sha}`).
    7. If we are pushing to either `stage` or `main`:
        1. establish connection to our Google Cloud account using the
           official [google-github-actions/auth](https://github.com/google-github-actions/auth) step.
        2. We can now use `gcloud` tools. First, we configure the container registry.
        3. We then push the image to the Google Cloud Container Registry
2. Depending on whether we push to `stage` or `main`, we run either the `deploy-stage` or the `deploy-main` job. They do
   the same but use different endpoints to deploy the correct environment. This takes the following steps:
    1. Authenticate with Google Cloud again
    2. Deploy the previously pushed image using `gcloud run deploy`
3. After this, the deployment starts, boots up our new image as a new CloudRun pod, performs healthchecks and gracefully
   replaces the previous running pod with our new pod, redirecting all traffic to this pod. Because of the way our
   Dockerfile is configured, it will also trigger database migrations (if any).

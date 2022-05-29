---
id: frontend-deployment 
sidebar_position: 2 
title: Frontend deployment
---

Our frontend is built with [next.js](https://nextjs.org/) and runs its own process to handle incoming requests.

## Deployment steps

Deployment always happens when a push is sent to main. This triggers
the [GitHub Action](https://github.com/gipfeli-io/gipfeli-frontend/blob/stage/.github/workflows/deployment.yml) that performs
the following steps:

1. Establish connection to our Google Cloud account using the official [google-github-actions/auth](https://github.com/google-github-actions/auth) step.
2. After step 1, we can now use `gcloud` tools. First, we configure the container registry.
3. At this point, we build the container image, assigning it a unique name (`gcr.io/{project_id}/{app_name}:{commit_sha}`)
4. We push our previously built image to our registry
5. Finally, we deploy our image to our CloudRun service. This automatically deploys our new image, starts its pod and gracefully replaces the old pod.

## Todo
- [ ] Change link to `main` branch action when deployed to production
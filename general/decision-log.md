---
id: decision-log 
sidebar_position: 5 
title: "Decision log"
---

Throughout the course of this thesis, a lot of decisions will be made. This log provides a transparent overview of all
these decisions and can be used as a reference in other documents.

| ID  | Date       | Decision                                                                                                                                                                                                                                                                                                                                                                                                                                      | Further links                                                                                                                                         |
|-----|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| 8   | 2022-04-25 | mui.com has also a pricing list now. but we will try to use the free tier as it currently looks like it has all the features we need.                                                                                                                                                                                                                                                                                                         |                                                                                                                                                       |
| 7   | 2022-04-19 | Do not use Auth0: After some research, we found that Auth0 is not really usable within the free tier (e.g. missing custom domains). As such, we decided to implement the user models in our database by using the provided adapters in `next-auth`. As an optional feature, we might also add Google and other social auth providers.                                                                                                         |                                                                                                                                                       |
| 6   | 2022-04-19 | Use [Google Container Registry](https://cloud.google.com/container-registry) for our containers instead of the (recommended) [Artifact Registry](https://cloud.google.com/artifact-registry). The decision was made due to the higher costs for the artifact registry and no significant benefits. Since we experimented with both registries, we know that we can easily switch registries should the Container Registry become unsupported. |                                                                                                                                                       |
| 5   | 2022-04-12 | Use English as the project language and opensource all repositories.                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                       |
| 4   | 2022-04-12 | Use branching strategy with `staging` and `main`.                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                       |
| 3   | 2022-04-08 | Use [Material UI](https://mui.com/), [next-auth](https://next-auth.js.org/), [Auth0](https://auth0.com/) and OpenAPI specifiations                                                                                                                                                                                                                                                                                                            | [Details in meeting note](/meeting-notes/kickoff#various-technical-discussions-and-decisions)                                                         |
| 2   | 2022-04-08 | Use a modified, scrum-inspired development workflow.                                                                                                                                                                                                                                                                                                                                                                                          | [Details in meeting note](/meeting-notes/kickoff#development-process-and-timeplans)<br/>[Details in documentation](./organization#project-management) |
| 1   | 2022-04-08 | Use [Clockify](https://clockify.me/) for time-tracking.                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                       |
---
id: basics
sidebar_position: 1
title: Basics
---

In general, our infrastructure uses the following services:

* **GitHub**
    * Hosts our organization with all repositories
    * Uses GitHub Actions to build and deploy our project
    * Uses GitHub Pages to host our statically built documentation
* **Google Cloud Platform**
    * Hosts our frontend application
    * Hosts our backend application
    * Stores the application data
    * Contains all our containers in its registry

In terms of services used for our main application, the following diagram shows all the services, while they're
described in more detail below.

[(enlarge image)](/img/docs/infrastructure/overview.svg)
![Infrastructure diagram](/img/docs/infrastructure/overview.svg)

:::info Note

For simplicity, the documentation part is left out in the above documentation. More information can be
found [here](./documentation-deployment.md)

:::

## DevOps

For our DevOps needs, we use services from both GitHub and Google Cloud.

### GitHub

At GitHub, we have a [gipfeli.io](https://github.com/gipfeli-io) organization set up that hosts all the code
repositories. Both the frontend and the backend use GitHub Actions to automatically test, build and deploy our
applications to staging and production.

We chose GitHub because

* It allows for Kanban-style project boards that are linked to repositories' issues
* Has quite a good review framework for pull requests
* Has a fully integrated CICD pipeline with GitHub Actions that neatly ties into Google Cloud and other services

### GCP: Container Registry

All our containers are built during GitHub Actions workflows and pushed to the centralized GCP Container Registry. This
serves as both a source for backtracking whenever a new release fails hard or as an easy way to deploy new versions to
Cloud Run.

We chose the Container Registry because

* It seamlessly integrates with all the other GCP services
* It is - even though deprecated - a lot cheaper than its successor (Artifact Registry), because it uses Cloud Storage
  as a backend which costs way less

## Presentation & Business Logic

Our presentation layer serves our frontend application to the user. Our business logic layer hosts the backend API which
provides the data upon request from the frontend. It also handles any data wrangling or modifications. Both layers use
Google Cloud Run.

### GCP: Cloud Run

Cloud Run is a PaaS offering in the Google Cloud. It is based on Kubernetes but abstracts away its complexity. In
essence, you just deploy pre-built container images and that's all - Cloud Run automatically scales (up to some
user-defined limits) up and down. Should need be, one can still access some of the Kubernetes configurations under the
hood and tweak settings.

We chose Cloud Run because

* It has a very generous free tier
* It works similar to Heroku with pods automatically shutting down if no requests are received, which is optimal for
  staging environments
* It works out-of-the-box and integreates seamlessly with all GCP services
* It allows for a completely private API - Cloud Run does not make its instances public by default, yet Cloud Run
  instances may talk to each other. As such, the frontend may be public, while the API itself remains private and can
  only be access through the frontend.

## Persistence

The persistence layer stores all the data our application needs and/or generates. We use Cloud Storage and Cloud SQL.

### GCP: Cloud Storage

This is Google's object storage offering. It allows for storing arbitrary amounts of data in an (implied) hierarchical
fashion. It also allows for finegrained access controls.

We chose Cloud Storage because

* It is actually the simplest, cheapest option to store for example user-provided assets such as images

### GCP: Cloud SQL

We chose a Postgres database, which runs under Google's Cloud SQL naming which is an umbrella term for its managed
relational databases. Many tiers exist and one can easily scale up if the application gets larger. The only downside is
that this is the only component which actually is rather relatively expensive. However, since the data is the core of
our product, it would be the wrong place to save money.

We chose Cloud SQL (Postgres) because

* It is a managed Postgres instance, optimized to the extreme
* It is batteries-included - from scaling to point-in-time-recovery


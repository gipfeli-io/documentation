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
    * Runs scheduled tasks
* **Sentry**
    * Our error logging and performance metrics solution
* **SendGrid**
    * Our email provider for delivering our emails
* **SonarCloud**
    * Our code quality scanning tool

In terms of services used for our main application, the following diagram shows all the services, while they're
described in more detail below.

[(enlarge image)](/img/docs/infrastructure/overview.svg)
![Infrastructure diagram](/img/docs/infrastructure/overview.svg)
<!--
Use https://googlecloudcheatsheet.withgoogle.com/architecture and import ./diagrams/cloud_infrastructure.excalidraw
Make sure to always export the file if any changes happen and overwrite the existing file.
-->
:::info Note

For simplicity, the documentation part is left out in the above documentation. More information can be
found [here](./documentation-deployment.md).

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
  as a backend which costs way less (and it still gets all security updates!)

### SonarCloud

This tool performs code analysis in our repositories and, in the case of the backend, also makes sure the code coverage
is good enough. The data is [publicly available](https://sonarcloud.io/organizations/gipfeli-io/projects). It reports
code smells, security issues and much more.

We chose SonarCloud because

* It offers a free tier
* It is usable withing GitHub Actions workflows and integrates into our workflow

## Presentation layer & Business layer

Our presentation layer serves our frontend application to the user. Our business layer hosts the backend API which
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
* It works out-of-the-box and integrates seamlessly with all GCP services
* It allows for a completely private API - Cloud Run does not make its instances public by default, yet Cloud Run
  instances may talk to each other. As such, the frontend may be public, while the API itself remains private and can
  only be access through the frontend. This is currently not used by us, but could become important if we were to
  develop an API that handles internal tasks such as data extraction and so on

### GCP: Secret Manager

Cloud Run offers two means of injecting environment variables into its container: Plain environment variables which are
defined on the deployment itself and variables set within the Secret Manager offering. For sensitive variables such as
database passwords or JWT secrets, we are using the Secret Manager. It allows for securely defining variables that
cannot be read by anyone after saving and even offers the possibility to version them. As such, they get injected into
the Cloud Run deployments, but are not readable from any logs.

We chose Secret Manager because

* It is the only way to ensure sensitive variables are not logged in any outputs/traces
* It integrates seamlessly with Cloud Run

## Data layer

The data layer stores all the data our application needs and/or generates. We use Cloud Storage and Cloud SQL.

### GCP: Cloud Storage

This is Google's object storage offering. It allows for storing arbitrary amounts of data in an (implied) hierarchical
fashion. It also allows for finegrained access controls.

We chose Cloud Storage because

* It is actually the simplest, cheapest option to store for example user-provided assets such as images
* It allows finegrained access control, while also allowing for almost-zero-config access via other services (e.g.
  CloudRun).

:::tip Note on our buckets access policy

Our buckets are currently public, so all user uploads are - in theory - accesible by everyone. All uploads are however
placed in a folder which is the user's UUID, and each files gets a randomized UUID prefixed to its slugified filename.
As such, we believe that this is good enough and a nice tradeoff, because the other solution would require us to proxy
each and every request to a user-provided asset through our API, which can become a performance bottleneck.

:::

### GCP: Cloud SQL

We chose a Postgres database, which runs under Google's Cloud SQL naming which is an umbrella term for its managed
relational databases. Many tiers exist and one can easily scale up if the application gets larger. The only downside is
that this is the only component which actually is rather relatively expensive. However, since the data is the core of
our product, it would be the wrong place to save money.

We chose Cloud SQL (Postgres) because

* It is a managed Postgres instance, optimized to the extreme
* It is batteries-included - from scaling to point-in-time-recovery
* It has PostGIS extension included, which is an incredibly nice library for handling geodata

## Utils

This layer is used for utility functions that may perform various helper tasks within our application.

### Sentry

Our environments log all errors to [Sentry](https://sentry.io/). Sentry acts as a centralized error monitoring tool
which provides us with lots of details, such as stack traces, payloads, etc. It also offers a performance metrics
solution. It is platform-agnostic and there are integrations for React. Nest currently does not have an implementation,
but our own implementation works nicely.

We chose Sentry because

* It is reasonably priced
* It is performant
* It provides in-depth error monitoring and offers environment-specific handling

### GCP: Cloud Scheduler

For our returning tasks, we use the Cloud Scheduler offering. Tasks can be configured just like cronjobs on an actual
system. Because we cannot use cronjobs in our containers (because it may be that our application is scaled to several
containers), Cloud Scheduler can be used for this. Currently, we're only using its HTTP functionality which sends a
request at the specified interval. This request is then handled by our application and guarantees to be run only once -
regardless of how many containers are currently running.

We chose Cloud Scheduler because

* It is the only scheduling offering available that does not require loads of setup
* It is very flexible, so it could be used in the future to also send message to PubSub queues

### SendGrid

We use [SendGrid](https://sendgrid.com/) as an email provider. Whenever the application needs to send an email, e.g. for
sign-up activation, we use SendGrid to deliver the message.

We chose SendGrid because

* It is a stable service by Twilio
* It has a generous free tier that works at our current state
* It employs industry best practices (e.g. DNS verification) to deliver emails in gipfeli.io's name without getting them
  blocked
* It has a nice SDK that can be used to integrate into our backend code

## Setting up a new GCP environment

Currently, we have a staging and a production environment. If you need to add another environment, follow these steps:

1. Add a new CloudSQL database and a user to our instance, both named `gipfeli_io_{environment name}`. Use a strong,
   secure password.
2. Create a new bucket named `gipfeli-io-{environment name}-media` and give `allUsers` the `Storage Object Viewer` role.
   Be sure to also set the correct CORS policies, as mentioned
   in [this ticket](https://github.com/gipfeli-io/gipfeli-frontend/issues/118).
3. In the frontend, configure the CI with the correct triggers for a deployment. This depends on your usecase so there
   is no one-size-fits-all solution.
4. Trigger the pipeline so the containers get pushed to the registry. Additionally, it will also deploy a new CloudRun
   instance.
5. Check the newly created CloudRun instance. You'll need to configure it - see the existing instances for details on
   how to configure them. Note that you'll also have to disable authentication if it is a public URL.
6. Verify the frontend works.
7. Repeat steps 3-6 for the backend API. Note that you'll also have to add a connection in the deployment configuration
   such that the API may reach the database.

This is basically it. If you need subdomains, you also need to configure DNS records etc.

## DNS routing for domains

Because we're using Cloud Run instances in `europe-west1` region, we can use Cloud
Run's [domain mapping](https://cloud.google.com/run/docs/mapping-custom-domains) feature which is currently in preview
mode (and hence not available in the Zurich region). This mapping allows to add any domain and map them to a Cloud Run
instance. After [verifying the ownership of the domain](https://support.google.com/webmasters/answer/9008080), this
service will display the required DNS configuration that has to be added to our provider's DNS configuration (which
is [Gandi](https://gandi.net/) in our case). Afterwards, Cloud Run will automatically generate SSL certificates and
renew them.

Other options which would allow us to use Zurich's datacentres would require a load balancer setup which is rather
complicated and expensive. Once the mapping feature is rolled out to the Zurich datacentre, we might move our instances.
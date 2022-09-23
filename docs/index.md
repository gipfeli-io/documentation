---
id: index
sidebar_position: 1
title: Intro
---

This is the technical documentation for the gipfeli.io project. Our API documentation is realized with OpenAPI and
deployed as part of the backend deployments and accessible via [/api](http://api.gipfeli.io/api/). If you require a JSON
download (e.g. for import into Postman), you can use the [/api-json](http://api.gipfeli.io/api-json/) endpoint. Note
that you cannot directly use the OpenAPI interface to send requests in our staging or production setup. If you run the
backend locally, however, you can use the GUI to send actual requests to our API.

:::tip Master thesis documentation and meeting notes

Any documentation relating to the master thesis can be found in the [general documentation](../general) section. Any
meeting notes can be found in
the [meeting notes](../meeting-notes) section.

:::

## Documentation

If you want to contribute to the documentation, use the [documentation](https://github.com/gipfeli-io/documentation)
repository.

## Environments

### Staging

**Frontend:** https://staging.gipfeli.io
**Backend:** https://staging-api.gipfeli.io

Hosts our current staging build with the latest changes. Does not represent the current production state.

:::info Note

Since we're using an instance of CloudRun that automatically scales down when unused, accessing the staging environment
might be slow. Always access the backend API first, because this can take up to 20 seconds to start.

:::

### Production

**Frontend:** https://gipfeli.io
**Backend:** https://api.gipfeli.io

Hosts our current production build with the latest release.

## External services

Also see our [infrastructure docs](infrastructure/basics.md) for more information on the services below.

### Email Service

We use [SendGrid](https://sendgrid.com/) as an email service.

### Logging

As a logging tool for the api and the frontend we use [Sentry](https://sentry.io).

### Code Quality

To improve our code quality and make sure we have a well maintainable application, we
use [SonarCloud](https://www.sonarsource.com/).
You can find our analysis page for [gipfeli-frontend](https://github.com/gipfeli-io/gipfeli-frontend)
and [gipfeli-api](https://github.com/gipfeli-io/gipfeli-api)
here: [Gipfeli.io SonarCloud](https://sonarcloud.io/organizations/gipfeli-io/projects).

## Example image and GPX data

If you'd like to test the geo-referenced image and GPX upload, you are free to use both examples
in [this archive](/examples/examples.zip):

* `malbun`: Contains a GPX file exported from [SchweizMobil](https://www.schweizmobil.ch/) for
  the [Fürstin Gina Weg](https://www.schweizmobil.ch/de/wanderland/routen/route-0995.html) and images taken with an
  Android Smartphone with GPS enabled.
* `nz`: Contains a GPX file recorded with a Garmin Fenix watch and exported
  from [GarminConnect](http://connect.garmin.com/) from
  the [McIntosh Loop](https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/whakaari-conservation-area/things-to-do/mt-mcintosh-loop-track/)
  in New Zealand and images taken with an Android Smartphone with GPS enabled. Some images have been geo-tagged later on
  using [FreeMapTools](https://www.freemaptools.com/view-and-edit-photo-gps-data.htm).


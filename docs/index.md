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

## Environments

### Staging

**Frontend:** https://staging.gipfeli.io
**Backend:** https://staging-api.gipfeli.io

Hosts our current staging build with the latest changes. Does not represent the current production state.

### Production

**Frontend:** https://gipfeli.io
**Backend:** https://api.gipfeli.io

Hosts our current production build with the latest release.


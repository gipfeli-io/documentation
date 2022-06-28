---
id: offline-support
sidebar_position: 5
title: Offline Support - DRAFT
---
## PWA basics

## Static files

## Workbox
We can use workbox to work with the service worker in ReactJS. This is a library provided by Google to help to use the service worker.
When creating a pwa with react-create-app it is pre-installed and pre-configured to precache all items in the manifest.json (ReactJS will inject some additional assets there. So not everything needs
to be specified manually).

## Dynamic data

### Storage
The service worker is perfect for caching static data like css files or icons. But for dynamic data we need more control and a way to easily
and comfortably manipulate data. This is why we use IndexedDb to store our dynamic data when the user is offline. This approach provides us with the possibility to store a lot of 
data which is indexed and can be queried easily. As IndexedDB is pretty tedious to work with and promise based we are using a wrapper
to simplify our work. We decided to use [Dexie.js](https://dexie.org/) as it can be used with async/await and provides a nice and easy to use wrapper for the IndexedDB api.

:::info
Why not use local storage for storing the data? 
Local storage is synchronous and therefore blocks the main thread. This does also not work with service workers as they are 
asynchronous.
:::




## Synchronize offline data with database


## Articles used

- [Offline Post with usage of dexie](https://www.dotnetpro.de/core/mobile/offline-mitgedacht-1659518.html)
- [Mozilla Client Storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#offline_asset_storage)
- [web.dev - Storage for the web](https://web.dev/storage-for-the-web/)

### Google Workbox
- [Caching Strategies](https://developer.chrome.com/docs/workbox/caching-strategies-overview/)
- [Workbox Routing](https://developer.chrome.com/docs/workbox/modules/workbox-routing/)
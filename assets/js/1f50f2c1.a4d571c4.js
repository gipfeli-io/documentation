"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1976],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||n;return a?i.createElement(f,r(r({ref:t},c),{},{components:a})):i.createElement(f,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<n;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6696:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var i=a(7462),o=(a(7294),a(3905));a(8209);const n={id:"offline-support",sidebar_position:2,title:"Offline Support"},r=void 0,s={unversionedId:"architecture/frontend/offline-support",id:"architecture/frontend/offline-support",title:"Offline Support",description:"PWA basics",source:"@site/docs/architecture/frontend/offline-support.md",sourceDirName:"architecture/frontend",slug:"/architecture/frontend/offline-support",permalink:"/docs/architecture/frontend/offline-support",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"offline-support",sidebar_position:2,title:"Offline Support"},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/docs/architecture/frontend/general"},next:{title:"General",permalink:"/docs/architecture/security/security-general"}},l={},d=[{value:"PWA basics",id:"pwa-basics",level:2},{value:"Static files",id:"static-files",level:2},{value:"Service Worker",id:"service-worker",level:3},{value:"Dynamic data",id:"dynamic-data",level:2},{value:"Storage",id:"storage",level:3},{value:"Implementation",id:"implementation",level:2},{value:"What is accessible offline?",id:"what-is-accessible-offline",level:3},{value:"Resetting",id:"resetting",level:3},{value:"Difficulties",id:"difficulties",level:3},{value:"Flow",id:"flow",level:4},{value:"Browser support",id:"browser-support",level:4},{value:"Synchronize offline data with database",id:"synchronize-offline-data-with-database",level:3},{value:"To be considered",id:"to-be-considered",level:2},{value:"Articles used",id:"articles-used",level:2},{value:"Google Workbox",id:"google-workbox",level:3}],c={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pwa-basics"},"PWA basics"),(0,o.kt)("p",null,"A PWA (Progressive Web App) is a simple way to give a user the feel of a native app without requiring the developer to write a native app. The application is installable on\na device (can also be a laptop) and can be used accessing an icon on the home screen/desktop. With the help of a manifest file we can configure the\nlook of the app during startup, how it is displayed on the device and the app icon that is added to the home screen/desktop. There are some limitations like accessing the hardware (e.g. storage)\nof a device but overall the app feels like a native app. It also lets us circumvent the sometimes very long approval process by the app or play store."),(0,o.kt)("h2",{id:"static-files"},"Static files"),(0,o.kt)("h3",{id:"service-worker"},"Service Worker"),(0,o.kt)("p",null,"We are using workbox from Google to work with the service worker. This is the recommended way by React.\nWhen creating a pwa with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"create-react-app")," it is pre-installed and\npre-configured to pre-cache all items in the manifest.json (ReactJS will inject some additional assets there. So not everything needs\nto be specified manually)."),(0,o.kt)("h2",{id:"dynamic-data"},"Dynamic data"),(0,o.kt)("h3",{id:"storage"},"Storage"),(0,o.kt)("p",null,"The service worker is perfect for caching static data like css files or icons. But for dynamic data we need more control and a way to easily\nand comfortably manipulate data. This is why we use IndexedDb to store our dynamic data when the user is offline. This approach provides us with\nthe possibility to store our objects without needing to transform them e.g. into a JSON string. The data is indexed and therefore can be queried quite\neasily. As IndexedDB is pretty tedious to work with and promise based we are using a wrapper to simplify our work.\nWe decided to use ",(0,o.kt)("a",{parentName:"p",href:"https://dexie.org/"},"Dexie.js")," as it can be used with async/await and provides a nice and easy to use wrapper for the IndexedDB api."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Why not use local storage for storing the data?\nLocal storage is synchronous and therefore blocks the main thread. It is also limited in space (5MB) and only lets us save strings which makes\nworking with complex data structures very uncomfortable.")),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("h3",{id:"what-is-accessible-offline"},"What is accessible offline?"),(0,o.kt)("p",null,"We decided to only make the tours usable offline. If an administrator wants to modify users they have to do it while online.\nWe decided to allow all the CRUD functionality for tours but to restrict the tour form. As it is nearly impossible to be able to use\nthe map offline due to the amount of (tile) data we need for this we decided to hide the map when the user is offline. We also decided that the\nuser won't be able to upload images or gpx files while using the offline mode as with the current solution it won't work (we also don't want to\nduplicate the code to extract GPS data from an image). So essentially what is possible to do while using the offline mode:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new tour, set a title and add the tour documentation"),(0,o.kt)("li",{parentName:"ul"},"Edit an existing tour (title and description)"),(0,o.kt)("li",{parentName:"ul"},"Remove an existing tour"),(0,o.kt)("li",{parentName:"ul"},"View an existing tour (title and description)")),(0,o.kt)("h3",{id:"resetting"},"Resetting"),(0,o.kt)("p",null,"As there sometimes can be situations where the indexedDB is in a non-recoverable state we added the possibility to reset the database.\nThe functionality will remove the existing database structure and all it's data and re-add a freshly initialised database."),(0,o.kt)("h3",{id:"difficulties"},"Difficulties"),(0,o.kt)("h4",{id:"flow"},"Flow"),(0,o.kt)("p",null,"The main difficulties are saving and retrieving locally stored data at the right time. As we essentially work with two different\ndatabases that we need to keep in sync we had to analyse each flow and think about the way we want to handle offline and remote data. Our first\ndraft had the following workflow:"),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/NP114i8m24NtEGNBzWfreUDuaTXGmnWXqwJMUdffEXErcmo1p_l0AMKxvkaHZ2cHCREdWD3O684IZ1CpyUtO6e0kQWGULNP5cm7PHI7E80FOI0ULqD3qmenz9k5Z2zaZGxDWQhUY4WkOjMS8n0WFSRWNTZTHIHOGhfgLtgM5UpyAqnihmDbiroA6f6Ep5C0TCLQdVuXEJSDUNmr_fjeSlSmrUxMwsbZo2bqWsUVclpKJEtoXkvo_DlgMU-fn9Hfpqh_U-WC0",alt:"First offline flow"}),(0,o.kt)("p",null,"While testing we realised that this is not the optimal way to handle the offline functionality. The constant pinging of the backend was unfortunate\nand always switching between offline/online mode (even with auto sync) would result in sometimes unpredicted behaviour (especially in error cases).\nSo we came up with the following workflow:"),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZLEnRjmm3Dtr5HmlGuiiNSv30pJDr2b0Fa2MwRDWXLGaESO1_VYIadtffJVKaoq-liVtA3_aObDPNeCnzSqSbum9NF1kpi04bixmu_db4JXYiiKpTUQOaGP8-BPWBb0OUkjcEUeCSK48E1Om04-Se4m80nRhWp0Du19QGRnxN1Mn8aGEeQ8c5FbUoY1CaJqLaHTCnTRPLCbDw6OOXTan4JeTwEkczOW1XLnrVWw-A7iTjCvWYnMOCEYNZRwDKzdq966EJ1cDDgWBuyV3xZ1XMH9b-7P_3r_WISpWe5GZ5ZV1R_Z5Te2n7d-_Kpg2mndpdGGryIhfoAG9Lbycw9TI95LfFZ68HmOUn-09uPK7x5IrBk34cF-jtsBVwqr5bsFVcry8x6m8vyw8WoZ9IW00n-ZfT2FjhbP5t-lUbV9Q3UhJD6Ns1jczQPZDMhS1humqy2swOcTTHzmWtKNcJEvYJSti5GmPuK1yOPWHOsNmz2dBhO46FsxllLo_kHMkUNPGomdMINO9X_zRkFcWEjOvibuWMBBjXMIX8dV_ux9gMN-NpZJDJytg9aDQY7HBQed-SjHQSk5ep8Dyw7_x1m00",alt:"Current workflow with manual switch between offline and online mode"}),(0,o.kt)("p",null,"Now the user can decide whether they want to use the app in offline mode or wait until they are online again. This makes it clearer for the user\nwhat to expect from the app. We could also clear up a lot of otherwise pretty complicated code parts and make the app easier to maintain and extend."),(0,o.kt)("h4",{id:"browser-support"},"Browser support"),(0,o.kt)("p",null,"Unfortunately there are some browser quirks we have to work with that are not solvable just yet. For example when using Firefox in private mode\nit is not possible to use indexedDB as they restrict it. There is also the problem with iOS devices because the only way to install the application\nis using Safari. Firefox and Chrome on iOS Mobile don't allow installing PWAs. This doesn't prevent iOS users to use the app, but it is quite a nuisance."),(0,o.kt)("h3",{id:"synchronize-offline-data-with-database"},"Synchronize offline data with database"),(0,o.kt)("p",null,"When the user decides to go into online mode again we will automatically synchronize all of their data. The only thing we cannot synchronize right\naway are tours that were created while in offline mode. Those tours lack some information (e.g. waypoints) which are mandatory for each tour. We\nmark the tour with a batch and as soon as the user is ready they can add the missing information and submit the tour to our server."),(0,o.kt)("h2",{id:"to-be-considered"},"To be considered"),(0,o.kt)("p",null,"There is no out-of-the-box or best practice way to handle data offline. There are a plethora of different solutions out there and all of them are valid\nas they were created for a specific situation. Nonetheless, handling two data sources and syncing them is quite a feat and a source for a lot of issues.\nWhat has to be taken into account is the rapidly changing browser and feature landscape and that not all browsers implement all the possible/recommended features\n(e.g. Firefox which doesn't allow IndexedDBs in private mode). Which makes it quite hard to provide a consistent feature-set for a pwa.\nSo the main lesson we have learned from this is that implementing offline functionality for a pwa has to be well-thought through and the cost benefit ration\nhas to be right. Otherwise, you might want to re-think your approach and maybe implement a native app rather than a pwa."),(0,o.kt)("h2",{id:"articles-used"},"Articles used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.dotnetpro.de/core/mobile/offline-mitgedacht-1659518.html"},"Offline Post with usage of dexie")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#offline_asset_storage"},"Mozilla Client Storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://web.dev/storage-for-the-web/"},"web.dev - Storage for the web"))),(0,o.kt)("h3",{id:"google-workbox"},"Google Workbox"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/workbox/caching-strategies-overview/"},"Caching Strategies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/workbox/modules/workbox-routing/"},"Workbox Routing"))))}h.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);
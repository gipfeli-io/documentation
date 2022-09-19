"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,u=c["".concat(d,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));n(8209);const i={id:"domain-model",sidebar_position:2,title:"Domain Model"},r=void 0,l={unversionedId:"domain/domain-model",id:"domain/domain-model",title:"Domain Model",description:"This section shows the domain model for the gipfeli.io app and explains its components.",source:"@site/docs/domain/domain-model.md",sourceDirName:"domain",slug:"/domain/domain-model",permalink:"/docs/domain/domain-model",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"domain-model",sidebar_position:2,title:"Domain Model"},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/domain/basics"},next:{title:"Data Model",permalink:"/docs/domain/data-model"}},d={},p=[{value:"<code>User</code>",id:"user",level:2},{value:"<code>Role</code>",id:"role",level:2},{value:"<code>Tour</code>",id:"tour",level:2},{value:"<code>TourCategory</code>",id:"tourcategory",level:2},{value:"<code>UserUpload</code>",id:"userupload",level:2},{value:"<code>Image</code>",id:"image",level:2},{value:"<code>GPXTrack</code>",id:"gpxtrack",level:2},{value:"<code>Waypoint</code>",id:"waypoint",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section shows the domain model for the gipfeli.io app and explains its components."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that this does not represent the data model directly, but rather the abstract domain. This means that not all\nclasses are represented as designed below or have the exact methods - for example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Role")," can also be expressed as\nan Enum field on the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," table itself. Furthermore, more attributes might exist, which are not relevant for the\ndomain model here. For the exact data model, see ",(0,o.kt)("a",{parentName:"p",href:"./data-model"},"its documentation"),"."),(0,o.kt)("p",{parentName:"admonition"},"Since we're also providing an\noffline functionality, some of the attributes might not be present at all times. If you for example create a tour while\nin an offline state, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour")," entity might temporarily not have any waypoints, because they can only be added later on\nwhen the tour is synchronized.")),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/PL9DJyCm3BttLqGzZKchW6F5OH87j1j2c-3gDQQBo4ULkA1gxB_Zf4jRZLFjlEVt_Ank0u6dtkYYqH22E0Jqubm8WGQKvc_7hp_EIovRfBthVLZTpSrAoTWr7e4mFSGMfQAfaQXnmYx5rUZDQOm-5WponpY9dYMYVrZoubnQY1HfJ7AXyQeZvUnolMdWcLLQvuTvXY4u1lBGa9XJ7ZhjG2Pf5TC5SXvQt4cqf3uL-bboPnWGvykrVNdzsBFOrtaYlCFGEMKfYcbWrrx6LRMpxLXFp3mRrOfqxFAX59kDADTbobeBwPhUy18X4nZP95gyMIqK0-ag2OX8LN6LSzVYYD4u27APoBFhqI95gOM1GJJE4YXR56EyaSIi-whYCaSQkIVunXknnoNd1E467bLot1l7nVsVVjapRV3lDGyl3vL2pCJ5Tbkqal_ZFm00",alt:"Domain"}),(0,o.kt)("h2",{id:"user"},(0,o.kt)("inlineCode",{parentName:"h2"},"User")),(0,o.kt)("p",null,"This is the basic entity that interacts with the application. It has a ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," used for\nauthenticating and referencing any given user. The user performs the CRUD operations for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour")," objects they\ndocument. Additionally, each user has at least one ",(0,o.kt)("inlineCode",{parentName:"p"},"Role")," assigned that governs what they are able to do. Lastly,\na ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," might have some ",(0,o.kt)("inlineCode",{parentName:"p"},"UserUploads")," which are used within a ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour"),"."),(0,o.kt)("h2",{id:"role"},(0,o.kt)("inlineCode",{parentName:"h2"},"Role")),(0,o.kt)("p",null,"Since the application also needs some kind of moderation, each ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," has exactly one ",(0,o.kt)("inlineCode",{parentName:"p"},"Role")," attached. The\ndefault ",(0,o.kt)("inlineCode",{parentName:"p"},"Role")," is identifying any ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," as normal user, allowing them to use the application for managing their\n",(0,o.kt)("inlineCode",{parentName:"p"},"Tours"),". Moderating users have the role ",(0,o.kt)("inlineCode",{parentName:"p"},"administrator")," which gives them the ability to ",(0,o.kt)("inlineCode",{parentName:"p"},"moderateUsers"),",\nmeaning that they can e.g. delete ",(0,o.kt)("inlineCode",{parentName:"p"},"Users"),"."),(0,o.kt)("h2",{id:"tour"},(0,o.kt)("inlineCode",{parentName:"h2"},"Tour")),(0,o.kt)("p",null,"This is the main entity that the website is about and represents a ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour")," that any given ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," has documented. It has\nseveral attributes relating to the description of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour")," itself and is always associated with exactly one ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," and\ndeleted when its owning ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," is removed. It\nmay also contain one or more ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," objects and/or exactly 1 ",(0,o.kt)("inlineCode",{parentName:"p"},"GPXTrack"),". It always consists of 2 ",(0,o.kt)("inlineCode",{parentName:"p"},"Waypoint")," objects (\nstart/endpoint)."),(0,o.kt)("h2",{id:"tourcategory"},(0,o.kt)("inlineCode",{parentName:"h2"},"TourCategory")),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour")," is assigned to at least one ",(0,o.kt)("inlineCode",{parentName:"p"},"TourCategory"),", though a ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour")," might also have several ",(0,o.kt)("inlineCode",{parentName:"p"},"TourCategories")," (e.g.\nalpine hike + climbing). ",(0,o.kt)("inlineCode",{parentName:"p"},"TourCategories")," are managed application-wide and can be used by all ",(0,o.kt)("inlineCode",{parentName:"p"},"Users"),"."),(0,o.kt)("h2",{id:"userupload"},(0,o.kt)("inlineCode",{parentName:"h2"},"UserUpload")),(0,o.kt)("p",null,"This is an abstract entity that refers to any upload a given ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," has performed. It has an ID which uniquely\nidentifies any ",(0,o.kt)("inlineCode",{parentName:"p"},"UserUpload"),". Any ",(0,o.kt)("inlineCode",{parentName:"p"},"UserUpload")," is removed if its owning user is removed. It also needs to keep track of\nhow it is identified in the storage used in the application (e.g. the filename within a given storage)."),(0,o.kt)("h2",{id:"image"},(0,o.kt)("inlineCode",{parentName:"h2"},"Image")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"UserUpload")," and can be added to any ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour"),". When the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour")," object is deleted, the associated ",(0,o.kt)("inlineCode",{parentName:"p"},"Image"),"\nobjects are removed as\nwell - they cannot exist without a ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour"),". An ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," might also have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Waypoint")," when it has GPS tags enabled during\nits caption, allowing its location to be displayed on the map."),(0,o.kt)("h2",{id:"gpxtrack"},(0,o.kt)("inlineCode",{parentName:"h2"},"GPXTrack")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"GPXTrack")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"UserUpload")," and can be added to any ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour"),". When the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour")," object is deleted, the\nassociated ",(0,o.kt)("inlineCode",{parentName:"p"},"GPXTrack"),"\nobject is removed as\nwell - it cannot exist without a ",(0,o.kt)("inlineCode",{parentName:"p"},"Tour"),"."),(0,o.kt)("h2",{id:"waypoint"},(0,o.kt)("inlineCode",{parentName:"h2"},"Waypoint")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Waypoint")," defines any geographical location by a pair of coordinates."))}m.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);
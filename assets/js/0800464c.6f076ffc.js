"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3897],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24294:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"api-architecture",sidebar_position:2,title:"API Architecture"},l=void 0,u={unversionedId:"architecture/api-architecture",id:"architecture/api-architecture",title:"API Architecture",description:"We are using the out-of-the-box architecture provided by NestJS which consists of a modular approach. Each domain gets",source:"@site/docs/architecture/api.md",sourceDirName:"architecture",slug:"/architecture/api-architecture",permalink:"/docs/architecture/api-architecture",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"api-architecture",sidebar_position:2,title:"API Architecture"},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/architecture/basics"},next:{title:"Frontend Architecture",permalink:"/docs/architecture/frontend-architecture"}},c={},d=[{value:"Structure",id:"structure",level:2},{value:"Modules",id:"modules",level:3},{value:"Utils Module",id:"utils-module",level:4},{value:"Project structure",id:"project-structure",level:4},{value:"TypeORM",id:"typeorm",level:3},{value:"Migrations",id:"migrations",level:4},{value:"Handling user uploaded images",id:"handling-user-uploaded-images",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are using the out-of-the-box architecture provided by NestJS which consists of a modular approach. Each domain gets\nits own feature module which can then be imported by other modules (by default modules are singletons and thus can be\nshared). Each NestJS application has at least one root module which is the starting point for NestJS to build the\ninternal data structure to resolve relationships between modules, providers and dependencies. Using the recommended\narchitecture gives us a scalable, testable ad loosely coupled application which is also easily maintainable. In\naddition, it allows us to the CLI NestJS provides which makes creating new components (modules, services, controllers\netc.) easy and fast."),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/bPDFQyCm3CNl-XIYzmJQtal7DkYnhDcfxE0bMcFgsCPM1cNiky_Edou92MEtwEaXFV_ix3qBntMbm5-bjiA92dDJMQD9yublYj1Hpa9V505OaL_5XN2LcTgjy0kaPd8V8YSyPDaHXSTo3UKQ4vVWEPeUZMPdb2Bt1bC1asJNkaxaFcLEdQMlC2bwmmjPuoKRT-iy0m7J8jtXqNY-EF9j-rcpP4a-D5MwD6FED4xonEOVtU5PlmUmNZqjmTf0kMbXHTC8raHeOKNnDyImwc15QNJGYJ255TjJ3hCpvapZ94CSVtUNO3tKN4POv_Xn7p5oMBj0SmlbjgKPF8ktmLBvPiD1-D46YBam3GaR3yG4isMmGTZG556z5_4LX3bG21RlmeTjFUcuCEpOaox2p_O3",alt:"Overall"}),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("h3",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Each module represents a domain in our application and may consist of the following elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DTOs"),(0,o.kt)("li",{parentName:"ul"},"Interfaces"),(0,o.kt)("li",{parentName:"ul"},"Types"),(0,o.kt)("li",{parentName:"ul"},"Controllers"),(0,o.kt)("li",{parentName:"ul"},"Services"),(0,o.kt)("li",{parentName:"ul"},"Validators"),(0,o.kt)("li",{parentName:"ul"},"Decorators")),(0,o.kt)("p",null,"There are also some more elements you can have in a module. Please refer to the official NestJS documentation for a\ncomplete overview: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com"},"NestJS Documentation")),(0,o.kt)("h4",{id:"utils-module"},"Utils Module"),(0,o.kt)("p",null,"For elements which do not have a domain per se (e.g. a service to hash passwords) we created a module that adds helpers\nwe need in different parts of the application."),(0,o.kt)("h4",{id:"project-structure"},"Project structure"),(0,o.kt)("p",null,"The above principles give us the following project structure (to keep it easily readable we only show the root module (\napp) and the tour module):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gipfeli-api/\n\u251c\u2500\u2500 migrations\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 app/\n\u2502   \u2502   \u251c\u2500\u2500 app.controller.ts\n\u2502   \u2502   \u251c\u2500\u2500 app.module.ts\n\u2502   \u2502   \u2514\u2500\u2500 app.service.ts\n\u2502   \u251c\u2500\u2500 tour/\n\u2502   \u2502   \u251c\u2500\u2500 dto/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 validators/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 is-point.decorator.spec.ts\n\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 is-point.decorator.ts\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 tour.ts\n\u2502   \u2502   \u251c\u2500\u2500 entities/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 tour.entity.ts\n\u2502   \u2502   \u251c\u2500\u2500 mocks/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tour.data.mock.ts\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 tour.repository.mock.ts\n\u2502   \u2502   \u251c\u2500\u2500 tour.controller.spec.ts\n\u2502   \u2502   \u251c\u2500\u2500 tour.controller.ts\n\u2502   \u2502   \u251c\u2500\u2500 tour.module.ts\n\u2502   \u2502   \u251c\u2500\u2500 tour.service.spec.ts\n\u2502   \u2502   \u2514\u2500\u2500 tour.service.ts\n\u2502   \u2514\u2500\u2500 main.ts\n\u2514\u2500\u2500 test\n")),(0,o.kt)("h3",{id:"typeorm"},"TypeORM"),(0,o.kt)("p",null,"Out-of-the-box, TypeORM uses the repository pattern which means that each entity has its own repository. The\nrepositories can be used by using TypeORM's generic repository which provides functionalities to query all entities or\nexecute CRUD operations. As we do not need custom queries at the moment we can use the generic repository which means\nthat there are no repository files listed in our modules."),(0,o.kt)("h4",{id:"migrations"},"Migrations"),(0,o.kt)("p",null,"The folder containing the migrations TypeORM will use to synchronize entity information to the database is not managed\ninside the source-folder (src). Because the migration lifecycle is maintained by the TypeORM CLI they should not be a\npart of source code."),(0,o.kt)("p",null,"To get more information on the recommended architecture using TypeORM and NestJS please refer to\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/database#database"},"NestJS documentation"),". For details on TypeORM please check\nout ",(0,o.kt)("a",{parentName:"p",href:"https://typeorm.io/"},"typeorm.io"),"."),(0,o.kt)("h3",{id:"handling-user-uploaded-images"},"Handling user uploaded images"),(0,o.kt)("p",null,"In order to provide users with a seamless user experience, the asset handling is a bit more complex than uploading the\ntour images once the tour is saved. Since a user should be able to upload several files at once and also submit a new\ntour without having to wait a long time (because he may also submit 20, 30 or more images), images are uploaded\nimmediately once they are dropped in the frontend. Backendwise, the following steps are performed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The request (with an image) is POSTed to ",(0,o.kt)("inlineCode",{parentName:"li"},"api/media/upload-image"),". After some basic validations (e.g. filetypes,\nfilesize), the request is dispatched to the ",(0,o.kt)("inlineCode",{parentName:"li"},"MediaService"),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"MediaService")," uses the storage provider that is injected via nest's DI container to store the file. In our case,\nthis is the ",(0,o.kt)("inlineCode",{parentName:"li"},"GoogleCloudStorageProvider"),"."),(0,o.kt)("li",{parentName:"ol"},"Once the provider succesfully returns, the ",(0,o.kt)("inlineCode",{parentName:"li"},"MediaService")," stores a new ",(0,o.kt)("inlineCode",{parentName:"li"},"Image")," object in the database, consisting of\nthe storage identifier, a UUID, the metadata and the relation to the ",(0,o.kt)("inlineCode",{parentName:"li"},"User")," who submitted the request. At this point,\nthe relation to ",(0,o.kt)("inlineCode",{parentName:"li"},"Tour")," is null, because we might not yet have an existing ",(0,o.kt)("inlineCode",{parentName:"li"},"Tour")," object (e.g. in the case of adding a\nnew tour)."),(0,o.kt)("li",{parentName:"ol"},"The UUID of the newly stored ",(0,o.kt)("inlineCode",{parentName:"li"},"Image")," entity is then returned as response to the intial POST request."),(0,o.kt)("li",{parentName:"ol"},"Once the user submits the complete form, they only submit the UUIDs of the images they still have in their form. The\nrequest to create or update a ",(0,o.kt)("inlineCode",{parentName:"li"},"Tour")," then synchronizes the ",(0,o.kt)("inlineCode",{parentName:"li"},"Tour")," relationship between the image.")),(0,o.kt)("p",null,"This approach has the following benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A user gets immediate feedback whether their images can be saved or not."),(0,o.kt)("li",{parentName:"ul"},"A user can still upload images and, before they actually submit the whole ",(0,o.kt)("inlineCode",{parentName:"li"},"Tour"),", can still decide to drop some\nimages. If so, it's just the UUIDs that are not sent and no relation is made."),(0,o.kt)("li",{parentName:"ul"},"The backend can easily see which images do not have a relation to a ",(0,o.kt)("inlineCode",{parentName:"li"},"Tour")," and can be deleted from the CloudStorage;\ne.g. via a Cronjob that periodically checks for missing relations and asks CloudStorage to remove these files.")),(0,o.kt)("p",null,"The only drawback is that we use storage that may not be needed (e.g. if a user drops several images into the form and\nthen does not save the tour). However, given that the storage is very cheap and we limit the image size to 2MB, this can\nbe neglected."),(0,o.kt)("p",null,"TODO: Add note about public nature of buckets."))}h.isMDXComponent=!0}}]);
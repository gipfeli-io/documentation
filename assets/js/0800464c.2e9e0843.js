"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),c=i,m=p["".concat(l,".").concat(c)]||p[c]||h[c]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));n(8209);const o={id:"api-architecture",sidebar_position:2,title:"API"},r=void 0,s={unversionedId:"architecture/api-architecture",id:"architecture/api-architecture",title:"API",description:"We are using the out-of-the-box architecture provided by NestJS which consists of a modular approach. Each domain gets",source:"@site/docs/architecture/api.md",sourceDirName:"architecture",slug:"/architecture/api-architecture",permalink:"/docs/architecture/api-architecture",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"api-architecture",sidebar_position:2,title:"API"},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/architecture/basics"},next:{title:"General",permalink:"/docs/architecture/frontend/general"}},l={},d=[{value:"Modules",id:"modules",level:2},{value:"Modules",id:"modules-1",level:3},{value:"App",id:"app",level:4},{value:"Tour",id:"tour",level:4},{value:"User",id:"user",level:4},{value:"Auth",id:"auth",level:4},{value:"Media",id:"media",level:4},{value:"Lookup",id:"lookup",level:4},{value:"Notification",id:"notification",level:4},{value:"Utils",id:"utils",level:4},{value:"Config",id:"config",level:4},{value:"Other non-modules",id:"other-non-modules",level:3},{value:"nest.js System",id:"nestjs-system",level:3},{value:"TypeORM",id:"typeorm",level:2},{value:"Migrations",id:"migrations",level:3},{value:"Handling user uploaded media related to tours",id:"handling-user-uploaded-media-related-to-tours",level:2},{value:"Cleaning up",id:"cleaning-up",level:3}],u={toc:d};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are using the out-of-the-box architecture provided by NestJS which consists of a modular approach. Each domain gets\nits own feature module which can then be imported by other modules (by default modules are singletons and thus can be\nshared). Each NestJS application has at least one root module which is the starting point for NestJS to build the\ninternal data structure to resolve relationships between modules, providers and dependencies. Using the recommended\narchitecture gives us a scalable, testable and loosely coupled application which is also easily maintainable. In\naddition, it allows us to the CLI NestJS provides which makes creating new components (modules, services, controllers\netc.) easy and fast."),(0,i.kt)("p",null,"For better visibility, the below overview diagram only contains modules and their relations. The detailed content is\nadded below for each module."),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/TPF1JiGW48RlynHa7w2FODPuCrPDLa_60sbdMom50aDCOtntIsieqEwj__SFp3zXUdR4BVbHWXk4CjpoaJLwD5gXeWjD4fd5XhZg908OtWoyGtPwqzwUs0_y9kpTuOxTU-fBLcChU0cVj1wy2JJ3pvh4LJISX5QxkutPHI0XNGaVjBgAhgGA7LLVZbqcHpW6TnjkClXYnrgtNk9wRlDwguaasaFtyPiE-IjtpcXxRDPUqetxrkYfDO-GnMFLHo_Q5jLdMzsn8XqKEY-EOI5-vGLvQiXbNfhE0Ad8oz9v0CB2i6h6oxD1s9L3EPV1_DYB23IAi8LHB6iLrRfFKQPxjDsSqUNy7eSUMuoercutpF_cSRubz1bLE_zdVm00",alt:"Overall"}),(0,i.kt)("h2",{id:"modules"},"Modules"),(0,i.kt)("p",null,"Each module represents a domain or a task in our application and may consist of the following elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DTOs"),": Data wrappers that are passed around the app and used for backend-frontend communication"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Interfaces"),": Definitions for interfacing with e.g. a service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Types:")," Types for defining special types, e.g. subparts of an interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Controllers:")," Classes that handle incoming requests. Controllers have methods which are registered to nest.js' main\nhandler, which then delegates matching HTTP requests to a given method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Services"),": Controllers delegate business logic to services which interface with other services, databases, third\nparty services and so on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Validators"),": Custom validators that interface with the\nintegrated ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/typestack/class-validator"},"class-validator")," library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Decorators:")," Custom decorators that can be used to e.g. extend nest.js' methods."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Providers:")," Provide special functionality and can be injected into e.g. services and provide additional\nfunctionality, such as a Google Storage Provider, which provides access to Cloud Storage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Strategies:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.passportjs.org/"},"passport.js")," authentication strategies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Guards:")," Controller or route guards that nest.js uses to validate whether a given request is permitted or not.")),(0,i.kt)("p",null,"There are also some more elements you can have in a module. Please refer to the official NestJS documentation for a\ncomplete overview: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nestjs.com"},"NestJS Documentation")),(0,i.kt)("h3",{id:"modules-1"},"Modules"),(0,i.kt)("h4",{id:"app"},"App"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/AqXCpavCJrLGSYmeK5AevihCAqajIajCJbNm20a9K4WiLiWmviemLj0jqbM81gfnpiyhAShFoKajYkMg1G00",alt:"App"}),(0,i.kt)("p",null,"The app module is the root module of the application. For nest.js, this is like the entrypoint module that exposes all\nthe modules (that need exposure) to the route creator. Its controller also has some convenience routes, e.g. for\nexposing a ",(0,i.kt)("inlineCode",{parentName:"p"},"robots.txt")," file."),(0,i.kt)("h4",{id:"tour"},"Tour"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/bT312e9040RW-px5u7q5Ny2B1Hsbl4c7HITT4aTcfo2YTy-m1Iqtw3ZpVymmCvZgR1g4gA0BHt1NjXVaawaGTaMHWt7G9gfDGBE6yeKoweMfwv2FwhC1MgUJEY1VROLluYlGjGTx7CXP8Rw5JMO4cr5ysLa3uZfE8ISd3QERucqlLYowCUpYq3u_V0q75w_XvQc_nYxbHkYFTFxsnnC0",alt:"Tour"}),(0,i.kt)("p",null,"This module represents the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tour")," domain object. It exposes CRUD routes for dealing with tours, which is handled by its\nservice. As such, it also needs the user module to attach a tour to a user as well as the media module for accessing\nassociated media objects and the lookup module to get the categories since these are exposed as lookup entities, despite\nbeing part of the tour domain itself."),(0,i.kt)("h4",{id:"user"},"User"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/XP3D2i8m48JlUOgbz-JG1oY82XwBjYVn4Dgr2PQcR5P1n7TNgON-n7hScM-6tMrrST4LGfHxf0WUmZQCTDO5mYxBKj0UJ2nC398a73_GsZLChgwHJc8gW9H9HnsGRhR09MHrPJF6-WbasKDxR9stxEZ-PGO2g58ba3hF5Q7lx6t3bYtwjrchNnqXQBn9Y9Zlks6tq35r_-Tdhnr6G8NkURu0",alt:"User"}),(0,i.kt)("p",null,"The user module represents the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," domain object and exposes CRUD routes for dealing with users. This module exposes\nsome minor routes, but in essence, it is only used by other modules. The only actual direct functionality is used for\nthe administration of users. Because it also deals with authentication parts relating to the users, it has a second\nservice, ",(0,i.kt)("inlineCode",{parentName:"p"},"UserAuthService")," that deals with authentication components, whereas the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserService")," is the direct interface\nfor the user entities. It is only dependent on the utils module for hashing the user passwords. To protect user\nmanagement routes, it also relies on the auth module for its ",(0,i.kt)("inlineCode",{parentName:"p"},"AdminGuard"),"."),(0,i.kt)("h4",{id:"auth"},"Auth"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZOzD2u9048Rl_egX--x9OmHHKKT9EuM7HITTabsP6OE8_dkYYL4ANT_tcO-dDjdL50YB4oCju15O9qWNao4SaYG2mr26GHc28WNdTIFbnZiXNrL8QV0TW5AhdegHRZR35ecHsNgtSsB58gUWA_qlz8wFM7ksuka-eXyPwBo58yzI47B_r5RypAcfziTfm47bQkQFVMCeRxTCEWiPmQ8pcQY7qQNk94SuUBu0",alt:"Auth"}),(0,i.kt)("p",null,"This module handles all our authentication needs as well as session management. It implements various authentication\nstrategies for different endpoints and exposes them as guards to be used in other modules via controller and method\ndecorators. It is dependent on the user and notification module, because the auth module handles things like login and\nuser creation, which require both the users as well as the possibility to dispatch notifications."),(0,i.kt)("h4",{id:"media"},"Media"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/bSyz2y9030RW_Nv5w9vkNLrKS16ATfCEnrri3qjJSg6B-D_zeDNXIi7rpKFoPh3kPXk2x4W-s0pk9lHAShMEu51L9TW8RM7Q0b0GBX-rvLw5kuwaDaa2Y9l9dKd6u6X6-rw31eerv5t-ZpdHm34eotjW5ZB8_GkN7BKHYfFOAQ-UIkRfMmafXSVWIRurvfs07jVg_Xmkx7ey0G00",alt:"Media"}),(0,i.kt)("p",null,"The mediamodule handles all things related to user uploads. It has several providers which perform various tasks, like\nstoring user uploads to a cloud storage or extracting GPS coordinates from images. It is dependent on the notification\nmodule for notifying administrators of clean up tasks. It is not directly reliant on the user and the tour module, as\nassigning a media object to a tour or a user is done via indirect referrals during the tour entity update."),(0,i.kt)("h4",{id:"lookup"},"Lookup"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/AqXCpavCJrLGyidFpoujK5AevihCAqajIajCJbNm20a9K4WiLiWmuyemKz0jqbM8XYXppiyhAShFoKajYkN255BGrRM3gGnEBIhBJ4wDvQe50000",alt:"Lookup"}),(0,i.kt)("p",null,"The lookup module is used for lookups such as tour categories. This has been implemented because in the future, there\nmight be more categories or types that are managed in a central location and need to be exposed to users. As such, the\nlookup module is the interface for any possible module that requires a lookup entity. Currently, this is only the case\nfor the tour module which uses this module to lookup tour categories."),(0,i.kt)("h4",{id:"notification"},"Notification"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/AqXCpavCJrLGyiiloKpBJ4uioSpFKrAevef65WWeoY_BJ4ajYkMg1G00",alt:"Notification"}),(0,i.kt)("p",null,"This module only exposes the internally used notification provider. All modules that need to create notifications may\nimport this module and get an environment-dependent notification provider (e.g. sendgrid, ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log"),")."),(0,i.kt)("h4",{id:"utils"},"Utils"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/AqXCpavCJrLG2Yt9p2bMKgZcYdOkgYmeoGzEBIhBJ4wDvQe50000",alt:"Utils"}),(0,i.kt)("p",null,"For elements which do not have a domain per se (e.g. a service to hash passwords) we created a module that adds helpers\nwe need in different parts of the application."),(0,i.kt)("h4",{id:"config"},"Config"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/AqXCpavCJrLGSixFIyjCLrAevefsIIn9J4eiJeK8nN95k-QLPHRbv-McvfN0nJppIbBJYn9BClFpYk62lgafcObmdd-GBvmTd9fSMfHPKWaJg0K0",alt:"Config"}),(0,i.kt)("p",null,"This element registers different namespaced configuration objects that are used by\nnest.js' ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/configuration"},"configuration service"),". By interfacing with the\nconfiguration service (from nest's ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigurationModule"),"), modules can import system-wide configuration values. This\nalso includes environment variables."),(0,i.kt)("h3",{id:"other-non-modules"},"Other non-modules"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"shared")," directory consists of elements that are not part of a module, but shared across the whole application.\nCurrently, only our ",(0,i.kt)("inlineCode",{parentName:"p"},"SentryInterceptor")," is placed there, which is used to intercept any error and log it to Sentry. It\nalso contains the Swagger setup and an exception factory which adds more details to validation exceptions such as the\nfields which are involved."),(0,i.kt)("h3",{id:"nestjs-system"},"nest.js System"),(0,i.kt)("p",null,"nest.js exposes various modules that our own modules can use by importing them. The ones used in our app are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ThrottlerModule"),": Used for ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nestjs/throttler"},"rate-limiting")," access to our app."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JwtModule"),": Contains various ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nestjs/jwt"},"utilities")," for dealing with JWTs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PassportModule"),": Abstraction layer for integrating ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nestjs/passport"},"passport.js into nest"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MulterModule"),": Abstraction layer for\nintegrating ",(0,i.kt)("a",{parentName:"li",href:"https://docs.nestjs.com/techniques/file-upload"},"multer file upload capacities into nest"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ConfigModule"),": Exposes the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.nestjs.com/techniques/configuration"},"configuration service")," to modules that\nrequire it. This also loads the definitions from our own configuration module."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TypeORMModule"),": Integrates ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nestjs/typeorm"},"TypeORM into nest.js"),". See below for more information.")),(0,i.kt)("h2",{id:"typeorm"},"TypeORM"),(0,i.kt)("p",null,"Out-of-the-box, TypeORM uses the repository pattern which means that each entity has its own repository. The\nrepositories can be used by using TypeORM's generic repository which provides functionalities to query all entities or\nexecute CRUD operations. As such, there are no repository classes or files in our modules, but they are injected by\nregistering the entities used in each module. Then, the repository for a given entity may be injected using nest's DI\nsystem. In the rare cases where the repositories do not provide all functionality needed, TypeORM also exposes a\nquerybuilder which can be used to generate complex SQL queries."),(0,i.kt)("h3",{id:"migrations"},"Migrations"),(0,i.kt)("p",null,"The folder containing the migrations TypeORM will use to synchronize entity information to the database is not managed\ninside the source-folder (src). Because the migration lifecycle is maintained by the TypeORM CLI they should not be a\npart of source code."),(0,i.kt)("p",null,"To get more information on the recommended architecture using TypeORM and NestJS please refer to\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/database#database"},"NestJS documentation"),". For details on TypeORM please check\nout ",(0,i.kt)("a",{parentName:"p",href:"https://typeorm.io/"},"typeorm.io"),"."),(0,i.kt)("h2",{id:"handling-user-uploaded-media-related-to-tours"},"Handling user uploaded media related to tours"),(0,i.kt)("p",null,"Tours can have GPX files and/or images attached to them. These files are provided during the creation/editing process of\na tour. In order to provide users with a seamless user experience, the media handling is a bit more complex than just\nuploading the files once the form is submitted. Since a user should be able to upload several files at once and also\nsubmit a new tour without having to wait a long time (because he may also submit 20, 30 or more images as well as a GPX\nfile), media files are uploaded immediately once they are dropped in the corresponding dropzone in the frontend."),(0,i.kt)("p",null,"Backend-wise, the following steps are performed (for brevity, only the case for an image is explained; however, it works\nthe same for a GPX file but with different endpoint):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The request (with an image) is POSTed to ",(0,i.kt)("inlineCode",{parentName:"li"},"media/upload-image"),". After some basic validations (e.g. filetypes,\nfilesize), the request is dispatched to the ",(0,i.kt)("inlineCode",{parentName:"li"},"MediaService"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"MediaService")," uses the storage provider that is injected via nest's DI container to store the file. In our case,\nthis is the ",(0,i.kt)("inlineCode",{parentName:"li"},"GoogleCloudStorageProvider"),"."),(0,i.kt)("li",{parentName:"ol"},"Once the provider succesfully returns the identifier for the uploaded file, the ",(0,i.kt)("inlineCode",{parentName:"li"},"MediaService")," stores a new ",(0,i.kt)("inlineCode",{parentName:"li"},"Image"),"\nobject in the database, consisting of the storage identifier, a UUID and the relation to the ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," who submitted the\nrequest. At this point, the relation to ",(0,i.kt)("inlineCode",{parentName:"li"},"Tour")," is null, because we might not yet have an existing ",(0,i.kt)("inlineCode",{parentName:"li"},"Tour")," object (e.g.\nin the case of adding a new tour)."),(0,i.kt)("li",{parentName:"ol"},"The UUID and identifier of the newly stored ",(0,i.kt)("inlineCode",{parentName:"li"},"Image")," entity is then returned as response to the intial POST request\nand stored in the frontend's current formstate."),(0,i.kt)("li",{parentName:"ol"},"Once the user submits the complete form, they only submit the UUIDs of the images they still have in their form. The\nrequest to create or update a ",(0,i.kt)("inlineCode",{parentName:"li"},"Tour")," then synchronizes the ",(0,i.kt)("inlineCode",{parentName:"li"},"Tour")," relationship between the image.")),(0,i.kt)("p",null,"This approach has the following benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A user gets immediate feedback whether their files can be saved or not."),(0,i.kt)("li",{parentName:"ul"},"A user can still upload files and, before they actually submit the whole ",(0,i.kt)("inlineCode",{parentName:"li"},"Tour"),", can still decide to drop some\nfiles. If so, it's just the UUIDs that are not sent and no relation to a ",(0,i.kt)("inlineCode",{parentName:"li"},"Tour")," on the previously updated file is\nmade."),(0,i.kt)("li",{parentName:"ul"},"The backend can easily see which files do not have a relation to a ",(0,i.kt)("inlineCode",{parentName:"li"},"Tour")," and can be deleted from the CloudStorage;\ne.g. via a Cronjob that periodically checks for missing relations and asks CloudStorage to remove these files.")),(0,i.kt)("p",null,"The only drawback is that we use storage that may not be needed (e.g. if a user drops several images into the form and\nthen does not save the tour). However, given that the storage is very cheap and we limit the file size to 2MB, this can\nbe neglected."),(0,i.kt)("h3",{id:"cleaning-up"},"Cleaning up"),(0,i.kt)("p",null,"As mentioned above, not all uploaded and stored files may be linked to a tour. Furthermore, when a user deletes a tour,\nthe files are not immediately deleted, because this might take some time. Instead, the relation to the deleted ",(0,i.kt)("inlineCode",{parentName:"p"},"Tour"),"\nis set to ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),". The same also holds true if a user is deleted - since their tours are deleted, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tour")," relation on\nall their files is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," as well as the user relation."),(0,i.kt)("p",null,"In order to clean up, the backend has a special API path, ",(0,i.kt)("inlineCode",{parentName:"p"},"GET api/media/clean-up-media")," that finds all media objects in\nthe database that either have"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"no relation to a ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," (meaning the user is deleted) or"),(0,i.kt)("li",{parentName:"ul"},"no relation to a ",(0,i.kt)("inlineCode",{parentName:"li"},"Tour"),"(meaning the tour is deleted) ",(0,i.kt)("strong",{parentName:"li"},"and")," are older than 1 day (this is required because if a user\nis in the process of uploading a file, it may not yet have a relation to a tour, but it should not yet be deleted).")),(0,i.kt)("p",null,"Objects that fulfill this criteria are then deleted from the storage and the database and an email with clean up\nstatistics is sent to the defined administrators."),(0,i.kt)("p",null,"This endpoint is (weakly) protected by a simple bearer token that is defined as an environment variable. This is\nsufficient (even-though insecure) because this endpoint does not expose anything sensitive. Furthermore, the token is\nchosen to be a long, randomized string and as SSL connections are enforced, the Authorization header is encrypted."),(0,i.kt)("p",null,"In staging and production, this endpoint is triggered via a Cloud Scheduler task and runs once daily at 4 o'clock in the\nmorning."))}h.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);
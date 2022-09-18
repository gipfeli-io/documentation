"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1720],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7058:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));a(8209);const r={id:"data-model",sidebar_position:3,title:"Data Model"},i=void 0,s={unversionedId:"domain/data-model",id:"domain/data-model",title:"Data Model",description:"The data model is generated by TypeORM. TypeORM generates the necessary data structure by looking",source:"@site/docs/domain/data-model.md",sourceDirName:"domain",slug:"/domain/data-model",permalink:"/docs/domain/data-model",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"data-model",sidebar_position:3,title:"Data Model"},sidebar:"tutorialSidebar",previous:{title:"Domain Model",permalink:"/docs/domain/domain-model"},next:{title:"Basics",permalink:"/docs/architecture/basics"}},l={},d=[{value:"<code>user</code>",id:"user",level:2},{value:"<code>user_session</code>",id:"user_session",level:2},{value:"<code>user_token</code>",id:"user_token",level:2},{value:"<code>tour</code>",id:"tour",level:2},{value:"<code>tour_category</code>",id:"tour_category",level:2},{value:"<code>tour_categories_tour_category</code>",id:"tour_categories_tour_category",level:2},{value:"<code>image</code>",id:"image",level:2},{value:"<code>gpx_file</code>",id:"gpx_file",level:2},{value:"TypeORM Tables",id:"typeorm-tables",level:2},{value:"System tables",id:"system-tables",level:2},{value:"<code>geometry_columns</code> and <code>geography_columns</code>",id:"geometry_columns-and-geography_columns",level:3},{value:"<code>spatial_ref_sys</code>",id:"spatial_ref_sys",level:3}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The data model is generated by ",(0,o.kt)("a",{parentName:"p",href:"https://typeorm.io/"},"TypeORM"),". TypeORM generates the necessary data structure by looking\nat the defined classes and relationships, using decorators and other features to transform TypeScript classes into\ndatabase representations. As an ORM, we do not deal with SQL entities directly, but rather with Entities that TypeORM\nmaps to database entities."),(0,o.kt)("p",null,"The generated database schema looks as follows (explanation of tables below):"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(7639).Z},"(enlarge image)"),"\n",(0,o.kt)("img",{alt:"asd",src:a(1384).Z,width:"2296",height:"2442"})),(0,o.kt)("h2",{id:"user"},(0,o.kt)("inlineCode",{parentName:"h2"},"user")),(0,o.kt)("p",null,"Contains all the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," data (including a hashed password)."),(0,o.kt)("h2",{id:"user_session"},(0,o.kt)("inlineCode",{parentName:"h2"},"user_session")),(0,o.kt)("p",null,"Contains all sessions a current ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," has (\nsee ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/security/security-authentication-session-management"},"authentication & session management"),").\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"validFrom")," attribute is set to when the session is created or refreshed and used to verify a session."),(0,o.kt)("h2",{id:"user_token"},(0,o.kt)("inlineCode",{parentName:"h2"},"user_token")),(0,o.kt)("p",null,"Contains all tokens for a ",(0,o.kt)("inlineCode",{parentName:"p"},"user"),". Currently, a token is used for either account activation or password reset. The token\nitself is just the hashed representation, its cleartext value is only used during token creation and sent to the user\nvia email."),(0,o.kt)("h2",{id:"tour"},(0,o.kt)("inlineCode",{parentName:"h2"},"tour")),(0,o.kt)("p",null,"The actual ",(0,o.kt)("inlineCode",{parentName:"p"},"tour")," documentation object. Contains PostGIS geometry objects for start and end location as well as the\nforeign keys to its owning ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," and, if present, its associated ",(0,o.kt)("inlineCode",{parentName:"p"},"gpx_file"),"."),(0,o.kt)("h2",{id:"tour_category"},(0,o.kt)("inlineCode",{parentName:"h2"},"tour_category")),(0,o.kt)("p",null,"Contains all available categories a user can use to classify their tour. The ",(0,o.kt)("inlineCode",{parentName:"p"},"iconName")," attribute is an implementation\ndetail for mapping tours to their icon in the frontend."),(0,o.kt)("h2",{id:"tour_categories_tour_category"},(0,o.kt)("inlineCode",{parentName:"h2"},"tour_categories_tour_category")),(0,o.kt)("p",null,"Auto-generated by TypeORM, represents the many-to-many relationship that ",(0,o.kt)("inlineCode",{parentName:"p"},"tours")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tour_categories"),"."),(0,o.kt)("h2",{id:"image"},(0,o.kt)("inlineCode",{parentName:"h2"},"image")),(0,o.kt)("p",null,"Contains the data associated with an uploaded ",(0,o.kt)("inlineCode",{parentName:"p"},"image"),". Notice the location attribute (another PostGIS geometry object),\nspecifying (if available) the ",(0,o.kt)("inlineCode",{parentName:"p"},"image"),"'s geo-referenced location, as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier"),", referring to the name in\nour object storage."),(0,o.kt)("h2",{id:"gpx_file"},(0,o.kt)("inlineCode",{parentName:"h2"},"gpx_file")),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"image"),", contains data associated with an uploaded ",(0,o.kt)("inlineCode",{parentName:"p"},"gpx_file"),". Here, also the original filename is stored\nsince it is displayed in the frontend for better book-keeping."),(0,o.kt)("h2",{id:"typeorm-tables"},"TypeORM Tables"),(0,o.kt)("p",null,"TypeORM also adds two tables which it needs to work: ",(0,o.kt)("inlineCode",{parentName:"p"},"typeorm_metadata")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"migrations"),". The later one keeps track of\nall migrations that are currently applied and is used to determine whether and which migrations need to be run when\nexecuting ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run typeorm:migrate"),"."),(0,o.kt)("h2",{id:"system-tables"},"System tables"),(0,o.kt)("p",null,"Apart from the above tables which are implemented by our application or TypeORM, several system tables exist."),(0,o.kt)("h3",{id:"geometry_columns-and-geography_columns"},(0,o.kt)("inlineCode",{parentName:"h3"},"geometry_columns")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"geography_columns")),(0,o.kt)("p",null,"These tables are used by PostGIS to keep track of geometry and geography columns in other tables."),(0,o.kt)("h3",{id:"spatial_ref_sys"},(0,o.kt)("inlineCode",{parentName:"h3"},"spatial_ref_sys")),(0,o.kt)("p",null,"Table containing all supported spatial reference systems available for PostGIS to use on its geometries."))}c.isMDXComponent=!0},7639:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/datamodel-c0bd878b492060fa0c1e03f72ae12f0c.png"},1384:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datamodel-c0bd878b492060fa0c1e03f72ae12f0c.png"},8209:(e,t,a)=>{a(7294)}}]);
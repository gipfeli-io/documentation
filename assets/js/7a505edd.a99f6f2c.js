"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));r(8209);const i={id:"security-authorization",sidebar_position:3,title:"Authorization"},o=void 0,s={unversionedId:"architecture/security/security-authorization",id:"architecture/security/security-authorization",title:"Authorization",description:"Authorization",source:"@site/docs/architecture/security/authorization.md",sourceDirName:"architecture/security",slug:"/architecture/security/security-authorization",permalink:"/docs/architecture/security/security-authorization",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"security-authorization",sidebar_position:3,title:"Authorization"},sidebar:"tutorialSidebar",previous:{title:"Authentication & Session Management",permalink:"/docs/architecture/security/security-authentication-session-management"},next:{title:"Basics",permalink:"/docs/infrastructure/basics"}},c={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Authorization")),(0,a.kt)("p",{parentName:"blockquote"},"The process of granting or denying specific requests: 1) for obtaining and using information and related information\nprocessing services; ","[...]"),(0,a.kt)("p",{parentName:"blockquote"},"Access privileges granted to a user, program, or process or the act of granting those privileges."),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://csrc.nist.gov/glossary/term/authorization"},"NIST")))),(0,a.kt)("p",null,"Currently, our authorization needs are very low, because we only need a way to designate admin users that may perform\nextended application-wide actions such as user management (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/domain/domain-model#role"},"roles"),"). This means\nthat authorization is currently achieved by assigning a role to every user, which is either ",(0,a.kt)("inlineCode",{parentName:"p"},"USER")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMINISTRATOR"),",\nwith the default being ",(0,a.kt)("inlineCode",{parentName:"p"},"USER"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Backend implementation"),(0,a.kt)("div",null,(0,a.kt)("p",null,"In the backend, this is an additional guard, ",(0,a.kt)("code",null,"AdminGuard")," which can be added to any route using",(0,a.kt)("code",null,"@UseGuards(AdminGuard)"),". It follows after the authentication guards and checks in the database whether the user that has been authenticated is really an administrator. This prevents users from forging JWTs (which is almost impossible anyway) and pose as an administrator while they are not. It also prevents users with a valid access token that have their admin rights revoked to access admin routes for as long as their access token is valid."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Frontend implementation"),(0,a.kt)("div",null,(0,a.kt)("p",null,"Frontend-wise, the ",(0,a.kt)("code",null,"<RequireAuth>")," component takes an optional ",(0,a.kt)("code",null,"requireAdmin")," property. If set to true, the component not only checks whether the current state is authenticated, but also whether the role in the access token is that of an administrator."))),(0,a.kt)("p",null,"In the future, this concept can be extended to allow for more fine-grained RBAC, as the concepts will still be usable."))}p.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);
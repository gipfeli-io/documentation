"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1766],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||c;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64681:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(87462),i=r(63366),c=(r(67294),r(3905)),o=["components"],a={id:"basics",sidebar_position:1,title:"Basics"},u="Clean Architecture",s={unversionedId:"architecture/basics",id:"architecture/basics",title:"Basics",description:"We generally adhere to the principles of Clean Architecture with deviations where they make more sense",source:"@site/docs/architecture/basics.md",sourceDirName:"architecture",slug:"/architecture/basics",permalink:"/docs/architecture/basics",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"basics",sidebar_position:1,title:"Basics"},sidebar:"tutorialSidebar",previous:{title:"Domain Model",permalink:"/docs/domain/domain-model"},next:{title:"Api Architecture",permalink:"/docs/architecture/architecture_api"}},l={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"clean-architecture"},"Clean Architecture"),(0,c.kt)("p",null,"We generally adhere to the principles of Clean Architecture with deviations where they make more sense\nor might be more practical. This depends mainly on how this is compatible with the libraries used.\nUsing clean architecture we make our application easily testable with a multitude of different testing\napproaches."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={slug:"development-meeting-6",title:"Development Meeting 6",authors:["sabrina","lukas","tobias"],tags:["general"]},i=void 0,l={permalink:"/meeting-notes/development-meeting-6",source:"@site/meeting-notes/2022-07-12-development-meeting-6.md",title:"Development Meeting 6",description:"We did a quick demo and showed the image upload incl. the coordinate extraction from the exif information. We also showed",date:"2022-07-12T00:00:00.000Z",formattedDate:"July 12, 2022",tags:[{label:"general",permalink:"/meeting-notes/tags/general"}],readingTime:.7,hasTruncateMarker:!1,authors:[{name:"Sabrina Wullschleger",title:"gipfeli.io Co-Creator",url:"https://github.com/Saela",imageURL:"https://github.com/saela.png",key:"sabrina"},{name:"Lukas Merz",title:"gipfeli.io Co-Creator",url:"https://github.com/Tugark",imageURL:"https://github.com/tugark.png",key:"lukas"},{name:"Tobias B\xfcchel",title:"Thesis supervisor",url:"https://www.ost.ch",imageURL:"https://github.com/apollocoder.png",key:"tobias"}],frontMatter:{slug:"development-meeting-6",title:"Development Meeting 6",authors:["sabrina","lukas","tobias"],tags:["general"]},prevItem:{title:"Sprint 7 Review & Sprint 8 Planning",permalink:"/meeting-notes/sprint-7-review-sprint-8-planning.md"},nextItem:{title:"Sprint 6 Review & Sprint 7 Planning",permalink:"/meeting-notes/sprint-6-review-sprint-7-planning.md"}},s={authorsImageUrls:[void 0,void 0,void 0]},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We did a quick demo and showed the image upload incl. the coordinate extraction from the exif information. We also showed\nthe offline synchronization and discussed the best way to make the offline mode as intuitive for the user as possible.\nTobias had some ideas that we will integrate in the current work."),(0,a.kt)("p",null,"We also had some questions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Image upload context => is it fine that we have another context there?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Multiple contexts are absolutely ok. There is no limit."))),(0,a.kt)("li",{parentName:"ul"},"Public google bucket => is this ok?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Yes, this is ok :)"))),(0,a.kt)("li",{parentName:"ul"},"Frontend testing => how much do we need? what does make sense?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We should ask ourselves what the most complex component is and test this."),(0,a.kt)("li",{parentName:"ul"},"Services should also be tested (unit tests)"),(0,a.kt)("li",{parentName:"ul"},"Test coverage in frontend is not really useful")))))}c.isMDXComponent=!0}}]);
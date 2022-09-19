"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={slug:"development-meeting-3",title:"Development Meeting 3",authors:["sabrina","lukas","tobias"],tags:["general"]},a=void 0,l={permalink:"/meeting-notes/development-meeting-3",source:"@site/meeting-notes/2022-05-17-development-meeting-3.md",title:"Development Meeting 3",description:"This bi-weekly meeting was to show Tobias, our supervisor, our current progress.",date:"2022-05-17T00:00:00.000Z",formattedDate:"May 17, 2022",tags:[{label:"general",permalink:"/meeting-notes/tags/general"}],readingTime:.29,hasTruncateMarker:!1,authors:[{name:"Sabrina Wullschleger",title:"gipfeli.io Co-Creator",url:"https://github.com/Saela",imageURL:"https://github.com/saela.png",key:"sabrina"},{name:"Lukas Merz",title:"gipfeli.io Co-Creator",url:"https://github.com/Tugark",imageURL:"https://github.com/tugark.png",key:"lukas"},{name:"Tobias B\xfcchel",title:"Thesis supervisor",url:"https://www.ost.ch",imageURL:"https://github.com/apollocoder.png",key:"tobias"}],frontMatter:{slug:"development-meeting-3",title:"Development Meeting 3",authors:["sabrina","lukas","tobias"],tags:["general"]},prevItem:{title:"Sprint 3 Review & Sprint 4 Planning",permalink:"/meeting-notes/sprint-3-review-sprint-4-planning.md"},nextItem:{title:"Sprint 2 Review & Sprint 3 Planning",permalink:"/meeting-notes/sprint-2-review-sprint-3-planning.md"}},s={authorsImageUrls:[void 0,void 0,void 0]},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This bi-weekly meeting was to show Tobias, our supervisor, our current progress."),(0,o.kt)("p",null,"We showed our current progress, including"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Documentation"),(0,o.kt)("li",{parentName:"ul"},"Frontend with backend integration"),(0,o.kt)("li",{parentName:"ul"},"Testing implementation")),(0,o.kt)("p",null,"Tobias mentioned we should not waste too much time on CICD issues, which is why we decided to postpone database tests to\na later stage and focus on unit tests."))}c.isMDXComponent=!0}}]);
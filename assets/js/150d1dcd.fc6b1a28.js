"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6485],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={slug:"development-meeting-6",title:"Development Meeting 6",authors:["sabrina","lukas","tobias"],tags:["general"]},s=void 0,u={permalink:"/meeting-notes/development-meeting-6",source:"@site/meeting-notes/2022-07-12-development-meeting-6.md",title:"Development Meeting 6",description:"We did a quick demo and showed the image upload incl. the coordinate extraction from the exif information. We also showed",date:"2022-07-12T00:00:00.000Z",formattedDate:"July 12, 2022",tags:[{label:"general",permalink:"/meeting-notes/tags/general"}],readingTime:.7,truncated:!1,authors:[{name:"Sabrina Wullschleger",title:"gipfeli.io Co-Creator",url:"https://github.com/Saela",imageURL:"https://github.com/saela.png",key:"sabrina"},{name:"Lukas Merz",title:"gipfeli.io Co-Creator",url:"https://github.com/Tugark",imageURL:"https://github.com/tugark.png",key:"lukas"},{name:"Tobias B\xfcchel",title:"Thesis supervisor",url:"https://www.ost.ch",imageURL:"https://github.com/apollocoder.png",key:"tobias"}],frontMatter:{slug:"development-meeting-6",title:"Development Meeting 6",authors:["sabrina","lukas","tobias"],tags:["general"]},prevItem:{title:"Sprint 7 Review & Sprint 8 Planning",permalink:"/meeting-notes/sprint-7-review-sprint-8-planning.md"},nextItem:{title:"Sprint 6 Review & Sprint 7 Planning",permalink:"/meeting-notes/sprint-6-review-sprint-7-planning.md"}},c={authorsImageUrls:[void 0,void 0,void 0]},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We did a quick demo and showed the image upload incl. the coordinate extraction from the exif information. We also showed\nthe offline synchronization and discussed the best way to make the offline mode as intuitive for the user as possible.\nTobias had some ideas that we will integrate in the current work."),(0,i.kt)("p",null,"We also had some questions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Image upload context => is it fine that we have another context there?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Multiple contexts are absolutely ok. There is no limit."))),(0,i.kt)("li",{parentName:"ul"},"Public google bucket => is this ok?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Yes, this is ok :)"))),(0,i.kt)("li",{parentName:"ul"},"Frontend testing => how much do we need? what does make sense?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We should ask ourselves what the most complex component is and test this."),(0,i.kt)("li",{parentName:"ul"},"Services should also be tested (unit tests)"),(0,i.kt)("li",{parentName:"ul"},"Test coverage in frontend is not really useful")))))}d.isMDXComponent=!0}}]);
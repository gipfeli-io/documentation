"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={slug:"development-meeting-4",title:"Development Meeting 4",authors:["sabrina","lukas","tobias"],tags:["general"]},i=void 0,s={permalink:"/meeting-notes/development-meeting-4",source:"@site/meeting-notes/2022-05-31-development-meeting-4.md",title:"Development Meeting 4",description:"This bi-weekly meeting was to show Tobias, our supervisor, our current progress.",date:"2022-05-31T00:00:00.000Z",formattedDate:"May 31, 2022",tags:[{label:"general",permalink:"/meeting-notes/tags/general"}],readingTime:1.73,hasTruncateMarker:!1,authors:[{name:"Sabrina Wullschleger",title:"gipfeli.io Co-Creator",url:"https://github.com/Saela",imageURL:"https://github.com/saela.png",key:"sabrina"},{name:"Lukas Merz",title:"gipfeli.io Co-Creator",url:"https://github.com/Tugark",imageURL:"https://github.com/tugark.png",key:"lukas"},{name:"Tobias B\xfcchel",title:"Thesis supervisor",url:"https://www.ost.ch",imageURL:"https://github.com/apollocoder.png",key:"tobias"}],frontMatter:{slug:"development-meeting-4",title:"Development Meeting 4",authors:["sabrina","lukas","tobias"],tags:["general"]},prevItem:{title:"Sprint 4 Review & Sprint 5 Planning",permalink:"/meeting-notes/sprint-4-review-sprint-5-planning.md"},nextItem:{title:"Sprint 3 Review & Sprint 4 Planning",permalink:"/meeting-notes/sprint-3-review-sprint-4-planning.md"}},l={authorsImageUrls:[void 0,void 0,void 0]},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This bi-weekly meeting was to show Tobias, our supervisor, our current progress."),(0,o.kt)("p",null,"We showed our current progress, including"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Our last sprint"),(0,o.kt)("li",{parentName:"ul"},"Our current sprint goals"),(0,o.kt)("li",{parentName:"ul"},"Quick demo for our current progress")),(0,o.kt)("p",null,"Tobias asked about our approach to user management and whether we're using a library. Since we're using a very basic\nsetup, we're (currently) not using any user or rights library, but we might start using one if we find one. On that\nnote, we also discussed some approaches for handling JWT token and token refresh."),(0,o.kt)("p",null,"We also had some questions which we addressed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gipfeli-io/gipfeli-frontend/issues/31"},(0,o.kt)("strong",{parentName:"a"},"Frontend bug")),": We analyzed the problem with Tobias and\nquickly found a solution. Besides, we also got some feedback regarding code quality."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redux for state management"),": We were wondering whether we should use Redux for state management. Tobias said that,\ngiven our current scope, it might be overkill, though our considerations were valid in that state would provide us\nwith some cleaner code - however, it would require more investement and learning and might be overkill."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Using React context"),": Since we do not want to overuse context, we showed our usage of context and Tobias said that\nwe're using it correctly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Should we drop next.js"),": So far, next.js has proven to be rather cumbersome to use; and also the documentation is\nrather bad. Since we're not using any of the SSR capabilities (which we can't since we rely on custom data for each\nrequest), we were wondering whether we should drop it in favor of a pure React application. At this point, we're still\nable to drop it and the move should be feasible since next.js is basically a supercharged wrapper around React. Tobias\nsaid that it's okay to switch and that these are valid concerns - if we're not really using the framework (or not to\nthe full extent), there is no reason for keeping it.")),(0,o.kt)("p",null,"After our meeting, we decided to go the oure React route - also because the offline functionality seems to be more\nstraightforward to implement when not using next.js."))}c.isMDXComponent=!0}}]);
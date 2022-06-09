"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7191],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44112:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={slug:"thesis-interim-review",title:"Thesis interim review",authors:["sabrina","lukas"],tags:["general"]},s=void 0,u={permalink:"/meeting-notes/thesis-interim-review",source:"@site/meeting-notes/2022-06-09-thesis-interim-review.md",title:"Thesis interim review",description:"We had to provide a short video where we show the current status of the project and some project specific information.",date:"2022-06-09T00:00:00.000Z",formattedDate:"June 9, 2022",tags:[{label:"general",permalink:"/meeting-notes/tags/general"}],readingTime:1.795,truncated:!1,authors:[{name:"Sabrina Wullschleger",title:"gipfeli.io Co-Creator",url:"https://github.com/Saela",imageURL:"https://github.com/saela.png",key:"sabrina"},{name:"Lukas Merz",title:"gipfeli.io Co-Creator",url:"https://github.com/Tugark",imageURL:"https://github.com/tugark.png",key:"lukas"}],frontMatter:{slug:"thesis-interim-review",title:"Thesis interim review",authors:["sabrina","lukas"],tags:["general"]},nextItem:{title:"Sprint 4 Review & Sprint 5 Planning",permalink:"/meeting-notes/sprint-4-review-sprint-5-planning.md"}},c={authorsImageUrls:[void 0,void 0]},p=[{value:"C.A.",id:"ca",level:4},{value:"St.M.",id:"stm",level:4},{value:"D.T.",id:"dt",level:4},{value:"A.K.",id:"ak",level:4},{value:"L.B.",id:"lb",level:4},{value:"Take home message",id:"take-home-message",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We had to provide a short video where we show the current status of the project and some project specific information.\nThis was analysed by some professors at the university. In a short feedback round they gave us some input and asked us questions\nif something was unclear to them."),(0,o.kt)("p",null,"Below is the feedback of the review team:"),(0,o.kt)("h4",{id:"ca"},"C.A."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Good state, great code quality"),(0,o.kt)("li",{parentName:"ul"},"Don't use any => use specific types correctly"),(0,o.kt)("li",{parentName:"ul"},"Typing does not need undefined/null check")),(0,o.kt)("h4",{id:"stm"},"St.M."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Good status"),(0,o.kt)("li",{parentName:"ul"},"Risk analysis not available"),(0,o.kt)("li",{parentName:"ul"},"Few tests in backend")),(0,o.kt)("h4",{id:"dt"},"D.T."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Thinks our procedures are good and likes the app skeleton"),(0,o.kt)("li",{parentName:"ul"},"Few tests in backend."),(0,o.kt)("li",{parentName:"ul"},"Measure test coverage with Sonar."),(0,o.kt)("li",{parentName:"ul"},"Adjust DOD with test coverage percentage."),(0,o.kt)("li",{parentName:"ul"},"Documentation scope very good, understandable, Decision Log great"),(0,o.kt)("li",{parentName:"ul"},"Roadmap missing => add it to documentation (not very detailed as e.g. backlog)"),(0,o.kt)("li",{parentName:"ul"},"Datamodel should be model-driven, not code-driven --\x3e add to Documentation.")),(0,o.kt)("h4",{id:"ak"},"A.K."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Overall impression very good"),(0,o.kt)("li",{parentName:"ul"},"Thrilled with documentation. It is clearly laid out. Decision Log great. Good balance of documenting too much and not enough."),(0,o.kt)("li",{parentName:"ul"},"Basic architecture concept good. Layer on own instance too much, but ok."),(0,o.kt)("li",{parentName:"ul"},"Flutter.js or Electron.js would maybe have been a good option? => not the way we wanted to go"),(0,o.kt)("li",{parentName:"ul"},"Gap analysis made between hikr.org etc. => as matrix"),(0,o.kt)("li",{parentName:"ul"},"GPX upload as a future feature? => maybe list as next steps")),(0,o.kt)("h4",{id:"lb"},"L.B."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clean software engineering in all areas"),(0,o.kt)("li",{parentName:"ul"},"Risk planning for next features should be done"),(0,o.kt)("li",{parentName:"ul"},"Good task prio"),(0,o.kt)("li",{parentName:"ul"},"Documentation in good condition"),(0,o.kt)("li",{parentName:"ul"},"Include technical challenges/lessons learned in doc => Typeorm,"),(0,o.kt)("li",{parentName:"ul"},"Geo photo upload next to offline functionality")),(0,o.kt)("h2",{id:"take-home-message"},"Take home message"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"More Tests in general (especially backend)"),(0,o.kt)("li",{parentName:"ul"},"Add EsLint rules to prevent using any / clean up repo"),(0,o.kt)("li",{parentName:"ul"},'Configure sonar to display the test coverage. Define test coverage in DoD with percentage instead of just saying "Tests written"'),(0,o.kt)("li",{parentName:"ul"},"Add Roadmap to show plan of future features"),(0,o.kt)("li",{parentName:"ul"},"Add Gap analysis as a matrix to documentation"),(0,o.kt)("li",{parentName:"ul"},"Add page for lessons learned and challenges")))}d.isMDXComponent=!0}}]);
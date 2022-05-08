"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8029],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67111:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={slug:"kickoff",title:"Kick Off gipfeli.io",authors:["sabrina","lukas"],tags:["general"]},s=void 0,u={permalink:"/meeting-notes/kickoff",source:"@site/meeting-notes/2022-04-08-kickoff.md",title:"Kick Off gipfeli.io",description:"In order to kick things off, we decided to start with a very general kick off meeting.",date:"2022-04-08T00:00:00.000Z",formattedDate:"April 8, 2022",tags:[{label:"general",permalink:"/meeting-notes/tags/general"}],readingTime:3.425,truncated:!0,authors:[{name:"Sabrina Wullschleger",title:"gipfeli.io Co-Creator",url:"https://github.com/Saela",imageURL:"https://github.com/saela.png",key:"sabrina"},{name:"Lukas Merz",title:"gipfeli.io Co-Creator",url:"https://github.com/Tugark",imageURL:"https://github.com/tugark.png",key:"lukas"}],frontMatter:{slug:"kickoff",title:"Kick Off gipfeli.io",authors:["sabrina","lukas"],tags:["general"]},prevItem:{title:"Sprint 1: Kickoff",permalink:"/meeting-notes/sprint-1-kickoff"}},p={authorsImageUrls:[void 0,void 0]},c=[{value:"Time tracking",id:"time-tracking",level:2},{value:"Prototype content",id:"prototype-content",level:2},{value:"Development process and timeplans",id:"development-process-and-timeplans",level:2},{value:"Various technical discussions and decisions",id:"various-technical-discussions-and-decisions",level:2},{value:"Further unsorted notes",id:"further-unsorted-notes",level:2},{value:"Questions for supervisor",id:"questions-for-supervisor",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to kick things off, we decided to start with a very general kick off meeting."),(0,a.kt)("p",null,"This meeting was not yet part of any sprint, but rather designed as a setup-meeting for all things to come."),(0,a.kt)("p",null,"The following points were discussed."),(0,a.kt)("h2",{id:"time-tracking"},"Time tracking"),(0,a.kt)("p",null,"We decided to use the ",(0,a.kt)("a",{parentName:"p",href:"https://clockify.me/"},"Clockify.me")," service. This service allows time tracking with detailed\ndescriptions and in various projects. This will allow us to keep track of our invested time as well as how much time we\nspend developing and time in meetings."),(0,a.kt)("h2",{id:"prototype-content"},"Prototype content"),(0,a.kt)("p",null,"As a first milestone, we see the tech review in early June. The goal there is to have a walking skeleton with most of\nthe architectural decisions set in stone. As such, we agreed on the following features that should be working in a\nprototypical fashion:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Staging Environment with auto deployment"),(0,a.kt)("li",{parentName:"ul"},"Login for existing users (without management functions and profile functions)"),(0,a.kt)("li",{parentName:"ul"},"List of existing tours"),(0,a.kt)("li",{parentName:"ul"},"CRUD functionality for tours"),(0,a.kt)("li",{parentName:"ul"},"Offline functionality (at least conceptually, does not have to work yet)")),(0,a.kt)("p",null,"This set of features will allow us to showcase most of our application and architectural ideas, and it requires to have\na working infrastructure ready. We also see the offline functionality as one of the most critical aspects, so we want to\nfocus on that as well."),(0,a.kt)("h2",{id:"development-process-and-timeplans"},"Development process and timeplans"),(0,a.kt)("p",null,"As per our thesis agreement, we will use an agile, Scrum-inspired approach. Therefore, we agreed on the following\ncornerstones:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sprints are 2 weeks long, leading us to 11 sprints in total.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We do not use the product owner/scrum master roles explicitly, since this does not really make sense in a team of two.\nHowever, we will jointly manage our backlog both from a product owner and developer perspective, and we will help each\nother to facilitate our development.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We will use a modified subset of the typical Scrum ceremonies. They are at fixed intervals so as to guarantee a degree\nof consistency."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Weekly"),": Serves as our daily - we will discuss what has been achieved, what is being worked on and where issues\narose. This meeting is ",(0,a.kt)("strong",{parentName:"li"},"timeboxed to 20 minutes")," and is scheduled to happen ",(0,a.kt)("strong",{parentName:"li"},"each Tuesday at 18:00"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Sprint ending"),": At the end of each sprint, we will hold a ",(0,a.kt)("strong",{parentName:"li"},"1-hour long")," meeting covering the sprint review,\nretrospective and planning for the next sprint. This meeting will be held on Tuesday as well, bi-weekly, whenever\na new sprint starts."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/gipfeli-io/projects/1"},"a shared Github Project"),' with both repository-specific tickets\nand overall tickets. They are organized in several buckets and will be used for our sprintplanning ("iterations" in\nGithub projects). The following labels exist:'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Backlog"),": All tickets that come up during development or that have not been planned yet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Sprint Backlog"),": Tickets that are used for a given iteration (and have the iteration label attached)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"In Progress"),": Tickets that are in development"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PR pending"),": Tickets that are in technical review"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Testing"),": Tickets that can be tested during the sprint review, i.e. they are already merged to staging"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Done"),": Tickets that have been tested and can be deployed as a release artifact.")))),(0,a.kt)("h2",{id:"various-technical-discussions-and-decisions"},"Various technical discussions and decisions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We will be using ",(0,a.kt)("a",{parentName:"li",href:"https://mui.com/"},"Material UI")," for frontend components"),(0,a.kt)("li",{parentName:"ul"},"We will try to use ",(0,a.kt)("a",{parentName:"li",href:"https://next-auth.js.org/"},"next-auth")," and use ",(0,a.kt)("a",{parentName:"li",href:"https://auth0.com/"},"Auth0")," as an identity provider."),(0,a.kt)("li",{parentName:"ul"},"We will try to use OpenAPI sepcifications and use\nthe ",(0,a.kt)("a",{parentName:"li",href:"https://docs.nestjs.com/openapi/introduction"},"corresponding nest.js plugin")," for auto-generated docs."),(0,a.kt)("li",{parentName:"ul"},"As we have two repositories for frontend and backend, we should discuss how we handle shared types. Possibilities are\ncustom npm packages or no sharing at all.")),(0,a.kt)("h2",{id:"further-unsorted-notes"},"Further unsorted notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Offline functionality: incomplete tours (i.e. offline tours without maps) shall be designated as such"),(0,a.kt)("li",{parentName:"ul"},"Users shall have two roles - administrators and users.")),(0,a.kt)("h2",{id:"questions-for-supervisor"},"Questions for supervisor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Can we opensource our code? This would allow for more flexibility in the free plan on Github.com"),(0,a.kt)("li",{parentName:"ul"},"Can we use Auth0?"),(0,a.kt)("li",{parentName:"ul"},"What is required in terms of documentation, meetings, milestones, definition of done?"),(0,a.kt)("li",{parentName:"ul"},"Best practices for sharing types across repositories?")))}m.isMDXComponent=!0}}]);
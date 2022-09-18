"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(8209);const i={id:"branching-strategy",sidebar_position:1,title:"Branching strategy"},o=void 0,l={unversionedId:"guidelines/branching-strategy",id:"guidelines/branching-strategy",title:"Branching strategy",description:"We keep a simple branching strategy with only two fixed branches: main and stage. Development should always happen",source:"@site/docs/guidelines/branching-strategy.md",sourceDirName:"guidelines",slug:"/guidelines/branching-strategy",permalink:"/docs/guidelines/branching-strategy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"branching-strategy",sidebar_position:1,title:"Branching strategy"},sidebar:"tutorialSidebar",previous:{title:"Wireframes",permalink:"/docs/design/wireframes"},next:{title:"Testing strategy",permalink:"/docs/guidelines/testing-strategy"}},s={},p=[{value:"Branch prefix types",id:"branch-prefix-types",level:2},{value:"Branches",id:"branches",level:2},{value:"<code>main</code>",id:"main",level:3},{value:"<code>stage</code>",id:"stage",level:3},{value:"Pull requests",id:"pull-requests",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We keep a simple branching strategy with only two fixed branches: ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"stage"),". Development should always happen\nin feature or bugfix branches and generally be branched off ",(0,r.kt)("inlineCode",{parentName:"p"},"stage"),". Both ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," are very similar and both are\ndeployable."),(0,r.kt)("h2",{id:"branch-prefix-types"},"Branch prefix types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feature")," - use this prefix when you are implementing a new feature"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bugfix")," - use this prefix when you are fixing a bug"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hotfix")," - use this prefix when you need to fix a bug that needs to be deployed immediately")),(0,r.kt)("h2",{id:"branches"},"Branches"),(0,r.kt)("h3",{id:"main"},(0,r.kt)("inlineCode",{parentName:"h3"},"main")),(0,r.kt)("p",null,"This is the main branch that gets deployed to the production environment. This branch should only be changed through\nmerge requests from either ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," (for releases) or through hotfixes that need to be directly deployed to production."),(0,r.kt)("h3",{id:"stage"},(0,r.kt)("inlineCode",{parentName:"h3"},"stage")),(0,r.kt)("p",null,"This is the staging branch that gets deployed to the staging environment. It is fed via pull requests that are branched\noff from here."),(0,r.kt)("admonition",{title:"Example flow for feature",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In general, our flow is ",(0,r.kt)("inlineCode",{parentName:"p"},"featureBranch")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"master")),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Create a branch ",(0,r.kt)("inlineCode",{parentName:"li"},"feature/my-super-awesome-feature")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"stage")),(0,r.kt)("li",{parentName:"ol"},"Develop your feature and create a merge request into ",(0,r.kt)("inlineCode",{parentName:"li"},"stage")),(0,r.kt)("li",{parentName:"ol"},"Once merged, check the deployment on the staging environment to see your feature in action"),(0,r.kt)("li",{parentName:"ol"},"As soon as another release is happening, ",(0,r.kt)("inlineCode",{parentName:"li"},"stage")," is merged into ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," with your feature/bugfix (and potentially many\nothers!)")),(0,r.kt)("p",{parentName:"admonition"},"Or, if something really bad happened, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"hotfix/very-important-fix")," branch from either ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," and\nmerge it into both branches. ",(0,r.kt)("strong",{parentName:"p"},"Only do this in emergencies!"))),(0,r.kt)("admonition",{title:"Note for the documentation repository",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The documentation is an exception to this rule - since we want to push documentation as quick as possible, changes\nalways are pushed directly to ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," and deployed as such.")),(0,r.kt)("h2",{id:"pull-requests"},"Pull requests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After creating the PR we mark the other person to tell them that there is a PR."),(0,r.kt)("li",{parentName:"ul"},"If we think the PR does not need a review we can merge it directly and move the ticket in the board to Testing"),(0,r.kt)("li",{parentName:"ul"},"If the PR needs a review (e.g. because it is a critical change) we move the ticket in the board to PR pending"),(0,r.kt)("li",{parentName:"ul"},"In either case the other person will check the PR when they have time and need to leave a quick comment that the PR was reviewed"),(0,r.kt)("li",{parentName:"ul"},"If the PR was not ok the person reviewing the PR needs to create an issue on the project board and assign it to the person that created the PR")))}c.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);
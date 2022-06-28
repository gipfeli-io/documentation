"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8187],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34001:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"branching-strategy",sidebar_position:1,title:"Branching strategy"},l=void 0,p={unversionedId:"guidelines/branching-strategy",id:"guidelines/branching-strategy",title:"Branching strategy",description:"We keep a simple branching strategy with only two fixed branches: main and stage. Development should always happen",source:"@site/docs/guidelines/branching-strategy.md",sourceDirName:"guidelines",slug:"/guidelines/branching-strategy",permalink:"/docs/guidelines/branching-strategy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"branching-strategy",sidebar_position:1,title:"Branching strategy"},sidebar:"tutorialSidebar",previous:{title:"Offline Support - DRAFT",permalink:"/docs/design/offline-support"},next:{title:"Testing strategy",permalink:"/docs/guidelines/testing-strategy"}},c={},d=[{value:"Branch prefix types",id:"branch-prefix-types",level:2},{value:"Branches",id:"branches",level:2},{value:"<code>main</code>",id:"main",level:3},{value:"<code>stage</code>",id:"stage",level:3},{value:"Pull requests",id:"pull-requests",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We keep a simple branching strategy with only two fixed branches: ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stage"),". Development should always happen\nin feature or bugfix branches and generally be branched off ",(0,i.kt)("inlineCode",{parentName:"p"},"stage"),". Both ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stage")," are very similar and both are\ndeployable."),(0,i.kt)("h2",{id:"branch-prefix-types"},"Branch prefix types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"feature")," - use this prefix when you are implementing a new feature"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bugfix")," - use this prefix when you are fixing a bug"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hotfix")," - use this prefix when you need to fix a bug that needs to be deployed immediately")),(0,i.kt)("h2",{id:"branches"},"Branches"),(0,i.kt)("h3",{id:"main"},(0,i.kt)("inlineCode",{parentName:"h3"},"main")),(0,i.kt)("p",null,"This is the main branch that gets deployed to the production environment. This branch should only be changed through\nmerge requests from either ",(0,i.kt)("inlineCode",{parentName:"p"},"stage")," (for releases) or through hotfixes that need to be directly deployed to production."),(0,i.kt)("h3",{id:"stage"},(0,i.kt)("inlineCode",{parentName:"h3"},"stage")),(0,i.kt)("p",null,"This is the staging branch that gets deployed to the staging environment. It is fed via pull requests that are branched\noff from here."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example flow for feature")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In general, our flow is ",(0,i.kt)("inlineCode",{parentName:"p"},"featureBranch")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"stage")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"master")),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Create a branch ",(0,i.kt)("inlineCode",{parentName:"li"},"feature/my-super-awesome-feature")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"stage")),(0,i.kt)("li",{parentName:"ol"},"Develop your feature and create a merge request into ",(0,i.kt)("inlineCode",{parentName:"li"},"stage")),(0,i.kt)("li",{parentName:"ol"},"Once merged, check the deployment on the staging environment to see your feature in action"),(0,i.kt)("li",{parentName:"ol"},"As soon as another release is happening, ",(0,i.kt)("inlineCode",{parentName:"li"},"stage")," is merged into ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," with your feature/bugfix (and potentially many\nothers!)")),(0,i.kt)("p",{parentName:"div"},"Or, if something really bad happened, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"hotfix/very-important-fix")," branch from either ",(0,i.kt)("inlineCode",{parentName:"p"},"stage")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and\nmerge it into both branches. ",(0,i.kt)("strong",{parentName:"p"},"Only do this in emergencies!")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note for the documentation repository")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The documentation is an exception to this rule - since we want to push documentation as quick as possible, changes\nalways are pushed directly to ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," and deployed as such."))),(0,i.kt)("h2",{id:"pull-requests"},"Pull requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After creating the PR we mark the other person to tell them that there is a PR."),(0,i.kt)("li",{parentName:"ul"},"If we think the PR does not need a review we can merge it directly and move the ticket in the board to Testing"),(0,i.kt)("li",{parentName:"ul"},"If the PR needs a review (e.g. because it is a critical change) we move the ticket in the board to PR pending"),(0,i.kt)("li",{parentName:"ul"},"In either case the other person will check the PR when they have time and need to leave a quick comment that the PR was reviewed"),(0,i.kt)("li",{parentName:"ul"},"If the PR was not ok the person reviewing the PR needs to create an issue on the project board and assign it to the person that created the PR")))}u.isMDXComponent=!0}}]);
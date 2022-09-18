"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=h(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||c[p]||r;return n?i.createElement(m,s(s({ref:t},u),{},{components:n})):i.createElement(m,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var h=2;h<r;h++)s[h]=n[h];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=n(7462),a=(n(7294),n(3905));n(8209);const r={id:"security-authentication-session-management",sidebar_position:2,title:"Authentication & Session Management"},s=void 0,o={unversionedId:"architecture/security/security-authentication-session-management",id:"architecture/security/security-authentication-session-management",title:"Authentication & Session Management",description:"Authentication is the process of verifying that an individual, entity or website is whom it claims to be.",source:"@site/docs/architecture/security/authentication-session-management.md",sourceDirName:"architecture/security",slug:"/architecture/security/security-authentication-session-management",permalink:"/docs/architecture/security/security-authentication-session-management",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"security-authentication-session-management",sidebar_position:2,title:"Authentication & Session Management"},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/docs/architecture/security/security-general"},next:{title:"Authorization",permalink:"/docs/architecture/security/security-authorization"}},l={},h=[{value:"General",id:"general",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Performing authenticated requests",id:"performing-authenticated-requests",level:3},{value:"Refreshing the access token",id:"refreshing-the-access-token",level:3},{value:"Logout",id:"logout",level:3},{value:"Implementation details",id:"implementation-details",level:3},{value:"Limitations, known issues and outlook",id:"limitations-known-issues-and-outlook",level:2}],u={toc:h};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Authentication")," is the process of verifying that an individual, entity or website is whom it claims to be.\nAuthentication in the context of web applications is commonly performed by submitting a username or ID and one or more\nitems of private information that only a given user should know."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Session Management")," is a process by which a server maintains the state of an entity interacting with it. This is\nrequired for a server to remember how to react to subsequent requests throughout a transaction. Sessions are\nmaintained\non the server by a session identifier which can be passed back and forth between the client and server when\ntransmitting\nand receiving requests. Sessions should be unique per user and computationally very difficult to predict.","[...]"),(0,a.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,a.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"},"OSWASP Authentication Cheat Sheet"))),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("p",null,"As seen from the quotes above, there are two main conceptual components: ",(0,a.kt)("strong",{parentName:"p"},"authentication")," and ",(0,a.kt)("strong",{parentName:"p"},"session management"),".\nThese two play together and ultimately serve the purpose to authenticate a user. All protected routes can only be\naccessed if a user is authenticated, which means they must (a) be logged-in with their username and password and (b)\nhave a valid session that is not yet expired."),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"We are using a JWT-based authentication flow. Whenever a user logs in, the following sequence of event happens:"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/lLBBJiD03BplLrZYqafyGNAWFDGFe49SUd4JfrcHh8Fja2Bbu_4sG7lXod77uvcnrs6ZXc9ZtuKmRuMJKQhdS0P3yQ8aG8w90lKOEy1KxzE0gXDBdL-Wuw6Ffj2mz6MOR-wJnVUHNjjeD3zWzNOMBBRHkMFMcwArtrr6hhO8nmGr6XvGgGonWTNYVOfgUhS6Qod1wfDq7QXJWbNYTG0edib6IK0YBAK3LpDuTTVoTAcfyH2y59i_OsRZ9oQ55hMb-lQI4tw6tgSUhV89yCFHpFk_UCMZ41e1Gg89b5GZfxmwzxzQtoyj0LQLiy3O1PRFGn1gXBIzW8xacENr1HGxOw65ezcYumgx75BmI2xZRODmHRu4OyzpCb_HqTtFSuIDg-Ih-W80",alt:"Authentication flow"}),(0,a.kt)("p",null,"In order to prevent enumeration attacks, we do not raise detailed errors - instead, a generic ",(0,a.kt)("inlineCode",{parentName:"p"},"404 - Not found")," is\nraised, even if a valid user with an invalid password is entered. The JWT tokens are encrypted using a configurable\nsecret. They have different content, lifetime and purpose:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access token:")," This token contains an expiration date, issue date as well as the user's role, ID and email. Its\nvalidity period is configurable and should be configured to be very short.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Encrypted: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdpcGZlbGkuaW8iLCJzdWIiOiI3NmIyZDE2MS1iY2YxLTQ1ZmItODkyMC02YWE2NDMxYzcxMWQiLCJyb2xlIjowLCJpYXQiOjE2NjIyODI2NjAsImV4cCI6MTY2MjI4Mjc4MH0.5CQLeT_Q14gVowgAQE6tuHulH2ORl1gsOIvISY8gxyg\n\nDecrypted payload:\n{\n  "email": "admin@gipfeli.io",\n  "sub": "76b2d161-bcf1-45fb-8920-6aa6431c711d",\n  "role": 0,\n  "iat": 1662282660,\n  "exp": 1662282780\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Refresh token:")," This token contains an expiration date, issue date as well as the session ID. Its validity period\nis\nconfigurable and should be configured to be long.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Encrypted: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiI3N2VmZWIxNi03M2FiLTRlZWUtODdiMy03NDhiZDhmMGI5MDciLCJpYXQiOjE2NjIyODI5MzQsImV4cCI6MTY2MjI4MzIzNH0.fAVWdNl67yv5uHHiehkQiBjJDhYLCCC2fHI1QRgKrMU\n\nDecrypted payload:\n{\n  "sessionId": "77efeb16-73ab-4eee-87b3-748bd8f0b907",\n  "iat": 1662282934,\n  "exp": 1662283234\n}\n')),(0,a.kt)("h3",{id:"performing-authenticated-requests"},"Performing authenticated requests"),(0,a.kt)("p",null,"Once a user is logged in, authenticated requests can be performed by sening the (encrypted) access token as\nAuthorization Bearer header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdpcGZlbGkuaW8iLCJzdWIiOiI3NmIyZDE2MS1iY2YxLTQ1ZmItODkyMC02YWE2NDMxYzcxMWQiLCJyb2xlIjowLCJpYXQiOjE2NjIyMDY3NzgsImV4cCI6MTY2MjIwNzM3OH0.p2WvvDw8EhC7vnzGu8draL3aJm-LZNcXvKDMpeu11RQ\n")),(0,a.kt)("p",null,"The backend verifies the integrity of the token and its validity and passes the request."),(0,a.kt)("h3",{id:"refreshing-the-access-token"},"Refreshing the access token"),(0,a.kt)("p",null,"The access token should have a short validity period because it authenticates the user. In order to refresh its\nvalidity, the refresh token is used. The refresh token is tied to a session ID that is stored in the database. Before\nthe access token expires, a request to the dedicated refresh endpoint should be made. Instead of the access token in the\nAuthorization header, the refresh token is used. The backend verifies the token and checks whether the included session\nID exists and is still valid. If so, it creates a new access token and a new refresh token and returns them. From this\npoint on, the validity is extended again."),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/nP8nJm9148Nx_HMJc1YexEyA0Oc9nWeG6fhrcECcd3iuEoSIp__kx1A5njhspTkTx-tRKLGlshssplNtma4nR7gNHLUCgmfZNF0E0r04_yATWZBWnvu4IrVCpGs2Rnt6FBWHh0LZ0-jm86rWWbvGu7DsalDDNwNhhyP1oKwj6bBi9xxQvRN54eNg8pok5gMZ6WPBtzBcTWZQ6C7WY77ei8q8Wy131r3CK3i9W28ifGaN4MpwnDi4V0tpXWzdKrJUE_DG_IT8sZrbZ10jFt60Xwc59WlfBR0znVi_WHNF-urN_ENA7AH7w-9EC4q27i3dtgoGL5mYNeSa_vHprYLZbfVL5tDbmPCd0WLekV9jOXE_jSupf1kPrpxDDm00",alt:"Refresh flow"}),(0,a.kt)("h3",{id:"logout"},"Logout"),(0,a.kt)("p",null,"The logout endpoint removes the session from the database. At this moment, no refresh requests can be made. See below\nfor issues."),(0,a.kt)("h3",{id:"implementation-details"},"Implementation details"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Backend implementation"),(0,a.kt)("div",null,(0,a.kt)("p",null,"Nest uses the concept of ",(0,a.kt)("a",{href:"https://docs.nestjs.com/guards",target:"_blank"},"guards")," which intercept any request before they actually reach the route handler. Under the hood, each guard uses ",(0,a.kt)("a",{href:"https://www.passportjs.org/",target:"_blank"},"passport.js")," strategies which define what they check:"),(0,a.kt)("li",null,(0,a.kt)("strong",null,"Local Strategy:")," Used for the login. This strategy takes a user identifier (here: email) and a password from the request body and uses the ",(0,a.kt)("code",null,"AuthService")," to verify whether this user with the given password exists. If succesful, the request handler takes over."),(0,a.kt)("li",null,(0,a.kt)("strong",null,"JWT Strategy:")," Used for protected routes. This strategy takes an encrypted JWT from the Authorization header and verifies its integrity and expiry. If it is a valid JWT (i.e. encrypted with our secret) and an access token (i.e. containing the access token params) and still valid, allows the request."),(0,a.kt)("li",null,(0,a.kt)("strong",null,"Refresh JWT Strategy:")," Used for the refresh route. This strategy takes an encrypted JWT from the Authorization header and verifies its integrity and expiry. If it is a valid JWT (i.e. encrypted with our secret) and a refresh token (i.e. containing the refresh token params) and still valid, allows the request."),(0,a.kt)("li",null,(0,a.kt)("strong",null,"Token bearer Strategy:")," Used for the media cleanup. This strategy takes a secret submitted via Authorization header and checks whether it matches the specified secret in the .env file. If so, allows the request."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Frontend implementation"),(0,a.kt)("div",null,(0,a.kt)("p",null,"The frontend performs requests to the backend. Once a login request is made, it stores the access and refresh tokens in the localstorage. The following components are performing authentication-related tasks:"),(0,a.kt)("li",null,(0,a.kt)("strong",null,"Authentication Provider:")," Provides an ",(0,a.kt)("code",null,"AuthenticationContext"),", accessible via ",(0,a.kt)("code",null,"useAuth()")," hook. Wrapped around all routes, it allows pages to check for the current authentication state. Upon login, the login page performs the actions in the context required to store the tokens, after which point the frontend is in an authenticated state. This provider also registers an interval hook that periodically checks whether the access token is still valid. If the validity period goes below a certain treshold, the provider performs a refresh request in the background and updates the tokens. This also happens when a user reloads the page - upon initialization, the tokens are checked and refreshed, if need be. This allows the users to log-in and stay logged-in for extended periods of time, while guaranteeing that the tokens are always valid. Finally, when a user logs out, the local storage is purged."),(0,a.kt)("li",null,(0,a.kt)("strong",null,"RequireAuth component:")," This react component can be wrapped around other components (e.g. inside a page). It uses the aforementioned ",(0,a.kt)("code",null,"useAuth()")," to check whether the user is logged in. If not, it redirects to the login page."),(0,a.kt)("li",null,(0,a.kt)("strong",null,"Services:")," Frontend services that handle requests to the backend get the corresponding token injected during initialization. They add this Authorization header and perform requests to the backend."))),(0,a.kt)("h2",{id:"limitations-known-issues-and-outlook"},"Limitations, known issues and outlook"),(0,a.kt)("p",null,"See also ",(0,a.kt)("a",{parentName:"p",href:"../../../general/lessons-learned"},"lessons learned"),"."),(0,a.kt)("p",null,"Unfortunately, Nest does not provide a fully-fledged authentication flow, while providers such as Auth0 are very\nexpensive. This is why we implemented the flow ourselves. While it does work, it has three important issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Over-engineered:")," In its current state, it is a bit overengineered. In fact, we would not require any JWTs and\nrefresh flows, because we could just return the session ID (or a secret attached to the session ID) and store this for\nthe Bearer token. We could then check on each request in a corresponding guard whether the supplied secret matches a\nvalid session. However, this would mean that users are ",(0,a.kt)("strong",{parentName:"li"},"always")," logged out when the session ends, because the tokens\ncannot be refreshed. This is why we decided to have a refresh flow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tokens cannot be revoked:")," A major issue is that we only check for the session ID in the refresh flow. This means\nthat when a user logs out, their access token might still be valid for a certain amount of time, before its validity\nperiod has expired. If a user were to logout and retain their access token, they could still perform authenticated\nrequests. This issue is mitigated in part by the validity period (which should be very low for the access token), but\nit might be a security issue nonetheless."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Refresh tokens are not invalidated:")," While we do hand out new refresh tokens, the old ones are not invalidated. As\nlong as the tokens are stored safely, nothing can happen, but if an attacker intercepts the refresh token, it might be\nused to get a new access token.")),(0,a.kt)("p",null,"In the end, we realized that we probably should go for an authentication provider like Auth0 nonetheless. This is why we\ndid not remove the whole refresh token flow, because we are already well-prepared for implementing the OAuth flows."))}c.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);
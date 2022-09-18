"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[976],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),k=n,c=d["".concat(o,".").concat(k)]||d[k]||m[k]||i;return a?r.createElement(c,l(l({ref:t},u),{},{components:a})):r.createElement(c,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));a(8209);const i={id:"use-cases",sidebar_position:2,title:"Use Cases"},l=void 0,s={unversionedId:"design/use-cases",id:"design/use-cases",title:"Use Cases",description:"User self service",source:"@site/docs/design/use-cases.md",sourceDirName:"design",slug:"/design/use-cases",permalink:"/docs/design/use-cases",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"use-cases",sidebar_position:2,title:"Use Cases"},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/docs/design/requirements"},next:{title:"Wireframes",permalink:"/docs/design/wireframes"}},o={},p=[{value:"User self service",id:"user-self-service",level:2},{value:"UC1: Register",id:"uc1-register",level:3},{value:"UC2: Login",id:"uc2-login",level:3},{value:"UC3: Reset password (optional)",id:"uc3-reset-password-optional",level:3},{value:"User actions for logged in users",id:"user-actions-for-logged-in-users",level:2},{value:"UC4: Display list of tours",id:"uc4-display-list-of-tours",level:3},{value:"UC5: Edit tour",id:"uc5-edit-tour",level:3},{value:"UC6: View tour",id:"uc6-view-tour",level:3},{value:"UC7: Create tour",id:"uc7-create-tour",level:3},{value:"UC8: Delete tour",id:"uc8-delete-tour",level:3},{value:"UC9: Upload images",id:"uc9-upload-images",level:3},{value:"UC9.1: Upload geo referenced images",id:"uc91-upload-geo-referenced-images",level:3},{value:"UC10: Upload GPX track (optional)",id:"uc10-upload-gpx-track-optional",level:3},{value:"Administration",id:"administration",level:2},{value:"UC10: Manage users",id:"uc10-manage-users",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"user-self-service"},"User self service"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/LO-n2i9044Jx-ueXVGIJBbN4raA4VC2IhET2SYUtUuY8_suYKKWtpBmPc5QDakLfT2DV3HQHnDyCWoJkJM9mr5jCA0uXXkSKiw9JJWL8GTaj40K_ChpShppAJY9U3iZAFIcZw8xx1XVsehRMPcSBL0rEqKjOqsgRrajTsN0crKTCmuhLxkqeeoo_WpzL_LNjMWx3_Em3",alt:"User sign up"}),(0,n.kt)("h3",{id:"uc1-register"},"UC1: Register"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Anonymous user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," ",(0,n.kt)("em",{parentName:"li"},"none")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"User enters the register page"),(0,n.kt)("li",{parentName:"ol"},"User fills in all required information"),(0,n.kt)("li",{parentName:"ol"},"User hits submit, which dispatches an email for verification"),(0,n.kt)("li",{parentName:"ol"},"User clicks the email verification link"),(0,n.kt)("li",{parentName:"ol"},"User is logged in and activated"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": User has an activated account."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User already has an account - same email address can only be used once."),(0,n.kt)("li",{parentName:"ul"},"User tries to login without verification link clicked - error message shown.")))),(0,n.kt)("h3",{id:"uc2-login"},"UC2: Login"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Registered user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," User has a verified account"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"User enters the login page"),(0,n.kt)("li",{parentName:"ol"},"User fills in email and password"),(0,n.kt)("li",{parentName:"ol"},"User hits submit"),(0,n.kt)("li",{parentName:"ol"},"User is logged in"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": User is logged in."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User has no account - error message shown."),(0,n.kt)("li",{parentName:"ul"},"User tries to login without verification link clicked - error message shown.")))),(0,n.kt)("h3",{id:"uc3-reset-password-optional"},"UC3: Reset password (optional)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Registered user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," User has a verified account"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"User enters the reset password page"),(0,n.kt)("li",{parentName:"ol"},"User fills in email"),(0,n.kt)("li",{parentName:"ol"},"User hits submit, an email is dispatched with a reset link"),(0,n.kt)("li",{parentName:"ol"},"User clicks the reset link"),(0,n.kt)("li",{parentName:"ol"},"User enters their new password and confirms it, hits submit"),(0,n.kt)("li",{parentName:"ol"},"User is logged in"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": User is logged in and the new password is set"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User has no account - error message shown."),(0,n.kt)("li",{parentName:"ul"},"User tries to reset without verification link clicked - error message shown.")))),(0,n.kt)("h2",{id:"user-actions-for-logged-in-users"},"User actions for logged in users"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/TP91QuCm68Rl_egNtfNPwgf1Ii6DNNROfMFNe9zPM6eaYMnZxBylbLOQwI275xxd-P8loTuwRjnuL96Ypi5f62dU7Lffg75Izn5ld3POFMiXg8NiCLeoAt0BDKOdYFT24OGSEb8oaHe_4KvGmorXTQWpXWTf1yM_eQHrq9tVPZHswd6eqv3E6HvRwIRaJAn3el3zI96ZQsOJClSChv8-huai9BOCjI4UTib3fcGu34fpF_QH2xgSUBkWadJc1FaBf8uCzGqjj2BKqhlPUdfvWpEy-JYJfIVzyfEZYiSXEUq9XggYBqTzkzjDnHpLpSh2BFyrovlcTZQBiFuRgH5nF3tP9Qtdj9bJDgSysdlLVwu_",alt:"Tour administration"}),(0,n.kt)("h3",{id:"uc4-display-list-of-tours"},"UC4: Display list of tours"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Registered user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," User has a verified account, user is logged in"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"User enters overview pages"),(0,n.kt)("li",{parentName:"ol"},"User sees a list of previously entered tours"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": ",(0,n.kt)("em",{parentName:"li"},"none")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User has no tours - message is shown.")))),(0,n.kt)("h3",{id:"uc5-edit-tour"},"UC5: Edit tour"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Registered user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," User has a verified account, user is logged in, user has an existing tour"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"User enters overview page"),(0,n.kt)("li",{parentName:"ol"},"User enters detail page and clicks edit ",(0,n.kt)("em",{parentName:"li"},"or")," directly enters edit page"),(0,n.kt)("li",{parentName:"ol"},"User sees a prepopulated edit form with the tour details"),(0,n.kt)("li",{parentName:"ol"},"User edits (some) fields"),(0,n.kt)("li",{parentName:"ol"},"User hits save"),(0,n.kt)("li",{parentName:"ol"},"Tour is saved and user sees the newly persisted state"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": Tour is edited."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User has no tours - edit screen is not accessible.")))),(0,n.kt)("h3",{id:"uc6-view-tour"},"UC6: View tour"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Registered user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," User has a verified account, user is logged in, user has an existing tour"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"User enters overview page"),(0,n.kt)("li",{parentName:"ol"},"User enters detail page"),(0,n.kt)("li",{parentName:"ol"},"User sees a prepopulated detail page"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": ",(0,n.kt)("em",{parentName:"li"},"none")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User has no tours - detail screen is not accessible."),(0,n.kt)("li",{parentName:"ul"},"User accesses tour that does not exists - error message shown."),(0,n.kt)("li",{parentName:"ul"},"User accesses tour that does not belong to them - error message shown.")))),(0,n.kt)("h3",{id:"uc7-create-tour"},"UC7: Create tour"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Registered user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," User has a verified account, user is logged in"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"User enters overview page"),(0,n.kt)("li",{parentName:"ol"},"User enters create page"),(0,n.kt)("li",{parentName:"ol"},"User sees an empty form"),(0,n.kt)("li",{parentName:"ol"},"User enters all required information and hits submit"),(0,n.kt)("li",{parentName:"ol"},"User is taken to the prepopulated detail page with their new tour."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": Tour is created"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"none"))))),(0,n.kt)("h3",{id:"uc8-delete-tour"},"UC8: Delete tour"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Registered user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," User has a verified account, user is logged in, user has an existing tour"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"User enters overview page"),(0,n.kt)("li",{parentName:"ol"},"User enters detail page and clicks delete ",(0,n.kt)("em",{parentName:"li"},"or")," directly deletes from overview page"),(0,n.kt)("li",{parentName:"ol"},"User confirms deletion"),(0,n.kt)("li",{parentName:"ol"},"Success message is shown"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": Tour is deleted."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User does not confirm deletion - tour is not deleted.")))),(0,n.kt)("h3",{id:"uc9-upload-images"},"UC9: Upload images"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Registered user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," User has a verified account, user is logged in, user has an existing tour, user is either creating\nor editing a tour"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"User uploads images"),(0,n.kt)("li",{parentName:"ol"},"Images are checked for file size and mimetype and saved to object storage"),(0,n.kt)("li",{parentName:"ol"},"On detail pages, the images are shown in form of a gallery and can be viewed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": Photos are uploaded and attached to tour"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Invalid file size - error message shown."),(0,n.kt)("li",{parentName:"ul"},"Invalid file type - error message shown.")))),(0,n.kt)("h3",{id:"uc91-upload-geo-referenced-images"},"UC9.1: Upload geo referenced images"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: This is an extension of ",(0,n.kt)("a",{parentName:"em",href:"#uc9-upload-images"},"UC9")," and is automatically applied if the photos are geo-referenced.\nThe user does not have to take any action. UC9 applies here as well.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Registered user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," User has a verified account, user is logged in, user has an existing tour, user is either creating\nor editing a tour"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"User uploads images"),(0,n.kt)("li",{parentName:"ol"},"Images are checked for filesize, mimetypes and coordinates and saved accordingly"),(0,n.kt)("li",{parentName:"ol"},"On detail pages, the images are shown on the map"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": Photos are uploaded, photos are georeferenced on the map and attached to the tour"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Invalid georeference - only photo is saved.")))),(0,n.kt)("h3",{id:"uc10-upload-gpx-track-optional"},"UC10: Upload GPX track (optional)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Registered user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," User has a verified account, user is logged in, user has an existing tour, user is either creating\nor editing a tour"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"User uploads GPX track file"),(0,n.kt)("li",{parentName:"ol"},"GPX track file is checked for file size and mimetype and saved to object storage"),(0,n.kt)("li",{parentName:"ol"},"On detail pages, the GPX track is shown on the map and the file may be downloaded"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": GPX track is uploaded and shown on the map and attached to the tour"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Invalid file size - error message shown."),(0,n.kt)("li",{parentName:"ul"},"Invalid file type - error message shown."),(0,n.kt)("li",{parentName:"ul"},"Invalid GPX file - map does still render.")))),(0,n.kt)("h2",{id:"administration"},"Administration"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/9Oqn3i8m40JxUyNAVH2qL47Kb3pWP5_CIOwDpfSAvUzWqercjDgvEvjlQw4YYyCRJFFBaTGakhPA7BqPmYsjMWEuWsaahha8ihuNANhIXWy1MvV8NH2UzylvYWTNpZAizVzqQDg9CKq7prBJx_mB",alt:"Admin"}),(0,n.kt)("h3",{id:"uc10-manage-users"},"UC10: Manage users"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actor:")," Admin user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preconditions:")," User is logged in, user is admin"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow of events:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Admin sees list of users"),(0,n.kt)("li",{parentName:"ol"},"Admin can delete users after confirmation"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postconditions"),": User is deleted"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible rainy day scenarios"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"none"))))))}m.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);
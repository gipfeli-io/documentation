"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3553],{7506:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=a(7462),s=(a(7294),a(3905));a(1839);const o={id:"basics",sidebar_position:1,title:"Basics"},i=void 0,r={unversionedId:"infrastructure/basics",id:"infrastructure/basics",title:"Basics",description:"In general, our infrastructure uses the following services:",source:"@site/docs/infrastructure/basics.md",sourceDirName:"infrastructure",slug:"/infrastructure/basics",permalink:"/docs/infrastructure/basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"basics",sidebar_position:1,title:"Basics"},sidebar:"tutorialSidebar",previous:{title:"Authorization",permalink:"/docs/architecture/security/security-authorization"},next:{title:"Frontend deployment",permalink:"/docs/infrastructure/frontend-deployment"}},l={},u=[{value:"DevOps",id:"devops",level:2},{value:"GitHub",id:"github",level:3},{value:"GCP: Container Registry",id:"gcp-container-registry",level:3},{value:"SoncarCloud",id:"soncarcloud",level:3},{value:"Presentation &amp; Business Logic",id:"presentation--business-logic",level:2},{value:"GCP: Cloud Run",id:"gcp-cloud-run",level:3},{value:"GCP: Secret Manager",id:"gcp-secret-manager",level:3},{value:"Persistence",id:"persistence",level:2},{value:"GCP: Cloud Storage",id:"gcp-cloud-storage",level:3},{value:"GCP: Cloud SQL",id:"gcp-cloud-sql",level:3},{value:"Utils",id:"utils",level:2},{value:"Sentry",id:"sentry",level:3},{value:"GCP: Cloud Scheduler",id:"gcp-cloud-scheduler",level:3}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In general, our infrastructure uses the following services:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"GitHub"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Hosts our organization with all repositories"),(0,s.kt)("li",{parentName:"ul"},"Uses GitHub Actions to build and deploy our project"),(0,s.kt)("li",{parentName:"ul"},"Uses GitHub Pages to host our statically built documentation"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Google Cloud Platform"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Hosts our frontend application"),(0,s.kt)("li",{parentName:"ul"},"Hosts our backend application"),(0,s.kt)("li",{parentName:"ul"},"Stores the application data"),(0,s.kt)("li",{parentName:"ul"},"Contains all our containers in its registry"),(0,s.kt)("li",{parentName:"ul"},"Runs scheduled tasks"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Sentry"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Our error logging and performance metrics solution"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"SonarCloud"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Our code quality scanning tool")))),(0,s.kt)("p",null,"In terms of services used for our main application, the following diagram shows all the services, while they're\ndescribed in more detail below."),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:a(3991).Z},"(enlarge image)"),"\n",(0,s.kt)("img",{alt:"Infrastructure diagram",src:a(7369).Z,width:"3540",height:"1980"})),(0,s.kt)("admonition",{title:"Note",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"For simplicity, the documentation part is left out in the above documentation. More information can be\nfound ",(0,s.kt)("a",{parentName:"p",href:"/docs/infrastructure/documentation-deployment"},"here"))),(0,s.kt)("h2",{id:"devops"},"DevOps"),(0,s.kt)("p",null,"For our DevOps needs, we use services from both GitHub and Google Cloud."),(0,s.kt)("h3",{id:"github"},"GitHub"),(0,s.kt)("p",null,"At GitHub, we have a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/gipfeli-io"},"gipfeli.io")," organization set up that hosts all the code\nrepositories. Both the frontend and the backend use GitHub Actions to automatically test, build and deploy our\napplications to staging and production."),(0,s.kt)("p",null,"We chose GitHub because"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It allows for Kanban-style project boards that are linked to repositories' issues"),(0,s.kt)("li",{parentName:"ul"},"Has quite a good review framework for pull requests"),(0,s.kt)("li",{parentName:"ul"},"Has a fully integrated CICD pipeline with GitHub Actions that neatly ties into Google Cloud and other services")),(0,s.kt)("h3",{id:"gcp-container-registry"},"GCP: Container Registry"),(0,s.kt)("p",null,"All our containers are built during GitHub Actions workflows and pushed to the centralized GCP Container Registry. This\nserves as both a source for backtracking whenever a new release fails hard or as an easy way to deploy new versions to\nCloud Run."),(0,s.kt)("p",null,"We chose the Container Registry because"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It seamlessly integrates with all the other GCP services"),(0,s.kt)("li",{parentName:"ul"},"It is - even though deprecated - a lot cheaper than its successor (Artifact Registry), because it uses Cloud Storage\nas a backend which costs way less")),(0,s.kt)("h3",{id:"soncarcloud"},"SoncarCloud"),(0,s.kt)("p",null,"This tool performs code analysis in our repositories and, in the case of the backend, also makes sure the code coverage\nis good enough. It reports codesmells, security issues and much more."),(0,s.kt)("p",null,"We chose SonarCloud because"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It offers a free tier"),(0,s.kt)("li",{parentName:"ul"},"It is usable withing Github Actions workflows and integrates into our workflow")),(0,s.kt)("h2",{id:"presentation--business-logic"},"Presentation & Business Logic"),(0,s.kt)("p",null,"Our presentation layer serves our frontend application to the user. Our business logic layer hosts the backend API which\nprovides the data upon request from the frontend. It also handles any data wrangling or modifications. Both layers use\nGoogle Cloud Run."),(0,s.kt)("h3",{id:"gcp-cloud-run"},"GCP: Cloud Run"),(0,s.kt)("p",null,"Cloud Run is a PaaS offering in the Google Cloud. It is based on Kubernetes but abstracts away its complexity. In\nessence, you just deploy pre-built container images and that's all - Cloud Run automatically scales (up to some\nuser-defined limits) up and down. Should need be, one can still access some of the Kubernetes configurations under the\nhood and tweak settings."),(0,s.kt)("p",null,"We chose Cloud Run because"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It has a very generous free tier"),(0,s.kt)("li",{parentName:"ul"},"It works similar to Heroku with pods automatically shutting down if no requests are received, which is optimal for\nstaging environments"),(0,s.kt)("li",{parentName:"ul"},"It works out-of-the-box and integrates seamlessly with all GCP services"),(0,s.kt)("li",{parentName:"ul"},"It allows for a completely private API - Cloud Run does not make its instances public by default, yet Cloud Run\ninstances may talk to each other. As such, the frontend may be public, while the API itself remains private and can\nonly be access through the frontend.")),(0,s.kt)("h3",{id:"gcp-secret-manager"},"GCP: Secret Manager"),(0,s.kt)("p",null,"Cloud Run offers two means of injecting environment variables into its container: Plain environment variables which are\ndefined on the deployment itself and variables set within the Secret Manager offering. For sensitive variables such as\ndatabase passwords or JWT secrets, we are using the Secret Manager. It allows for securely defining variables that\ncannot be read by anyone after saving and even offers the possibility to version them. As such, they get injected into\nthe Cloud Run deployments, but are not readably from any logs."),(0,s.kt)("p",null,"We chose Secret Manager because"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It is the only way to ensure sensitive variables are not logged in any outputs/traces"),(0,s.kt)("li",{parentName:"ul"},"It integrates seamlessly with Cloud Run")),(0,s.kt)("h2",{id:"persistence"},"Persistence"),(0,s.kt)("p",null,"The persistence layer stores all the data our application needs and/or generates. We use Cloud Storage and Cloud SQL."),(0,s.kt)("h3",{id:"gcp-cloud-storage"},"GCP: Cloud Storage"),(0,s.kt)("p",null,"This is Google's object storage offering. It allows for storing arbitrary amounts of data in an (implied) hierarchical\nfashion. It also allows for finegrained access controls."),(0,s.kt)("p",null,"We chose Cloud Storage because"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It is actually the simplest, cheapest option to store for example user-provided assets such as images"),(0,s.kt)("li",{parentName:"ul"},"It allows finegrained access control, while also allowing for simple almost-zero-config access via other services (\ne.g. CloudRun).")),(0,s.kt)("admonition",{title:"Note on our buckets access policy",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Our buckets are currently public, so all user uploads are - in theory - accesible by everyone. All uploads are however\nplaced in a folder which is the user's UUID, and each files gets a randomized UUID prefixed to its slugified filename.\nAs such, we believe that this is good enough and a nice tradeoff, because the other solution would require us to proxy\neach and every request to an image through our API, which can become a performance bottleneck.")),(0,s.kt)("h3",{id:"gcp-cloud-sql"},"GCP: Cloud SQL"),(0,s.kt)("p",null,"We chose a Postgres database, which runs under Google's Cloud SQL naming which is an umbrella term for its managed\nrelational databases. Many tiers exist and one can easily scale up if the application gets larger. The only downside is\nthat this is the only component which actually is rather relatively expensive. However, since the data is the core of\nour product, it would be the wrong place to save money."),(0,s.kt)("p",null,"We chose Cloud SQL (Postgres) because"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It is a managed Postgres instance, optimized to the extreme"),(0,s.kt)("li",{parentName:"ul"},"It is batteries-included - from scaling to point-in-time-recovery")),(0,s.kt)("h2",{id:"utils"},"Utils"),(0,s.kt)("p",null,"This layer is used for utility functions that may perform various helper tasks within our application."),(0,s.kt)("h3",{id:"sentry"},"Sentry"),(0,s.kt)("p",null,"Our environments log all errors to Sentry. Sentry acts as a centralized error monitoring tool which provides us with\nlots of details, such as stack traces, payloads, etc. It also offers a performance metrics solution. It is\nplatform-agnostic, and there are integrations for React. Nest currently does not have an implementation, but our own\nimplementation works nicely."),(0,s.kt)("p",null,"We chose Sentry because"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It is reasonably priced"),(0,s.kt)("li",{parentName:"ul"},"It is performant"),(0,s.kt)("li",{parentName:"ul"},"It provides in-depth error monitoring and offers environment-specific handling")),(0,s.kt)("h3",{id:"gcp-cloud-scheduler"},"GCP: Cloud Scheduler"),(0,s.kt)("p",null,"For our returning tasks, we use the Cloud Scheduler offering. Tasks can be configured just like cronjobs on an actual\nsystem. Because we cannot use cronjobs in our containers (because it may be that our application is scaled to several\ncontainers), Cloud Scheduler can be used for this. Currently, we're only using its HTTP functionality which sends a\nrequest at the specified interval. This request is then handled by our application and guarantees to be run only once -\nregardless of how many containers are currently running."),(0,s.kt)("p",null,"We chose Cloud Scheduler because"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It is the only scheduling offering available that does not require loads of setup"),(0,s.kt)("li",{parentName:"ul"},"It is very flexible, so it could be used in the future to also send message to PubSub queues.")))}d.isMDXComponent=!0},3991:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/overview-2b2d4b538d2910cffc110fb2232e3ce0.svg"},7369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/overview-2b2d4b538d2910cffc110fb2232e3ce0.svg"}}]);
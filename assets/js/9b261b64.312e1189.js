"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3553],{7506:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));a(1839);const o={id:"basics",sidebar_position:1,title:"Basics"},s=void 0,r={unversionedId:"infrastructure/basics",id:"infrastructure/basics",title:"Basics",description:"In general, our infrastructure uses the following services:",source:"@site/docs/infrastructure/basics.md",sourceDirName:"infrastructure",slug:"/infrastructure/basics",permalink:"/docs/infrastructure/basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"basics",sidebar_position:1,title:"Basics"},sidebar:"tutorialSidebar",previous:{title:"Authorization",permalink:"/docs/architecture/security/security-authorization"},next:{title:"Frontend deployment",permalink:"/docs/infrastructure/frontend-deployment"}},l={},u=[{value:"DevOps",id:"devops",level:2},{value:"GitHub",id:"github",level:3},{value:"GCP: Container Registry",id:"gcp-container-registry",level:3},{value:"SoncarCloud",id:"soncarcloud",level:3},{value:"Presentation layer &amp; Business layer",id:"presentation-layer--business-layer",level:2},{value:"GCP: Cloud Run",id:"gcp-cloud-run",level:3},{value:"GCP: Secret Manager",id:"gcp-secret-manager",level:3},{value:"Data layer",id:"data-layer",level:2},{value:"GCP: Cloud Storage",id:"gcp-cloud-storage",level:3},{value:"GCP: Cloud SQL",id:"gcp-cloud-sql",level:3},{value:"Utils",id:"utils",level:2},{value:"Sentry",id:"sentry",level:3},{value:"GCP: Cloud Scheduler",id:"gcp-cloud-scheduler",level:3},{value:"SendGrid",id:"sendgrid",level:3},{value:"Setting up a new GCP environment",id:"setting-up-a-new-gcp-environment",level:2},{value:"DNS routing for domains",id:"dns-routing-for-domains",level:2}],d={toc:u};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In general, our infrastructure uses the following services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GitHub"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hosts our organization with all repositories"),(0,i.kt)("li",{parentName:"ul"},"Uses GitHub Actions to build and deploy our project"),(0,i.kt)("li",{parentName:"ul"},"Uses GitHub Pages to host our statically built documentation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Google Cloud Platform"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hosts our frontend application"),(0,i.kt)("li",{parentName:"ul"},"Hosts our backend application"),(0,i.kt)("li",{parentName:"ul"},"Stores the application data"),(0,i.kt)("li",{parentName:"ul"},"Contains all our containers in its registry"),(0,i.kt)("li",{parentName:"ul"},"Runs scheduled tasks"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sentry"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Our error logging and performance metrics solution"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SendGrid"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Our email provider for delivering our emails"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SonarCloud"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Our code quality scanning tool")))),(0,i.kt)("p",null,"In terms of services used for our main application, the following diagram shows all the services, while they're\ndescribed in more detail below."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(3991).Z},"(enlarge image)"),"\n",(0,i.kt)("img",{alt:"Infrastructure diagram",src:a(7369).Z,width:"3540",height:"1980"})),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For simplicity, the documentation part is left out in the above documentation. More information can be\nfound ",(0,i.kt)("a",{parentName:"p",href:"/docs/infrastructure/documentation-deployment"},"here"),".")),(0,i.kt)("h2",{id:"devops"},"DevOps"),(0,i.kt)("p",null,"For our DevOps needs, we use services from both GitHub and Google Cloud."),(0,i.kt)("h3",{id:"github"},"GitHub"),(0,i.kt)("p",null,"At GitHub, we have a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gipfeli-io"},"gipfeli.io")," organization set up that hosts all the code\nrepositories. Both the frontend and the backend use GitHub Actions to automatically test, build and deploy our\napplications to staging and production."),(0,i.kt)("p",null,"We chose GitHub because"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It allows for Kanban-style project boards that are linked to repositories' issues"),(0,i.kt)("li",{parentName:"ul"},"Has quite a good review framework for pull requests"),(0,i.kt)("li",{parentName:"ul"},"Has a fully integrated CICD pipeline with GitHub Actions that neatly ties into Google Cloud and other services")),(0,i.kt)("h3",{id:"gcp-container-registry"},"GCP: Container Registry"),(0,i.kt)("p",null,"All our containers are built during GitHub Actions workflows and pushed to the centralized GCP Container Registry. This\nserves as both a source for backtracking whenever a new release fails hard or as an easy way to deploy new versions to\nCloud Run."),(0,i.kt)("p",null,"We chose the Container Registry because"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It seamlessly integrates with all the other GCP services"),(0,i.kt)("li",{parentName:"ul"},"It is - even though deprecated - a lot cheaper than its successor (Artifact Registry), because it uses Cloud Storage\nas a backend which costs way less (and it still gets all security updates!)")),(0,i.kt)("h3",{id:"soncarcloud"},"SoncarCloud"),(0,i.kt)("p",null,"This tool performs code analysis in our repositories and, in the case of the backend, also makes sure the code coverage\nis good enough. The data is ",(0,i.kt)("a",{parentName:"p",href:"https://sonarcloud.io/organizations/gipfeli-io/projects"},"publically available"),". It reports\ncodesmells, security issues and much more."),(0,i.kt)("p",null,"We chose SonarCloud because"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It offers a free tier"),(0,i.kt)("li",{parentName:"ul"},"It is usable withing GitHub Actions workflows and integrates into our workflow")),(0,i.kt)("h2",{id:"presentation-layer--business-layer"},"Presentation layer & Business layer"),(0,i.kt)("p",null,"Our presentation layer serves our frontend application to the user. Our business layer hosts the backend API which\nprovides the data upon request from the frontend. It also handles any data wrangling or modifications. Both layers use\nGoogle Cloud Run."),(0,i.kt)("h3",{id:"gcp-cloud-run"},"GCP: Cloud Run"),(0,i.kt)("p",null,"Cloud Run is a PaaS offering in the Google Cloud. It is based on Kubernetes but abstracts away its complexity. In\nessence, you just deploy pre-built container images and that's all - Cloud Run automatically scales (up to some\nuser-defined limits) up and down. Should need be, one can still access some of the Kubernetes configurations under the\nhood and tweak settings."),(0,i.kt)("p",null,"We chose Cloud Run because"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It has a very generous free tier"),(0,i.kt)("li",{parentName:"ul"},"It works similar to Heroku with pods automatically shutting down if no requests are received, which is optimal for\nstaging environments"),(0,i.kt)("li",{parentName:"ul"},"It works out-of-the-box and integrates seamlessly with all GCP services"),(0,i.kt)("li",{parentName:"ul"},"It allows for a completely private API - Cloud Run does not make its instances public by default, yet Cloud Run\ninstances may talk to each other. As such, the frontend may be public, while the API itself remains private and can\nonly be access through the frontend. This is currently not used by us, but could become important if we were to\ndevelop an API that handles internal tasks such as data extraction and so on")),(0,i.kt)("h3",{id:"gcp-secret-manager"},"GCP: Secret Manager"),(0,i.kt)("p",null,"Cloud Run offers two means of injecting environment variables into its container: Plain environment variables which are\ndefined on the deployment itself and variables set within the Secret Manager offering. For sensitive variables such as\ndatabase passwords or JWT secrets, we are using the Secret Manager. It allows for securely defining variables that\ncannot be read by anyone after saving and even offers the possibility to version them. As such, they get injected into\nthe Cloud Run deployments, but are not readable from any logs."),(0,i.kt)("p",null,"We chose Secret Manager because"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is the only way to ensure sensitive variables are not logged in any outputs/traces"),(0,i.kt)("li",{parentName:"ul"},"It integrates seamlessly with Cloud Run")),(0,i.kt)("h2",{id:"data-layer"},"Data layer"),(0,i.kt)("p",null,"The data layer stores all the data our application needs and/or generates. We use Cloud Storage and Cloud SQL."),(0,i.kt)("h3",{id:"gcp-cloud-storage"},"GCP: Cloud Storage"),(0,i.kt)("p",null,"This is Google's object storage offering. It allows for storing arbitrary amounts of data in an (implied) hierarchical\nfashion. It also allows for finegrained access controls."),(0,i.kt)("p",null,"We chose Cloud Storage because"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is actually the simplest, cheapest option to store for example user-provided assets such as images"),(0,i.kt)("li",{parentName:"ul"},"It allows finegrained access control, while also allowing for almost-zero-config access via other services (e.g.\nCloudRun).")),(0,i.kt)("admonition",{title:"Note on our buckets access policy",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Our buckets are currently public, so all user uploads are - in theory - accesible by everyone. All uploads are however\nplaced in a folder which is the user's UUID, and each files gets a randomized UUID prefixed to its slugified filename.\nAs such, we believe that this is good enough and a nice tradeoff, because the other solution would require us to proxy\neach and every request to a user-provided asset through our API, which can become a performance bottleneck.")),(0,i.kt)("h3",{id:"gcp-cloud-sql"},"GCP: Cloud SQL"),(0,i.kt)("p",null,"We chose a Postgres database, which runs under Google's Cloud SQL naming which is an umbrella term for its managed\nrelational databases. Many tiers exist and one can easily scale up if the application gets larger. The only downside is\nthat this is the only component which actually is rather relatively expensive. However, since the data is the core of\nour product, it would be the wrong place to save money."),(0,i.kt)("p",null,"We chose Cloud SQL (Postgres) because"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is a managed Postgres instance, optimized to the extreme"),(0,i.kt)("li",{parentName:"ul"},"It is batteries-included - from scaling to point-in-time-recovery"),(0,i.kt)("li",{parentName:"ul"},"It has PostGIS extension included, which is an incredibly nice library for handling geodata")),(0,i.kt)("h2",{id:"utils"},"Utils"),(0,i.kt)("p",null,"This layer is used for utility functions that may perform various helper tasks within our application."),(0,i.kt)("h3",{id:"sentry"},"Sentry"),(0,i.kt)("p",null,"Our environments log all errors to ",(0,i.kt)("a",{parentName:"p",href:"https://sentry.io/"},"Sentry"),". Sentry acts as a centralized error monitoring tool\nwhich provides us with lots of details, such as stack traces, payloads, etc. It also offers a performance metrics\nsolution. It is platform-agnostic and there are integrations for React. Nest currently does not have an implementation,\nbut our own implementation works nicely."),(0,i.kt)("p",null,"We chose Sentry because"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is reasonably priced"),(0,i.kt)("li",{parentName:"ul"},"It is performant"),(0,i.kt)("li",{parentName:"ul"},"It provides in-depth error monitoring and offers environment-specific handling")),(0,i.kt)("h3",{id:"gcp-cloud-scheduler"},"GCP: Cloud Scheduler"),(0,i.kt)("p",null,"For our returning tasks, we use the Cloud Scheduler offering. Tasks can be configured just like cronjobs on an actual\nsystem. Because we cannot use cronjobs in our containers (because it may be that our application is scaled to several\ncontainers), Cloud Scheduler can be used for this. Currently, we're only using its HTTP functionality which sends a\nrequest at the specified interval. This request is then handled by our application and guarantees to be run only once -\nregardless of how many containers are currently running."),(0,i.kt)("p",null,"We chose Cloud Scheduler because"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is the only scheduling offering available that does not require loads of setup"),(0,i.kt)("li",{parentName:"ul"},"It is very flexible, so it could be used in the future to also send message to PubSub queues")),(0,i.kt)("h3",{id:"sendgrid"},"SendGrid"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://sendgrid.com/"},"SendGrid")," as an email provider. Whenever the application needs to send an email, e.g. for\nsign-up activation, we use SendGrid to deliver the message."),(0,i.kt)("p",null,"We chose SendGrid because"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is a stable service by Twilio"),(0,i.kt)("li",{parentName:"ul"},"It has a generous free tier that works at our current state"),(0,i.kt)("li",{parentName:"ul"},"It employs industry best practices (e.g. DNS verification) to deliver emails in gipfeli.io's name without getting them\nblocked"),(0,i.kt)("li",{parentName:"ul"},"It has a nice SDK that can be used to integrate into our backend code")),(0,i.kt)("h2",{id:"setting-up-a-new-gcp-environment"},"Setting up a new GCP environment"),(0,i.kt)("p",null,"Currently, we have a staging and a production environment. If you need to add another environment, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add a new CloudSQL database and a user to our instance, both named ",(0,i.kt)("inlineCode",{parentName:"li"},"gipfeli_io_{environment name}"),". Use a strong,\nsecure password."),(0,i.kt)("li",{parentName:"ol"},"Create a new bucket named ",(0,i.kt)("inlineCode",{parentName:"li"},"gipfeli-io-{environment name}-media")," and give ",(0,i.kt)("inlineCode",{parentName:"li"},"allUsers")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage Object Viewer")," role.\nBe sure to also set the correct CORS policies, as mentioned\nin ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gipfeli-io/gipfeli-frontend/issues/118"},"this ticket"),"."),(0,i.kt)("li",{parentName:"ol"},"In the frontend, configure the CI with the correct triggers for a deployment. This depends on your usecase so there\nis no one-size-fits-all solution."),(0,i.kt)("li",{parentName:"ol"},"Trigger the pipeline so the containers get pushed to the registry. Additionally, it will also deploy a new CloudRun\ninstance."),(0,i.kt)("li",{parentName:"ol"},"Check the newly created CloudRun instance. You'll need to configure it - see the existing instances for details on\nhow to configure them. Note that you'll also have to disable authentication if it is a public URL."),(0,i.kt)("li",{parentName:"ol"},"Verify the frontend works."),(0,i.kt)("li",{parentName:"ol"},"Repeat steps 3-6 for the backend API. Note that you'll also have to add a connection in the deployment configuration\nsuch that the API may reach the database.")),(0,i.kt)("p",null,"This is basically it. If you need subdomains, you also need to configure DNS records etc."),(0,i.kt)("h2",{id:"dns-routing-for-domains"},"DNS routing for domains"),(0,i.kt)("p",null,"Because we're using Cloud Run instances in ",(0,i.kt)("inlineCode",{parentName:"p"},"europe-west1")," region, we can use Cloud\nRun's ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/run/docs/mapping-custom-domains"},"domain mapping")," feature which is currently in preview\nmode (and hence not available in the Zurich region). This mapping allows to add any domain and map them to a Cloud Run\ninstance. After ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/webmasters/answer/9008080"},"verifying the ownership of the domain"),", this\nservice will display the required DNS configuration that has to be added to our provider's DNS configuration (which\nis ",(0,i.kt)("a",{parentName:"p",href:"https://gandi.net/"},"Gandi")," in our case). Afterwards, Cloud Run will automatically generate SSL certificates and\nrenew them."),(0,i.kt)("p",null,"Other options which would allow us to use Zurich's datacentres would require a load balancer setup which is rather\ncomplicated and expensive. Once the mapping feature is rolled out to the Zurich datacentre, we might move our instances."))}c.isMDXComponent=!0},3991:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/overview-5a042f56d5048a781443aed3300a52ca.svg"},7369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/overview-5a042f56d5048a781443aed3300a52ca.svg"}}]);
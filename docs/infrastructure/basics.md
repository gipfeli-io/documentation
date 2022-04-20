---
id: basics
sidebar_position: 1
title: Basics
---

In general, our infrastructure consists of the following components:

* GitHub: Hosts our repositories
* GitHub Actions: Our deployment pipeline
* GitHub Pages: Hosts our documentation
* Google Cloud Platform: Hosts our application, with services such as:
  * Container Registry: Hosts all our container images
  * Cloud Run: PaaS offering that powers both our frontend and our backend
  * Cloud SQL: Our database backend
  
These components and how they are connected are discussed further in their respective subtopics.
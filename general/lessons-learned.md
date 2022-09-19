---
id: lessons-learned
sidebar_position: 6
title: "Lessons learned"
---

In this section, we keep track of lessons learned. The goal is to have a list that shows what problems we were facing
and how we solved them or what implications they had on the project.

## Organisation

* **GitHub project management**: While the GitHub project management board was still in its beta phase when we started our thesis, it actually worked quite well. It still has some minor issues that make it a bit cumbersome to use. One thing we missed was the ability to have issues that affect multiple repositories. For example, an auth related ticket had to be added twice (backend and frontend), even though the issue was related.

## Frontend

### next.js

* **Dropping next.js in favor of pure React:** The most important lesson that we learned was that next.js was the wrong
  tool for what we had in mind. Since we are developing an application that does not require any SEO optimization, the
  whole point of having `getServerSideProps` is void. Apart from that, we had more troubles than benefits in using
  next.js in our setup (see above) and we found its documentation to be rather clumsy, especially in regard to the
  typescript part. Lots of things that were easily doable with plain React required workarounds. Since one of our goals
  was also to have an offline part, we decided it would be best to just use plain React. Because next.js is a wrapper
  around React, we were able to create a React app from scratch and move all of our existing code to it, which worked
  quite well.

### Offline Support
We quickly realized that even though PWAs are the newest recommendations for web apps, when your goal is to provide dynamic data when the 
application is offline there is no pre-paved way to do this. There are a lot of solutions with fundamentally different approaches out there.
The common consensus is to "find the best way for your application", as currently, there is no best practice. This would not be that bad if that would be all. 
The one thing you really need here as an easy and reliable way to check if your application is connected to the internet or not.
But: There is currently no such way to check if the user is online or offline. You have to make a call to a web server to find out. 
The next thing is differing between http status code 500 for an internal server error and http status code 500 when the application has no connection to the
internet. We ended up implementing a workaround and also parsing the error message, so we could find out what status code 500 means (but of course
the error message we get from Safari is different from the one we get from all the other browsers 😅). We hope there will be a better way to 
check browser connectivity in the future.

For storing the data in the browser we went with using IndexedDB. As the native api is quite horrible and hard to use we used DexieJS as
a wrapper. Even though DexieJS is extremely nice and easy to use we ran into a multitude of issues, primarily regarding updating the
IndexedDB after application changes. If the IndexedDB on a mobile device was somehow corrupted (e.g. a new version was available, but
it could not upgrade automatically) it was pretty hard to reset the IndexedDB using the provided browser functionality. We had to add
a reset functionality so the user can manually reset if needed.

Even with all of these things the offline functionality came out fine and makes for a nice addition. But if we'd ever write an application with
offline functionality again we'd implement a native app.

## Backend

### nest.js

* **Authentication:** Sadly, nest.js does not offer a fully-fledged authentication solution, but just the basics to
  implement it yourself. As mentioned
  in [the authentication docs](../docs/architecture/security/security-authentication-session-management#limitations-known-issues-and-outlook), this leads to some
  security issues. While it is not insecure per se, and while we use existing, well-tested libraries for
  security-related features (e.g. `bcrypt` for hashing, `passport.js` for strategies), it still is a very hard process
  to implement a secure authentication flow (see also our reflection on existing issues in the link above). One very important learning is that these flows should not be implemented lightheartedly and as such, we probably would go for Auth0 or similar providers in the future,
  even-though that means additional costs. This is tracked in [this issue](https://docs.gipfeli.io/docs/architecture/security/security-authentication-session-management#limitations-known-issues-and-outlook) and something for our next iteration.
* **e2e tests:** While we had unit tests from the beginning on, we did not start with e2e tests until one of the last sprints. Our reason for this was that we felt we'd have to change the tests all the time while quickly iterating in the beginning. However, the amount of configuration required to implement the e2e tests in the end was rather high, which would have been easier (because more gradual) if we had started with e2e tests right from the start. Additionally, some nasty bugs could have been identified much sooner.

## SonarCloud

All in all, SonarCloud is a very nice tool that adds quite some value. It forces you to write clean code and it immediately penalizes any shortcuts you might take. However, configuring it is rather difficult and if you want to use it within your CICD pipeline, you cannot rely on the automatic configuration. Furthermore, creating coverage from more than one test run requires the installation of additional packages and implementation of CICD steps to create a single merged coverage report.

## Google Cloud Platform

### General

* **Pricing:** While the GCP offerings seem to be very cheap, the costs can mount up quickly. For example, just using
  Cloud Run costs do not mirror the fact that you also have to pay for some sort of container registry, which in turn
  uses other GCP services such as Cloud Storage. On the other hand, configuring services is not at all straightforward
  and each setting may incur further costs. This is especially prevalent in the CloudSQL offerings, since
  the [price calculator](https://cloud.google.com/products/calculator#id=) does not necessarily mirror each setting
  correctly.
* **Usage of the Cloud Console:** Especially in terms of IAM settings, the Cloud Console is very difficult and at times
  counter-intuitive to use. Our IAM settings are very basic and we kept to the Google Recommendations or standard
  settings. However, this part could be optimized, yet would require a significant investment in understanding the inner
  workings of the Cloud Platform which goes beyond mere devops skills.

### CloudSQL

* **Connections:** Connection to CloudSQL instances was not that simple as it is made believe by the many tutorials out
  there.

### Cloud Run

* **Custom domains:** While setting up Cloud Run instance is incredibly simple, configuring a custom domain is rather
  difficult and, depending on the service location, requires custom load balancers which in turn incur additional
  monthly costs. This was, among others, the reason why we chose to keep our service on Belgian servers.

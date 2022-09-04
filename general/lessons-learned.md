---
id: lessons-learned
sidebar_position: 6
title: "Lessons learned"
---

In this section, we keep track of lessons learned. The goal is to have a list that shows what problems we were facing
and how we solved them or what implications they had on the project.

## Organisation

* **TBD**:

## Frontend

### next.js

* **next-auth:** We use [next-auth](https://next-auth.js.org/) as our authentication framework. It was chosen because of
  its seamless integration into `next.js`. However, we had to realize that it only works as seamlessly as advertised if
  you use the API capabilities of `next.js` itself. Since we're building our API as a separate service, integration is
  rather difficult and the documentation does not provide much help. Furthermore, since the `Credentials` provider is
  disencouraged by the authors, a lot of customization has to be made. As we're using `JWT` as authentication strategy,
  it could be simpler to just build the authorization flow from scratch.
* **Dropping next.js in favor of pure React:** The most important lesson that we learned was that next.js was the wrong
  tool for what we had in mind. Since we are developing an application that does not require any SEO optimization, the
  whole point of having `getServerSideProps` is void. Apart from that, we had more troubles than benefits in using
  next.js in our setup (see above) and we found its documentation to be rather clumsy, especially with regards to the
  typescript part. Lots of things that were easily doable with plain React required workarounds. Since one of our goals
  was also to have an offline part, we decided it would be best to just use plain React. Because next.js is a wrapper
  around React, we were able to create a React app from scratch and move all of our existing code to it, which worked
  quite well.

## Backend

### nest.js

* **Authentication:** Sadly, nest.js does not offer a fully-fledged authentication solution, but just the basics to
  implement it yourself. As mentioned
  in [the authentication docs](../docs/architecture/security/authentication-session-management.md), this leads to some
  security issues. While it is not insecure per se, and while we use existing, well-tested libraries for
  security-related features (e.g. `bcrypt` for hashing, `passport.js` for strategies), it still is a very hard process
  to implement a secure authentication flow. As such, we probably would go for Auth0 or similar providers in the future,
  even-though that means additional costs.

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
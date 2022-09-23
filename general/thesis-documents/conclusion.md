---
id: conclusion
sidebar_position: 3
title: "Conclusion"
---

## General

## Personal

### Lukas Merz

Since I've always wanted to create an app for documenting my tours, it was very nice to actually *have* to work on this
otherwise hobby project. After 2 years of studying various aspects in isolation, it was exciting to bring all these
pieces together and create a software from scratch. I've learned a lot in terms of translating architecture designs into
both infrastructure and code, with all its pitfalls and downsides. It was also interesting to see how much time you
actually invest into a software when you're doing it "the proper way" and what the outcome is - something I'll
definitely put to use when dealing with customers' often lopsided expectations of delivery versus time/money.

I'm looking forward to developing the app even further - our backlog is full and our ideas will grow!

#### Positive aspects

* **Teamwork:** We did not hit any bumps and you could always rely on each other that the assigned
  tasks will be handled properly and in a timely fashion. I also profited from the pull reviews and code/infrastructure
  discussions during our meetings. As such, it was a blast 🚀
* **Chosen frameworks:** Both React and nest.js were a pleasure to work with. While React was sometimes a bit tedious
  because of how many ways you can actually solve things, nest.js was very straightforward due to its opinionated
  approach. I also think we profited from using Typescript in frontend and backend and I could develop a deeper
  understanding of the language. I would choose both frameworks again without hesitation.
* **Google Cloud:** Once you got the gist of it, GCP is actually very nice to use. It has services for almost everything
  and you can design really simple yet highly effective architectures at a very low cost.
* **GitHub:** Having used several source code management systems, I can now say that I really prefer GitHub: From
  creating the pipelines to using issue templates to the project boards - it is a very streamlined experience and did
  not pose any difficulties.

#### Negative Aspects

* **ol-ext:** While OpenLayers is complicated as well, it is nicely documented. ol-ext, on the other hand, is a very
  dated application with a rather ugly codebase, and you had to add several workarounds due to bad typings. At some
  point, you also had to debug the library itself to find out why it was failing. Since we're only using the clustering
  and profile feature, I think we'd be better off implementing it ourselves in a future iteration.
* **next.js:** This framework has a lot of mouthwatering marketing speeches and led us to use it in the beginning.
  However, we quickly had to realize that, although you possibly *can*, you're better off using React directly without
  the abstraction layer on top, if you're not using the main use case of SSR. It would have been nice to realize this
  before we actually used it.

#### Learnings

* React - from hooks to contexts to routing
* nest.js - an incredibly nice, Typescript-first backend framework that I'll make sure to use further
* Setting up a cloud infrastructure...
* ... with a fully integrated and automated testing pipeline
* Docker shenanigans

### Sabrina Wullschleger
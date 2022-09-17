---
slug: sprint-1-kickoff 
title: "Sprint 1: Kickoff"
authors: [sabrina, lukas, tobias]
tags: [sprint, planning, general]
---

The first sprint begins! Besides the initial sprint planning, we also discussed some organizational questions with our
supervisor Tobias.

**Sprint #1 goals**

* Have the basic deployment pipeline for frontend/backend/deployment up and running
* Have the basic infrastructure (Google Cloud Run) up and running
* Have an initial set of wireframes/screen layouts ready

As an important decision, we also agreed on our branching strategy.

<!--truncate-->


The following questions were discussed with Tobias.

**Can we opensource our code? This would allow for more flexibility in the free plan on GitHub.com**

* According to Tobias, this is not an issue. However, he asked us to discuss this with Luc to get an official
* response.
* *Update 17/04/22: We received official confirmation that this approach is fine.*

**Can we use Auth0?**

* Yes, this is fine.

**What is required in terms of documentation, meetings, milestones, definition of done?**

* Documentation:
    * accounts for roughly 1/3 of the final grade
    * Should be written for a developer well-versed in the technology, but new to the project
    * Should cover the domain, architecture, models, technical behaviours and use cases/sequential flows for some of the
      more complicated cases
    * Wireframes should be conceptually correct
    * As for the **first milestone** (the technical review in June), the documentation shall offer a quick and thorough
      overview of the project
    * A decision log should be kept in a central location
    * The documentation can be spread across various services, but should have a single central entrypoint
* Meetings with supervisor:
    * Once every two weeks in the beginning
    * Might be reduced later on
* Milestones:
    * We should use milestones
    * The first milestone will be the tech review, after that, milestones can be e.g. the release of a complex features.
      2-3 are optimal.
    * There should be a graphical overview with milestones and sprints, not technical.
* Testing depth:
    * Not all testing types are required and no 100% coverage is expected
    * Choose tests wisely and document any decisions
* Definition of done:
    * Required
* Language:
    * Can be English, but should be discussed with Luc.
    * *Update 17/04/22: We received official confirmation that this approach is fine.*

**Best practices for sharing types across repositories?**

* Various approaches exist - the package one can be clean but takes a lot of effort to maintain.
* In general, we should start with duplicate types and only if we have the time, we can try the shared approach.

# Time tracking
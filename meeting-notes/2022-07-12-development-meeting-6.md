---
slug: development-meeting-6
title: "Development Meeting 6"
authors: [sabrina, lukas, tobias]
tags: [general]
---

We did a quick demo and showed the image upload incl. the coordinate extraction from the exif information. We also showed
the offline synchronization and discussed the best way to make the offline mode as intuitive for the user as possible.
Tobias had some ideas that we will integrate in the current work.

We also had some questions:
- Image upload context => is it fine that we have another context there?
  - Multiple contexts are absolutely ok. There is no limit.
- Public google bucket => is this ok?
  - Yes, this is ok :)
- Frontend testing => how much do we need? what does make sense?
  - We should ask ourselves what the most complex component is and test this.
  - Services should also be tested (unit tests)
  - Test coverage in frontend is not really useful
---
slug: development-meeting-4
title: "Development Meeting 4"
authors: [sabrina, lukas, tobias]
tags: [general]
---

This bi-weekly meeting was to show Tobias, our supervisor, our current progress.

We showed our current progress, including

* Our last sprint
* Our current sprint goals
* Quick demo for our current progress

Tobias asked about our approach to user management and whether we're using a library. Since we're using a very basic
setup, we're (currently) not using any user or rights library, but we might start using one if we find one. On that
note, we also discussed some approaches for handling JWT token and token refresh.

We also had some questions which we addressed:

* [**Frontend bug**](https://github.com/gipfeli-io/gipfeli-frontend/issues/31): We analyzed the problem with Tobias and
  quickly found a solution. Besides, we also got some feedback regarding code quality.
* **Redux for state management**: We were wondering whether we should use Redux for state management. Tobias said that,
  given our current scope, it might be overkill, though our considerations were valid in that state would provide us
  with some cleaner code - however, it would require more investment and learning and might be overkill.
* **Using React context**: Since we do not want to overuse context, we showed our usage of context and Tobias said that
  we're using it correctly.
* **Should we drop next.js**: So far, next.js has proven to be rather cumbersome to use; and also the documentation is
  rather bad. Since we're not using any of the SSR capabilities (which we can't since we rely on custom data for each
  request), we were wondering whether we should drop it in favor of a pure React application. At this point, we're still
  able to drop it and the move should be feasible since next.js is basically a supercharged wrapper around React. Tobias
  said that it's okay to switch and that these are valid concerns - if we're not really using the framework (or not to
  the full extent), there is no reason for keeping it.

After our meeting, we decided to go the React route - also because the offline functionality seems to be more
straightforward to implement when not using next.js.
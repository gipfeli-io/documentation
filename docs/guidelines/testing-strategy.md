---
id: testing-strategy
sidebar_position: 2
title: Testing strategy
---

Our testing strategy differs between frontend and backend. We do not aim for 100% testcoverage, but rather for a
well-thought subset of functionality that is covered by unit tests.

## Backend

* **Unit-tests:** All services have to be unit-tested. If there are additional features (e.g. decorators, utility
  functions), they should be unit-tested as well.
* **Integration-tests:** Routes can be integration tested to check whether the interplay between controller <->
  service <-> database does work.

## Frontend

* **Unit-tests:** Only components that have special functionality (e.g. in terms of logged-in state) have to be
  unit-tests. We do not unit test each and every simple component and or route.
* **Integration-tests:** Integration-tests should mainly deal with ensuring that authorization is implemented properly.
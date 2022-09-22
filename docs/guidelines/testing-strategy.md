---
id: testing-strategy
sidebar_position: 2
title: Testing strategy
---

Our testing strategy differs between frontend and backend. We do not aim for 100% test coverage, but rather for a
well-thought subset of functionality that is covered by unit tests. Because we see our backend as the critical part, we enforce a strict coverage requirement of **at least 80%** on new code to ensure we cover new code and work towards a generally high test coverage in the backend. For the frontend, we do not enforce this since we do not aim to have a specific coverage, but rather test some specific, single cases.

## Backend

* **Unit-tests:** All services have to be unit-tested. If there are additional features (e.g. decorators, utility
  functions), they should be unit-tested as well.
* **Integration-tests:** Routes can be integration tested to check whether the interplay between controller <->
  service <-> database does work. Note that these are called `e2e-tests` in nest.js language.

## Frontend

* **Unit-tests:** Only components that have special functionality (e.g. in terms of logged-in state) have to be
  unit-tests. We do not unit test each and every simple component and or route.
* **Integration-tests:** Integration-tests should mainly deal with ensuring that authorization is implemented properly.
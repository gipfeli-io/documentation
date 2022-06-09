---
slug: thesis-interim-review
title: Thesis interim review
authors: [sabrina, lukas]
tags: [general]
---

We had to provide a short video where we show the current status of the project and some project specific information.
This was analysed by some professors at the university. In a short feedback round they gave us some input and asked us questions
if something was unclear to them.

Below is the feedback of the review team:

#### C.A.
- Good state, great code quality
- Don't use any => use specific types correctly
- Typing does not need undefined/null check

#### St.M.
- Good status
- Risk analysis not available
- Few tests in backend

#### D.T.
- Thinks our procedures are good and likes the app skeleton
- Few tests in backend.
- Measure test coverage with Sonar.
- Adjust DOD with test coverage percentage.
- Documentation scope very good, understandable, Decision Log great
- Roadmap missing => add it to documentation (not very detailed as e.g. backlog)


#### A.K.
- Overall impression very good
- Thrilled with documentation. It is clearly laid out. Decision Log great. Good balance of documenting too much and not enough.
- Basic architecture concept good. Layer on own instance too much, but ok.
- Flutter.js or Electron.js would maybe have been a good option? => not the way we wanted to go
- Gap analysis made between hikr.org etc. => as matrix
- GPX upload as a future feature? => maybe list as next steps

#### L.B.
- Clean software engineering in all areas
- Risk planning for next features should be done
- Good task prio
- Documentation in good condition
- Include technical challenges/lessons learned in doc => Typeorm,
- Geo photo upload next to offline functionality

## Take home message

- More Tests in general (especially backend)
- Add EsLint rules to prevent using any / clean up repo
- Configure sonar to display the test coverage. Define test coverage in DoD with percentage instead of just saying "Tests written"
- Add Roadmap to show plan of future features
- Add Gap analysis as a matrix to documentation
- Add page for lessons learned and challenges
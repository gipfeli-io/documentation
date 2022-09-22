---
id: organization
sidebar_position: 2 
title: Organization
---

This project is conducted as part of the *Master of Advanced Studies in Software Engineering 20-22* at the OST
Fachhochschule Rapperswil. Its goal is to complete a software engineering project from A to Z, covering all of the
topics learned throughout the 3 CAS courses.

## General

* **GitHub organization:** https://github.com/gipfeli-io
* **Project URL:** https://www.gipfeli.io
* **Project language:** English
* **Duration:** April - September 2022

## People

| Name                 | Role       | GitHub profile            |
|----------------------|------------|---------------------------|
| Sabrina Wullschleger | Student    | https://github.com/Saela  |
| Lukas Merz           | Student    | https://github.com/Tugark |
| Tobias Büchel        | Supervisor | -                         |

## Project management

We use a **Scrum-inspired, agile project approach**. Since we're a team of two, there is no point in adhering to all
Scrum aspects. Rather, we pick some of the aspects, adapt them to our project setup and keep up the agile mindset
throughout the project.

### Project roles

We do not use the traditional Scrum roles, but both of us take on shared responsibility of the roles' tasks. This means
that we are both

* responsible for maintaining the backlog and presenting any artifact (i.e. the product owner's responsibility)
* responsible for facilitating development by removing any blocks (i.e. the scrum master's responsibility)
* responsible for estimating tickets and developing the application (i.e. the development team's responsibility)

Since we also do not have any stakeholders as this is more of a hobby project, we also serve as stakeholders in the
sense that we have a certain vision of our project that we want it to fulfill.

### Time structure

As for the time structure, given the timeframe of the thesis and our availability, we organize ourselves in **sprints of
2 weeks duration**, starting on Tuesdays. The first sprint started on Tuesday, 12th of April, which leads to a (planned)
total of 12 sprints until the 23rd of September, where we have to hand-in our final abstract.

:::tip Note

We regard the handing-in of the final abstract as some sort of the final point. The remaining time will be used to
polish the documentation and prepare the presentation, which we do not see as part of our agile development process.

:::

We use a modified set of meetings as, for example, it is not possible to have daily meetings, given that we both are
working full-time. However, to maintain consistency, we define the following fixed meetings that should only be
rescheduled if absolutely necessary:

* `Weekly`: Serves as our daily and can also be used to gauge sprint advancement.
    * **Date:** Every other Tuesday, 17:30; *during* the sprint
    * **Timeboxing:** 20 minutes
    * **Content:** Each member will present: (a) what has been achieved, (b) what is being worked on, (c) where issues
      arose (if any).
* `Sprint ending`: Serves as sprint review, retrospective and planning.
    * **Date:** Every other Tuesday, 17:30; *start of* the sprint
    * **Timeboxing:** 60 minutes
    * **Content:** We jointly review the tickets realized during the sprint, inspect the current software artifact and
      whether the tickets adhere to our definition of done (review); we then briefly discuss how the sprint went and
      what could be improved (retrospective); then we spend the rest of the meeting planning the next sprint (planning).

Our supervisor, Tobias Büchel, will join the weekly in order to get feedback on the last sprint and how the current one
is doing.

### Planning

We use a [dedicated GitHub projects board](https://github.com/orgs/gipfeli-io/projects/1) for managing all tasks in our
sprints. The board allows us to track both repository-specific issues as well as tasks related to the overall project.
It also allows us to assign iterations to each task.

We use the following labels for all tasks:

* `Backlog`: All tickets that come up during development or that have not been planned yet
* `Sprint Backlog`: Tickets that are used for a given iteration (and have the iteration label attached) - this is done
  in the sprint planning
* `In Progress`: Tickets that are in development
* `PR pending`: Tickets that are in technical review
* `Testing`: Tickets that can be tested during the sprint review, i.e. they are already merged to staging
* `Done`: Tickets that have been tested and can be deployed as a release artifact.

## Quality assurance

We employ both organizational as well as technical measures to ensure our code quality remains high.

### Organizational measures

#### Workflow

All issues that are generated as part of the aforementioned meetings or issues that arise during development/testing are added to the corresponding GitHub repository. As soon as it is added to a sprint, it can be worked on. 

As soon as the ticket is finished (fully or in parts), the pull request workflow begins. In order to ensure our code is reviewed by a peer, we use pull requests for all features. The following rules apply:
* **No commits shall be made directly to stage and/or master except for emergencies**. 
* Each pull request should, if applicable, be linked to its corresponding github issue (note: some PRs do not have an issue, so they require at least some description of what they are about, e.g. [this PR](https://github.com/gipfeli-io/gipfeli-api/pull/125) which was a fix noticed during documentation review)
* If needed, additional details may be added to the description to explain what was done.
  * A good example is [this PR](https://github.com/gipfeli-io/gipfeli-api/pull/99): It is linked to its issue while also providing an overview what was changed, especially if its scope is a bit wider than what can be guessed from the PR title alone)
* **All PRs must be reviewed**, either before merge or after. Feedback should be acknowledged and implemented, potentially also in a seperate PR if the PR is already merged.
* **Important:** A PR should only be merged if all required checks (as configured in GitHub) have passed (see technical measures below). This ensures we only have working builds on staging and production.

:::tip Note

For more technical information on how this flow is executed, please see the [dedicated guideline](../docs/guidelines/branching-strategy).

:::

#### Testing through external people

In the last two sprints, we only want to fix major bugs. Because we aim to be feature complete by then, we plan to give access to our app to some of our colleagues with out further instructions. They shall test the app and give us feedback. By doing it this way, we aim to:

* Get feedback on the usage of the app (e.g. is it understandable?)
* Get feedback on missing (and therefore potentially future) features
* Find bugs resulting in environments that we cannot test or through usage we did not foresee

These bugs can be added to our `enhancement` issues and tackled in future iterations.


### Technical measures

We also employ the following technical mesaures to automatically check code quality:

* **Testing:** We use automated tests in our CICD to ensure any PRs do not have failing tests. For more information on testing, see our [testing guideline](../docs/guidelines/testing-strategy).
* **Naming conventions:** Developers are encouraged to follow our defined [naming conventions](../docs/guidelines/conventions) and only deviate in special circumstances. This ensures that e.g. our OpenAPI specification is automatically and correctly generated.
* **Build tests:** Our CICD pipelines also create a build of the app to ensure no failures occur during the build process.
* **SonarCloud:** Both frontend and backend, as part of their CICD, run automated code analysis with SonarCloud. Failure to fulfill these criteria (e.g. if the test coverage falls below a certain degree) leads to the PR not being able to be merged. We also aim to eliminate all Code Smells, either by fixing them or labelling them as `won't fix` in SonarCloud.
  * *Frontend:* We use the automatic analysis to get a quick summary on what has changed. See [SonarCloud](https://sonarcloud.io/project/overview?id=gipfeli-io_gipfeli-frontend) for an overview. 
  * *Backend:* We use a custom analysis run for our backend because we also need coverage information. This is in line with our [testing guideline](../docs/guidelines/testing-strategy) that puts an emphasis on the backend quality - since this is our source of truth, its quality requirements are even higher. This means that we also check whether the coverage on new code falls below a certain treshold, and if so, the check fails. This ensures that we always add unit tests for new features. See [SonarCloud](https://sonarcloud.io/project/overview?id=gipfeli-io_gipfeli-api) for an overview.
---
id: organization
sidebar_position: 2 
title: Organization
---

This project is conducted as part of the *Master of Advanced Studies in Software Engineering 20-22* at the OST
Fachhochschule Rapperswil. Its goal is to complete a software engineering project from A to Z, covering all of the
topics learned throughout the 3 CAS courses.

## General

* **Github organization:** https://github.com/gipfeli-io
* **Project URL:** https://www.gipfeli.io
* **Project language:** English
* **Duration:** April - September 2022

## People

| Name                 | Role       | Github profile            |
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

We use a [dedicated Github projects board](https://github.com/orgs/gipfeli-io/projects/1) for managing all tasks in our
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

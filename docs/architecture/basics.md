---
id: basics
sidebar_position: 1
title: Basics
---

# Architecture Overview

We are using a three tier architecture consisting of a presentation layer (statically-built React Application), 
business layer (NestJS Application) and a data layer (PostgreSql database) for persistence. 
Each of the layers is hosted on a different Google Service (for details see [Infrastructure](../infrastructure/basics))
and has its own update cycle.


```plantuml
@startuml
skinparam componentStyle rectangle
skinparam minClassWidth 300
skinparam DefaultTextAlignment center
component "Presentation Layer: Gipfeli Frontend" as A
component "Business Layer: Gipfeli Api" as B
component "Data Layer: PostgreSQL" as C
component "PostgreSQL Server" as D

A -d-> B
B -d-> C
C -d-> D

@enduml
```


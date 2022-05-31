---
id: basics
sidebar_position: 1
title: Basics
---

# Architecture Overview

We are using a three tier architecture consisting of a presentation layer (NextJs Application), 
business layer (NestJs Application) and a persistence layer (PostgreSql database). 
Each of the layers is hosted on a different Google Service (for details see [Infrastructure](../infrastructure/basics))
and has it's own update cycle. 

```mermaid
graph TD;
    A(Presentation Layer: Gipfeli Frontend)-->B(Business Layer: Gipfeli Api);
    B-->C(Data Layer: PostgreSQL);
    C-->D(PostgreSQL Server);
```


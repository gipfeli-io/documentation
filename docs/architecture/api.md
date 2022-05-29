---
id: architecture_api
sidebar_position: 2
title: API Architecture
---

# Api Architecture

We are using the out-of-the-box architecture provided by NestJs which consists of a modular approach. Each domain gets its own feature module
which can then be imported by other modules (by default modules are singletons and thus can be shared). Each NestJs application
has at least one root module which is the starting point for Nest to build the internal data structure to resolve relationships between
modules, providers and dependencies. Using the recommended architecture gives us a scalable, testable ad loosely coupled application which is also
easily maintainable. In addition, it allows us to the CLI Nest provides which makes creating new components (modules, services, controllers etc.) easy and fast.

## Modules

Each module represents a domain in our application and may consist of the following elements:
- DTOs
- Interfaces
- Types
- Controllers
- Services
- Validators
- Decorators

There are also some more elements you can have in a module. Please refer to the official Nest documentation for a complete overview: [Nest Documentation](https://docs.nestjs.com)

### Utils Module
For elements which do not have a domain per se (e.g. a service to hash passwords) we created a module called "shared". This module serves as a kind of utils module
where we add helpers we need in different parts of the application.

## Project structure

This gives us the following project structure (to keep it easily readable we only show the root module (app) and the tour module):

```
gipfeli-api/
├── migrations
├── src/
│   ├── app/
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   └── app.service.ts
│   ├── tour/
│   │   ├── dto/
│   │   │   ├── validators/
│   │   │   │   ├── is-point.decorator.spec.ts
│   │   │   │   └── is-point.decorator.ts
│   │   │   └── tour.ts
│   │   ├── entities/
│   │   │   └── tour.entity.ts
│   │   ├── mocks/
│   │   │   ├── tour.data.mock.ts
│   │   │   └── tour.repository.mock.ts
│   │   ├── tour.controller.spec.ts
│   │   ├── tour.controller.ts
│   │   ├── tour.module.ts
│   │   ├── tour.service.spec.ts
│   │   └── tour.service.ts
│   └── main.ts
└── test
```

## TypeORM 

Out-of-the-box, TypeORM uses the repository pattern which means that each entity has its own repository. The repositories can be used by using TypeORM's generic
repositories which provides functionalities to query all entities or execute CRUD operations. As we do not need custom queries at the moment we can use the generic
repository which means that there are no repository files listed in our modules. 

### Migrations
The folder containing the migrations TypeORM will use to synchronize entity information to the database is not managed inside the source-folder (src). Because the 
migration livecycle is maintained by the TypeORM CLI they should not be a part of source code.

To get more information on the recommended architecture using TypeORM and Nest please refer to the [Nest documentation](https://docs.nestjs.com/techniques/database#database).
For details on TypeORM please check out [typeorm.io](https://typeorm.io/).

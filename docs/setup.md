---
id: setup
sidebar_position: 2
title: Development Setup
---

Currently, there is no dockerized configuration for local development. Instead, you have to clone both
the [gipfeli.io API](https://github.com/gipfeli-io/gipfeli-api) as well as
the [gipfeli.io frontend](https://github.com/gipfeli-io/gipfeli-frontend) and run both processes manually. For
more information on how to set up the project, please refer to the sections below.

### Prerequisites

- Node >=14.0.0 and NPM >=5.6. Installation with nvm is recommended. Read more her: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- Git https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- An IDE of your choice with which you can develop React and NestJS applications. E.g. WebStorm, IntelliJ
- Docker Desktop or Docker Engine
- Postgres if you don't want to use a dockerized database (see [Database Setup](#database-setup))

Set everything up as per installation guide of the respective tool.

### Database Setup

The easiest way to set up the database is to use the postgres postgis docker image. Do the following steps to configure
it:

1. `docker pull postgis/postgis`
2. `docker run -d --name postgis_docker -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5432:5432 postgis/postgis`
   - `-p` : this maps the internal container port to an external port, so we can connect to the database from outside the container
3. Feel free to create a new database with any naming you like or use the default database 'postgres'. Make sure to
   update the database name in the .env file.

:::info
Connect to database instance with your favorite db tool (e.g. DBeaver, DataGrip etc.) and use the following config (only
working if you executed the docker command as shown above):

- Host: localhost
- Port: 5432
- User: postgres
- Password: postgres
:::

#### Alternative database setup without docker

If you do not want to use docker please install postgres on your machine. You can follow the guides on the official
[PostgreSQL](https://www.postgresql.org/) page.

After setting up postgres locally create a new database (if you do not want to use the standard postgres database) and
install the PostGIS extension with
`CREATE EXTENSION postgis;`. For more information check out the [PostGIS](https://postgis.net/) page.

### Frontend Setup
Clone the frontend repository: https://github.com/gipfeli-io/gipfeli-frontend. Follow the guide in the .readme file of the repository.

:::caution
If you want the frontend port autoconfigured, make sure to start the frontend after the backend is already running. 
The frontend will then choose its own port (most probably :3001). Otherwise, the frontend will choose the default port (3000) which
will interfere with the api port if you use the standard configuration there. You can also manually configure the ports in your `.env` file.
:::

### Api Setup
Clone the api repository: https://github.com/gipfeli-io/gipfeli-api. Follow the guide in the .readme file of the repository.

#### Database migrations

We are using TypeORM to generate our tables based on specific typescript objects in the api solution. There are some things you have to
adhere to, to create your own migrations.

:::info
The database connection is configured in file `src/config/database.config.ts`. This configuration is used to connect to the database
when running the application. There is a separate configuration for executing migrations using the CLI as we cannot use the config service provided
by NestJS for this. You can find the configuration file for the CLI here `src/config/orm.config.ts`.
:::

##### Filenames
You have to use the following pattern for a new entity file: `[your-entity-name].entity.ts` 
(please also see the general filename rules on our [Conventions](guidelines/conventions) page.)
Only filenames with this pattern will be used when running typeorm migrations.

##### Adding a migration
Everytime you add a new entity or change a property in an existing one you have to generate a migration file.
The migration files reside outside the NestJS application in the root in folder `migrations`. 

Use command `typeorm:generate [Add a useful filename e.g. AddCountryTable]` to let TypeOrm generate a new migration file.

:::info
If you want to add a migration but haven't changed any of the entities (you might want to e.g. fix the name of a category already
existing in the database) you have to use command `typeorm:create [Add a useful filename]`
:::

Please check out the `package.json` file of the api for a complete list of preconfigured typeorm commands.

## Dockerized Environment for Testing
:::caution
Please be aware that this might not use the most recent
version of gipfeli.io as the references on the main branches have to be manually updated.
:::
We provide a repository where you can clone a dockerized environment of gipfeli.io. You cannot develop with this configuration, but you can 
test the whole application stack locally. 
For details on how to set it up please refer to the .readme of this repository: [Gipfeli Docker Repository](https://github.com/gipfeli-io/gipfeli-docker).

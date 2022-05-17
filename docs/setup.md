---
id: setup 
sidebar_position: 2 
title: Setup
---

Currently, there is no dockerized configuration for local development. Instead, you have to clone both
the [gipfeli.io API](https://github.com/gipfeli-io/gipfeli-api) as well as
the [gipfeli.io frontend](https://github.com/gipfeli-io/gipfeli-frontend) and run both processes manually. If you want
to contribute to the documentation, use the [documentation](https://github.com/gipfeli-io/documentation) repository.

:::caution

Note that you have to match the ports you're running such that the frontend finds the backend. This can be configured
via the `.env` variable, so when you run the backend on another port, this has to be adapted.

:::

## Frontend

1. Clone the repository
2. Run `npm i` to set up all dependencies
3. Create a `.env` file based on the `.env.example` and adjust the values
4. Run `npm run dev` to get a development process with hot-reloading running

## Backend

### Database

TypeORM is configured in class `src/infrastructure/config/database-config.ts`. Entities have to be named like this `*.entity.ts`
and will be automatically included in the search for changes when generating a new migration.

The easiest way to setup the database is to use the postgres postgis docker image. Do the following steps to configure it:
1. `docker pull postgis/postgis`
2. `docker run -d --name postgis_docker -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5432:5432 postgis/postgis`
   - `-p` : this maps the internal container port to an external port so we can connect to the database from outside of the container
3. Feel free to create a new database with any naming you like or use the default database 'postgres'. Make sure to update the database name in the .env file.

:::info
Connect to database instance with your favorite db tool (e.g. DBeaver, DataGrip etc.) and use the following config (only working if you executed the docker command as shown above):
- Host: localhost
- Port: 5432
- User: postgres
- Password: postgres
:::

### Generate new migration
If you add a new entity you have to generate a migration file.
Execute the command below after adding the new entity. This will generate a new migration file
in the folder `src/infrastructure/migrations`.

```bash
$ npm run typeorm
```

### Executing migrations
Run the command below to execute migrations:

```bash
$ npm run typeorm-migration
```

## Documentation

1. Clone the repository
2. Run `npm i` to set up all dependencies
3. Run `npm run start` to get a development process with hot-reloading running

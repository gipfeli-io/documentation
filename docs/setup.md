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
The easiest way to setup the database is to use the postgres docker image. Do the following steps to configure it:
1. docker pull postgres:14.2
2. docker run -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5432:5432 library/postgres
3. Feel free to create a new database with any naming you like or use the default database 'postgres'

:::info
Connect to database instance with your favorite db tool (e.g. DBeaver, DataGrip etc.) and use the following config:
- Host: localhost
- Port: 5432
- User: postgres
- Password: postgres
:::

### Code
1. Clone the repository
2. Run `npm i` to set up all dependencies
3. Create a `.env` file based on the `.env.example` and adjust the values
4. Run `npm run start:dev` to get a development process with hot-reloading running



## Documentation

1. Clone the repository
2. Run `npm i` to set up all dependencies
3. Run `npm run start` to get a development process with hot-reloading running

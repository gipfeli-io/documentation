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

1. Clone the repository
2. Run `npm i` to set up all dependencies
3. Create a `.env` file based on the `.env.example` and adjust the values
4. Run `npm run start:dev` to get a development process with hot-reloading running

## Documentation

1. Clone the repository
2. Run `npm i` to set up all dependencies
3. Run `npm run start` to get a development process with hot-reloading running

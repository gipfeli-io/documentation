---
id: architecture_api
sidebar_position: 2
title: Api Architecture
---
[TODO: add image of structure used (e.g. hexagonal)]

#Folder structure
```
gipfeli-api/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── strategies
│   │   │   └── guards
│   │   └── controllers
│   ├── core/
│   │   ├── interfaces
│   │   ├── services
│   ├── infrastructure/
│   │   ├── config
│   │   └── repositories
│   └── main.ts
└── test
```
## app
This contains the access points of the api. The controllers and all the 
auth configurations reside here. As we are using the passport libraries the 
auth folder also contains the strategies and guards we need to implement the security layer.
The controllers are simple and don't contain any business logic. They just receive the data and
immediately propagate it to the core services.

## core
This is the business/domain layer which contains our business logic. This layer is referenced by the 
app layer and provides and manipulates the data according to our business rules. We also specify our
interfaces here which allows us to be able to easily test the application. Services are used to
establish communication between the app and core layers.

## infrastructure
This layer handles all the work needed to get the data from the database. The repositories hold a 
connection to the database and provide the necessary functions to retrieve and manipulate data.
The repositories are held simple and don't contain any business logic.
---
id: requirements
sidebar_position: 1
title: Requirements
---

### Functional Requirements

| #   | Requirement                                                                                                                                |
|-----|--------------------------------------------------------------------------------------------------------------------------------------------|
| F1  | The system has to differ between "logged in" and "anonymous" users.                                                                        |
| F2  | The system has to differ between "logged in as administrator" and "logged in as user".                                                     |
| F3  | The system has to offer the option to register as a new user.                                                                              |
| F4  | The system has to display a list of tours the currently logged in user created.                                                            |
| F5  | The system has to make sure that a tour is only displayed to its creator.                                                                  |
| F6  | The system has to offer the functionality to create, update and delete a tour for a user.                                                  |
| F7  | The system has to display the list of tours of all users to an administrator.                                                              |
| F8  | The system has to allow viewing and deleting a tour of a different user for an administrator.                                              |
| F9  | The system has to provide an offline functionality so the user can create tours in a reduced fashion without a connection to the internet. |
| F10 | The system has to provide a functionality to upload geo referenced images and display them on the map.                                     |    

### Non Functional Requirements

| #   | Requirement                                                                    |
|-----|--------------------------------------------------------------------------------|
| NF1 | The system has to persist the tour data for a user in a relational database.   |
| NF2 | The system must make daily backups of the data stored in the database.         |
| NF3 | The system must store uploaded images in an object storage.                    |
| NF3 | The system must make daily backups of the images stored in the object storage. |
| NF4 | The system has to be function complete by 30.9.2022                            |
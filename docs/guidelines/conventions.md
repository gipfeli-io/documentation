---
id: conventions
sidebar_position: 3 
title: Conventions
---

## Naming conventions

### Backend

#### Files
NestJS is heavily inspired by Angular so the naming convention is too. The following pattern is used:

- [Filename part as Kebab case].[type].[filetype] e.g. user-data.controller.ts

:::info
It is recommended to use the Nest cli as this automatically generates the correct filename (and structure). 
:::

### Frontend

#### Files

We use one of the most common naming conventions:

- Kebab case for file names (folder names and elements that do not represent a component)
- Pascal case for component names

:::info
Component names in React need to be pascal case as this is a restriction from React. Component names should also 
be the same as the filename. The rest can be freely decided.
:::

#### Props

- We use `type` not `interface`
- Props should be Pascal case
- Props are defined in the component they are used
- Destructuring should be used when passing the props to the component constructor

## Coding Conventions

### Frontend

#### Types
- Components always return the Element.JSX type so we do not explicitly write it
- Where we need to add an explicit type:
  - Return type of functions
  - Function parameters
  - Variables: only if it is not clear what the type of the variable is or if we want to highlight the type
- We should not use `any` unless it is not possible otherwise

#### Functions
We decided to not use the function keyword but instead use an arrow function.
E.g. `const someFunction = () => {}` instead of `function someFunction(){}`
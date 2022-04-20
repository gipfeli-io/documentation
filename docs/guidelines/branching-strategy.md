---
id: branching-strategy 
sidebar_position: 1 
title: Branching strategy
---

We keep a simple branching strategy with only two fixed branches: `main` and `stage`. Development should always happen
in feature branches and generally be branched off `stage`. Both `main` and `stage` are very similar and both are
deployable.

:::tip Example flow

In general, our flow is `featureBranch` -> `stage` -> `master`

1. Create a branch `feature/my-super-awesome-feature` from `stage`
2. Develop your feature and create a merge request into `stage`
3. Once merged, check the deployment on the production environment to see your feature in action
4. As soon as another release is happening, `stage` is merged into `master` with your feature (and potentially many
   other!)

Or, if something really bad happened, create a `hotfix/very-important-fix` branch from either `stage` or `master` and
merge it into both branches. **Only do this in emergencies!**

:::

:::tip Note for the documentation repository

The documentation is an exception to this rule - since we want to push documentation as quick as possible, changes 
always are pushed directly to `main` and deployed as such.

:::

## `main`

This is the main branch that gets deployed to the production environment. This branch should only be changed through
merge requests from either `stage` (for releases) or through hotfixes that need to be directly deployed to production.

## `stage`

This is the staging branch that gets deployed to the staging environment. It is fed via pull requests that are branched
off from here.


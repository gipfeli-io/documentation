---
id: branching-strategy 
sidebar_position: 1 
title: Branching strategy
---

We keep a simple branching strategy with only two fixed branches: `main` and `stage`. Development should always happen
in feature or bugfix branches and generally be branched off `stage`. Both `main` and `stage` are very similar and both are
deployable.

## Branch prefix types

- `feature` - use this prefix when you are implementing a new feature
- `bugfix` - use this prefix when you are fixing a bug
- `hotfix` or `fix` - use this prefix when you need to fix a bug that needs to be deployed immediately

## Branches

### `main`

This is the main branch that gets deployed to the production environment. This branch should only be changed through
merge requests from either `stage` (for releases) or through hotfixes that need to be directly deployed to production.

### `stage`

This is the staging branch that gets deployed to the staging environment. It is fed via pull requests that are branched
off from here.

:::tip Example flow for feature

In general, our flow is `featureBranch` -> `stage` -> `master`

1. Create a branch `feature/my-super-awesome-feature` from `stage`
2. Develop your feature and create a merge request into `stage`
3. Once merged, check the deployment on the staging environment to see your feature in action
4. As soon as another release is happening, `stage` is merged into `master` with your feature/bugfix (and potentially many
   others!)

Or, if something really bad happened, create a `hotfix/very-important-fix` branch from either `stage` or `master` and
merge it into both branches. **Only do this in emergencies!**

:::

:::tip Note for the documentation repository

The documentation is an exception to this rule - since we want to push documentation as quick as possible, changes 
always are pushed directly to `main` and deployed as such.

:::



## Pull requests

- After creating the PR we mark the other person to tell them that there is a PR.
- If we think the PR does not need a review we can merge it directly and move the ticket in the board to Testing
- If the PR needs a review (e.g. because it is a critical change) we move the ticket in the board to PR pending
- In either case the other person will check the PR when they have time and need to leave a quick comment that the PR was reviewed
- If the PR was not ok the person reviewing the PR needs to create an issue on the project board and assign it to the person that created the PR


---
id: security-authorization
sidebar_position: 3
title: Authorization
---
> **Authorization**
>
> The process of granting or denying specific requests: 1) for obtaining and using information and related information
> processing services; [...]
>
> Access privileges granted to a user, program, or process or the act of granting those privileges.
> - [NIST](https://csrc.nist.gov/glossary/term/authorization)


Currently, our authorization needs are very low, because we only need a way to designate admin users that may perform
extended application-wide actions such as user management (see [roles](../../domain/domain-model.md#role)).

This means that authorization is currently achieved by assigning a role to every user, which is either `USER`
or `ADMINISTRATOR`. In the backend, this is an additional guard which can be added to any route. It follows after the
authentication guards and checks in the database whether the user that has been authenticated is really an
administrator. This prevents users from forging JWTs (which is almost impossible anyway) and pose as an administrator
while they are not.

Frontend-wise, the `<RequireAuth>` component takes an optional `requireAdmin` property. If set to true, the component
not only checks whether the current state is authenticated, but also whether the role in the access token is that of an
administrator.

In the future, this concept can be extended to allow for more fine-grained RBAC, as the concepts will still be usable.
---
id: security-authentication-session-management
sidebar_position: 2
title: Authentication & Session Management
---

> **Authentication** is the process of verifying that an individual, entity or website is whom it claims to be.
> Authentication in the context of web applications is commonly performed by submitting a username or ID and one or more
> items of private information that only a given user should know.
>
> **Session Management** is a process by which a server maintains the state of an entity interacting with it. This is
> required for a server to remember how to react to subsequent requests throughout a transaction. Sessions are
> maintained
> on the server by a session identifier which can be passed back and forth between the client and server when
> transmitting
> and receiving requests. Sessions should be unique per user and computationally very difficult to predict.[...]
>
> — [OSWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

## General

As seen from the quotes above, there are two main conceptual components: **authentication** and **session management**.
These two play together and ultimately serve the purpose to authenticate a user. All protected routes can only be
accessed if a user is authenticated, which means they must (a) be logged-in with their username and password and (b)
have a valid session that is not yet expired.

### Authentication

We are using a JWT-based authentication flow. Whenever a user logs in, the following sequence of event happens:

```plantuml Authentication flow

@startuml

|Frontend|
start
:User enters email and password and submits form;
|#AntiqueWhite|Backend|
:Find user with submitted email in database;
if (User exists?) then (yes)
else (no)
  :Return error;
  |Frontend|
  :Show error;
  stop
endif
|#AntiqueWhite|Backend|
if (Does hashed, submitted password match saved hash?) then (yes)
else (no)
  :Return error;
  |Frontend|
  :Show error;
  stop
endif
|#AntiqueWhite|Backend|
:Create a new session in the database;
:Create an access token and a refresh token and return;
|Frontend|
:Store tokens in local storage and proceed to next page;
stop

@enduml

```

In order to prevent enumeration attacks, we do not raise detailed errors - instead, a generic `404 - Not found` is
raised, even if a valid user with an invalid password is entered. The JWT tokens are encrypted using a configurable
secret. They have different content, lifetime and purpose:

* **Access token:** This token contains an expiration date, issue date as well as the user's role, ID and email. Its
  validity period is configurable and should be configured to be very short.

```
Encrypted: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdpcGZlbGkuaW8iLCJzdWIiOiI3NmIyZDE2MS1iY2YxLTQ1ZmItODkyMC02YWE2NDMxYzcxMWQiLCJyb2xlIjowLCJpYXQiOjE2NjIyODI2NjAsImV4cCI6MTY2MjI4Mjc4MH0.5CQLeT_Q14gVowgAQE6tuHulH2ORl1gsOIvISY8gxyg

Decrypted payload:
{
  "email": "admin@gipfeli.io",
  "sub": "76b2d161-bcf1-45fb-8920-6aa6431c711d",
  "role": 0,
  "iat": 1662282660,
  "exp": 1662282780
}
```

* **Refresh token:** This token contains an expiration date, issue date as well as the session ID. Its validity period
  is
  configurable and should be configured to be long.

```
Encrypted: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiI3N2VmZWIxNi03M2FiLTRlZWUtODdiMy03NDhiZDhmMGI5MDciLCJpYXQiOjE2NjIyODI5MzQsImV4cCI6MTY2MjI4MzIzNH0.fAVWdNl67yv5uHHiehkQiBjJDhYLCCC2fHI1QRgKrMU

Decrypted payload:
{
  "sessionId": "77efeb16-73ab-4eee-87b3-748bd8f0b907",
  "iat": 1662282934,
  "exp": 1662283234
}
```

### Performing authenticated requests

Once a user is logged in, authenticated requests can be performed by sening the (encrypted) access token as
Authorization Bearer header:

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdpcGZlbGkuaW8iLCJzdWIiOiI3NmIyZDE2MS1iY2YxLTQ1ZmItODkyMC02YWE2NDMxYzcxMWQiLCJyb2xlIjowLCJpYXQiOjE2NjIyMDY3NzgsImV4cCI6MTY2MjIwNzM3OH0.p2WvvDw8EhC7vnzGu8draL3aJm-LZNcXvKDMpeu11RQ
```

The backend verifies the integrity of the token and its validity and passes the request.

### Refreshing the access token

The access token should have a short validity period because it authenticates the user. In order to refresh its
validity, the refresh token is used. The refresh token is tied to a session ID that is stored in the database. Before
the access token expires, a request to the dedicated refresh endpoint should be made. Instead of the access token in the 
Authorization header, the refresh token is used. The backend verifies the token and checks whether the included session 
ID exists and is still valid. If so, it creates a new access token and a new refresh token and returns them. From this 
point on, the validity is extended again.

```plantuml Refresh flow
@startuml

|Frontend|
start
:AccessToken is about to expire;
:Send request to /refresh \nwith Bearer {RefreshToken};
|#AntiqueWhite|Backend|
:Verify JWT;
if (Valid?) then (yes)
else (no)
  :Return error;
  |Frontend|
  :Logout & Show error;
  stop
endif
|#AntiqueWhite|Backend|
if (Does session ID exist and is valid?) then (yes)
else (no)
  :Return error;
  |Frontend|
  :Logout & Show error;
  stop
endif
|#AntiqueWhite|Backend|
:Update session validity;
:Create new access token and new refresh token and return;
|Frontend|
:Store tokens in local storage;
stop

@enduml
```

### Logout

The logout endpoint removes the session from the database. At this moment, no refresh requests can be made. See below
for issues.

### Implementation details

<details>
  <summary>Backend implementation</summary>
  <div>
    <p>
      Nest uses the concept of <a href="https://docs.nestjs.com/guards" target="_blank">guards</a> which intercept any request before they actually 
      reach the route handler. Under the hood, each guard uses <a href="https://www.passportjs.org/" target="_blank">passport.js</a> strategies which 
      define what they check:</p>
    <li><strong>Local Strategy:</strong> Used for the login. This strategy takes a user identifier (here: email) and a password from the request body and uses the <code>AuthService</code> to verify whether this user with the given password exists. If succesful, the request handler takes over.</li>
    <li><strong>JWT Strategy:</strong> Used for protected routes. This strategy takes an encrypted JWT from the Authorization header and verifies its integrity and expiry. If it is a valid JWT (i.e. encrypted with our secret) and an access token (i.e. containing the access token params) and still valid, allows the request.</li>
    <li><strong>Refresh JWT Strategy:</strong> Used for the refresh route. This strategy takes an encrypted JWT from the Authorization header and verifies its integrity and expiry. If it is a valid JWT (i.e. encrypted with our secret) and a refresh token (i.e. containing the refresh token params) and still valid, allows the request.</li>
    <li><strong>Token bearer Strategy:</strong> Used for the media cleanup. This strategy takes a secret submitted via Authorization header and checks whether it matches the specified secret in the .env file. If so, allows the request.</li>
  </div>
</details>

<details>
  <summary>Frontend implementation</summary>
  <div>
    <p>
      The frontend performs requests to the backend. Once a login request is made, it stores the access and refresh tokens in the localstorage. The following components are performing authentication-related tasks:</p>
      <li><strong>Authentication Provider:</strong> Provides an <code>AuthenticationContext</code>, accessible via <code>useAuth()</code> hook. Wrapped around all routes, it allows pages to check for the current authentication state. Upon login, the login page performs the actions in the context required to store the tokens, after which point the frontend is in an authenticated state. 
          This provider also registers an interval hook that periodically checks whether the access token is still valid. If the validity period goes below a certain treshold, the provider performs a refresh request in the background and updates the tokens. This also happens when a user reloads the page - upon initialization, the tokens are checked and refreshed, if need be. This allows the users to log-in and stay logged-in for extended periods of time, while guaranteeing that the tokens are always valid. Finally, when a user logs out, the local storage is purged.</li>
      <li><strong>RequireAuth component:</strong> This react component can be wrapped around other components (e.g. inside a page). It uses the aforementioned <code>useAuth()</code> to check whether the user is logged in. If not, it redirects to the login page.</li>  
      <li><strong>Services:</strong> Frontend services that handle requests to the backend get the corresponding token injected during initialization. They add this Authorization header and perform requests to the backend.</li>
</div>
</details>

## Limitations, known issues and outlook

See also [lessons learned](../../../general/lessons-learned).

Unfortunately, Nest does not provide a fully-fledged authentication flow, while providers such as Auth0 are very
expensive. This is why we implemented the flow ourselves. While it does work, it has three important issues:

* **Over-engineered:** In its current state, it is a bit overengineered. In fact, we would not require any JWTs and
  refresh flows, because we could just return the session ID (or a secret attached to the session ID) and store this for
  the Bearer token. We could then check on each request in a corresponding guard whether the supplied secret matches a
  valid session. However, this would mean that users are **always** logged out when the session ends, because the tokens
  cannot be refreshed. This is why we decided to have a refresh flow.
* **Tokens cannot be revoked:** A major issue is that we only check for the session ID in the refresh flow. This means
  that when a user logs out, their access token might still be valid for a certain amount of time, before its validity
  period has expired. If a user were to logout and retain their access token, they could still perform authenticated
  requests. This issue is mitigated in part by the validity period (which should be very low for the access token), but
  it might be a security issue nonetheless.
* **Refresh tokens are not invalidated:** While we do hand out new refresh tokens, the old ones are not invalidated. As
  long as the tokens are stored safely, nothing can happen, but if an attacker intercepts the refresh token, it might be
  used to get a new access token.

In the end, we realized that we probably should go for an authentication provider like Auth0 nonetheless. This is why we
did not remove the whole refresh token flow, because we are already well-prepared for implementing the OAuth flows.
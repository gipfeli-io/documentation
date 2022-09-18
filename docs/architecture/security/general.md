---
id: security-general
sidebar_position: 1
title: General
---

Generally, the application consists of **protected** (as in: you need an account and/or be an administrator) and **
unprotected** (as in: public access) routes. Therefore, it needs both authentication (who are you) and authorization
(what can you do) measures. This requires appropriate measures in both frontend and backend. For more information, see
the corresponding chapters on [authentication](./authentication-session-management.md)
and [authorization](./authorization.md).

## Infrastructural security

In addition to application-level security outlined above, some additional measures are also taken on the infrastructural
level:

* **API Throttling:** The backend API has a configurable request limit that only allows a certain amount of requests per
  IP per endpoint during a configurable timespan. Additionally, some security-critical routes such as the password reset
  request or the login have hard-coded lower limits to limit the possibility of enumeration attacks. The throttling is
  achieved by nest's [built-in throttler](https://docs.nestjs.com/security/rate-limiting).
* **API headers:** As our backend is a critical part, we use
  the [officially recommended helmet plugin](https://docs.nestjs.com/security/helmet) for nest, which adds and removes
  several security-related headers to each request.
* **CORS:** To limit the possibility of sending requests to our API from malicious third-party websites, we
  use [strict CORS policies](https://docs.nestjs.com/security/cors).
* **Hashes:** The backend has a dedicated `CryptoService` that uses
  the [bcrypt library](https://www.npmjs.com/package/bcrypt) under the hood to generate hashes. The number of hash
  rounds can also be configured which leads to more resistant hashes (at the cost of increasing time for generating a
  hash). All passwords are stored as hashed values only. The same holds true for any tokens (e.g. password reset), which
  are stored as hash in the database and with their cleartext value only sent out once (e.g. during email notification).
* **Cloud infrastructure:** Care has been taken to employ best practices in the cloud. This means that there are, for
  example, service accounts for handling bucket manipulation which are limited to their bucket only and no other
  services. The database itself is only accessible via TLS and requires the certificates to be installed on a user's
  systems. As for secrets, they are encrypted and stored in the GCP Secret Manager. This also holds true for any secrets
  required in our GitHub Actions - they use GitHub's secrets.

:::tip What about CSRF?

Since we are not using cookie-based authentication, we are not vulnerable to CSRF attacks, because an attacker cannot
forge a request from a third-party site to our website as no cookies are sent along.

:::

## Limitations and outlook

Currently, we do not enforce Content Security Policies in the frontend. The backend has them added by the aforementioned
helmet plugin, but there is no added benefit to that. CSPs should be enforced in the frontend. Since we're using an
NGINX instance to serve our frontend, basic plugins can be used. However, fine-tuning CSPs requires a lot of testing and
need to be adjusted for different production environments. See [this ticket](https://github.com/gipfeli-io/gipfeli-frontend/issues/196) for progress.
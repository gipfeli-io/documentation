---
id: documentation-deployment 
sidebar_position: 4
title: Documentation deployment
---

Our [documentation](https://docs.gipfeli.io) is created with [Docusaurus](https://docusaurus.io/). As this allows for
static page rendering, we use [GitHub Pages](https://pages.github.com/) to host the documentation for free.

## Deployment steps

Deployment always happens when a push is sent to main. This triggers
the [GitHub Action](https://github.com/gipfeli-io/documentation/blob/main/.github/workflows/deploy.yml) that performs
the following steps:

1. Setup a node environment
2. Install dependencies and create a static build which creates the HTML markup from the Markdown content
3. Since we're using our custom subdomain instead of the default GitHub page subdomain, we have to inject a CNAME
   textfile that contains the subdomain we're using. This is required by GitHub Pages to setup the routing correctly.
   Because we're always rebuilding the project with every push, this has to be added in the build step rather than the
   repository.
4. In the final step, we use the [`peaceiris/actions-gh-pages@v3`](https://github.com/peaceiris/actions-gh-pages) action
   that takes our build and pushes it to the `gh-pages` branch. This is done by a GitHub system account.
5. Finally, because we've set up our project for GitHub Pages and defined `gh-pages` as the serving branch, our
   documentation is live 🚀

We also do not have to worry about SSL certificates - GitHub Pages has us covered here and automatically renews the
Let's Encrypt certificate for us.

:::tip DNS configuration

In order for this all to work, the domain had to be configured with both a CNAME record for the subdomain that points to
the GitHub Pages subdomain of our organization. In order for GitHub Pages to securely verify that we own the domain, we
also had to add a specific TXT record to our DNS which GitHub uses to periodically verify that we are the owners.

:::
---
title: Introduction
---

### Before we begin

> Citadel is in early development, and even not finished yet. This document is also a work-in-progress. If you get stuck, you might just wait a moment!
>
> See the [migration guides](migrating) for help upgrading from anything else

### What is Citadel?

Citadel is yet another identity and access management. But there are two basic concepts:

* Build you signin gui yourself
* Wait until there might have been made one of us :)

Building an app with all the modern best practices is fiendishly complicated. Citadel does all the boring auth stuff for you so that you can get on with the creative part.
<!-- 
You don't need to know Svelte to understand the rest of this guide, but it will help. In short, it's a UI framework that compiles your components to highly optimized vanilla JavaScript. Read the [introductory blog post](https://svelte.dev/blog/svelte-3-rethinking-reactivity) and the [tutorial](https://svelte.dev/tutorial) to learn more. -->


### Why the name?

We have been too busy for the last months to find another appropriate name

### Comparison with Auth0

[Citadel](https://github.com/caos/citadel) is just better in all ways. But in detail: 

* It has an api
* Instead of route masking, we encode route parameters in filenames (see the [routing](docs#Routing) section below)
* As well as *pages*, you can create *server routes* in your `src/routes` directory. This makes it very easy to, for example, add a JSON API such as the one powering this very page (try visiting [/docs.json](/docs.json))
* Links are just `<a>` elements, rather than framework-specific `<Link>` components. That means, for example, that [this link right here](/), despite being inside a blob of markdown, works with the router as you'd expect


### Getting started

You need an account first - create one
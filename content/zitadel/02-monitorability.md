---
title: Monitorability
---

The is some text for the subheader

### Pages

This section shows some html file

```html
<!-- src/routes/index.svelte -->
<svelte:head>
	<title>Welcome</title>
</svelte:head>

<h1>Hello and welcome to my site!</h1>
```

Description

```html
<!-- src/routes/about.svelte -->
<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>
<p>TODO...</p>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<h1>{article.title}</h1>

<div class='content'>
	{@html article.html}
</div>
```

> See the section on [preloading](zitadel#Preloading) for more info about `preload` and `this.fetch`

### File naming rules

There are three simple rules for naming the files that define your routes:

* A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to `preload`
* The file `src/routes/index.svelte` corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
* Files and directories with a leading underscore do *not* create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would *not* create a `/_helpers/datetime` route

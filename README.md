## Running locally

Set up the project:

```bash
npm i
```

Start the server with `npm run dev`, and navigate to [localhost:3000](http://localhost:3000).

## Doc reference

Caos Site is a github action that generates a static page out of markdown files. It uses marked.js in combination with highlight.js to compile and style markdown.
The documentiation is built according to the structure of a docs `folder`[Folder](https://github.com/caos/site/tree/master/docs) located at root of the targeted repository.

```bash
├ docs
│ ├ zitadel
│ │ ├ 00-indroduction.md
│ │ ├ 01-get-started.md
│ │ └ 02-concluding.md
│ ├ eventstore
│ ├ ├ 00-indroduction.md
│ │ ├ 01-get-started.md
│ │ └ 02-concluding.md
  └ index.svelte
```
### Routing
Folder names are mapped to route parameters and files are mapped to sections.
According to the configuration above, two routes with the names `zitadel` and `eventstore` are generated.

To have an entrypoint to existing routes, a index.svelte file can be provided to overwrite the homepage.
`.svelte` files are a superset of HTML. 

```html
<script>
	// logic goes here
</script>

<style>
	/* styles go here */
</style>

<!-- markup (zero or more items) goes here -->
```

Because of sveltes radical treeshaking, any pages we want to be included in the exported site have to be reachable through the index.svelte page, or have to be added to the --entry option of the sapper export command.

### File structure
All markdown files have to have a metadata section at the top including the heading of the section

```yaml
---
title: Deployment
---
```

> Important! You can not have duplicate anchors, so all headings and titles have to be distinct.

### SEO
Meta tags for SEO can be provided in their own `seo.html` file located in the subfolder.

```html
<meta name="twitter:title" content="Zitadel guides test" />
<meta name="twitter:description" content="Caos Identy and Access Management Solution" />
<meta name="Description" content="Caos Identy and Access Management Solution" />
```

If provided, tags are included in the head section of the referenced route.
In the case of index.svelte, sapper will inject the content from the <svelte/head> tag. Refer to the documentation of svelte and [Sapper](https://sapper.svelte.dev/docs#Pages)

```html
<svelte:head>
  <title>Docs</title>

  <meta name="twitter:title" content="Zitadel guides" />
  <meta name="twitter:description" content="Caos Identy and Access Management Solution" />
  <meta name="Description" content="Caos Identy and Access Management Solution" />
</svelte:head>
```

## markdown styles

A solution to overwrite markdown styles is planned but not defined yet. Further instructions will be added to the documentation.

## Translating the API docs

Anchors are automatically generated using headings in the documentation and by default (for the english language) they are latinised to make sure the URL is always conforming to RFC3986.

If we need to translate the API documentation to a language using unicode chars, we can setup this app to export the correct anchors by setting up `SLUG_PRESERVE_UNICODE` to `true` in `config.js`.

## Deployment

### base path

If the base path of the deployment varies, the following changes have to be made:

* the polka server basepath in /server.js must be set
* build script --basepath option must be provided

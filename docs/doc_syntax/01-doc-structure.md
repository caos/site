---
title: Doc structure
---

### General Structure

To deploy a successful build, you need to have a `docs` folder on your root directory.

This folder contains subfolders that are mapped to routes of your doc page later.

```bash
├ docs
│ ├ getting_started
│ │ ├ 00-indroduction.md
│ │ ├ 01-get-started.md
│ │ └ 02-concluding.md
│ ├ api
│ ├ ├ 00-indroduction.md
│ │ ├ 01-get-started.md
│ │ └ 02-concluding.md
  └ index.svelte
```

According to the configuration above, two routes with the names `getting_started` and `api` are generated.

A doc page consists of one ore more `markdown` files, fetched in sorting order. 
So prefixing with numbers might be a good choice for organizing your structure.

### Markdown Files

Those markdown files contain a meta data section including the `title`, used as section header later and other possibly helpful information about the author of the page

---

Take a look at this example:

```markdown
<!-- start of file -->
---
title: Introduction
---
<!-- markdown here -->
```
asdf

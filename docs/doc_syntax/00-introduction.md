---
title: Introduction
---

### Before we begin

> This is an early version of our doc generator. Some things may change until we hit version 1.0.
> This documentation is also a WIP, so if you might run into issues, reach out for help.

### What is this?

This is our automated document generator. Its main purpose is to deploy a fully equipped doc page out of any repository.

It is a Github Action so it can be integrated into your github workflow.
The project is based on `svelte` and its framework `sapper`, so its designed to build without any useless bulk.

### Integration

To build a doc site on your personal repository your have to integrate the doc build into your github workflow.

The following workflow deploys a doc site on github pages:

```yaml
name: Docs
on:
  push:
    branches:
      - master

env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

jobs:
  builddocs:
    name: Build Doc Frontend
    runs-on: ubuntu-latest
    steps:
    - name: Checkout Repo
      uses: actions/checkout@master
    - name: Build Docs
      uses: caos/site@master
      with:
        args: --basepath ${{ github.event.repository.name }}
    - name: Archive Production Artifact
      uses: actions/upload-artifact@master
      with:
        name: export
        path: __sapper__/export/${{ github.event.repository.name }}
  deploydocs:
    name: Deploy
    needs: builddocs
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@master
      - name: Download Artifact
        uses: actions/download-artifact@master
        with:
          name: export
          path: __sapper__/export/${{ github.event.repository.name }}
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: __sapper__/export/${{ github.event.repository.name }}
          CLEAN: true

```

### Manually run the project

```bash
npm i
```

Start the server with `npm run dev`, and navigate to [localhost:3000](http://localhost:3000).


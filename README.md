## Running locally

Set up the project:

```bash
npm i
```

Start the server with `npm run dev`, and navigate to [localhost:3000](http://localhost:3000).

## Doc reference

The documentiation is built according to the structure of the docs folder. 
Because of its radical treeshaking, any pages we want to be included in the exported site have to be added to the --entry option of the sapper export command.
Assuming the page is deployed on the basepath '/', and the doc file underly the following structure

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
```

the entry options zitadel and eventstore must be provided.
The site will then be reachable throw the endpoints /zitadel and /eventstore


### base path

if the base path varies, the following changes have to be made:

* the polka server basepath in /server.js must be set
* build script --basepath option must be provided

## Translating the API docs

Anchors are automatically generated using headings in the documentation and by default (for the english language) they are latinised to make sure the URL is always conforming to RFC3986.

If we need to translate the API documentation to a language using unicode chars, we can setup this app to export the correct anchors by setting up `SLUG_PRESERVE_UNICODE` to `true` in `config.js`.

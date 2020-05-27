---
title: Zitadel structure
---

This section is a reference for the curious. We recommend you read this section first before reaching to your mobile phone and mess with our developers nerves

```bash
├ organization
│ ├ users
│ │ ├ name
│ │ ├ avatar
│ │ └ username
│ ├ apps
│ ├ roles
│ ├ policy
│ └ 
```

You'll notice a few extra files and a `cypress` directory which relates to [testing](get_started#Testing) — we don't need to worry about those right now.

> This is just a placeholder for later so we can write this nice attention hungry sections See [getting started](get_started#Getting_started) for instructions

### Entities

This contains just some text

#### Organizations

This *must* import, and call, the `start` function from the generated `zitadel` module:

```js
import * as citadel from '@zitadel/app';

citadel.start({
	target: document.querySelector('#zitadel')
});
```

In many cases, this won't work 

#### User

#### Policy

Policys are some very nice extentions that work out of the box.


* `password` — an array of files found in the `static` directory
* `access` — some description text
* `permission` — some description text

---
title: Personalization
---

### Aspects

Of course every doc site should have its unique design. There are three aspects of which you can customize the output of your application.

1. Contextual elements
2. Homepage
3. Markdown styles

#### Contextual elements

The purpose of these `elements` is to define the naming and appearance of the application. All information needed can be extracted from the manifest.json and an asset folder.

As for now, name of the application, color-scheme and favicons can be defined in a `manifest.json` file and any referenced items such as images or icons have to be provided thrugh an asset folder called `static` located at the root of `docs` folder. For more information see [General Structure](get_started#General_Structure).

Take a look at this example

```md
{
	"background_color": "#ffffff",
	"theme_color": "#159794",
	"name": "CAOS Autogenerated Documentation site",
	"short_name": "CAOS Docs",
	"display": "minimal-ui",
	"start_url": "/",
	"icons": [
        {
          "src": "icons/android-chrome-256x256.png",
          "sizes": "512x512",
          "type": "image/png"
        },
        {
          "src": "icons/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        }
      ]
}
```

#### Homepage

The homepage can be set using a .svelte file, a superset of HTML which includes styles and scripts.

#### Markdown styles

These styles are a work in progress. Make sure to come back later.
!function(){"use strict";const t=["client/client.34272e03.js","client/index.c999914c.js","client/index.422adbb1.js","client/[slug].7cb50b86.js","client/client.74126dcb.js"].concat(["service-worker-index.html","base.css","caos.svg","fonts/ailerons/ailerons.otf","fonts/fira-mono/fira-mono-latin-400.woff2","fonts/roboto/roboto-latin-400.woff2","fonts/roboto/roboto-latin-400italic.woff2","fonts/roboto/roboto-latin-500.woff2","fonts/roboto/roboto-latin-500italic.woff2","fonts/rubik/Rubik-Black.ttf","fonts/rubik/Rubik-BlackItalic.ttf","fonts/rubik/Rubik-Bold.ttf","fonts/rubik/Rubik-BoldItalic.ttf","fonts/rubik/Rubik-Italic.ttf","fonts/rubik/Rubik-Light.ttf","fonts/rubik/Rubik-LightItalic.ttf","fonts/rubik/Rubik-Medium.ttf","fonts/rubik/Rubik-MediumItalic.ttf","fonts/rubik/Rubik-Regular.ttf","icons/android-chrome-192x192.png","icons/android-chrome-256x256.png","icons/apple-touch-icon.png","icons/favicon-16x16.png","icons/favicon-32x32.png","icons/favicon.ico","icons/mstile-150x150.png","icons/safari-pinned-tab.svg","logos/caos-logo-outline-1px-pictureonly.svg","logos/caos-logo-outline-pictureonly.svg","logos/orbos-logo-solo-darkdesign.svg","logos/zitadel-logo-solo-darkdesign.svg","manifest.json","prism.css"]),o=new Set(t);self.addEventListener("install",o=>{o.waitUntil(caches.open("cache1591622096468").then(o=>o.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const o of t)"cache1591622096468"!==o&&await caches.delete(o);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const i=new URL(t.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&o.has(i.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline1591622096468").then(async o=>{try{const i=await fetch(t.request);return o.put(t.request,i.clone()),i}catch(i){const n=await o.match(t.request);if(n)return n;throw i}}))))})}();
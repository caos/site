!function(){"use strict";const t=["client/client.9cd44291.js","client/index.7854e85f.js","client/[slug].5fe8e929.js","client/client.208574f3.js"].concat(["service-worker-index.html","base.css","caos.svg","favicon.png","fonts/ailerons/ailerons.otf","fonts/fira-mono/fira-mono-latin-400.woff2","fonts/roboto/roboto-latin-400.woff2","fonts/roboto/roboto-latin-400italic.woff2","fonts/roboto/roboto-latin-500.woff2","fonts/roboto/roboto-latin-500italic.woff2","fonts/rubik/Rubik-Black.ttf","fonts/rubik/Rubik-BlackItalic.ttf","fonts/rubik/Rubik-Bold.ttf","fonts/rubik/Rubik-BoldItalic.ttf","fonts/rubik/Rubik-Italic.ttf","fonts/rubik/Rubik-Light.ttf","fonts/rubik/Rubik-LightItalic.ttf","fonts/rubik/Rubik-Medium.ttf","fonts/rubik/Rubik-MediumItalic.ttf","fonts/rubik/Rubik-Regular.ttf","icons/arrow-right.svg","icons/caos-logo-outline-1px-pictureonly.svg","icons/caos-logo-outline-pictureonly.svg","icons/check.svg","icons/chevron.svg","icons/collapse.svg","icons/download.svg","icons/dropdown.svg","icons/edit.svg","icons/expand.svg","icons/flip.svg","icons/fork.svg","icons/link.svg","icons/loading.svg","icons/orbos-logo-solo-darkdesign.svg","icons/save.svg","icons/zitadel-logo-solo-darkdesign.svg","manifest.json","prism.css"]),o=new Set(t);self.addEventListener("install",o=>{o.waitUntil(caches.open("cache1590573911502").then(o=>o.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const o of t)"cache1590573911502"!==o&&await caches.delete(o);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&o.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline1590573911502").then(async o=>{try{const s=await fetch(t.request);return o.put(t.request,s.clone()),s}catch(s){const i=await o.match(t.request);if(i)return i;throw s}}))))})}();

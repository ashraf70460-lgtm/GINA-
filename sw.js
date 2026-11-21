/* Offline support. Network-first, so a new GINA edition or app update shows up
   as soon as the device is online; the cached copy is used only when offline. */
const CACHE = "asthma-mastery-v2";
const SHELL = ["/", "/index.html", "/favicon.svg", "/manifest.webmanifest",
  "/content/config.js", "/content/gina-2026/meta.js", "/content/gina-2026/topics.js",
  "/content/gina-2026/data.js", "/content/gina-2026/learning.js",
  "/content/gina-2026/whatsnew.js", "/content/gina-2026/consultant.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
    .catch(() => caches.match(req).then(r => r || caches.match("/index.html"))));
});

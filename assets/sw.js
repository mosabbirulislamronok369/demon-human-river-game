const CACHE_NAME = "demon-human-river-cache-v2";

const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/game.js",
  "/manifest.json",
  "/assets/icon-192.png",
  "/assets/icon-512.png"
];

// Install: cache all core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch strategy:
// - For CSS/JS/HTML (things that change often during development),
//   go network-first so updates show up immediately, falling back
//   to cache only when offline.
// - For everything else (icons etc.), cache-first is fine.
const NETWORK_FIRST_EXTENSIONS = [".css", ".js", ".html"];

function isNetworkFirst(url) {
  return NETWORK_FIRST_EXTENSIONS.some((ext) => url.pathname.endsWith(ext)) ||
         url.pathname === "/";
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (isNetworkFirst(url)) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => caches.match("/index.html"));
    })
  );
});
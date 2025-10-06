const CACHE_NAME = 'construction-calculator-cache-v1';
// Add all essential files for the app shell to be cached.
const urlsToCache = [
  '/',
  '/index.html',
  '/index.tsx',
  '/manifest.json'
];

// Install the service worker and cache the app shell.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event to clean up old caches.
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Delete old cache versions
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event to serve from cache or network.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from cache
        if (response) {
          return response;
        }
        // Not in cache - fetch from network
        return fetch(event.request);
      })
  );
});

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);

  // Precaching using Cache API - store static files on service worker installation
  event.waitUntil(
    // Returns a promise
    caches.open('static').then(function(cache) {
      console.log('[Service Worker] Precaching App Shell')

      // Add files to the cache
      cache.add('/src/js/app.js')
    })
  )
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
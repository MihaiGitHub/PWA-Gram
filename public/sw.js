/* Lifecycle Events */
self.addEventListener('install', function(event){
    console.log('[Service Worker] Installing service worker...', event)
});

self.addEventListener('activate', function(event){
    console.log('[Service Worker] Activating service worker...', event)

    return self.clients.claim();
});

/* Non-lifecycle events */
// Triggered when loading images, css files, async etc (Network proxy)
self.addEventListener('fetch', function(event){
    console.log('[Service Worker] Fetching something...', event)

    event.respondWith(fetch(event.request));
});


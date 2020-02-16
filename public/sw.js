// when the browser sees this SW for the first time
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);

  // wait until the following promise resolves
  // Precaching using Cache API - store static files on service worker installation
  event.waitUntil(
    // open/create a cache named 'static'
    caches.open('static').then(function(cache) {
      // Add "requests" to the cache; If any fail it will cause the addAll() to reject
      return cache.addAll([
    //    '/',
        '/index.html',
        '/src/js/app.js',
        '/src/js/feed.js',
        '/src/js/promise.js',
        '/src/js/fetch.js',
        '/src/js/material.min.js',
        '/src/css/app.css',
        '/src/css/feed.css',
        '/src/images/main-image.jpg',
        'https://fonts.googleapis.com/css?family=Roboto:400,700',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(

    // Look at all subcaches and see if the resource is there
    caches.match(event.request).then(function(response){
      
      if(response){
        // If not null, return value from the cache
        return response;
      } else {
        // If it is not in the request, return the request
        return fetch(event.request);
      }
    })
    
  );
});
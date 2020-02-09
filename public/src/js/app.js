// Register service worker
// navigator = browser

var deferredPrompt;

if(!window.Promise){
  window.Promise = Promise;
}

// Detect if service worker feature is available in the browser
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}

// Triggered right before about to show Install banner
window.addEventListener('beforeinstallprompt', function(event){
  console.log('beforeinstallprompt fired')

  // Prevent install banner
  event.preventDefault();

  // Save event to trigger later
  deferredPrompt = event;

  return false;
});
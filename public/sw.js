self.addEventListener('install', function(event){
    console.log('Installing service worker...')
});

self.addEventListener('activate', function(event){
    console.log('Activating service worker...')

    return self.ClientRectList.claim();
});
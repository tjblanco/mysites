var filesToCache = [
    '.',
    'SitesMapContainer.js',
    'SitesMap.js',
    'SitesMap.js',
    'SitesFilterList.js',
    'SitesFilterApp.js',
    'SitesFilter.js',
    'responsive.css',
    'reducer.js',
    'menu.svg',
    'Marker.js',
    'index.js',
    'index.css',
    'GoogleApiComponent.js',
    'FoursquareApiComponent.js',
    'config.js',
    'App.css',
    'action_creators.js',
    'utils/GoogleApi.js',
    'utils/ScriptCache.js'
];

var staticCacheName = 'sites-cache-v1';

self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
        caches.open(staticCacheName)
            .then(function(cache) {
                return cache.addAll(filesToCache);
            })
    );
});




self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open('staticCacheName').then(function(cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});
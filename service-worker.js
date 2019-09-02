// 'use strict';
// CODELAB: Update cache names any time any of the cached files change.
let CACHE_NAME = 'static-cache-v1';

let FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/css/main.css',
    '/webs/index.html',
    '/js/main_nojq.js',
    '/js/spa_nojq.js',
    '/js/music_nojq.js',
    '/assets/images/background-cover.jpg',
    '/assets/images/avatar.jpg',
    '/assets/images/favicon.png',
    '/assets/images/favicon.png?',
    '/assets/theWorldIsYours.mp3'
];
async function precache(){
    const cache = await caches.open(CACHE_NAME);
    console.log('[ServiceWorker] Pre-caching offline page');
    return cache.addAll(FILES_TO_CACHE);
}

async function clearCache(){
    const keyList = await caches.keys();
    return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
        }
    }));
}

this.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Install');
    // CODELAB: Precache static resources here.
    event.waitUntil(
        precache()
    );
    this.skipWaiting();
});

this.addEventListener('activated', (event) => {
    console.log('[ServiceWorker] Activate');
    // CODELAB: Remove previous cached data from disk.
    event.waitUntil(
        clearCache()

    );

});

self.addEventListener('fetch', (event) => {
    console.log('[ServiceWorker] Fetch', event.request.url);
    // CODELAB: Add fetch event handler here.
    event.respondWith(
        fetch(event.request).catch(function(){
            return caches.match(event.request);
        }))

});
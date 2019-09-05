// 'use strict';
// CODELAB: Update cache names any time any of the cached files change.
let CACHE_NAME = 'static-cache-v1';

let FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/css/main.css',
    '/webs/index',
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

async function saveToCache(req, res){
    const cache = await caches.open(CACHE_NAME);
    console.log('[ServiceWorker] Pre-caching offline page');
    return cache.put(req,res);
}

async function fetchAndCache(req){
    const res = await fetch(req);
    saveToCache(req, res.clone());
    return res;
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
        precache().then(self.skipWaiting)
    );

});

this.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activate');
    // CODELAB: Remove previous cached data from disk.
    event.waitUntil(
        Promise.all([
            clearCache(),
            self.clients.claim()
        ])

    );

});

self.addEventListener('fetch', (event) => {
    console.log('[ServiceWorker] Fetch', event.request.url);
    // CODELAB: Add fetch event handler here.
    // 只针对同源请求，走service worker, 不同的走CDN
    let url = new URL(event.request.url);
    if(url.origin !== self.origin){
        return; 
    }

    

    event.respondWith(
        //优先从网上获取，失败后回退到catch()
        fetch(event.request).catch(function(){
            //从本地返回
            return caches.match(event.request);
        }))

});
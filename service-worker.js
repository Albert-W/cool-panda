// 'use strict';
// CODELAB: Update cache names any time any of the cached files change.
let CACHE_NAME = 'static-cache-v1.05';

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
    // let url = new URL(event.request.url);
    // // url is an object.
    // console.log(url);
    // if(url.origin !== self.origin){
    //     return; 
    // }
    //优先从网上获取，失败后回退到caches.match();
    event.respondWith(
        fetchAndCache(event.request).catch(function(){
            //从本地返回
            console.log("response from caches.")
            return caches.match(event.request);
        })
    )


    // if url contains '/webs/index', 优先从网上获取，失败后回退到catch()
    // if(event.request.url.includes('/webs/')){
    //     event.respondWith(
    //         fetchAndCache(event.request).catch(function(){
    //             //从本地返回
    //             console.log("response from caches.")
    //             return caches.match(event.request);
    //         })
    //     )
    // } else{

    //     event.respondWith(
    
    //         // 优先从本地缓存，失败后从网络获取
    //         // caches.match(event.request).then(function(response){
    //         //     return response || fetchAndCache(event.request);
    //         // })
    //         caches.match(event.request).then(function (response) {
    //             // 来来来，代理可以搞一些代理的事情
    
    //             // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
    //             if (response) {
    //                 return response;
    //             }
    
    //             // 如果 service worker 没有返回，那就得直接请求真实远程服务
    //             var request = event.request.clone(); // 把原始请求拷过来
    //             return fetch(request).then(function (httpRes) {
    
    //                 // http请求的返回已被抓到，可以处置了。
    
    //                 // 请求失败了，直接返回失败的结果就好了。。
    //                 if (!httpRes || httpRes.status !== 200) {
    //                     return httpRes;
    //                 }
    
    //                 // 请求成功的话，将请求缓存起来。
    //                 var responseClone = httpRes.clone();
    //                 caches.open(CACHE_NAME).then(function (cache) {
    //                     cache.put(event.request, responseClone);
    //                 });
    
    //                 return httpRes;
    //             });
    //         })
            
    //     )
});
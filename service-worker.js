self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('sinksen-v2').then(cache => cache.addAll([
      './','./index.html','./manifest.json','./service-worker.js','./icon512.png'
    ]))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(r => r || fetch(event.request))
  );
});
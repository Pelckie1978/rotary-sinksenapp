self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('sinksen-v6').then(cache => cache.addAll([
      './','./index.html','./manifest.json','./service-worker.js','./icon512.png'
    ]))
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== 'sinksen-v6').map(k => caches.delete(k))))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});
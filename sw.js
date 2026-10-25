const CACHE_NAME = 'pulse-acls-v2';
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('pulse-acls-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())); });

self.addEventListener('install', (event) => {
  console.log('SW installed');
});

// CRITICAL: Chrome needs to see a 'fetch' listener to enable the Install button
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

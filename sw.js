self.addEventListener('install', (event) => {
  console.log('SW installed');
});

// CRITICAL: Chrome needs to see a 'fetch' listener to enable the Install button
self.addEventListener('fetch', (event) => {
// If the URL has Epic's login code, don't use the cache!
  if (event.request.url.includes('code=')) {
    return fetch(event.request);
  }
  // Otherwise, do the normal stuff
  event.respondWith(fetch(event.request));
});

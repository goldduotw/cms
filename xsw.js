// sw.js
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // CRITICAL: If the URL contains 'code=' or 'state=', 
  // skip the cache entirely and go to the real internet.
  if (url.searchParams.has('code') || url.searchParams.has('state')) {
    return; // Do nothing; let the browser handle it normally
  }

  // Normal caching for everything else (images, css, etc.)
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

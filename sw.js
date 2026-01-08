self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. If this is a login redirect from Epic, ALWAYS use the network
  if (url.searchParams.has('code') || url.searchParams.has('state')) {
    return; // This lets the browser handle the request normally
  }

  // 2. Otherwise, use your standard caching strategy
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

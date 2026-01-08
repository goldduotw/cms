self.addEventListener('install', (event) => {
  // Forces the waiting service worker to become the active one immediately
  self.skipWaiting(); 
});

self.addEventListener('activate', (event) => {
  // Ensures the SW takes control of the page immediately without needing a reload
  event.waitUntil(clients.claim()); 
});

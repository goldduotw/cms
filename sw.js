// sw.js
self.addEventListener('install', (event) => {
  console.log('SW Installed');
});

self.addEventListener('fetch', (event) => {
  // Even an empty fetch handler satisfies the browser's requirement
});

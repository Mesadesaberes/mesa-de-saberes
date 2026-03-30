const CACHE_NAME = 'mesa-de-saberes-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi80BqLIEgPgKvALMz4bFvnnrGpdYDCFnFHQBAsphH2PJ8ll-OunVKF_Kr4AiEuCONPPxoh9F3rKUb9foh5-F_dzRzAQbVQyGoFwtxgqsRjIBrDNU-7aGsXfI9nqPCsuAWOAws_CITm3lY8C2pokSulVjvt-uBISanSuo2QTlSCt-yXCLDrj0CIGYWaEV0/s320/Logo%20Saberes%20de%20Mesa%20Quadrado.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

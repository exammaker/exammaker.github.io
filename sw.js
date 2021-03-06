// Service Worker for Exam Maker
self.addEventListener('install', (event) => {
	// This is where precaching occurs
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			if (response) {
				return response;
			}

			return fetch(event.request).then(
				function(response) {
				if(!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}
				var responseToCache = response.clone();

				caches.open("runtime_cache")
				.then(function(cache) {
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		})
	);
});
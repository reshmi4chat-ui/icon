self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("calc-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./app.js",
        "./manifest.webmanifest"
      ]);
    })
  );
});

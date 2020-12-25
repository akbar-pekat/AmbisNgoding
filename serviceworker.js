const staticMangan = "Mangan-site-v1"
const assets = [
  "/",
  "index.html",
  "css/index.css",
  "js/index.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMangan).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
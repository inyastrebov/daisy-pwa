const GHPATH = '/daisy-pwa';

const staticCashName = 's-app-v3'

const assetUrls = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/style.css`,
  `${GHPATH}/js/swiper.js`,
]

self.addEventListener('install', async event => {
  // const cashe = await caches.open(staticCashName)
  // await cache.addAll(assetUrls)
  event.waitUntil(
    caches.open(staticCashName).then(cache => cache.addAll(assetUrls))
  )
})

self.addEventListener('activate', async event => {
  const cacheNames = await caches.keys()
  await Promise.all(
    cacheNames
      .filter(name => name != staticCashName)
      .map(name => caches.delete(name))
  )
})

self.addEventListener('fetch', event => {
  console.log('fetch', event.request.url)

  event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
  const cached = await caches.match(request)
  return cached ?? await fetch(request)
}
const CACHE='pwa-v2'; // ← バージョンをv2に上げて古い記憶を消去
const ASSETS=['/calendar20777789/','/calendar20777789/index.html','/calendar20777789/manifest.json'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  if(!e.request.url.startsWith(self.location.origin))return;
  // ★ 常に最新のファイルをネットから取りに行き、ダメな時だけキャッシュを使う（Network-First）
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const resClone = res.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, resClone));
        return res;
      })
      .catch(() => caches.match(e.request).then(r=>r||caches.match('/calendar20777789/index.html')))
  );
});

const CACHE='pwa-v4';
const ASSETS=['/calendar20777789/','/calendar20777789/index.html','/calendar20777789/manifest.json'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting(); // 新しいバージョンを即座に待機状態からアクティブにする
});

self.addEventListener('activate',e=>{
  // v4以外の古いキャッシュ(v3など)を全て削除してクリーンにする
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  if(!e.request.url.startsWith(self.location.origin))return;
  // ネットワークを優先し、通信できればキャッシュを最新化。オフライン時のみキャッシュを返す（Network-First）
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

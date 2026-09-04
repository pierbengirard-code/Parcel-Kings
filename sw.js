const CACHE_VERSION="box-or-bust-20260904-2318";
const CORE=["./","./index.html","./jeu.html","./landing.css?v=3","./landing-performance.css?v=1","./styles.css?v=70","./branding.css?v=1","./achievements.css?v=1","./inventaire.js?v=1","./achievements.js?v=4","./game.js?v=100","./cloud-save.js?v=3","./auth-client.js?v=1","./assets/backgrounds/depot-conteneur.png","./assets/boxes/colis-perdu.png","./assets/icons/logo-box-or-bust.webp","./assets/icons/box-or-bust-64.png","./assets/icons/box-or-bust-512.png"];

self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE_VERSION).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_VERSION).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});

async function networkFirst(request){
  try{
    const response=await fetch(request);
    if(response.ok)(await caches.open(CACHE_VERSION)).put(request,response.clone());
    return response
  }catch{
    return (await caches.match(request))||(request.mode==="navigate"?caches.match("./index.html"):Response.error())
  }
}

async function cacheFirst(request){
  const cached=await caches.match(request);
  if(cached)return cached;
  const response=await fetch(request);
  if(response.ok)(await caches.open(CACHE_VERSION)).put(request,response.clone());
  return response
}

self.addEventListener("fetch",event=>{
  const request=event.request;
  if(request.method!=="GET")return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  const isAsset=/\.(?:png|webp|svg|glb|woff2?)$/i.test(url.pathname);
  event.respondWith(isAsset?cacheFirst(request):networkFirst(request));
});

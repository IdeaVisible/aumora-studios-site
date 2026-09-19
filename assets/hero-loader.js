(() => {
 const host=document.querySelector('[data-hero-scene]');
 if(!host)return;
 host.dataset.sceneState='poster';
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const connection=navigator.connection;
 if(reduced.matches||connection?.saveData||!window.WebGL2RenderingContext)return;
 const start=()=>import('./hero3d.bundle.js').then(module=>module.mountHero(host)).catch(error=>{
  host.querySelector('canvas')?.remove();host.dataset.sceneState='fallback';
  document.querySelector('.aumora-scene-tools').hidden=true;
  console.warn('Aumora scene unavailable; retaining the poster.',error);
 });
 const poster=host.querySelector('img');
 const ready=poster.complete?Promise.resolve():new Promise(resolve=>{poster.addEventListener('load',resolve,{once:true});poster.addEventListener('error',resolve,{once:true});});
 ready.then(()=>{if('requestIdleCallback' in window)requestIdleCallback(start,{timeout:900});else setTimeout(start,80);});
})();

(() => {
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 let disabled=reduce.matches, animation=0, previous=null;
 const fields=[];
 document.querySelector('.window-title span').textContent='~/rootforce — terminal';
 const toggle=document.createElement('button');toggle.className='motion-toggle';toggle.type='button';
 const label=()=>{toggle.textContent=disabled?'ASCII / ВКЛЮЧИТЬ':'ASCII / СЛЕД КУРСОРА';toggle.setAttribute('aria-pressed',String(!disabled));};
 function clear(){fields.forEach(f=>{f.cells.clear();f.ctx.clearRect(0,0,f.w,f.h);});previous=null;}
 label();document.querySelector('.hero').append(toggle);
 toggle.addEventListener('click',()=>{disabled=!disabled;clear();label();});
 reduce.addEventListener('change',()=>{disabled=reduce.matches;clear();label();});
 function cloud(seed){
  const random=n=>{const v=Math.sin(n*127.1+seed*311.7)*43758.5453;return v-Math.floor(v);};
  const points=Array.from({length:8},(_,r)=>Array.from({length:14},(_,c)=>[c*55+(random(r*14+c)-.5)*35,r*45+(random(r*20+c+1)-.5)*30]));
  let facets='';const colors=['#c0cfd6','#dce4e6','#c9d8e0','#e8ece9','#c9c9dc','#d7ddd2','#e9e9de'];
  for(let r=0;r<7;r++)for(let c=0;c<13;c++){
   const a=points[r][c],b=points[r][c+1],d=points[r+1][c],e=points[r+1][c+1];
   facets+=`<polygon points="${[a,b,d].map(p=>p.join(',')).join(' ')}" fill="${colors[Math.floor(random(r*19+c)*colors.length)]}"/><polygon points="${[b,e,d].map(p=>p.join(',')).join(' ')}" fill="${colors[Math.floor(random(r*29+c+77)*colors.length)]}"/>`;
  }
  return `<svg class="poly-cloud" viewBox="0 0 700 310" aria-hidden="true"><defs><clipPath id="cloud-${seed}"><path d="M38 240L16 214L30 177L74 154L120 157L145 104L198 83L249 100L274 48L325 22L373 39L409 78L449 66L499 84L523 128L563 117L610 143L624 173L665 185L685 221L661 255L588 274L475 280L367 270L266 282L159 268L85 269Z"/></clipPath></defs><g clip-path="url(#cloud-${seed})">${facets}</g></svg>`;
 }
 document.querySelectorAll('.hero,.approach,.garden').forEach((section,index)=>{
  const clouds=document.createElement('div');clouds.className='cloudscape';clouds.setAttribute('aria-hidden','true');clouds.innerHTML=cloud(index*2+1)+cloud(index*2+2);section.prepend(clouds);
  const canvas=document.createElement('canvas');canvas.className='ascii-field';canvas.setAttribute('aria-hidden','true');section.prepend(canvas);
  const ctx=canvas.getContext('2d');if(!ctx)return;
  const f={section,ctx,cells:new Map(),w:0,h:0,dark:index===1};fields.push(f);
  new ResizeObserver(()=>{f.w=section.clientWidth;f.h=section.clientHeight;const dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(f.w*dpr);canvas.height=Math.round(f.h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);f.cells.clear();}).observe(section);
 });
 const chars='.:+*x%#@';
 function render(now){let alive=false;
  for(const f of fields){const {ctx,cells}=f;ctx.clearRect(0,0,f.w,f.h);ctx.font='11px "IBM Plex Mono", monospace';ctx.textBaseline='top';
   for(const [key,p] of cells){const age=(now-p.born)/1100;if(age>=1){cells.delete(key);continue;}alive=true;ctx.globalAlpha=p.strength*Math.pow(1-age,1.7)*.85;ctx.fillStyle=`hsl(${(p.hue+age*110)%360} 65% ${f.dark?73:43}%)`;ctx.fillText(chars[(p.symbol+Math.floor(age*8))%chars.length],p.x,p.y);}ctx.globalAlpha=1;
  }animation=alive?requestAnimationFrame(render):0;
 }
 function stamp(f,x,y,now){const radius=92;
  for(let gy=Math.floor((y-radius)/14);gy<=Math.ceil((y+radius)/14);gy++)for(let gx=Math.floor((x-radius)/11);gx<=Math.ceil((x+radius)/11);gx++){
   const px=gx*11,py=gy*14,dist=Math.hypot(px-x,py-y);if(dist>radius||px<0||py<0||px>f.w||py>f.h)continue;
   const hash=Math.abs(Math.sin(gx*12.98+gy*78.23));if(hash<.16)continue;
   f.cells.set(`${gx},${gy}`,{x:px,y:py,born:now,strength:Math.pow(1-dist/radius,.65),hue:155+hash*155+now*.035,symbol:Math.floor(hash*chars.length)});
  }while(f.cells.size>2600)f.cells.delete(f.cells.keys().next().value);
 }
 document.addEventListener('pointermove',e=>{
  if(disabled||document.hidden||e.pointerType==='touch')return;
  const point={x:e.clientX,y:e.clientY};if(previous&&Math.hypot(point.x-previous.x,point.y-previous.y)<2)return;
  const now=performance.now();
  for(const f of fields){const rect=f.section.getBoundingClientRect();if(point.y<rect.top||point.y>rect.bottom||point.x<rect.left||point.x>rect.right)continue;
   const distance=previous?Math.hypot(point.x-previous.x,point.y-previous.y):0;const count=Math.min(7,Math.max(1,Math.ceil(distance/25)));
   for(let i=1;i<=count;i++){const t=i/count;stamp(f,(previous?previous.x+(point.x-previous.x)*t:point.x)-rect.left,(previous?previous.y+(point.y-previous.y)*t:point.y)-rect.top,now);}
  }previous=point;if(!animation)animation=requestAnimationFrame(render);
 },{passive:true});
 document.addEventListener('pointerout',e=>{if(!e.relatedTarget)previous=null;});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)clear();});
 window.addEventListener('scroll',()=>{previous=null;},{passive:true});
})();

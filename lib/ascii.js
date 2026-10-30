export function setupAscii() {
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 let disabled=reduce.matches, animation=0, previous=null;
 const fields=[];
 const controller = new AbortController();
 const observers=[];
 const elements=[];
 const listen=(target,event,handler,options={})=>target.addEventListener(event,handler,{...options,signal:controller.signal});

 const toggle=document.createElement('button');toggle.className='motion-toggle';toggle.type='button';
 const label=()=>{toggle.textContent=disabled?'ASCII / ВКЛЮЧИТЬ':'ASCII / СЛЕД КУРСОРА';toggle.setAttribute('aria-pressed',String(!disabled));};
 function clear(){fields.forEach(f=>{f.cells.clear();f.ctx.clearRect(0,0,f.w,f.h);});previous=null;}
 label();document.querySelector('.hero').append(toggle);elements.push(toggle);
 listen(toggle,'click',()=>{disabled=!disabled;clear();label();});
 listen(reduce,'change',()=>{disabled=reduce.matches;clear();label();});
 document.querySelectorAll('.hero,.approach,.garden').forEach((section,index)=>{
  const clouds=document.createElement('div');clouds.className='cloudscape';clouds.setAttribute('aria-hidden','true');section.prepend(clouds);elements.push(clouds);
  const canvas=document.createElement('canvas');canvas.className='ascii-field';canvas.setAttribute('aria-hidden','true');section.prepend(canvas);elements.push(canvas);
  const ctx=canvas.getContext('2d');if(!ctx)return;
  const f={section,ctx,cells:new Map(),w:0,h:0,dark:index===1};fields.push(f);
  const observer=new ResizeObserver(()=>{f.w=section.clientWidth;f.h=section.clientHeight;const dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(f.w*dpr);canvas.height=Math.round(f.h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);f.cells.clear();});observer.observe(section);observers.push(observer);
 });
 const chars='.:+*x%#@';
 function render(now){let alive=false;
  for(const f of fields){const {ctx,cells}=f;ctx.clearRect(0,0,f.w,f.h);ctx.font='11px "IBM Plex Mono", monospace';ctx.textBaseline='top';
   for(const [key,p] of cells){const age=(now-p.born)/1400;if(age>=1){cells.delete(key);continue;}alive=true;if(age<0)continue;ctx.globalAlpha=p.strength*Math.min(1,age/.12)*Math.pow(1-age,1.4)*.95;ctx.fillStyle=`hsl(${(p.hue+age*110)%360} 65% ${f.dark?73:43}%)`;ctx.fillText(chars[(p.symbol+Math.floor(age*8))%chars.length],p.x,p.y+Math.sin(age*8+p.x*.018)*7*age);}ctx.globalAlpha=1;
  }animation=alive?requestAnimationFrame(render):0;
 }
 function stamp(f,x,y,now){const radius=110;
  for(let gy=Math.floor((y-radius)/14);gy<=Math.ceil((y+radius)/14);gy++)for(let gx=Math.floor((x-radius)/11);gx<=Math.ceil((x+radius)/11);gx++){
   const px=gx*11,py=gy*14,dist=Math.hypot(px-x,py-y);if(dist>radius||px<0||py<0||px>f.w||py>f.h)continue;
   const hash=Math.abs(Math.sin(gx*12.98+gy*78.23));if(hash<.16)continue;
   const existing=f.cells.get(`${gx},${gy}`);if(existing && now-existing.born<180)continue; f.cells.set(`${gx},${gy}`,{x:px,y:py,born:now+150+dist*1.8,strength:Math.pow(1-dist/radius,.65),hue:155+hash*155+now*.035,symbol:Math.floor(hash*chars.length)});
  }while(f.cells.size>2600)f.cells.delete(f.cells.keys().next().value);
 }
 listen(document,'pointermove',e=>{
  if(disabled||document.hidden||e.pointerType==='touch')return;
  const point={x:e.clientX,y:e.clientY};if(previous&&Math.hypot(point.x-previous.x,point.y-previous.y)<2)return;
  const now=performance.now();
  for(const f of fields){const rect=f.section.getBoundingClientRect();if(point.y<rect.top||point.y>rect.bottom||point.x<rect.left||point.x>rect.right)continue;
   const distance=previous?Math.hypot(point.x-previous.x,point.y-previous.y):0;const count=Math.min(7,Math.max(1,Math.ceil(distance/25)));
   for(let i=1;i<=count;i++){const t=i/count;stamp(f,(previous?previous.x+(point.x-previous.x)*t:point.x)-rect.left,(previous?previous.y+(point.y-previous.y)*t:point.y)-rect.top,now);}
  }previous=point;if(!animation)animation=requestAnimationFrame(render);
 },{passive:true});
 listen(document,'pointerout',e=>{if(!e.relatedTarget)previous=null;});
 listen(document,'visibilitychange',()=>{if(document.hidden)clear();});
 listen(window,'scroll',()=>{previous=null;},{passive:true});
 return () => { controller.abort(); cancelAnimationFrame(animation); observers.forEach(observer=>observer.disconnect()); elements.forEach(element=>element.remove()); };
}
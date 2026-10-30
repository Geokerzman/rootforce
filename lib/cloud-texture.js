// A static, dithered cloud field: no continuous background animation.
let cachedTexture;
export function paintClouds() {
 if(cachedTexture){applyTexture(cachedTexture);return;}
 const fract=v=>v-Math.floor(v), mix=(a,b,t)=>a+(b-a)*t;
 const hash=(x,y)=>fract(Math.sin(x*127.1+y*311.7)*43758.5453123);
 function noise(x,y){const ix=Math.floor(x),iy=Math.floor(y);let fx=fract(x),fy=fract(y);fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);return mix(mix(hash(ix,iy),hash(ix+1,iy),fx),mix(hash(ix,iy+1),hash(ix+1,iy+1),fx),fy);}
 function fbm(x,y){let v=0,a=.55;for(let i=0;i<5;i++){v+=a*noise(x,y);x=x*2.03+7.1;y=y*2.01+3.7;a*=.48;}return v;}
 const canvas=document.createElement('canvas');canvas.width=1100;canvas.height=700;
 const ctx=canvas.getContext('2d');if(!ctx)return;
 const image=ctx.createImageData(canvas.width,canvas.height);
 const cyan=[83,187,210],violet=[166,98,224],pink=[245,113,187],peach=[255,190,196];
 for(let y=0;y<700;y++)for(let x=0;x<1100;x++){
  const u=x/1100,v=y/700;
  const warp=fbm(u*3.3+15,v*3.7+6);
  const n=fbm(u*5+warp*2.5,v*5+warp*2.2);
  const detail=fbm(u*14+10,v*13);
  const contour=u*.65+n*.5-.03+Math.sin(v*6+u*5)*.12;
  let c,t;
  if(contour<.48){t=Math.max(0,(contour-.27)/.21);c=cyan.map((k,i)=>mix(k,violet[i],t));}
  else if(contour<.69){t=(contour-.48)/.21;c=violet.map((k,i)=>mix(k,pink[i],t));}
  else{t=Math.min(1,(contour-.69)/.35);c=pink.map((k,i)=>mix(k,peach[i],t));}
  const edge=.47+n*.48;
  const fade=Math.max(0,Math.min(1,(edge-v)/.32));
  const grain=(hash(x+317,y+41)-.5)*43;
  const dither=(hash(Math.floor(x/2),Math.floor(y/2))>.72?19:-5)*(1-v*.6);
  const shade=(detail-.48)*47;
  const i=(y*1100+x)*4;
  for(let ch=0;ch<3;ch++)image.data[i+ch]=Math.max(0,Math.min(255,c[ch]+grain+dither+shade));
  image.data[i+3]=Math.round(fade*fade*(3-2*fade)*245);
 }
 ctx.putImageData(image,0,0);
 const url=canvas.toDataURL('image/png');
 cachedTexture=url;applyTexture(url);
}
function applyTexture(url) {
 document.querySelectorAll('.cloudscape').forEach(el=>{el.replaceChildren();el.style.backgroundImage=`url("${url}")`;});
}
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduce.matches;
  const hero = document.querySelector('.hero');
  const panel = document.createElement('div');
  panel.className = 'signal-panel';
  panel.setAttribute('aria-hidden', 'true');
  panel.textContent = '[ ROOT / SYSTEM 001 ]\n> idea.initialize()\n> human + machine\n> possibilities: ∞';
  hero.append(panel);
  const right = panel.cloneNode();
  right.classList.add('right');
  right.textContent = 'RF.DEV / GENERATIVE FIELD\n01 00 11 01 10 01\n[ DESIGN → BUILD → GROW ]\nSTATUS: EXPLORING';
  hero.append(right);
  document.querySelector('.window-title span').textContent = '~/rootforce — terminal';
  document.querySelector('.window-body').innerHTML = '<span style="color:#597a49">$</span> make something meaningful<br><span style="color:#597a49">→</span> Идея готова к запуску <span class="blink">▌</span>';
  const toggle = document.createElement('button');
  toggle.className = 'motion-toggle';
  toggle.type = 'button';
  function label() { toggle.textContent = paused ? '▶ ASCII / ПРОДОЛЖИТЬ' : 'Ⅱ ASCII / ПАУЗА'; toggle.setAttribute('aria-pressed',String(paused)); }
  label();
  toggle.addEventListener('click', () => { paused = !paused; label(); });
  hero.append(toggle);
  reduce.addEventListener('change', () => { paused = reduce.matches; label(); fields.forEach(f=>f.draw(time)); });
  const fields = [];
  let time = 0;
  const chars = ' .:+*x%#@';
  const palettes = [
    ['#277446','#328960','#287d8e','#336ac0','#5d52c3','#9150b9','#bc548b','#bf8062'],
    ['#467d58','#5d9f7c','#4b9eac','#688bc3','#8476c8','#b47fb5','#6ca3ba','#adbf77'],
    ['#537855','#668659','#768958','#678f83','#879266','#b09c50','#7a936c','#a7ac6e']
  ];
  document.querySelectorAll('.hero,.approach,.product-scene,.garden').forEach((section, index) => {
    const canvas = document.createElement('canvas');
    canvas.className = 'ascii-field';
    canvas.setAttribute('aria-hidden', 'true');
    section.prepend(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let w = 0, h = 0, visible = true;
    const palette = palettes[index === 0 ? 0 : index === 3 ? 2 : 1];
    const field = { draw(t) {
      if (!visible || !w || !h) return;
      ctx.clearRect(0, 0, w, h);
      const cellX = w < 600 ? 9 : 10, cellY = 13;
      ctx.font = '10px "IBM Plex Mono", monospace';
      ctx.textBaseline = 'top';
      const buckets = Array.from({length:8},()=>[]);
      for (let y=0; y<h; y+=cellY) {
        for (let x=0; x<w; x+=cellX) {
          const nx=x/w, ny=y/h;
          const a=Math.sin(nx*10+Math.sin(ny*8+t*.36)*2.5+t*.3);
          const b=Math.cos(ny*12-nx*5+t*.26);
          const c=Math.sin(Math.hypot((nx-.54)*1.5,ny-.4)*24-t*.5);
          const wave=(a+b+c)/3;
          const density=Math.max(0,Math.min(1,(wave+1)*.5));
          // A quiet central region preserves the headline, with dense fields around it.
          const quiet=index===0?Math.exp(-Math.pow((nx-.5)/.4,6)-Math.pow((ny-.53)/.22,6))*.91:index===1?.45:index===3?Math.exp(-Math.pow((nx-.5)/.34,4))*.8:0;
          const alpha=(.2+density*.65)*(1-quiet);
          const hash=Math.sin(x*12.9898+y*78.233)*43758.5453;
          const jitter=hash-Math.floor(hash);
          if (density<.18 && jitter>.3) continue;
          const char=chars[Math.min(chars.length-1,Math.floor(density*(chars.length-1)))];
          const color=((Math.floor(nx*5+ny*4+t*.22+wave*2)%8)+8)%8;
          buckets[color].push([x,y,char,alpha]);
        }
      }
      buckets.forEach((points,i)=>{ctx.fillStyle=palette[i];for(const [x,y,ch,alpha] of points){ctx.globalAlpha=alpha;ctx.fillText(ch,x,y)}});
      ctx.globalAlpha=1;
    }};
    fields.push(field);
    const resize = new ResizeObserver(() => {
      w=section.clientWidth;h=section.clientHeight;
      const dpr=Math.min(devicePixelRatio||1,1.5);
      canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
      field.draw(time);
    });
    resize.observe(section);
    new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)field.draw(time)},{rootMargin:'80px'}).observe(section);
  });
  let previous = 0;
  function frame(now) {
    if(now-previous>100){if(!paused&&!document.hidden){time+=.1;fields.forEach(f=>f.draw(time));}previous=now;}
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

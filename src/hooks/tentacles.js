(function(){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const isSmall = window.matchMedia('(max-width: 768px)').matches;
  const spans = Array.from(document.querySelectorAll('.jellyfish .tentacles span'));

  const animated = isSmall ? spans.filter((s, i) => i % 2 === 0) : spans;
  const jellyfish = Array.from(document.querySelectorAll('.jellyfish'));
  let endedCount = 0;

  const items = animated.map((el)=>({
    el,
    amp: 6 + Math.random() * 10,
    speed: 0.6 + Math.random() * 1.4,
    phase: Math.random() * Math.PI * 2,
    wobble: 0.2 + Math.random() * 0.8
  }));

  let start = performance.now();

  function frame(now){
    const t = (now - start) / 1000;
    const timeNoise = Math.sin(t * 0.5) * 0.5;
    items.forEach(it=>{
      const angle = Math.sin(t * it.speed + it.phase) * it.amp * (1 + it.wobble * timeNoise);
      it.el.style.transform = `rotate(${angle}deg)`;
    });
    requestAnimationFrame(frame);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(frame));
  } else {
    requestAnimationFrame(frame);
  }
})();

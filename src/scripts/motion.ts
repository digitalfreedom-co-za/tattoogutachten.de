// Scroll reveal and a subtle image parallax. No library, no layout reads in the scroll loop
// beyond one getBoundingClientRect per parallax element per frame.

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function revealAll(elements: Element[]): void {
  elements.forEach((el) => el.classList.add('is-visible'));
}

function initReveal(): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (elements.length === 0) return;

  // Stagger siblings inside a [data-reveal-group] container.
  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    group.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el, index) => {
      el.style.setProperty('--reveal-index', String(index));
    });
  });

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    revealAll(elements);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  elements.forEach((el) => observer.observe(el));
}

function initParallax(): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (elements.length === 0 || reducedMotion.matches) return;

  let ticking = false;
  let stopped = false;

  const update = () => {
    if (stopped) return;
    const viewport = window.innerHeight;
    for (const el of elements) {
      const rect = el.parentElement?.getBoundingClientRect();
      if (!rect || rect.bottom < 0 || rect.top > viewport) continue;
      const strength = Number(el.dataset.parallax) || 0.06;
      const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
      el.style.transform = `translate3d(0, ${(progress * strength * -100).toFixed(2)}%, 0)`;
    }
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // Honour a reduced motion preference switched on while the page is open.
  reducedMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    stopped = true;
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    elements.forEach((el) => el.style.removeProperty('transform'));
  });
}

initReveal();
initParallax();
reducedMotion.addEventListener('change', (event) => {
  if (event.matches) revealAll(Array.from(document.querySelectorAll('[data-reveal]')));
});
document.documentElement.classList.add('motion-ready');

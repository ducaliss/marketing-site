/* Decorative animation never runs in a hidden tab or outside the viewport. */
(() => {
  const button = document.querySelector('.hero-cinematic-cta');
  if (!button) return;
  let inView = false;
  const syncMotion = () => {
    button.classList.toggle('is-motion-active', inView && !document.hidden);
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncMotion();
    }, { threshold: 0.1 });
    observer.observe(button);
  } else {
    inView = true;
    syncMotion();
  }
  document.addEventListener('visibilitychange', syncMotion);
})();

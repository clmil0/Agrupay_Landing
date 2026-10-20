// Índice lateral: marca la sección que se está leyendo
(() => {
  const links = [...document.querySelectorAll('.toc a')];
  if (!links.length || !('IntersectionObserver' in window)) return;
  const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.classList.remove('on'));
      const a = byId.get(e.target.id);
      if (a) a.classList.add('on');
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
})();

// Small navigation enhancement; the hero is deliberately a still-image concept.
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-site-nav]');
  if (nav?.classList.contains('is-open')) {
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.focus();
  }
});
const heroMenuToggle = document.querySelector('[data-menu-toggle]');
const heroNav = document.querySelector('[data-site-nav]');
heroNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  heroMenuToggle.setAttribute('aria-label', 'Open navigation');
}));
const heroDesktop = matchMedia('(min-width: 901px)');
heroDesktop.addEventListener('change', event => {
  if (event.matches) {
    heroNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    heroMenuToggle.setAttribute('aria-expanded', 'false');
    heroMenuToggle.setAttribute('aria-label', 'Open navigation');
  }
});
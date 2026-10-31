
(() => {
  const body = document.body;
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-site-nav]');
  const servicesMenu = document.querySelector('[data-services-menu]');
  const servicesToggle = document.querySelector('[data-services-toggle]');

  if (servicesMenu) {
    document.addEventListener('click', (event) => {
      if (!servicesMenu.contains(event.target)) servicesMenu.open = false;
    });
    servicesMenu.addEventListener('focusout', (event) => {
      if (!servicesMenu.contains(event.relatedTarget)) servicesMenu.open = false;
    });
  }

  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove('is-open');
      body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      if (servicesMenu) servicesMenu.open = false;
    };
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      if (servicesMenu?.open) {
        servicesMenu.open = false;
        servicesToggle.focus();
      } else if (nav.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });
    const desktop = matchMedia(body.classList.contains('aumora-home') ? '(min-width: 901px)' : '(min-width: 851px)');
    desktop.addEventListener('change', (event) => { if (event.matches) closeMenu(); });
  }

  const file = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const serviceFiles = new Set([
    'application-development.html',
    'web3-development.html',
    'game-development.html',
    'interactive-experiences.html',
    'support-maintenance.html'
  ]);
  if (serviceFiles.has(file)) servicesToggle?.classList.add('is-current');
  document.querySelectorAll('[data-nav-file]').forEach((link) => {
    const target = (link.getAttribute('data-nav-file') || '').toLowerCase();
    if (target === file) {
      link.classList.add('is-current');
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -25px' });
    items.forEach((item) => {
      // Above-the-fold content is immediately readable; retain the live reveal
      // transition for sections entering the viewport as the visitor scrolls.
      if (item.getBoundingClientRect().top >= window.innerHeight) item.classList.add('is-pending');
      else item.classList.add('is-visible');
      observer.observe(item);
    });
  } else {
    items.forEach((item) => item.classList.add('is-visible'));
  }

  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  const prepare = form.querySelector('[data-prepare]');
  const note = form.querySelector('[data-form-note]');
  const result = form.querySelector('[data-draft-result]');
  const brief = form.querySelector('[data-brief]');
  const draft = form.querySelector('[data-email-draft]');
  prepare.disabled = false;
  prepare.hidden = false;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const get = (key) => String(values.get(key) || '').trim();
    const subject = `Project enquiry: ${get('service')}`;
    brief.value = `Hello Aumora Studios,\n\n${get('message')}\n\nName: ${get('name')}\nCompany: ${get('company') || 'Not specified'}\nEmail: ${get('email')}\nService: ${get('service')}\nStage: ${get('stage')}\nIndicative budget: ${get('budget')}`;
    draft.href = `mailto:info@aumorastudios.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief.value)}`;
    result.hidden = false;
    note.textContent = 'Your brief is ready. Open the email draft or copy it into your email. Nothing has been sent yet.';
    draft.focus({ preventScroll: true });
  });
  form.addEventListener('input', (event) => {
    if (event.target === brief) return;
    result.hidden = true;
    note.textContent = '';
    draft.removeAttribute('href');
    brief.value = '';
  });
  form.querySelector('[data-copy-brief]').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(brief.value);
      note.textContent = 'Brief copied. Paste it into an email to info@aumorastudios.com.';
    } catch {
      brief.focus();
      brief.select();
      note.textContent = 'The brief is selected. Copy it into an email to info@aumorastudios.com.';
    }
  });
})();

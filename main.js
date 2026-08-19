/* ThePeace.net — client-side interactions */

// Progressive-enhancement flag: only apply "reveal-off" styling when JS is available
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.nav-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close drawer on link click
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close drawer on outside click
    document.addEventListener('click', (e) => {
      if (
        drawer.classList.contains('open') &&
        !drawer.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960 && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const reveals = document.querySelectorAll('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    // Elements already in the initial viewport show immediately;
    // the rest are watched.
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        el.classList.add('in');
      } else {
        observer.observe(el);
      }
    });

    // Safety net: if the page never scrolls (some crawlers, screenshot tools,
    // very short pages), reveal everything after a brief delay.
    setTimeout(() => {
      reveals.forEach(el => el.classList.add('in'));
    }, 2000);
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  /* ---------- Contact form (client-side confirmation only) ---------- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Simulate send (replace with real backend integration)
      setTimeout(() => {
        btn.textContent = 'Message Sent ✓';
        btn.style.background = 'linear-gradient(135deg, #C9A961, #E6B94F)';
        btn.style.color = '#2A1810';
        form.reset();

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
          btn.disabled = false;
        }, 3000);
      }, 900);
    });
  }

  /* ---------- Set current year in footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

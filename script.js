const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.primary-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 80}ms`;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  },
);

revealItems.forEach((item) => observer.observe(item));

const year = document.getElementById('year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}

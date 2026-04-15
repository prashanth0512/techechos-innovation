function createBubbles() {
  const container = document.querySelector('.bubble-container');
  if (!container) return;

  if (window.location.pathname.includes('contact.html')) {
    container.style.display = 'none';
    return;
  }

  const screenWidth = window.innerWidth;
  const bubbleCount = screenWidth < 640 ? 10 : 20;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 40 + 15 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDelay = Math.random() * 10 + 's';
    bubble.style.setProperty('--duration', Math.random() * 5 + 7 + 's');
    container.appendChild(bubble);
  }
}

function initFloatingBg() {
  const container = document.querySelector('.floating-bg');
  if (!container) return;

  for (let i = 0; i < 6; i++) {
    const el = document.createElement('div');
    el.className = 'float-el';
    const size = Math.random() * 200 + 100;
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.top = Math.random() * 100 + '%';
    el.style.left = Math.random() * 100 + '%';
    el.style.setProperty('--d', (Math.random() * 10 + 10) + 's');
    container.appendChild(el);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createBubbles();
  initFloatingBg();
  revealOnScroll();
  initHamburger();
});

function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
  }
}

function revealOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));
}

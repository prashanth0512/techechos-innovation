
const sidebarToggle = document.getElementById('sidebarToggle');
const adminSidebar = document.getElementById('adminSidebar');
const adminMain = document.getElementById('adminMain');

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    if (window.innerWidth <= 860) {
      adminSidebar.classList.toggle('mobile-open');
    } else {
      adminSidebar.classList.toggle('collapsed');
      adminMain.classList.toggle('full');
    }
  });
}

function showPage(pageId) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.add('hidden'));
  const target = document.getElementById('page-' + pageId);
  if (target) { target.classList.remove('hidden'); }

  document.querySelectorAll('.sidebar-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });

  setTimeout(() => {
    target && target.querySelectorAll('.chart-bar').forEach(bar => {
      bar.style.height = '0';
      setTimeout(() => { bar.style.height = (bar.dataset.h || 50) + '%'; }, 80);
    });
  }, 50);

  const titles = {
    dashboard:'Dashboard', projects:'Projects', clients:'Clients', messages:'Messages',
    revenue:'Revenue', invoices:'Invoices', analytics:'Analytics',
    blog:'Blog Posts', jobs:'Job Listings', settings:'Settings', security:'Security'
  };
  const titleEl = document.querySelector('.topbar-user-name');
  if (titleEl) titleEl.textContent = 'Yashrub U.';
}

document.querySelectorAll('.sidebar-link[data-page]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
    if (window.innerWidth <= 860) {
      adminSidebar.classList.remove('mobile-open');
    }
  });
});

document.querySelectorAll('.nav-link-btn[data-page]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    showPage(btn.dataset.page);
  });
});

window.addEventListener('load', () => {
  document.querySelectorAll('#page-dashboard .chart-bar').forEach(bar => {
    const h = bar.dataset.h || 50;
    setTimeout(() => { bar.style.height = h + '%'; }, 200);
  });
});

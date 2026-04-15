document.addEventListener('DOMContentLoaded', () => {
    // Discover the root path of the project based on the script source
    const scripts = document.getElementsByTagName('script');
    let rootPath = '';
    for (let script of scripts) {
        if (script.src.includes('navigation/script.js')) {
            // e.g. "http://localhost/navigation/script.js" -> "http://localhost/"
            // e.g. "file:///C:/.../navigation/script.js" -> "file:///C:/.../"
            rootPath = script.src.split('navigation/script.js')[0];
            break;
        }
    }

    // Embed HTML templates directly to fix CORS issues when opening local files directly (file:///)
    const headerHTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a href="{{ROOT}}/Home/home.html" class="nav-logo">
      <img src="{{ROOT}}/images/logo1.svg" class="nav-logo-img" alt="Techechos Logo"/>
      <span class="nav-logo-text brand-text-anim">Techechos Innovation</span>
    </a>
    <ul class="nav-links">
      <li class="dropdown">
        <a href="{{ROOT}}/Home/home.html">Home <span class="nav-arrow">▾</span></a>
        <ul class="drop-menu">
          <li><a href="{{ROOT}}/Home/home.html">Home 1</a></li>
          <li><a href="{{ROOT}}/Home2/home2.html">Home 2</a></li>
        </ul>
      </li>
      <li><a href="{{ROOT}}/About/about.html">About</a></li>
      <li class="dropdown">
        <a href="{{ROOT}}/Services/services.html">Services <span class="nav-arrow">▾</span></a>
        <ul class="drop-menu">
          <li><a href="{{ROOT}}/Services/service-detail.html?service=website-design">Website Design</a></li>
          <li><a href="{{ROOT}}/Services/service-detail.html?service=mobile-applications">Mobile Applications</a></li>
          <li><a href="{{ROOT}}/Services/service-detail.html?service=testing-services">Testing Services</a></li>
          <li><a href="{{ROOT}}/Services/service-detail.html?service=technical-support">Technical Support</a></li>
          <li><a href="{{ROOT}}/Services/service-detail.html?service=medical-coding">Medical Coding</a></li>
          <li><a href="{{ROOT}}/Services/service-detail.html?service=epub-conversion">EPUB Conversion</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="{{ROOT}}/Blogs/blogs.html">Blog <span class="nav-arrow">▾</span></a>
        <ul class="drop-menu">
          <li><a href="{{ROOT}}/Blogs/blog-detail.html?id=llms-enterprise">LLMs &amp; Enterprise Dev</a></li>
          <li><a href="{{ROOT}}/Blogs/blog-detail.html?id=multi-cloud">Multi-Cloud Strategy</a></li>
          <li><a href="{{ROOT}}/Blogs/blog-detail.html?id=design-systems">Design Systems at Scale</a></li>
          <li><a href="{{ROOT}}/Blogs/blog-detail.html?id=smart-contracts">Smart Contract Security</a></li>
          <li><a href="{{ROOT}}/Blogs/blog-detail.html?id=growth-engine">0 to 100K Users</a></li>
          <li><a href="{{ROOT}}/Blogs/blog-detail.html?id=gitops">GitOps in Production</a></li>
        </ul>
      </li>
      <li><a href="{{ROOT}}/Careers/careers.html">Careers</a></li>
      <li><a href="{{ROOT}}/Contact/contact.html">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="{{ROOT}}/Auth/signup.html" class="btn btn-sm btn-outline-purple">Signup</a>
      <a href="{{ROOT}}/Dashboard/dashboard.html" class="btn btn-sm btn-primary">Dashboard</a>
    </div>
    <button class="hamburger" id="hamburger"><span></span><span></span><span></span></button>
  </div>
  <div class="mobile-nav" id="mobileNav">
    <a href="{{ROOT}}/Home/home.html">Home v1</a>
    <a href="{{ROOT}}/Home2/home2.html">Home v2</a>
    <a href="{{ROOT}}/About/about.html">About</a>
    <a href="{{ROOT}}/Services/services.html">Services</a>
    <a href="{{ROOT}}/Blogs/blogs.html">Blog</a>
    <a href="{{ROOT}}/Careers/careers.html">Careers</a>
    <a href="{{ROOT}}/Contact/contact.html">Contact</a>
    <a href="{{ROOT}}/Auth/signup.html" class="btn btn-outline-purple" style="text-align:center">Signup</a>
    <a href="{{ROOT}}/Dashboard/dashboard.html" class="btn btn-primary" style="text-align:center">Dashboard</a>
  </div>
</nav>
    `;

    const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="{{ROOT}}/Home/home.html" class="nav-logo" style="margin-bottom:14px;display:inline-flex">
          <img src="{{ROOT}}/images/logo1.svg" class="nav-logo-img" alt="Logo"/>
          <span class="nav-logo-text" style="background:none;-webkit-text-fill-color:white;color:white;">Techechos Innovation</span>
        </a>
        <p>Building tomorrow's technology solutions today. Innovation is not a buzzword — it's our mission and our promise.</p>
        <div class="footer-socials">
          <a href="#" class="footer-social">in</a>
          <a href="#" class="footer-social">tw</a>
          <a href="#" class="footer-social">gh</a>
          <a href="#" class="footer-social">yt</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <a href="{{ROOT}}/Home/home.html">Home</a>
        <a href="{{ROOT}}/Home2/home2.html">Home 2</a>
        <a href="{{ROOT}}/About/about.html">About Us</a>
        <a href="{{ROOT}}/Careers/careers.html">Careers</a>
        <a href="{{ROOT}}/Blogs/blogs.html">Blogs</a>
        <a href="{{ROOT}}/Contact/contact.html">Contact Us</a>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <a href="{{ROOT}}/Services/service-detail.html?service=website-design">Website Design</a>
        <a href="{{ROOT}}/Services/service-detail.html?service=mobile-applications">Mobile Apps</a>
        <a href="{{ROOT}}/Services/service-detail.html?service=testing-services">Testing Services</a>
        <a href="{{ROOT}}/Services/service-detail.html?service=technical-support">Technical Support</a>
        <a href="{{ROOT}}/Services/service-detail.html?service=medical-coding">Medical Coding</a>
        <a href="{{ROOT}}/Services/service-detail.html?service=epub-conversion">EPUB Conversion</a>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <a href="mailto:info@techehosinnovation.com" style="display: flex; gap: 10px; align-items: flex-start; margin-bottom: 12px;">
          <span style="font-size: 1.15rem; line-height: 1.2;">✉️</span>
          <span>info@techehosinnovation.com</span>
        </a>
        <a href="tel:+917330747117" style="display: flex; gap: 10px; align-items: flex-start; margin-bottom: 12px;">
          <span style="font-size: 1.15rem; line-height: 1.2;">📞</span>
          <span>+91 7330747117</span>
        </a>
        <a href="{{ROOT}}/Contact/contact.html" style="display: flex; gap: 10px; align-items: flex-start;">
          <span style="font-size: 1.15rem; line-height: 1.2;">📍</span>
          <span>Techechos Innovation Pvt. Ltd.<br>
          Jaya Sudha Heights, 100 Feet Road,<br>
          Madhapur, Hyderabad — 500081<br>
          Telangana, India</span>
        </a>
      </div>
    </div>  
    <div class="footer-bottom">
      <p>© 2025 Techechos Innovation. All rights reserved.</p>
      <p> Privacy Policy | Terms of Use | Disclaimer</p>
    </div>
  </div>

  <div class="floating-action-buttons">
    <a href="https://wa.me/" target="_blank" class="fab-btn whatapp-btn" title="Chat on WhatsApp">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    </a>
    <button class="fab-btn chatbot-btn" title="Open Chat">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.27.24 2.5.68 3.63L2 22l6.21-1.95A9.953 9.953 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
    </button>
  </div>
</footer>
    `;

    // Inject HTML strings directly
    const injectComponent = (id, htmlContent) => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = htmlContent.replace(/\{\{ROOT\}\}\//g, rootPath);
        }
    };

    injectComponent('header', headerHTML);
    injectComponent('footer', footerHTML);

    // Initialize interactive elements after injecting
    initNavigation();

    function initNavigation() {
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');
        
        if (hamburger && mobileNav) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                mobileNav.classList.toggle('active');
            });
        }

        // Dropdown toggle for mobile view
        const dropToggles = document.querySelectorAll('.mobile-nav .dropdown > a');
        dropToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.target.parentElement.classList.toggle('open');
            });
        });

        // Highlight active link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const allLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
        
        allLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') && link.getAttribute('href').endsWith(currentPath)) {
                link.classList.add('active');
                const parentDropdown = link.closest('.dropdown');
                if (parentDropdown) {
                    const toggleLink = parentDropdown.querySelector('a');
                    if (toggleLink) toggleLink.classList.add('active');
                }
            }
        });
    }
});

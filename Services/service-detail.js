

const SERVICES = {
  'website-design': {
    icon: '🌐',
    title: 'Website Design',
    tagline: 'Custom web solutions that captivate and convert visitors. We build stunning, highly optimized websites that serve as a powerful engine for your brand\'s online growth.',
    heading: 'Stunning Websites That Convert',
    description: 'Your website is your most powerful salesperson — working 24/7 to attract, engage, and convert visitors. We craft visually stunning, performance-optimised websites that make a lasting first impression. Every pixel is intentional, every interaction is smooth, and every page is built to drive results. From landing pages to full-scale portals, we design with purpose.',
    features: [
      { icon: '🎨', title: 'Custom UI Design', desc: 'Bespoke designs tailored to your brand identity and audience.' },
      { icon: '⚡', title: 'Performance Optimised', desc: 'Sub-2s load times, Core Web Vitals compliance, and CDN delivery.' },
      { icon: '📱', title: 'Fully Responsive', desc: 'Pixel-perfect layouts across mobile, tablet, and desktop.' },
      { icon: '🔍', title: 'SEO Ready', desc: 'Semantic HTML, meta strategy, and schema markup built in.' },
      { icon: '♿', title: 'Accessibility (WCAG)', desc: 'AA-compliant designs that work for every user.' },
      { icon: '🔗', title: 'CMS Integration', desc: 'WordPress, Webflow, Sanity — edit your site without a developer.' },
    ],
    process: [
      { num: '01', title: 'Discovery & Briefing', desc: 'Understand your goals, audience, competitors, and brand voice.' },
      { num: '02', title: 'Wireframes & Sitemap', desc: 'Map out user journeys and page structure before any visuals.' },
      { num: '03', title: 'Visual Design', desc: 'High-fidelity Figma mockups with your brand colours and typography.' },
      { num: '04', title: 'Development', desc: 'Clean, semantic code with smooth animations and interactions.' },
      { num: '05', title: 'Launch & Handover', desc: 'Testing, deployment, CMS training, and post-launch support.' },
    ],
    tech: ['Figma', 'React', 'Next.js', 'Tailwind CSS', 'Webflow', 'WordPress', 'Sanity CMS', 'Vercel', 'Cloudflare'],
  },

  'mobile-applications': {
    icon: '📱',
    title: 'Mobile Applications',
    tagline: 'Native and cross-platform apps for modern businesses. From concept to launch, we engineer seamless mobile experiences that drive user engagement and loyalty.',
    heading: 'Apps Users Actually Love',
    description: 'Mobile is no longer a nice-to-have — it\'s the primary way your customers interact with your brand. We build buttery-smooth, feature-rich mobile applications for iOS and Android. Whether you need a cross-platform Flutter app or a performance-critical native build, our mobile engineers deliver experiences that get 5-star reviews and keep users coming back.',
    features: [
      { icon: '🦋', title: 'Flutter Development', desc: 'Single codebase, native performance on iOS and Android.' },
      { icon: '⚛️', title: 'React Native', desc: 'JS-powered cross-platform apps with a vast ecosystem.' },
      { icon: '🍎', title: 'iOS (Swift)', desc: 'Native Swift apps optimised for the Apple ecosystem.' },
      { icon: '🤖', title: 'Android (Kotlin)', desc: 'Native Kotlin apps following Material Design guidelines.' },
      { icon: '📴', title: 'Offline Support', desc: 'Local data sync and background processing for no-network usage.' },
      { icon: '🔔', title: 'Push Notifications', desc: 'Firebase, APNs — timely, targeted engagement at scale.' },
    ],
    process: [
      { num: '01', title: 'Product Scoping', desc: 'Define features, platforms, and user flows for the MVP.' },
      { num: '02', title: 'UX & Prototype', desc: 'Interactive prototypes validated with real users before coding.' },
      { num: '03', title: 'Sprint Development', desc: 'Two-week sprints with demo builds delivered every cycle.' },
      { num: '04', title: 'QA & Device Testing', desc: 'Tested on 20+ device/OS combinations before release.' },
      { num: '05', title: 'Store Submission', desc: 'App Store and Play Store submission, review, and launch.' },
    ],
    tech: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Supabase', 'REST APIs', 'GraphQL', 'Fastlane', 'Xcode'],
  },

  'testing-services': {
    icon: '🧪',
    title: 'Testing Services',
    tagline: 'Comprehensive QA and testing solutions for quality assurance. We ensure your software is robust, secure, and performs flawlessly under real-world conditions.',
    heading: 'We Break It Before Your Users Do',
    description: 'Bugs in production cost 10× more than bugs caught in testing. Our QA engineers are the last line of defence before your software ships. We design and execute exhaustive test plans — from automated regression suites to exploratory manual testing — ensuring your product is reliable, secure, and performant under real-world conditions.',
    features: [
      { icon: '🤖', title: 'Test Automation', desc: 'Selenium, Playwright, Cypress — automated regression at every commit.' },
      { icon: '🧩', title: 'Functional Testing', desc: 'End-to-end scenario testing against all acceptance criteria.' },
      { icon: '🚀', title: 'Performance Testing', desc: 'Load, stress, and spike testing with JMeter and k6.' },
      { icon: '🔐', title: 'Security Testing', desc: 'OWASP Top 10 vulnerability scanning and penetration testing.' },
      { icon: '📱', title: 'Mobile QA', desc: 'Real-device testing on iOS and Android across OS versions.' },
      { icon: '♿', title: 'Accessibility Audits', desc: 'WCAG 2.1 AA compliance testing with screen-reader validation.' },
    ],
    process: [
      { num: '01', title: 'Test Strategy', desc: 'Define scope, risk areas, test types, and coverage targets.' },
      { num: '02', title: 'Test Plan & Cases', desc: 'Write detailed test cases mapped to every requirement.' },
      { num: '03', title: 'Automation Setup', desc: 'Build CI-integrated automation framework from scratch.' },
      { num: '04', title: 'Execution & Reporting', desc: 'Run tests, log defects, and provide daily status dashboards.' },
      { num: '05', title: 'Sign-off & Regression', desc: 'Final regression pass and go/no-go release recommendation.' },
    ],
    tech: ['Selenium', 'Playwright', 'Cypress', 'JMeter', 'k6', 'Postman', 'OWASP ZAP', 'TestRail', 'Jira', 'GitHub Actions'],
  },

  'technical-support': {
    icon: '🎧',
    title: 'Technical Support',
    tagline: '24/7 expert technical assistance for your IT needs. Our dedicated support engineers proactively monitor and maintain your systems to guarantee maximum uptime.',
    heading: 'Always-On Support You Can Rely On',
    description: 'Downtime is expensive. Our dedicated technical support engineers act as an extension of your team — monitoring your infrastructure, resolving incidents, and keeping your systems healthy around the clock. With tiered SLA commitments and a deep bench of expertise across cloud, application, and networking layers, we give you peace of mind while you focus on growing your business.',
    features: [
      { icon: '🕐', title: '24/7 Availability', desc: 'Round-the-clock coverage with defined escalation paths.' },
      { icon: '📊', title: 'Proactive Monitoring', desc: 'Datadog, Grafana, Prometheus — catch issues before users do.' },
      { icon: '⚡', title: 'Rapid Incident Response', desc: 'P1 incidents acknowledged within 15 minutes, resolved fast.' },
      { icon: '☁️', title: 'Cloud Support', desc: 'AWS, Azure, GCP — certified engineers across all major clouds.' },
      { icon: '📋', title: 'SLA Reporting', desc: 'Monthly uptime, MTTR, and ticket resolution reports.' },
      { icon: '📚', title: 'Knowledge Base', desc: 'Documented runbooks and self-service portal for common issues.' },
    ],
    process: [
      { num: '01', title: 'Onboarding & Audit', desc: 'Understand your stack, access systems, and document environments.' },
      { num: '02', title: 'Monitoring Setup', desc: 'Deploy observability tools, configure alerts and dashboards.' },
      { num: '03', title: 'SLA Definition', desc: 'Agree on response times, escalation matrix, and coverage hours.' },
      { num: '04', title: 'Active Support', desc: 'Ticket handling, incident management, and proactive maintenance.' },
      { num: '05', title: 'Monthly Reviews', desc: 'SLA reports, trend analysis, and continuous improvement planning.' },
    ],
    tech: ['Datadog', 'Grafana', 'PagerDuty', 'Jira Service Desk', 'Zendesk', 'AWS CloudWatch', 'Prometheus', 'Slack', 'Confluence'],
  },

  'medical-coding': {
    icon: '🏥',
    title: 'Medical Coding',
    tagline: 'Accurate medical coding services for healthcare providers. We streamline your revenue cycle with rapid, compliant, and error-free coding solutions.',
    heading: 'Revenue Cycle Optimisation for Healthcare',
    description: 'Incorrect medical codes cost healthcare providers millions in denied claims and compliance penalties every year. Our certified medical coders (CPC, CCS) specialise in accurate ICD-10-CM, CPT, and HCPCS coding across specialities including primary care, surgery, cardiology, and radiology. We reduce denial rates, accelerate reimbursements, and ensure full HIPAA compliance.',
    features: [
      { icon: '📋', title: 'ICD-10-CM Coding', desc: 'Accurate diagnosis coding across all clinical specialities.' },
      { icon: '🩺', title: 'CPT & HCPCS Coding', desc: 'Procedure and supply coding for maximum reimbursement.' },
      { icon: '🔒', title: 'HIPAA Compliance', desc: 'Strict data handling protocols protecting PHI at every step.' },
      { icon: '📉', title: 'Denial Management', desc: 'Identify, appeal, and prevent claim denials systematically.' },
      { icon: '⚡', title: 'Fast Turnaround', desc: '24–48 hour coding turnaround with 99%+ accuracy rates.' },
      { icon: '📊', title: 'Coding Audits', desc: 'Retrospective audits to uncover undercoding and compliance gaps.' },
    ],
    process: [
      { num: '01', title: 'Intake & Assessment', desc: 'Review your current coding workflow, denial rates, and pain points.' },
      { num: '02', title: 'Coder Assignment', desc: 'Match certified coders to your speciality and volume needs.' },
      { num: '03', title: 'Coding & Review', desc: 'Code patient records with dual-review quality checks.' },
      { num: '04', title: 'Submission Support', desc: 'Format and transmit claims to payers via your billing system.' },
      { num: '05', title: 'Audit & Reporting', desc: 'Monthly accuracy reports, denial trends, and improvement plans.' },
    ],
    tech: ['ICD-10-CM', 'CPT', 'HCPCS', 'HL7 FHIR', 'Epic', 'Cerner', 'AdvancedMD', 'Kareo', 'DrChrono'],
  },

  'epub-conversion': {
    icon: '📖',
    title: 'EPUB Conversion',
    tagline: 'Professional digital publishing and conversion services. Transform your manuscripts and legacy formats into beautiful, accessible EPUB editions for seamless reading everywhere.',
    heading: 'Beautiful Digital Publishing at Scale',
    description: 'In a world of digital-first reading, your content needs to look flawless on every device — from Kindles to iPads to desktop e-readers. We convert print manuscripts, PDFs, and Word documents into beautifully formatted, accessible EPUB 3 editions. Our publishing engineers handle complex layouts, footnotes, tables, images, and multilingual content with pixel-perfect precision.',
    features: [
      { icon: '📄', title: 'PDF to EPUB', desc: 'Accurate conversion preserving layout, fonts, and structure.' },
      { icon: '📝', title: 'Word / InDesign to EPUB', desc: 'Clean conversion from all major authoring formats.' },
      { icon: '🌍', title: 'Multilingual Support', desc: 'RTL, CJK, and complex script support for global publications.' },
      { icon: '♿', title: 'Accessible EPUB', desc: 'WCAG and EPUB Accessibility 1.1 compliant output.' },
      { icon: '🔒', title: 'DRM Integration', desc: 'Adobe DRM and LCP encryption for content protection.' },
      { icon: '✅', title: 'EPUB Validation', desc: 'EPUBCheck and ACE by DAISY validation on every file.' },
    ],
    process: [
      { num: '01', title: 'Source Review', desc: 'Assess source files for complexity, assets, and special elements.' },
      { num: '02', title: 'Conversion', desc: 'Convert and structure content into semantic EPUB 3 markup.' },
      { num: '03', title: 'Styling', desc: 'Apply custom CSS for typography, spacing, and responsive layouts.' },
      { num: '04', title: 'QA & Validation', desc: 'EPUBCheck, ACE validation, and manual review on 5+ readers.' },
      { num: '05', title: 'Delivery', desc: 'Final files delivered with distribution-ready metadata.' },
    ],
    tech: ['EPUB 3', 'HTML5', 'CSS3', 'EPUBCheck', 'ACE by DAISY', 'Calibre', 'InDesign', 'Sigil', 'Adobe DRM', 'Readium'],
  },
};

const ALL_SERVICES = [
  { id: 'website-design',     icon: '🌐', label: 'Website Design' },
  { id: 'mobile-applications',icon: '📱', label: 'Mobile Applications' },
  { id: 'testing-services',   icon: '🧪', label: 'Testing Services' },
  { id: 'technical-support',  icon: '🎧', label: 'Technical Support' },
  { id: 'medical-coding',     icon: '🏥', label: 'Medical Coding' },
  { id: 'epub-conversion',    icon: '📖', label: 'EPUB Conversion' },
];

function loadServiceContent() {
  const params = new URLSearchParams(window.location.search);
  const serviceId = params.get('service') || 'website-design';
  const data = SERVICES[serviceId] || SERVICES['website-design'];

  document.getElementById('page-title').textContent = data.title + ' — Techechos Innovation';
  document.getElementById('breadcrumb-service').textContent = data.title;
  document.getElementById('service-hero-icon').textContent = data.icon;
  document.getElementById('service-title').textContent = data.title;
  document.getElementById('service-tagline').textContent = data.tagline;
  document.getElementById('sd-heading').textContent = data.heading;
  document.getElementById('sd-description').textContent = data.description;

  
  const featGrid = document.getElementById('sd-features-grid');
  featGrid.innerHTML = data.features.map(f => `
    <div class="sd-feature-item fade-up">
      <div class="sd-feature-icon">${f.icon}</div>
      <h4>${f.title}</h4>
      <p>${f.desc}</p>
    </div>
  `).join('');

  
  const procSteps = document.getElementById('sd-process-steps');
  procSteps.innerHTML = data.process.map((s, i) => `
    <div class="sd-step fade-up">
      <div class="sd-step-num">${s.num}</div>
      <div class="sd-step-connector${i < data.process.length - 1 ? ' has-line' : ''}"></div>
      <div><h4>${s.title}</h4><p>${s.desc}</p></div>
    </div>
  `).join('');

  
  const techEl = document.getElementById('sd-tech-chips');
  techEl.innerHTML = data.tech.map(t => `<span class="sd-chip">${t}</span>`).join('');

  
  const otherLinks = document.getElementById('sd-other-links');
  otherLinks.innerHTML = ALL_SERVICES.filter(s => s.id !== serviceId).map(s => `
    <a href="./service-detail.html?service=${s.id}" class="sd-other-link">
      <span class="sd-other-icon">${s.icon}</span>
      <span>${s.label}</span>
      <span class="sd-other-arrow">›</span>
    </a>
  `).join('');

  
  const newFadeEls = document.querySelectorAll('.fade-up:not(.observed)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  newFadeEls.forEach(el => { obs.observe(el); el.classList.add('observed'); });
}

document.addEventListener('DOMContentLoaded', loadServiceContent);

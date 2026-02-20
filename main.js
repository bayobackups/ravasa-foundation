/* ═══════════════════════════════════════
   RAVASA FOUNDATION — Shared JS v2
   ═══════════════════════════════════════ */

// ── LOGO SVG (cupped hands — matches brand)
const LOGO_SVG = `
<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Left hand -->
  <path d="M10 38 C8 34 7 29 9 24 C11 19 15 17 18 19 C19 16 22 14 25 16 L25 32 C22 30 18 30 16 33 Z"
        fill="white" opacity="0.95"/>
  <!-- Right hand -->
  <path d="M50 38 C52 34 53 29 51 24 C49 19 45 17 42 19 C41 16 38 14 35 16 L35 32 C38 30 42 30 44 33 Z"
        fill="white" opacity="0.95"/>
  <!-- Center cup / base -->
  <path d="M25 16 C25 16 28 14 30 14 C32 14 35 16 35 16 L35 38 C33 40 30 41 27 40 L25 38 Z"
        fill="white" opacity="0.9"/>
  <!-- Rising element (leaf/life) -->
  <path d="M30 14 C30 14 26 9 28 5 C30 2 33 4 30 9 C33 5 37 6 35 10 C33 13 30 14 30 14Z"
        fill="#4db86a"/>
</svg>`;

// ── NAV
function renderNav(activePage) {
  const pages = [
    { href: 'index.html',       label: 'Home' },
    { href: 'about.html',       label: 'About' },
    { href: 'programs.html',    label: 'Programs' },
    { href: 'impact.html',      label: 'Impact' },
    { href: 'gallery.html',     label: 'Gallery' },
    { href: 'news.html',        label: 'News' },
    { href: 'contact.html',     label: 'Contact' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}"${p.label === activePage ? ' class="active"' : ''}>${p.label}</a></li>`
  ).join('');

  const mobileLinks = pages.map(p =>
    `<a href="${p.href}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a class="nav-logo" href="index.html">
        <div class="nav-logo-mark">${LOGO_SVG}</div>
        <div class="nav-logo-text">
          <span class="brand-name">Ravasa Foundation</span>
          <span class="brand-tagline">Charity for all</span>
        </div>
      </a>
      <ul class="nav-links">${links}</ul>
      <a class="nav-cta" href="get-involved.html">Support Us</a>
      <button class="nav-hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobile-menu">
      ${mobileLinks}
      <a href="get-involved.html" class="mobile-cta">→ Support Us / Donate</a>
    </div>
  `;

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });
}

// ── FOOTER
function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:48px;height:48px;background:var(--green-mid);border-radius:50%;display:grid;place-items:center;flex-shrink:0;">
              ${LOGO_SVG}
            </div>
            <div>
              <span class="footer-brand-name">Ravasa Foundation</span>
              <span class="footer-brand-tagline">Charity for all</span>
            </div>
          </div>
          <p>A women-led NGO improving livelihoods of vulnerable communities across Uganda's West Nile region and beyond.</p>
          <div style="display:flex;gap:10px;margin-top:20px;">
            <span class="tag-green">Est. 2017</span>
            <span class="tag-purple">NGO Registered 2023</span>
          </div>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="programs.html">Our Programs</a>
          <a href="impact.html">Our Impact</a>
          <a href="gallery.html">Gallery</a>
        </div>
        <div class="footer-col">
          <h4>Get Involved</h4>
          <a href="get-involved.html">Donate</a>
          <a href="get-involved.html#volunteer">Volunteer</a>
          <a href="get-involved.html#partner">Partner With Us</a>
          <a href="news.html">News & Updates</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Contact Us</h4>
          <a href="mailto:jijarajab@gmail.com">jijarajab@gmail.com</a>
          <a href="tel:+256777464898">+256 777 464 898</a>
          <a href="tel:+256702463898">+256 702 463 898</a>
          <a href="#">P.O. Box 685, Arua, Uganda</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Ravasa Foundation · Reg. INDR165525831NB · Arua, Uganda</p>
        <a href="contact.html">Privacy Policy</a>
      </div>
    </footer>
  `;
}

// ── SCROLL REVEAL
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initReveal);

/* ═══════════════════════════════════════
   RAVASA FOUNDATION — Shared JS v2
   ═══════════════════════════════════════ */

// ── LOGO SVG — pixel-traced directly from Ravasa Foundation brand assets
const LOGO_SVG = `
<svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 11.9 32.3 L 11.6 33.7 L 11.6 35.1 L 11.9 36.5 L 12.5 37.9 L 13.1 39.4 L 13.6 40.8 L 14.0 42.2 L 14.4 43.6 L 14.8 45.0 L 15.1 46.4 L 15.5 47.8 L 15.8 49.2 L 16.2 50.6 L 16.6 52.0 L 16.9 53.4 L 17.1 54.8 L 17.4 56.2 L 17.6 57.6 L 18.0 59.0 L 18.3 60.4 L 18.6 61.8 L 18.9 63.2 L 19.3 64.6 L 19.6 66.1 L 20.0 67.5 L 20.4 68.9 L 20.8 70.3 L 21.3 71.7 L 21.9 73.1 L 22.5 74.5 L 23.1 75.9 L 23.8 77.3 L 24.6 78.7 L 25.4 80.1 L 26.2 81.5 L 27.1 82.9 L 28.1 84.3 L 29.2 85.7 L 30.3 87.1 L 31.5 88.5 L 32.9 89.9 L 34.4 91.4 L 35.9 92.8 L 37.6 94.2 L 39.7 95.6 L 42.0 97.0 L 44.6 98.4 L 47.4 99.8 L 50.1 101.2 L 52.9 102.6 L 55.5 104.0 L 57.8 105.4 L 59.9 106.8 L 61.9 108.2 L 63.7 109.6 L 65.5 111.0 L 67.3 112.4 L 68.9 113.8 L 70.4 115.2 L 71.8 116.6 L 73.1 118.1 L 74.4 119.5 L 75.6 120.9 L 76.8 122.3 L 77.9 123.7 L 78.9 125.1 L 79.8 126.5 L 80.6 127.9 L 81.9 127.9 L 81.9 126.5 L 82.0 125.1 L 82.1 123.7 L 82.3 122.3 L 82.4 120.9 L 82.5 119.5 L 82.5 118.1 L 82.5 116.6 L 82.5 115.2 L 82.5 113.8 L 82.5 112.4 L 82.5 111.0 L 82.4 109.6 L 82.3 108.2 L 82.1 106.8 L 82.0 105.4 L 81.9 104.0 L 81.8 102.6 L 81.7 101.2 L 81.4 99.8 L 81.1 98.4 L 80.7 97.0 L 80.4 95.6 L 79.9 94.2 L 79.4 92.8 L 78.8 91.4 L 78.1 89.9 L 77.2 88.5 L 76.2 87.1 L 75.0 85.7 L 73.8 84.3 L 72.5 82.9 L 71.2 81.5 L 70.0 80.1 L 68.8 78.7 L 67.5 77.3 L 66.2 75.9 L 64.8 74.5 L 63.3 73.1 L 61.9 71.7 L 60.4 70.3 L 58.9 68.9 L 57.3 67.5 L 55.6 66.1 L 53.8 64.6 L 51.8 63.2 L 49.8 61.8 L 47.6 60.4 L 43.9 59.0 L 38.9 57.6 L 32.7 56.2 L 28.5 54.8 L 26.2 53.4 L 25.6 52.0 L 25.0 50.6 L 24.4 49.2 L 23.8 47.8 L 23.1 46.4 L 22.3 45.0 L 21.4 43.6 L 20.7 42.2 L 20.0 40.8 L 19.3 39.4 L 18.6 37.9 L 17.7 36.5 L 16.8 35.1 L 15.7 33.7 L 14.4 32.3 Z" fill="white"/>
  <path d="M 199.4 0.0 L 199.4 1.4 L 195.6 5.8 L 188.2 13.3 L 177.0 23.9 L 169.5 31.4 L 165.5 35.8 L 165.1 37.2 L 164.6 38.6 L 164.2 40.1 L 163.7 41.5 L 163.2 42.9 L 162.7 44.3 L 162.4 45.7 L 162.0 47.1 L 161.7 48.5 L 161.4 49.9 L 161.1 51.3 L 160.7 52.7 L 160.5 54.1 L 160.1 55.5 L 159.9 56.9 L 159.5 58.3 L 159.3 59.7 L 158.9 61.1 L 158.6 62.5 L 158.3 63.9 L 157.9 65.4 L 157.5 66.8 L 157.1 68.2 L 156.7 69.6 L 156.2 71.0 L 155.6 72.4 L 155.0 73.8 L 154.4 75.2 L 153.8 76.6 L 153.1 78.0 L 152.4 79.4 L 151.7 80.8 L 150.8 82.2 L 149.8 83.6 L 148.7 85.0 L 147.5 86.4 L 146.2 87.8 L 145.0 89.2 L 143.7 90.6 L 142.2 92.1 L 140.6 93.5 L 138.7 94.9 L 136.6 96.3 L 134.3 97.7 L 131.6 99.1 L 128.8 100.5 L 125.9 101.9 L 123.2 103.3 L 120.7 104.7 L 118.4 106.1 L 116.3 107.5 L 114.4 108.9 L 112.6 110.3 L 110.8 111.7 L 109.2 113.1 L 107.7 114.5 L 106.3 115.9 L 105.0 117.4 L 103.8 118.8 L 102.5 120.2 L 101.2 121.6 L 100.1 123.0 L 99.0 124.4 L 98.0 125.8 L 97.1 127.2 L 96.2 128.6 L 95.6 128.6 L 95.6 127.2 L 95.5 125.8 L 95.4 124.4 L 95.2 123.0 L 95.1 121.6 L 95.0 120.2 L 94.9 118.8 L 94.8 117.4 L 94.6 115.9 L 94.5 114.5 L 94.4 113.1 L 94.5 111.7 L 94.6 110.3 L 94.8 108.9 L 94.9 107.5 L 95.1 106.1 L 95.2 104.7 L 95.4 103.3 L 95.6 101.9 L 95.8 100.5 L 96.1 99.1 L 96.4 97.7 L 96.9 96.3 L 97.5 94.9 L 98.1 93.5 L 98.8 92.1 L 99.4 90.6 L 100.1 89.2 L 100.9 87.8 L 101.9 86.4 L 103.1 85.0 L 104.2 83.6 L 105.2 82.2 L 106.3 80.8 L 107.5 79.4 L 108.7 78.0 L 110.0 76.6 L 111.4 75.2 L 112.9 73.8 L 114.4 72.4 L 115.8 71.0 L 117.4 69.6 L 119.0 68.2 L 120.7 66.8 L 122.5 65.4 L 124.4 63.9 L 126.3 62.5 L 128.3 61.1 L 130.5 59.7 L 134.1 58.3 L 139.0 56.9 L 145.0 55.5 L 149.0 54.1 L 151.2 52.7 L 151.9 51.3 L 152.7 49.9 L 153.6 48.5 L 154.3 47.1 L 155.0 45.7 L 155.6 44.3 L 156.2 42.9 L 156.9 41.5 L 157.6 40.1 L 158.3 38.6 L 159.2 37.2 L 160.0 35.8 L 164.9 31.4 L 173.8 23.9 L 186.4 13.3 L 194.1 5.8 L 197.0 1.4 L 195.6 0.0 Z" fill="white"/>
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

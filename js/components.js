const SITE = {

  name: 'Kalpvriksh Hospitality',

  tagline: 'Journeys That Inspire',

  url: 'https://www.kalpvrikshhospitality.com',

  logo: 'img/logo.png',

  phone: '+91 6232323482',

  email: 'info@kalpvrikshhospitality.com',

  address: 'Gurugram, Haryana',

  whatsapp: '916232323482',

};



const NAV_LINKS = [

  { href: 'index.html', label: 'Home' },

  { href: 'about.html', label: 'About Us' },

  { href: 'destinations.html', label: 'Destinations' },

  { href: 'flights.html', label: 'Flights' },

  { href: 'visa.html', label: 'Visa' },

  { href: 'forex.html', label: 'Forex' },

  { href: 'contact.html', label: 'Get In Touch' },

];



const FOOTER_SERVICES = [

  { label: 'Domestic Tours', href: 'destinations.html' },

  { label: 'International Tours', href: 'destinations.html' },

  { label: 'Flight Booking', href: 'flights.html' },

  { label: 'Visa Assistance', href: 'visa.html' },

  { label: 'Forex Services', href: 'forex.html' },

  { label: 'Travel Planning', href: 'contact.html' },

  { label: 'Customized Packages', href: 'contact.html' },

];



const FOOTER_DESTINATIONS = [

  { label: 'Dubai', id: 'dubai' },

  { label: 'Thailand', id: 'thailand' },

  { label: 'Bali', id: 'bali' },

  { label: 'Singapore', id: 'singapore' },

  { label: 'Maldives', id: 'maldives' },

  { label: 'Kashmir', id: 'kashmir' },

  { label: 'Kerala', id: 'kerala' },

  { label: 'Ladakh', id: 'ladakh' },

];



function getCurrentPage() {

  const path = window.location.pathname;

  const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  return page;

}



function renderHeader(transparent = false) {

  const current = getCurrentPage();

  const links = NAV_LINKS.map(

    (link) =>

      `<a href="${link.href}" class="header__link${current === link.href ? ' active' : ''}">${link.label}</a>`

  ).join('');



  return `

    <header class="header${transparent ? ' header--transparent' : ''}" id="header">

      <div class="container header__inner">

        <a href="index.html" class="header__logo">

          <img src="${SITE.logo}" alt="${SITE.name} logo" class="header__logo-img" width="46" height="46">

          <div class="header__logo-text">

            <span class="header__logo-name">${SITE.name}</span>

            <span class="header__logo-tagline">${SITE.tagline}</span>

          </div>

        </a>

        <nav class="header__nav" id="nav">

          <div class="header__links">${links}</div>

          <a href="contact.html" class="btn btn--primary btn--sm">Plan Your Trip</a>

        </nav>

        <button class="header__toggle" id="navToggle" aria-label="Toggle navigation">

          <span></span><span></span><span></span>

        </button>

      </div>

    </header>

  `;

}



function renderFooter() {

  const quickLinks = NAV_LINKS.map(

    (link) => `<li><a href="${link.href}">${link.label}</a></li>`

  ).join('');



  const services = FOOTER_SERVICES.map(

    (s) => `<li><a href="${s.href}">${s.label}</a></li>`

  ).join('');



  const destinations = FOOTER_DESTINATIONS.map(

    (d) => `<li><a href="package.html?id=${d.id}">${d.label}</a></li>`

  ).join('');



  return `

    <footer class="footer">

      <div class="container">

        <div class="footer__grid">

          <div class="footer__brand-col">

            <a href="index.html" class="footer__brand">

              <img src="${SITE.logo}" alt="${SITE.name} logo" class="footer__logo-img" width="52" height="52">

              <div class="footer__logo-text">

                <div class="footer__logo-name">${SITE.name}</div>

                <div class="footer__logo-tagline">${SITE.tagline}</div>

              </div>

            </a>

            <p class="footer__about">Your trusted partner for premium travel experiences. From domestic getaways to international adventures, we craft journeys that inspire.</p>

            <div class="footer__social">

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">

                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>

              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">

                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>

              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">

                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>

              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">

                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>

              </a>

            </div>

          </div>

          <details class="footer__group" open>

            <summary class="footer__heading">Quick Links</summary>

            <ul class="footer__links">${quickLinks}</ul>

          </details>

          <details class="footer__group" open>

            <summary class="footer__heading">Services</summary>

            <ul class="footer__links">${services}</ul>

          </details>

          <details class="footer__group" open>

            <summary class="footer__heading">Popular Destinations</summary>

            <ul class="footer__links footer__links--columns">${destinations}</ul>

          </details>

          <div class="footer__group footer__group--static">

            <h4 class="footer__heading">Contact Us</h4>

            <div class="footer__contact-item">

              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>

              <span><a href="tel:+916232323482">${SITE.phone}</a></span>

            </div>

            <div class="footer__contact-item">

              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>

              <span><a href="mailto:${SITE.email}">${SITE.email}</a></span>

            </div>

            <div class="footer__contact-item">

              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>

              <span>${SITE.address}</span>

            </div>

          </div>

        </div>

        <div class="footer__bottom">

          <p>&copy; ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p>

          <div class="footer__bottom-links">

            <a href="privacy.html">Privacy Policy</a>

            <a href="terms.html">Terms &amp; Conditions</a>

          </div>

        </div>

      </div>

    </footer>

  `;

}



function injectLayout(transparentHeader = false) {

  const headerEl = document.getElementById('site-header');

  const footerEl = document.getElementById('site-footer');

  if (headerEl) headerEl.innerHTML = renderHeader(transparentHeader);

  if (footerEl) footerEl.innerHTML = renderFooter();

}


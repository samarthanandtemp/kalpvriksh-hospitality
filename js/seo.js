const SEO_CONFIG = {
  siteUrl: 'https://www.kalpvrikshhospitality.com',
  siteName: 'Kalpvriksh Hospitality',
  tagline: 'Journeys That Inspire',
  keywords: [
    'Best Travel Agency in India',
    'Kerala Tour Packages for 5 Days',
    'Kashmir Luxury Tour Packages',
    'Ladakh Group Tour Packages',
    'Shimla Manali Tour Package for Couple',
    'Delhi to Bali Tour Packages',
    'Customized Kashmir Holiday Package',
    'Tailor Made Kerala Tour Package',
    'Custom Ladakh Adventure Trip',
    'Personalized Goa Family Vacation Package',
    '4 Nights 5 Days Andaman Package',
    'Customized Dubai Tour Package',
    'Tailor Made Bali Honeymoon Itinerary',
    'Custom Thailand Holiday Package',
    'Personalized Maldives Luxury Package',
    'International Customized Packages',
  ],
  locale: 'en_IN',
  defaultImage: 'img/hero/hero.jpg',
  themeColor: '#4E8A1F',
  phone: '+91-6232323482',
  phoneAlt: '+91-8796882039',
  email: 'info@kalpvrikshhospitality.com',
  address: {
    street: 'H-61, Sec-63',
    locality: 'Noida',
    region: 'Uttar Pradesh',
    postalCode: '201301',
    country: 'IN',
  },
  addressAlt: {
    street: '38/1, Parwati Kunj 2nd, Gangapur Pahari, Moradabad Kashipur Road',
    locality: 'Ramnagar',
    region: 'Uttarakhand',
    postalCode: '244715',
    country: 'IN',
  },
  pages: {
    home: {
      title: 'Best Travel Agency in India | Kalpvriksh Hospitality',
      description: 'Kalpvriksh Hospitality is a best travel agency in India for international customized packages — Kerala, Kashmir, Ladakh, Bali, Dubai, Thailand, Maldives, Goa, Andaman, and Shimla Manali.',
      path: '/',
      image: 'img/hero/hero.jpg',
      type: 'website',
    },
    about: {
      title: 'Best Travel Agency in India | About Kalpvriksh Hospitality',
      description: 'Meet the Kalpvriksh Hospitality team. A Noida-based travel agency crafting premium domestic and international journeys with personalized service since day one.',
      path: '/about.html',
      image: 'img/page-hero/about.jpg',
      type: 'website',
    },
    destinations: {
      title: 'International Customized Packages | Kalpvriksh Hospitality',
      description: 'International customized packages and domestic holidays — Kerala tour packages for 5 days, Kashmir luxury tours, Ladakh group trips, Bali, Dubai, Thailand, Maldives, Goa, and Andaman.',
      path: '/destinations.html',
      image: 'img/destinations/dubai.jpg',
      type: 'website',
    },
    flights: {
      title: 'Flight Booking | Domestic & International Flights | Kalpvriksh',
      description: 'Book domestic and international flights at best fares with Kalpvriksh Hospitality. Group bookings, corporate travel, and 24/7 flight support from Noida, India.',
      path: '/flights.html',
      image: 'img/page-hero/flights.jpg',
      type: 'website',
    },
    visa: {
      title: 'Visa Assistance Services | Tourist & Business Visa | Kalpvriksh',
      description: 'Expert visa assistance for Indian travellers — tourist, business & student visas. Documentation support, application help & appointment guidance by Kalpvriksh Hospitality.',
      path: '/visa.html',
      image: 'img/page-hero/visa.jpg',
      type: 'website',
    },
    forex: {
      title: 'Forex Services | Currency Exchange & Travel Cards | Kalpvriksh',
      description: 'Book domestic and international flights at best fares with Kalpvriksh Hospitality. Group bookings, corporate travel, and 24/7 flight support from Noida, India.',
      path: '/forex.html',
      image: 'img/page-hero/forex.jpg',
      type: 'website',
    },
    contact: {
      title: 'Contact Us | Plan Your Trip | Kalpvriksh Hospitality',
      description: 'Contact Kalpvriksh Hospitality to plan your dream trip. Call +91 6232323482, email info@kalpvrikshhospitality.com, or visit us in Noida, Haryana.',
      path: '/contact.html',
      image: 'img/page-hero/contact.jpg',
      type: 'website',
    },
    privacy: {
      title: 'Privacy Policy | Kalpvriksh Hospitality',
      description: 'Privacy Policy for Kalpvriksh Hospitality. Learn how we collect, use, and protect your personal information when you use our travel services.',
      path: '/privacy.html',
      type: 'website',
    },
    terms: {
      title: 'Terms & Conditions | Kalpvriksh Hospitality',
      description: 'Terms and Conditions for booking travel services with Kalpvriksh Hospitality. Read our policies on bookings, cancellations, and refunds.',
      path: '/terms.html',
      type: 'website',
    },
    package: {
      title: 'Tour Package Details | Kalpvriksh Hospitality',
      description: 'Explore curated tour package details — itinerary, inclusions, pricing, and booking with Kalpvriksh Hospitality.',
      path: '/package.html',
      image: 'img/hero/hero.jpg',
      type: 'website',
    },
    blog: {
      title: 'Travel Blog & Guides | Kalpvriksh Hospitality',
      description: 'Travel tips, destination guides, and visa updates from Kalpvriksh Hospitality experts. Inspiration for your next domestic or international holiday.',
      path: '/blog.html',
      image: 'img/destinations/europe.jpg',
      type: 'article',
    },
  },
};

function absoluteUrl(path) {
  if (!path) return SEO_CONFIG.siteUrl;
  if (/^https?:\/\//i.test(path)) return path;
  const base = SEO_CONFIG.siteUrl.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

function normalizeKeywords(keywords) {
  const source = [...(Array.isArray(keywords) ? keywords : []), ...SEO_CONFIG.keywords];
  const seen = new Set();
  const unique = [];
  source.forEach((item) => {
    const value = String(item || '').trim();
    const key = value.toLowerCase();
    if (!key || seen.has(key)) return;
    seen.add(key);
    unique.push(value);
  });
  return unique.join(', ');
}

function setMetaTag(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setOgTag(property, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function injectJsonLd(data, id = 'seo-jsonld') {
  document.getElementById(id)?.remove();
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function injectJsonLdGraph(items, id = 'seo-jsonld') {
  injectJsonLd({ '@context': 'https://schema.org', '@graph': items }, id);
}

function getTravelAgencySchema() {
  return {
    '@type': 'TravelAgency',
    '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    logo: absoluteUrl('img/logo.png'),
    image: absoluteUrl(SEO_CONFIG.defaultImage),
    description: 'Best travel agency in India for international customized packages, domestic holidays, flights, visa assistance, and forex services.',
    telephone: [SEO_CONFIG.phone, SEO_CONFIG.phoneAlt],
    email: SEO_CONFIG.email,
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: SEO_CONFIG.address.street,
        addressLocality: SEO_CONFIG.address.locality,
        addressRegion: SEO_CONFIG.address.region,
        postalCode: SEO_CONFIG.address.postalCode,
        addressCountry: SEO_CONFIG.address.country,
      },
      {
        '@type': 'PostalAddress',
        streetAddress: SEO_CONFIG.addressAlt.street,
        addressLocality: SEO_CONFIG.addressAlt.locality,
        addressRegion: SEO_CONFIG.addressAlt.region,
        postalCode: SEO_CONFIG.addressAlt.postalCode,
        addressCountry: SEO_CONFIG.addressAlt.country,
      },
    ],
    areaServed: { '@type': 'Country', name: 'India' },
    priceRange: '₹₹',
    sameAs: [
      'https://wa.me/916232323482',
      'https://www.instagram.com/kalpvriksh.hospitality/',
      'https://www.facebook.com/share/1C9zjbGzcH/',
      'https://www.linkedin.com/company/kalpvrikshhospitality/',
    ],
  };
}

function getWebsiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SEO_CONFIG.siteUrl}/#website`,
    url: SEO_CONFIG.siteUrl,
    name: SEO_CONFIG.siteName,
    description: SEO_CONFIG.tagline,
    publisher: { '@id': `${SEO_CONFIG.siteUrl}/#organization` },
    inLanguage: 'en-IN',
  };
}

function getPageSchemas(pageKey) {
  const agency = getTravelAgencySchema();
  const schemas = [agency];

  if (pageKey === 'home') {
    schemas.push(getWebsiteSchema());
  }

  if (pageKey === 'contact') {
    schemas.push({
      '@type': 'ContactPage',
      '@id': absoluteUrl('/contact.html'),
      url: absoluteUrl('/contact.html'),
      name: 'Contact Kalpvriksh Hospitality',
      isPartOf: { '@id': `${SEO_CONFIG.siteUrl}/#website` },
    });
  }

  return schemas;
}

function buildPackageSchema(pkg, imagePath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: pkg.seoTitle || `${pkg.name} Tour Package`,
    description: pkg.description,
    touristType: pkg.type === 'international' ? 'International' : 'Domestic',
    image: absoluteUrl(imagePath),
    url: absoluteUrl(`/package/${pkg.id}/`),
    provider: getTravelAgencySchema(),
    offers: {
      '@type': 'Offer',
      price: String(pkg.price),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl(`/package/${pkg.id}/`),
    },
  };
}

function buildArticleSchema(blog, imagePath) {
  const datePublished = Date.parse(blog.date)
    ? new Date(Date.parse(blog.date)).toISOString().split('T')[0]
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    image: absoluteUrl(imagePath),
    url: absoluteUrl(`/blog/${blog.id}/`),
    datePublished,
    author: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('img/logo.png'),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${blog.id}/`),
  };
}

function updatePageSEO(options = {}) {
  const title = options.title;
  const description = options.description;
  const path = options.path || window.location.pathname.split('/').pop() || 'index.html';
  const query = options.query || window.location.search || '';
  const canonicalPath = options.canonicalPath || `${path}${query}`;
  const image = options.image || SEO_CONFIG.defaultImage;
  const type = options.type || 'website';

  if (title) document.title = title;
  if (description) setMetaTag('description', description);

  setMetaTag('keywords', normalizeKeywords(options.keywords));
  setMetaTag('robots', options.robots || 'index, follow');
  setMetaTag('author', SEO_CONFIG.siteName);
  setMetaTag('theme-color', SEO_CONFIG.themeColor);
  setMetaTag('geo.region', 'IN-HR');
  setMetaTag('geo.placename', SEO_CONFIG.address.locality);

  const pageUrl = absoluteUrl(canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`);
  const imageUrl = absoluteUrl(image);

  setCanonical(pageUrl);
  setOgTag('og:site_name', SEO_CONFIG.siteName);
  setOgTag('og:locale', SEO_CONFIG.locale);
  setOgTag('og:type', type);
  setOgTag('og:title', title || document.title);
  setOgTag('og:description', description || '');
  setOgTag('og:url', pageUrl);
  setOgTag('og:image', imageUrl);
  setOgTag('og:image:alt', title || SEO_CONFIG.siteName);

  setMetaTag('twitter:card', 'summary_large_image');
  setMetaTag('twitter:title', title || document.title);
  setMetaTag('twitter:description', description || '');
  setMetaTag('twitter:image', imageUrl);

  if (options.jsonLd) {
    injectJsonLd(options.jsonLd);
  } else if (options.jsonLdGraph) {
    injectJsonLdGraph(options.jsonLdGraph);
  }
}

function initStaticPage() {
  const pageKey = document.documentElement.dataset.seo;
  if (!pageKey || !SEO_CONFIG.pages[pageKey]) return;

  const page = SEO_CONFIG.pages[pageKey];
  updatePageSEO({
    title: page.title,
    description: page.description,
    path: page.path,
    image: page.image,
    type: page.type,
    jsonLdGraph: getPageSchemas(pageKey),
  });
}

window.SEO = {
  config: SEO_CONFIG,
  absoluteUrl,
  updatePage: updatePageSEO,
  buildPackageSchema,
  buildArticleSchema,
  getTravelAgencySchema,
};

if (document.documentElement.dataset.seo) {
  initStaticPage();
}

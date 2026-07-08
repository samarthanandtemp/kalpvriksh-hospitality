document.addEventListener('DOMContentLoaded', () => {

  const transparent = document.body.dataset.transparentHeader === 'true';

  injectLayout(transparent);

  if (typeof applyImageMap === 'function') applyImageMap();

  initHeader();

  initScrollAnimations();

  initForms();

  initPackagePage();

  initBlogPage();

  initSearchForm();

  initContactPrefill();

  initGallery();

  initHero();

  initMoodSlider();

  initPackageSliders();

  initReviewsSlider();

  initDestFilter();

  initFooterAccordion();

});



function initFooterAccordion() {
  const groups = document.querySelectorAll('.footer__group:not(.footer__group--static)');
  if (!groups.length) return;

  const mq = window.matchMedia('(max-width: 768px)');

  const sync = () => {
    groups.forEach((group) => {
      group.open = !mq.matches;
    });
  };

  sync();
  mq.addEventListener('change', sync);
}



function initHero() {
  initHeroDestinationRotator();
  initHeroReviewSlider();
  initHeroCounters();
}

function initHeroCounters() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const counters = document.querySelectorAll('.hero__stat-value[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.querySelector('span');
        const suffixText = suffix ? suffix.outerHTML : '';
        const duration = 1800;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          el.innerHTML = current.toLocaleString('en-IN') + suffixText;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

function getPackageIdFromCard(card) {
  const match = (card.getAttribute('href') || '').match(/id=([^&]+)/);
  return match ? match[1] : null;
}

function getActiveMood() {
  if (typeof JOURNEY_TYPES === 'undefined') return null;
  const moodId = new URLSearchParams(window.location.search).get('mood');
  return moodId && JOURNEY_TYPES[moodId] ? { id: moodId, ...JOURNEY_TYPES[moodId] } : null;
}

function initDestFilter() {
  const filterBar = document.querySelector('.dest-filter');
  if (!filterBar) return;

  const buttons = filterBar.querySelectorAll('.dest-filter__btn');
  const sections = document.querySelectorAll('.dest-section');
  const mood = getActiveMood();
  const moodPackages = mood ? new Set(mood.packages || []) : null;

  function cardMatchesMood(card) {
    if (!moodPackages) return true;
    const pkgId = getPackageIdFromCard(card);
    return Boolean(pkgId && moodPackages.has(pkgId));
  }

  function applyVisibility() {
    const activeFilter = filterBar.querySelector('.dest-filter__btn.is-active')?.dataset.filter || 'all';

    sections.forEach((section) => {
      const typeMatch = activeFilter === 'all' || section.dataset.destType === activeFilter;
      let sectionHasVisible = false;

      section.querySelectorAll('.dest-showcase .card-link').forEach((card) => {
        const show = cardMatchesMood(card) && typeMatch;
        card.toggleAttribute('data-hidden', !show);
        if (show) sectionHasVisible = true;
      });

      section.toggleAttribute('data-hidden', !sectionHasVisible);
    });
  }

  if (mood) {
    const count = mood.packages?.length || 0;
    const heroTitle = document.querySelector('.page-hero h1');
    const heroDesc = document.querySelector('.page-hero p');
    const heroBadge = document.querySelector('.page-hero__badge');
    const breadcrumb = document.querySelector('.page-hero__breadcrumb');

    if (heroTitle) {
      heroTitle.innerHTML = `${mood.shortTitle || mood.title} <em style="font-style:italic;color:var(--color-primary-light)">Destinations</em>`;
    }
    if (heroDesc) heroDesc.textContent = mood.description;
    if (heroBadge) {
      heroBadge.innerHTML = `<span class="page-hero__badge-dot"></span> ${count} curated destination${count === 1 ? '' : 's'}`;
    }
    if (breadcrumb) {
      breadcrumb.innerHTML = `
        <a href="index.html">Home</a>
        <span>/</span>
        <a href="destinations.html">Destinations</a>
        <span>/</span>
        <span>${mood.shortTitle || mood.title}</span>`;
    }

    document.title = `${mood.title} | Kalpvriksh Hospitality`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = mood.description;

    if (window.SEO) {
      SEO.updatePage({
        title: `${mood.title} | Kalpvriksh Hospitality`,
        description: mood.description,
        canonicalPath: `/destinations.html?mood=${mood.id}`,
        image: mood.image,
      });
    }

    const filterContainer = filterBar.closest('.container');
    if (filterContainer) {
      const banner = document.createElement('div');
      banner.className = 'dest-mood-banner fade-in visible';
      banner.innerHTML = `
        <p>Showing destinations for <strong>${mood.title}</strong></p>
        <a href="destinations.html" class="dest-mood-banner__clear">View all destinations</a>`;
      filterContainer.insertBefore(banner, filterBar);
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.toggle('is-active', b === btn));
      applyVisibility();
    });
  });

  applyVisibility();
}



function initHeroDestinationRotator() {
  const rotator = document.querySelector('.hero__dest-rotator');
  if (!rotator) return;

  const items = rotator.querySelectorAll('.hero__dest-item');
  if (items.length <= 1) return;

  let current = 0;
  const DURATION = 550;

  setInterval(() => {
    const outgoing = items[current];
    current = (current + 1) % items.length;
    const incoming = items[current];

    outgoing.classList.remove('is-active');
    outgoing.classList.add('is-exiting');

    incoming.classList.add('is-entering');
    incoming.offsetHeight;
    incoming.classList.remove('is-entering');
    incoming.classList.add('is-active');

    setTimeout(() => {
      outgoing.classList.remove('is-exiting');
    }, DURATION);
  }, 3000);
}



function initHeroReviewSlider() {
  const track = document.querySelector('.hero-reviews__track');
  const viewport = document.querySelector('.hero-reviews__viewport');
  const dotsContainer = document.querySelector('.hero-reviews__dots');
  if (!track || !viewport || !dotsContainer) return;

  const slides = track.querySelectorAll('.hero-reviews__slide');
  if (slides.length <= 1) return;

  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'hero-reviews__dot' + (i === 0 ? ' is-active' : '');
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.hero-reviews__dot');

  function setViewportHeight() {
    viewport.style.height = slides[index].offsetHeight + 'px';
  }

  function goTo(nextIndex) {
    index = nextIndex;
    track.style.transform = `translateY(-${index * slides[0].offsetHeight}px)`;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    setViewportHeight();
  }

  setViewportHeight();
  window.addEventListener('resize', setViewportHeight);

  setInterval(() => {
    goTo((index + 1) % slides.length);
  }, 4500);
}



function renderMoodCard(id, mood, number) {
  const imgSrc = mood.image || `img/journey/${id}.jpg`;
  const destinations = (mood.packages || [])
    .slice(0, 5)
    .map((pkgId) => {
      const pkg = typeof PACKAGES !== 'undefined' ? PACKAGES[pkgId] : null;
      if (!pkg) return '';
      return `<a href="${getPackageUrl(pkgId)}" class="mood-card__dest">${pkg.name}</a>`;
    })
    .join('');

  return `
    <div class="carousel__item">
      <article class="mood-card">
        <a href="${getMoodDestinationsUrl(id)}" class="mood-card__visual">
          <img src="${imgSrc}" alt="${mood.title}" loading="lazy">
          <span class="mood-card__number">${String(number).padStart(2, '0')}</span>
          <div class="mood-card__overlay">
            <h3 class="mood-card__title">${mood.shortTitle || mood.title}</h3>
            <p class="mood-card__desc">${mood.description}</p>
          </div>
        </a>
        <div class="mood-card__destinations" aria-label="Destinations for ${mood.title}">
          ${destinations}
        </div>
      </article>
    </div>
  `;
}



function renderPackageCard(pkg) {
  const imgSrc = getPackageImageSrc(pkg);
  const blurb = getPackageBlurb(pkg);

  return `
    <div class="carousel__item">
      <a href="${getPackageUrl(pkg.id)}" class="card-link">
        <article class="card">
          <div class="card__image">
            <img src="${imgSrc}" alt="${pkg.name}" loading="lazy">
          </div>
          <div class="card__body">
            <h3 class="card__title">${pkg.name}</h3>
            <p class="card__text">${blurb}</p>
            <p class="card__price">${formatPrice(pkg.price)} <span>per person</span></p>
            <span class="btn btn--primary btn--sm">View Package</span>
          </div>
        </article>
      </a>
    </div>
  `;
}



function initCarousel(container, options) {
  if (!container) return;

  const {
    items,
    renderItem,
    getDotLabel = (_, i) => `Slide ${i + 1}`,
    visibleDesktop = 3,
    autoplayDelay = 4500,
  } = options;

  if (!items?.length) return;

  const track = container.querySelector('.carousel__track');
  const viewport = container.querySelector('.carousel__viewport');
  const dotsContainer = container.querySelector('.carousel__dots');
  const prevBtn = container.querySelector('.carousel__btn--prev');
  const nextBtn = container.querySelector('.carousel__btn--next');
  if (!track || !viewport || !dotsContainer) return;

  const total = items.length;
  const mq = window.matchMedia('(max-width: 1024px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let index = 0;
  let position = 0;
  let timer = null;
  let paused = false;

  function getVisibleCount() {
    return mq.matches ? 1 : visibleDesktop;
  }

  function buildTrack() {
    const visible = getVisibleCount();
    const cards = items.map((item, i) => renderItem(item, i)).join('');
    const clones = items
      .slice(0, visible)
      .map((item, i) => renderItem(item, i))
      .join('');
    track.innerHTML = cards + clones;
    container.dataset.visible = String(visible);
    if (typeof applyImageMap === 'function') applyImageMap(container);
  }

  function getStep() {
    const item = track.querySelector('.carousel__item');
    if (!item) return 0;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap) || 0;
    return item.getBoundingClientRect().width + gap;
  }

  function applyTransform(animate = true) {
    if (!animate || reducedMotion) {
      track.style.transition = 'none';
    } else {
      track.style.transition = '';
    }

    track.style.transform = `translateX(-${position * getStep()}px)`;

    if (!animate || reducedMotion) {
      track.offsetHeight;
      track.style.transition = '';
    }
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.carousel__dot');
    dots.forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  function goTo(moodIndex, animate = true) {
    index = ((moodIndex % total) + total) % total;
    position = index;
    applyTransform(animate);
    updateDots();
  }

  function advance(dir) {
    if (dir > 0) {
      if (index < total - 1) {
        index += 1;
        position = index;
        applyTransform(true);
      } else {
        index = 0;
        position = total;
        applyTransform(true);
        track.addEventListener('transitionend', function onWrap(e) {
          if (e.propertyName !== 'transform' || e.target !== track) return;
          track.removeEventListener('transitionend', onWrap);
          position = 0;
          applyTransform(false);
        });
      }
    } else if (index > 0) {
      index -= 1;
      position = index;
      applyTransform(true);
    } else {
      index = total - 1;
      position = total;
      applyTransform(false);
      requestAnimationFrame(() => {
        position = total - 1;
        applyTransform(true);
      });
    }
    updateDots();
  }

  function buildDots() {
    dotsContainer.innerHTML = '';
    items.forEach((item, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel__dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', getDotLabel(item, i));
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      dot.addEventListener('click', () => {
        goTo(i);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function stopAutoplay() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function scheduleAutoplay() {
    stopAutoplay();
    if (reducedMotion || paused || total <= getVisibleCount()) return;
    timer = setTimeout(() => {
      advance(1);
      scheduleAutoplay();
    }, autoplayDelay);
  }

  function restartAutoplay() {
    scheduleAutoplay();
  }

  function initSlider() {
    buildTrack();
    buildDots();
    index = 0;
    position = 0;
    applyTransform(false);
    updateDots();

    if (total <= getVisibleCount()) {
      if (prevBtn) prevBtn.hidden = true;
      if (nextBtn) nextBtn.hidden = true;
      return;
    }

    if (prevBtn) prevBtn.hidden = false;
    if (nextBtn) nextBtn.hidden = false;
    scheduleAutoplay();
  }

  prevBtn?.addEventListener('click', () => {
    advance(-1);
    restartAutoplay();
  });

  nextBtn?.addEventListener('click', () => {
    advance(1);
    restartAutoplay();
  });

  viewport.addEventListener('mouseenter', () => {
    paused = true;
    stopAutoplay();
  });

  viewport.addEventListener('mouseleave', () => {
    paused = false;
    scheduleAutoplay();
  });

  const onVisibilityChange = () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      scheduleAutoplay();
    }
  };

  document.addEventListener('visibilitychange', onVisibilityChange);

  let resizeTimer;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const current = index;
      buildTrack();
      index = current;
      position = current;
      applyTransform(false);
      updateDots();
    }, 150);
  };

  const onMqChange = () => {
    const current = index;
    buildTrack();
    index = current;
    position = current;
    applyTransform(false);
    updateDots();
    scheduleAutoplay();
  };

  window.addEventListener('resize', onResize);
  mq.addEventListener('change', onMqChange);

  initSlider();

  return () => {
    stopAutoplay();
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('resize', onResize);
    mq.removeEventListener('change', onMqChange);
  };
}



function initMoodSlider() {
  const container = document.getElementById('moodSlider');
  if (!container || typeof JOURNEY_TYPES === 'undefined') return;

  const moodEntries = Object.entries(JOURNEY_TYPES);

  initCarousel(container, {
    items: moodEntries,
    renderItem: ([id, mood], i) => renderMoodCard(id, mood, i + 1),
    getDotLabel: ([, mood]) => `Go to ${mood.shortTitle || mood.title}`,
  });
}



function renderReviewStars(count = 5) {
  const star = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  return `<div class="testimonial-card__stars" aria-label="${count} out of 5 stars">${star.repeat(count)}</div>`;
}



function renderReviewCard(review) {
  return `
    <div class="carousel__item">
      <article class="testimonial-card">
        ${renderReviewStars(review.rating)}
        <p class="testimonial-card__text">"${review.text}"</p>
        <div class="testimonial-card__author">
          <img class="testimonial-card__avatar" src="${review.avatar}" alt="${review.name}" loading="lazy">
          <div>
            <div class="testimonial-card__name">${review.name}</div>
            <div class="testimonial-card__role">${review.package}</div>
          </div>
        </div>
      </article>
    </div>
  `;
}



function initReviewsSlider() {
  const container = document.getElementById('reviewsSlider');
  if (!container || typeof REVIEWS === 'undefined') return;

  initCarousel(container, {
    items: REVIEWS,
    renderItem: (review) => renderReviewCard(review),
    getDotLabel: (review) => `Go to review by ${review.name}`,
  });
}



function initPackageSliders() {
  if (typeof PACKAGES === 'undefined') return;

  const domesticContainer = document.getElementById('domesticSlider');
  const internationalContainer = document.getElementById('internationalSlider');

  if (domesticContainer && typeof FEATURED_DOMESTIC !== 'undefined') {
    const domesticPackages = FEATURED_DOMESTIC
      .map((id) => PACKAGES[id])
      .filter(Boolean);

    initCarousel(domesticContainer, {
      items: domesticPackages,
      renderItem: (pkg) => renderPackageCard(pkg),
      getDotLabel: (pkg) => `Go to ${pkg.name}`,
    });
  }

  if (internationalContainer && typeof FEATURED_INTERNATIONAL !== 'undefined') {
    const internationalPackages = FEATURED_INTERNATIONAL
      .map((id) => PACKAGES[id])
      .filter(Boolean);

    initCarousel(internationalContainer, {
      items: internationalPackages,
      renderItem: (pkg) => renderPackageCard(pkg),
      getDotLabel: (pkg) => `Go to ${pkg.name}`,
    });
  }
}



function initHeader() {

  const header = document.getElementById('header');

  const toggle = document.getElementById('navToggle');

  const nav = document.getElementById('nav');



  if (!header) return;



  window.addEventListener('scroll', () => {

    header.classList.toggle('scrolled', window.scrollY > 50);

  });



  if (toggle && nav) {

    toggle.addEventListener('click', () => {

      toggle.classList.toggle('active');

      nav.classList.toggle('open');

      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';

    });



    nav.querySelectorAll('a').forEach((link) => {

      link.addEventListener('click', () => {

        toggle.classList.remove('active');

        nav.classList.remove('open');

        document.body.style.overflow = '';

      });

    });

  }

}



function initScrollAnimations() {

  const elements = document.querySelectorAll('.fade-in');

  if (!elements.length) return;



  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          observer.unobserve(entry.target);

        }

      });

    },

    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }

  );



  elements.forEach((el) => observer.observe(el));

}



function initForms() {

  document.querySelectorAll('form[data-form]').forEach((form) => {

    if (form.dataset.form === 'search') return;

    form.addEventListener('submit', (e) => {

      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');

      const originalText = btn.textContent;

      btn.textContent = 'Submitted!';

      btn.disabled = true;

      btn.style.opacity = '0.7';



      setTimeout(() => {

        form.reset();

        btn.textContent = originalText;

        btn.disabled = false;

        btn.style.opacity = '1';

      }, 2500);

    });

  });

}



function initSearchForm() {

  const form = document.querySelector('form[data-form="search"]');

  if (!form) return;



  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const destination = form.querySelector('#destination')?.value.trim();

    const params = new URLSearchParams();

    if (destination) {

      const match = findPackageByName(destination);

      if (match) {

        window.location.href = `package.html?id=${match.id}`;

        return;

      }

      params.set('destination', destination);

    }

    const date = form.querySelector('#travel-date')?.value;

    const travellers = form.querySelector('#travellers')?.value;

    if (date) params.set('date', date);

    if (travellers) params.set('travellers', travellers);

    window.location.href = `contact.html?${params.toString()}`;

  });

}



function findPackageByName(query) {

  const q = query.toLowerCase();

  return Object.values(PACKAGES).find(

    (p) => p.name.toLowerCase().includes(q) || p.id.includes(q)

  );

}



function initPackagePage() {

  const container = document.getElementById('package-page');

  if (!container) return;



  const params = new URLSearchParams(window.location.search);

  const id = params.get('id');

  const pkg = PACKAGES[id];



  if (!pkg) {

    container.innerHTML = `

      <section class="page-hero">

        <div class="container">

          <h1>Package Not Found</h1>

          <p>The package you're looking for doesn't exist.</p>

          <a href="destinations.html" class="btn btn--primary" style="margin-top: 1rem;">Browse Destinations</a>

        </div>

      </section>`;

    document.title = 'Package Not Found | Kalpvriksh Hospitality';
    if (window.SEO) {
      SEO.updatePage({
        title: 'Package Not Found | Kalpvriksh Hospitality',
        description: 'The tour package you are looking for could not be found. Browse all destinations with Kalpvriksh Hospitality.',
        canonicalPath: '/package.html',
        robots: 'noindex, follow',
      });
    }

    return;

  }



  document.title = `${pkg.name} Tour Package | Kalpvriksh Hospitality`;
  const img = getImageByKey(pkg.imageKey);
  const description = `${pkg.description.substring(0, 155)}…`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = description;

  if (window.SEO) {
    SEO.updatePage({
      title: `${pkg.name} Tour Package | Kalpvriksh Hospitality`,
      description,
      canonicalPath: `/package.html?id=${pkg.id}`,
      image: img,
      type: 'website',
      jsonLd: SEO.buildPackageSchema(pkg, img),
    });
  }

  const typeLabel = pkg.type === 'international' ? 'International' : 'Domestic';



  const highlights = pkg.highlights

    .map((h) => `<li>${h}</li>`)

    .join('');



  const itinerary = pkg.itinerary

    .map(

      (day) => `

      <div class="itinerary-day fade-in">

        <div class="itinerary-day__badge">Day ${day.day}</div>

        <div class="itinerary-day__content">

          <h4>${day.title}</h4>

          <p>${day.detail}</p>

        </div>

      </div>`

    )

    .join('');



  const inclusions = pkg.inclusions.map((i) => `<li>${i}</li>`).join('');

  const exclusions = pkg.exclusions.map((i) => `<li>${i}</li>`).join('');



  const contactParams = new URLSearchParams({ destination: pkg.name, package: pkg.id });



  container.innerHTML = `

    <section class="package-hero">

      <div class="package-hero__bg">

        <img src="${img}" alt="${pkg.name}">

      </div>

      <div class="container">

        <div class="page-hero__breadcrumb package-hero__breadcrumb">

          <a href="index.html">Home</a>

          <span>/</span>

          <a href="destinations.html">Destinations</a>

          <span>/</span>

          <span>${pkg.name}</span>

        </div>

        <div class="package-hero__content fade-in">

          <span class="package-hero__badge">${typeLabel} &bull; ${pkg.region}</span>

          <h1>${pkg.name}</h1>

          <p class="package-hero__tagline">${pkg.tagline}</p>

          <div class="package-hero__meta">

            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${pkg.duration}</span>

            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Best: ${pkg.bestTime}</span>

          </div>

        </div>

      </div>

    </section>



    <section class="section">

      <div class="container">

        <div class="package-layout">

          <div class="package-main">

            <div class="package-section fade-in">

              <h2>Overview</h2>

              <p>${pkg.description}</p>

            </div>



            <div class="package-section fade-in">

              <h2>Highlights</h2>

              <ul class="package-highlights">${highlights}</ul>

            </div>



            <div class="package-section fade-in">

              <h2>Day-by-Day Itinerary</h2>

              <div class="itinerary-list">${itinerary}</div>

            </div>



            <div class="package-section fade-in">

              <div class="package-inclusions">

                <div>

                  <h3>Inclusions</h3>

                  <ul class="package-list package-list--included">${inclusions}</ul>

                </div>

                <div>

                  <h3>Exclusions</h3>

                  <ul class="package-list package-list--excluded">${exclusions}</ul>

                </div>

              </div>

            </div>

          </div>



          <aside class="package-sidebar fade-in">

            <div class="package-booking-card">

              <div class="package-booking-card__price">

                <span class="package-booking-card__from">Starting from</span>

                <span class="package-booking-card__amount">${formatPrice(pkg.price)}</span>

                <span class="package-booking-card__per">per person</span>

              </div>

              <p class="package-booking-card__note">${pkg.duration} &bull; Taxes extra as applicable</p>

              <a href="contact.html?${contactParams.toString()}" class="btn btn--primary btn--lg" style="width:100%;">Book This Package</a>

              <a href="https://wa.me/${SITE.whatsapp}?text=Hi, I'm interested in the ${encodeURIComponent(pkg.name)} package (${formatPrice(pkg.price)})" class="btn btn--whatsapp" style="width:100%; margin-top: 0.75rem;" target="_blank" rel="noopener noreferrer">

                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>

                WhatsApp Enquiry

              </a>

              <div class="package-booking-card__trust">

                <span>✓ Best Price Guarantee</span>

                <span>✓ 24/7 Travel Support</span>

                <span>✓ Customizable Itinerary</span>

              </div>

            </div>

          </aside>

        </div>

      </div>

    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="page-cta fade-in">
          <h2>Ready to Book ${pkg.name}?</h2>
          <p>Our travel experts are here to customize this package for your dates, group size, and preferences.</p>
          <a href="contact.html?${contactParams.toString()}" class="btn btn--primary btn--lg">Book This Package</a>
        </div>
      </div>
    </section>

  `;



  initScrollAnimations();
  if (typeof applyImageMap === 'function') applyImageMap(container);

}



function processBlogContent(html) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html.trim();
  const toc = [];
  wrapper.querySelectorAll('h3').forEach((heading, index) => {
    const sectionId = `section-${index + 1}`;
    heading.id = sectionId;
    toc.push({ id: sectionId, text: heading.textContent.trim() });
  });
  return { html: wrapper.innerHTML, toc };
}

function getRelatedBlogs(currentId) {
  return Object.values(BLOGS).filter((entry) => entry.id !== currentId);
}

function renderBlogToc(toc) {
  if (!toc.length) {
    return '<p class="blog-toc__empty">No sections in this article.</p>';
  }
  return `<ol class="blog-toc__list">${toc.map((item) =>
    `<li><a href="#${item.id}">${item.text}</a></li>`
  ).join('')}</ol>`;
}

function renderRelatedBlogCards(posts) {
  if (!posts.length) return '';
  return posts.map((post, index) => {
    const img = getImageByKey(post.imageKey);
    const num = String(index + 1).padStart(2, '0');
    const shortDate = post.date.replace(/^(\w+)\s(\d+).*/, '$1 $2');
    return `
      <a href="${getBlogUrl(post.id)}" class="card-link blog-compact fade-in fade-in--delay-${index + 1}">
        <article class="blog-compact__inner">
          <div class="blog-compact__thumb">
            <img src="${img}" alt="${post.title}">
            <span class="blog-compact__num">${num}</span>
          </div>
          <div class="blog-compact__content">
            <span class="blog-compact__tag">${post.category}</span>
            <h3 class="blog-compact__title">${post.title}</h3>
            <p class="blog-compact__text">${post.excerpt}</p>
            <div class="blog-compact__footer">
              <time>${shortDate}</time>
              <span>${post.readTime}</span>
            </div>
          </div>
        </article>
      </a>`;
  }).join('');
}

function initBlogReadingProgress() {
  const bar = document.querySelector('.blog-read-progress__bar');
  const article = document.querySelector('.blog-article');
  if (!bar || !article) return;

  function updateProgress() {
    const rect = article.getBoundingClientRect();
    const articleTop = window.scrollY + rect.top;
    const articleHeight = article.offsetHeight;
    const viewportBottom = window.scrollY + window.innerHeight;
    const scrolled = viewportBottom - articleTop;
    const progress = Math.min(Math.max(scrolled / articleHeight, 0), 1);
    bar.style.width = `${progress * 100}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

function initBlogPage() {
  const container = document.getElementById('blog-page');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const blog = BLOGS[id];

  if (!blog) {
    container.innerHTML = `
      <section class="blog-not-found">
        <div class="blog-not-found__bg" aria-hidden="true"></div>
        <div class="container blog-not-found__inner">
          <span class="blog-not-found__code">404</span>
          <h1>Story Not Found</h1>
          <p>The travel guide you're looking for may have moved or doesn't exist yet.</p>
          <div class="blog-not-found__actions">
            <a href="index.html" class="btn btn--primary">Back to Home</a>
            <a href="index.html#blog" class="btn btn--outline">Browse Stories</a>
          </div>
        </div>
      </section>`;
    if (window.SEO) {
      SEO.updatePage({
        title: 'Story Not Found | Kalpvriksh Hospitality',
        description: 'The travel guide you are looking for could not be found. Browse travel inspiration from Kalpvriksh Hospitality.',
        canonicalPath: '/blog.html',
        robots: 'noindex, follow',
      });
    }
    return;
  }

  document.title = `${blog.title} | Kalpvriksh Hospitality`;
  const img = getImageByKey(blog.imageKey);

  if (window.SEO) {
    SEO.updatePage({
      title: `${blog.title} | Kalpvriksh Hospitality`,
      description: blog.excerpt,
      canonicalPath: `/blog.html?id=${blog.id}`,
      image: img,
      type: 'article',
      jsonLd: SEO.buildArticleSchema(blog, img),
    });
  }

  const { html: articleHtml, toc } = processBlogContent(blog.content);
  const relatedPosts = getRelatedBlogs(blog.id);

  container.innerHTML = `
    <div class="blog-read-progress" aria-hidden="true">
      <div class="blog-read-progress__bar"></div>
    </div>

    <section class="blog-hero blog-hero--editorial">
      <div class="blog-hero__bg">
        <img src="${img}" alt="${blog.title}">
      </div>
      <div class="blog-hero__decor" aria-hidden="true">
        <svg class="blog-hero__compass" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="54" stroke="currentColor" stroke-width="1" stroke-dasharray="4 8" opacity="0.4"/>
          <path d="M60 18 L68 62 L60 102 L52 62 Z" fill="currentColor" opacity="0.15"/>
        </svg>
      </div>
      <div class="container">
        <nav class="page-hero__breadcrumb blog-hero__breadcrumb" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span>/</span>
          <a href="index.html">Travel Inspiration</a>
          <span>/</span>
          <span aria-current="page">${blog.category}</span>
        </nav>
        <div class="blog-hero__content fade-in">
          <div class="blog-hero__eyebrow">
            <span class="blog-hero__category">${blog.category}</span>
            <span class="blog-hero__issue">Travel Journal</span>
          </div>
          <h1>${blog.title}</h1>
          <p class="blog-hero__lede">${blog.excerpt}</p>
          <div class="blog-hero__meta">
            <span class="blog-hero__meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              ${blog.date}
            </span>
            <span class="blog-hero__meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              ${blog.readTime}
            </span>
            <span class="blog-hero__meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Kalpvriksh Experts
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="section blog-body">
      <div class="container blog-layout">
        <article class="blog-article fade-in">
          <div class="blog-article__lead">
            <span class="blog-article__dropcap" aria-hidden="true">${blog.excerpt.charAt(0)}</span>
            <p class="blog-article__intro">${blog.excerpt}</p>
          </div>
          <div class="blog-article__content">
            ${articleHtml}
          </div>
          <footer class="blog-article__footer">
            <div class="blog-article__tags">
              <span class="blog-article__tag">${blog.category}</span>
              <span class="blog-article__tag">Travel Guide</span>
            </div>
            <a href="contact.html" class="blog-article__help">
              Questions about this guide?
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </footer>
        </article>

        <aside class="blog-sidebar fade-in">
          ${toc.length ? `
          <nav class="blog-sidebar__panel blog-toc" aria-label="Table of contents">
            <h2 class="blog-sidebar__heading">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              In This Guide
            </h2>
            ${renderBlogToc(toc)}
          </nav>` : ''}

          <div class="blog-sidebar__panel blog-sidebar__cta">
            <div class="blog-cta-card">
              <div class="blog-cta-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div class="blog-cta-card__text">
                <h4>Plan with an expert</h4>
                <p>Get a personalized itinerary based on this guide.</p>
              </div>
              <a href="contact.html" class="btn btn--primary btn--sm blog-cta-card__btn">Talk to Us</a>
            </div>
          </div>

          <div class="blog-sidebar__panel blog-sidebar__share">
            <h2 class="blog-sidebar__heading">Quick Links</h2>
            <ul class="blog-sidebar__links">
              <li><a href="destinations.html">Explore Destinations</a></li>
              <li><a href="visa.html">Visa Assistance</a></li>
              <li><a href="index.html">Back to Home</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>

    ${relatedPosts.length ? `
    <section class="section section--alt blog-more">
      <div class="container">
        <div class="section-heading section-heading--left fade-in" style="max-width: none; margin-left: 0; text-align: left;">
          <span class="section-heading__label">Keep Reading</span>
          <h2 class="section-heading__title">More Travel <em>Stories</em></h2>
          <p class="section-heading__desc">Continue exploring guides and tips from our travel desk</p>
        </div>
        <div class="blog-more__grid">
          ${renderRelatedBlogCards(relatedPosts)}
        </div>
      </div>
    </section>` : ''}

    <section class="section blog-footer-cta">
      <div class="container">
        <div class="blog-footer-cta__inner fade-in">
          <div class="blog-footer-cta__content">
            <span class="blog-footer-cta__label">Ready to go?</span>
            <h2>Turn inspiration into your next adventure</h2>
            <p>Our travel experts will craft a personalized itinerary — flights, hotels, visa, and more.</p>
          </div>
          <div class="blog-footer-cta__actions">
            <a href="contact.html" class="btn btn--primary btn--lg">Plan Your Trip</a>
            <a href="https://wa.me/916232323482" class="btn btn--whatsapp btn--lg" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
          <div class="blog-footer-cta__decoration" aria-hidden="true">
            <svg viewBox="0 0 200 80" fill="none"><path d="M10 60 Q 60 10, 120 40 T 190 20" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6" stroke-linecap="round"/></svg>
          </div>
        </div>
      </div>
    </section>
  `;

  initScrollAnimations();
  initBlogReadingProgress();
  if (typeof applyImageMap === 'function') applyImageMap(container);
}



function initGallery() {
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('galleryLightbox');
  if (!gallery || !lightbox) return;

  const items = Array.from(gallery.querySelectorAll('.gallery-showcase__item'));
  const lightboxImg = document.getElementById('galleryLightboxImg');
  const lightboxCaption = document.getElementById('galleryLightboxCaption');
  const closeBtn = document.getElementById('galleryLightboxClose');
  const prevBtn = document.getElementById('galleryLightboxPrev');
  const nextBtn = document.getElementById('galleryLightboxNext');

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const item = items[currentIndex];
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = item.dataset.caption || img.alt;
    lightbox.removeAttribute('hidden');
    requestAnimationFrame(() => lightbox.classList.add('open'));
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => lightbox.setAttribute('hidden', ''), 350);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    openLightbox(currentIndex);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    openLightbox(currentIndex);
  }

  items.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', showPrev);
  nextBtn?.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
}



function initContactPrefill() {
  const params = new URLSearchParams(window.location.search);
  const packageId = params.get('package');
  const destination = params.get('destination');
  const date = params.get('date');
  const travellers = params.get('travellers');

  const pkg = packageId && typeof PACKAGES !== 'undefined' ? PACKAGES[packageId] : null;
  const destName = pkg ? pkg.name : destination;

  const subjectField = document.getElementById('contact-subject');
  if (subjectField && destName) subjectField.value = 'tour';

  const destField = document.getElementById('enq-destination');
  if (destField && destName) destField.value = destName;

  const travellersField = document.getElementById('contact-travellers')
    || document.getElementById('enq-travellers');
  if (travellersField && travellers) travellersField.value = travellers;

  const messageParts = [];
  if (destName) messageParts.push(`I'm interested in the ${destName} package.`);
  if (date) messageParts.push(`Preferred travel date: ${date}.`);
  if (travellers) messageParts.push(`Number of travellers: ${travellers}.`);

  if (messageParts.length) {
    const messageField = document.getElementById('contact-message')
      || document.getElementById('enq-message');
    if (messageField) messageField.value = messageParts.join(' ');
  }
}


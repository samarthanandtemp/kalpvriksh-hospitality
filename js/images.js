/**

 * Image URLs — travel photos via Unsplash CDN.

 * Mapped from local paths so existing HTML src attributes work unchanged.

 */

const IMAGE_FALLBACK = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80';



const IMAGES = {

  hero: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=85',

  aboutStory: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',

  pageHero: {
    about: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=85',
    contact: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=85',
    destinations: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=85',
    flights: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=85',
    visa: 'https://images.unsplash.com/photo-1540959733332-eab4deab987a?auto=format&fit=crop&w=1920&q=85',
    forex: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1920&q=85',
    legal: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=85',
  },

  service: {
    flights: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    visa: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    forex: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
  },

  destinations: {

    dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',

    thailand: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',

    bali: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',

    singapore: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',

    maldives: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',

    europe: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',

    vietnam: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',

  },



  domestic: {

    kashmir: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',

    kerala: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',

    ladakh: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',

    andaman: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',

    goa: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',

    himachal: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',

    uttarakhand: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',

    rajasthan: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',

  },



  journey: {

    festivals: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80',

    friends: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',

    romantic: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80',

    weekend: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',

    international: 'https://images.unsplash.com/photo-1438109491414-7198515b166b?auto=format&fit=crop&w=600&q=80',

    adventure: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=600&q=80',

  },



  gallery: {

    mountains: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',

    lake: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80',

    road: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',

    adventure: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=600&q=80',

    beach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',

    waterfall: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',

    culture: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80',

    temple: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',

  },



  blog: {

    europe: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',

    packing: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',

    visa: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',

  },



  team: {

    founder: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',

    sales: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',

    operations: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',

    marketing: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',

  },



  avatars: {

    priya: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',

    rahul: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',

    ananya: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80',

    neha: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80',

    vikram: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',

    sneha: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',

    amit: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=100&h=100&q=80',

    kavita: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&h=100&q=80',

    rohan: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80',

    deepak: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=100&h=100&q=80',

    meera: 'https://images.unsplash.com/photo-1489424731088-a5d8b2191075?auto=format&fit=crop&w=100&h=100&q=80',

    arjun: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80',

  },

};



const IMAGE_MAP = {

  'img/hero/hero.jpg': IMAGES.hero,

  'img/about/story.jpg': IMAGES.aboutStory,

  'img/destinations/dubai.jpg': IMAGES.destinations.dubai,

  'img/destinations/thailand.jpg': IMAGES.destinations.thailand,

  'img/destinations/bali.jpg': IMAGES.destinations.bali,

  'img/destinations/singapore.jpg': IMAGES.destinations.singapore,

  'img/destinations/maldives.jpg': IMAGES.destinations.maldives,

  'img/destinations/europe.jpg': IMAGES.destinations.europe,

  'img/destinations/vietnam.jpg': IMAGES.destinations.vietnam,

  'img/domestic/kashmir.jpg': IMAGES.domestic.kashmir,

  'img/domestic/kerala.jpg': IMAGES.domestic.kerala,

  'img/domestic/ladakh.jpg': IMAGES.domestic.ladakh,

  'img/domestic/andaman.jpg': IMAGES.domestic.andaman,

  'img/domestic/goa.jpg': IMAGES.domestic.goa,

  'img/domestic/himachal.jpg': IMAGES.domestic.himachal,

  'img/domestic/uttarakhand.jpg': IMAGES.domestic.uttarakhand,

  'img/domestic/rajasthan.jpg': IMAGES.domestic.rajasthan,

  'img/journey/festivals.jpg': IMAGES.journey.festivals,

  'img/journey/friends.jpg': IMAGES.journey.friends,

  'img/journey/romantic.jpg': IMAGES.journey.romantic,

  'img/journey/weekend.jpg': IMAGES.journey.weekend,

  'img/journey/international.jpg': IMAGES.journey.international,

  'img/journey/adventure.jpg': IMAGES.journey.adventure,

  'img/gallery/mountains.jpg': IMAGES.gallery.mountains,

  'img/gallery/lake.jpg': IMAGES.gallery.lake,

  'img/gallery/road.jpg': IMAGES.gallery.road,

  'img/gallery/adventure.jpg': IMAGES.gallery.adventure,

  'img/gallery/beach.jpg': IMAGES.gallery.beach,

  'img/gallery/waterfall.jpg': IMAGES.gallery.waterfall,

  'img/gallery/culture.jpg': IMAGES.gallery.culture,

  'img/gallery/temple.jpg': IMAGES.gallery.temple,

  'img/blog/europe.jpg': IMAGES.blog.europe,

  'img/blog/packing.jpg': IMAGES.blog.packing,

  'img/blog/visa.jpg': IMAGES.blog.visa,

  'img/team/founder.jpg': IMAGES.team.founder,

  'img/team/sales.jpg': IMAGES.team.sales,

  'img/team/operations.jpg': IMAGES.team.operations,

  'img/team/marketing.jpg': IMAGES.team.marketing,

  'img/avatars/priya.jpg': IMAGES.avatars.priya,

  'img/avatars/rahul.jpg': IMAGES.avatars.rahul,

  'img/avatars/ananya.jpg': IMAGES.avatars.ananya,

  'img/avatars/neha.jpg': IMAGES.avatars.neha,

  'img/avatars/vikram.jpg': IMAGES.avatars.vikram,

  'img/avatars/sneha.jpg': IMAGES.avatars.sneha,

  'img/avatars/amit.jpg': IMAGES.avatars.amit,

  'img/avatars/kavita.jpg': IMAGES.avatars.kavita,

  'img/avatars/rohan.jpg': IMAGES.avatars.rohan,

  'img/avatars/deepak.jpg': IMAGES.avatars.deepak,

  'img/avatars/meera.jpg': IMAGES.avatars.meera,

  'img/avatars/arjun.jpg': IMAGES.avatars.arjun,

  'img/page-hero/about.jpg': IMAGES.pageHero.about,
  'img/page-hero/contact.jpg': IMAGES.pageHero.contact,
  'img/page-hero/destinations.jpg': IMAGES.pageHero.destinations,
  'img/page-hero/flights.jpg': IMAGES.pageHero.flights,
  'img/page-hero/visa.jpg': IMAGES.pageHero.visa,
  'img/page-hero/forex.jpg': IMAGES.pageHero.forex,
  'img/page-hero/legal.jpg': IMAGES.pageHero.legal,
  'img/service/flights.jpg': IMAGES.service.flights,
  'img/service/visa.jpg': IMAGES.service.visa,
  'img/service/forex.jpg': IMAGES.service.forex,

  'img/hero/hero.jpg': IMAGES.hero,

};



function getImageByKey(key) {

  const parts = key.split('.');

  let val = IMAGES;

  for (const p of parts) {

    val = val?.[p];

  }

  return val || IMAGE_FALLBACK;

}



function attachImageFallback(img) {

  if (img.dataset.fallbackAttached) return;

  img.dataset.fallbackAttached = 'true';

  img.addEventListener('error', () => {

    if (img.src !== IMAGE_FALLBACK) {

      img.src = IMAGE_FALLBACK;

    }

  }, { once: true });

}



function resolveImageSrc(src) {

  if (!src) return IMAGE_FALLBACK;

  if (src.startsWith('http')) return src;

  if (IMAGE_MAP[src]) return IMAGE_MAP[src];

  return src;

}



function applyImageMap(root = document) {

  root.querySelectorAll('img').forEach((img) => {

    const original = img.getAttribute('src');

    if (!original || !IMAGE_MAP[original]) return;



    img.src = IMAGE_MAP[original];

    img.loading = img.loading || 'lazy';

    img.decoding = 'async';

    attachImageFallback(img);

  });

}



const PACKAGES = {
  dubai: {
    id: 'dubai',
    name: 'Dubai',
    type: 'international',
    region: 'UAE',
    price: 24999,
    duration: '5 Days / 4 Nights',
    tagline: 'Luxury, desert adventures & iconic skylines',
    description: 'Experience the dazzling city of Dubai — from the world\'s tallest building Burj Khalifa to golden desert dunes, luxury shopping at Dubai Mall, and pristine beaches along Jumeirah. Our curated package covers flights, 4-star hotel stay, daily breakfast, desert safari with BBQ dinner, and city sightseeing.',
    highlights: ['Burj Khalifa At The Top', 'Desert Safari with BBQ Dinner', 'Dubai Marina Dhow Cruise', 'Dubai Mall & Gold Souk', 'Jumeirah Beach & Palm Jumeirah'],
    itinerary: [
      { day: 1, title: 'Arrival in Dubai', detail: 'Airport pickup, hotel check-in, evening at leisure. Optional Marina walk.' },
      { day: 2, title: 'City Tour & Burj Khalifa', detail: 'Half-day city tour covering Jumeirah Mosque, Palm Jumeirah. Evening visit to Burj Khalifa (124th floor).' },
      { day: 3, title: 'Desert Safari Adventure', detail: 'Afternoon desert safari with dune bashing, camel ride, sandboarding, and BBQ dinner with live entertainment.' },
      { day: 4, title: 'Shopping & Leisure', detail: 'Visit Dubai Mall, Gold Souk, and Spice Souk. Free time for personal exploration.' },
      { day: 5, title: 'Departure', detail: 'Breakfast at hotel, checkout, and transfer to Dubai International Airport.' },
    ],
    inclusions: ['Return airfare from Delhi/Mumbai', '4-star hotel with daily breakfast', 'Airport transfers', 'Desert safari with BBQ dinner', 'Burj Khalifa ticket (124th floor)', 'Half-day city tour', 'All applicable taxes'],
    exclusions: ['Visa fees (assistance provided)', 'Lunch & dinner (except safari BBQ)', 'Personal expenses & tips', 'Travel insurance'],
    bestTime: 'November to March (pleasant weather, 20–30°C)',
    imageKey: 'destinations.dubai',
  },
  thailand: {
    id: 'thailand',
    name: 'Thailand',
    type: 'international',
    region: 'Southeast Asia',
    price: 22999,
    duration: '6 Days / 5 Nights',
    tagline: 'Temples, islands & vibrant street life',
    description: 'Discover Thailand\'s perfect blend of ancient culture and tropical paradise. Explore Bangkok\'s golden temples and floating markets, then unwind on Phuket\'s stunning beaches. Includes flights, hotels, transfers, and guided tours.',
    highlights: ['Grand Palace & Wat Pho', 'Phi Phi Islands Day Trip', 'Bangkok Floating Market', 'Phuket Beach Resort', 'Thai Cultural Show'],
    itinerary: [
      { day: 1, title: 'Arrival in Bangkok', detail: 'Airport pickup, hotel check-in, evening Chao Phraya river cruise.' },
      { day: 2, title: 'Bangkok City Tour', detail: 'Visit Grand Palace, Wat Pho (Reclining Buddha), and Wat Arun. Evening at Chatuchak or night market.' },
      { day: 3, title: 'Bangkok to Phuket', detail: 'Morning flight to Phuket. Beach resort check-in. Evening at Patong Beach.' },
      { day: 4, title: 'Phi Phi Islands', detail: 'Full-day speedboat tour to Phi Phi Islands — Maya Bay, snorkeling, and beach lunch.' },
      { day: 5, title: 'Phuket Leisure', detail: 'Free day for water sports, spa, or Big Buddha visit.' },
      { day: 6, title: 'Departure', detail: 'Transfer to Phuket airport for return flight.' },
    ],
    inclusions: ['Return flights', '3-star hotels with breakfast', 'Bangkok-Phuket domestic flight', 'Phi Phi Islands tour', 'All transfers', 'City sightseeing in Bangkok'],
    exclusions: ['Visa on arrival fee', 'Lunch & dinner', 'Water sports activities', 'Travel insurance'],
    bestTime: 'November to April (dry season)',
    imageKey: 'destinations.thailand',
  },
  bali: {
    id: 'bali',
    name: 'Bali',
    type: 'international',
    region: 'Indonesia',
    price: 20999,
    duration: '5 Days / 4 Nights',
    tagline: 'Rice terraces, temples & tropical bliss',
    description: 'Bali enchants with its lush landscapes, sacred temples, and warm hospitality. Visit the iconic Tanah Lot temple, explore Ubud\'s rice terraces, enjoy Kuta\'s beaches, and experience traditional Balinese culture.',
    highlights: ['Tanah Lot Sunset Temple', 'Ubud Rice Terraces & Monkey Forest', 'Uluwatu Temple & Kecak Dance', 'Water Sports at Tanjung Benoa', 'Balinese Spa Experience'],
    itinerary: [
      { day: 1, title: 'Arrival in Bali', detail: 'Airport pickup, transfer to Kuta/Seminyak hotel. Evening at leisure.' },
      { day: 2, title: 'Ubud Cultural Tour', detail: 'Visit Tegalalang Rice Terraces, Ubud Monkey Forest, and traditional art villages.' },
      { day: 3, title: 'South Bali Temples', detail: 'Tanah Lot temple at sunset. Uluwatu temple with Kecak fire dance performance.' },
      { day: 4, title: 'Water Sports & Beach', detail: 'Morning water sports at Tanjung Benoa. Afternoon beach relaxation.' },
      { day: 5, title: 'Departure', detail: 'Breakfast, checkout, airport transfer.' },
    ],
    inclusions: ['Return flights', '4-star resort with breakfast', 'Private AC vehicle for tours', 'Entrance fees to temples', 'Kecak dance show ticket', 'Airport transfers'],
    exclusions: ['Visa on arrival', 'Lunch & dinner', 'Water sports charges', 'Travel insurance'],
    bestTime: 'April to October (dry season)',
    imageKey: 'destinations.bali',
  },
  singapore: {
    id: 'singapore',
    name: 'Singapore',
    type: 'international',
    region: 'Southeast Asia',
    price: 26999,
    duration: '4 Days / 3 Nights',
    tagline: 'Futuristic city in a garden',
    description: 'Singapore offers a seamless blend of cultures, cuisines, and world-class attractions. Visit Gardens by the Bay, Sentosa Island, Universal Studios, and enjoy the vibrant nightlife of Clarke Quay.',
    highlights: ['Gardens by the Bay & Supertree Grove', 'Sentosa Island Tour', 'Universal Studios Singapore', 'Marina Bay Sands SkyPark', 'Night Safari'],
    itinerary: [
      { day: 1, title: 'Arrival in Singapore', detail: 'Airport pickup, hotel check-in near Orchard Road. Evening Clarke Quay river walk.' },
      { day: 2, title: 'City Highlights', detail: 'Gardens by the Bay, Merlion Park, Chinatown, and Little India walking tour.' },
      { day: 3, title: 'Sentosa Adventure', detail: 'Full day at Sentosa — cable car, S.E.A. Aquarium, and beach time.' },
      { day: 4, title: 'Departure', detail: 'Morning shopping at Orchard Road. Airport transfer for departure.' },
    ],
    inclusions: ['Return flights', '4-star hotel with breakfast', 'Gardens by the Bay entry', 'Sentosa cable car pass', 'City tour with guide', 'Airport transfers'],
    exclusions: ['Visa fees', 'Universal Studios ticket (add-on available)', 'Lunch & dinner', 'Travel insurance'],
    bestTime: 'February to April (least rainfall)',
    imageKey: 'destinations.singapore',
  },
  maldives: {
    id: 'maldives',
    name: 'Maldives',
    type: 'international',
    region: 'Indian Ocean',
    price: 45999,
    duration: '4 Days / 3 Nights',
    tagline: 'Overwater villas & turquoise lagoons',
    description: 'Escape to the Maldives — a paradise of crystal-clear waters, vibrant coral reefs, and luxurious overwater bungalows. Perfect for honeymoons and romantic getaways with snorkeling, spa, and sunset cruises.',
    highlights: ['Overwater Villa Stay', 'Snorkeling with Manta Rays', 'Sunset Dolphin Cruise', 'Private Beach Dining', 'Spa & Wellness'],
    itinerary: [
      { day: 1, title: 'Arrival in Malé', detail: 'Speedboat/seaplane transfer to resort. Welcome drink and villa check-in.' },
      { day: 2, title: 'Island Paradise', detail: 'Snorkeling excursion, beach relaxation, and optional spa treatment.' },
      { day: 3, title: 'Ocean Adventures', detail: 'Sunset dolphin cruise, water sports, and romantic beach dinner.' },
      { day: 4, title: 'Departure', detail: 'Breakfast, checkout, transfer to Malé International Airport.' },
    ],
    inclusions: ['Return flights to Malé', '3 nights resort stay (full board)', 'Speedboat transfers', 'Snorkeling equipment', 'Sunset cruise', 'Resort taxes'],
    exclusions: ['Seaplane transfer (if applicable)', 'Premium water sports', 'Spa treatments', 'Travel insurance'],
    bestTime: 'November to April (dry season)',
    imageKey: 'destinations.maldives',
  },
  europe: {
    id: 'europe',
    name: 'Europe',
    type: 'international',
    region: 'Western Europe',
    price: 89999,
    duration: '10 Days / 9 Nights',
    tagline: 'Paris, Switzerland & Italy — the classic trio',
    description: 'Experience the best of Western Europe — the romance of Paris, the Alps of Switzerland, and the art & history of Italy. A meticulously planned multi-country tour covering iconic landmarks, scenic train rides, and authentic local experiences.',
    highlights: ['Eiffel Tower & Seine River Cruise', 'Swiss Alps & Mt. Titlis', 'Venice Gondola Ride', 'Rome Colosseum & Vatican', 'Scenic Train Journeys'],
    itinerary: [
      { day: 1, title: 'Arrival in Paris', detail: 'Airport pickup, hotel check-in. Evening Seine river cruise.' },
      { day: 2, title: 'Paris City Tour', detail: 'Eiffel Tower, Louvre Museum (exterior), Champs-Élysées, and Notre-Dame area.' },
      { day: 3, title: 'Paris to Switzerland', detail: 'High-speed train to Zurich. Lucerne city walk and lake cruise.' },
      { day: 4, title: 'Swiss Alps', detail: 'Mt. Titlis excursion with rotating cable car and glacier park.' },
      { day: 5, title: 'Switzerland to Italy', detail: 'Scenic train to Milan, then Venice. Evening gondola ride.' },
      { day: 6, title: 'Venice & Florence', detail: 'St. Mark\'s Square, Rialto Bridge. Afternoon transfer to Florence.' },
      { day: 7, title: 'Florence & Pisa', detail: 'Duomo, Ponte Vecchio. Day trip to Leaning Tower of Pisa.' },
      { day: 8, title: 'Florence to Rome', detail: 'High-speed train to Rome. Colosseum and Roman Forum tour.' },
      { day: 9, title: 'Vatican City', detail: 'St. Peter\'s Basilica, Vatican Museums, and Sistine Chapel.' },
      { day: 10, title: 'Departure', detail: 'Transfer to Rome Fiumicino Airport.' },
    ],
    inclusions: ['Return flights', '3-star hotels with breakfast', 'Inter-city train tickets', 'Guided city tours', 'Mt. Titlis excursion', 'Gondola ride in Venice', 'Schengen visa assistance'],
    exclusions: ['Schengen visa fee', 'Lunch & dinner', 'Museum entry fees (some included)', 'Travel insurance'],
    bestTime: 'May to September (warm weather)',
    imageKey: 'destinations.europe',
  },
  vietnam: {
    id: 'vietnam',
    name: 'Vietnam',
    type: 'international',
    region: 'Southeast Asia',
    price: 18999,
    duration: '6 Days / 5 Nights',
    tagline: 'Ha Long Bay, ancient towns & street food',
    description: 'Vietnam captivates with its dramatic landscapes, rich history, and incredible cuisine. Cruise through Ha Long Bay\'s limestone karsts, explore Hoi An\'s lantern-lit streets, and savor authentic pho and banh mi.',
    highlights: ['Ha Long Bay Overnight Cruise', 'Hanoi Old Quarter Tour', 'Hoi An Ancient Town', 'Cu Chi Tunnels', 'Vietnamese Cooking Class'],
    itinerary: [
      { day: 1, title: 'Arrival in Hanoi', detail: 'Airport pickup, Old Quarter walking tour, and water puppet show.' },
      { day: 2, title: 'Ha Long Bay Cruise', detail: 'Transfer to Ha Long Bay. Board overnight cruise with kayaking and cave exploration.' },
      { day: 3, title: 'Ha Long to Hoi An', detail: 'Morning on cruise. Flight to Da Nang, transfer to Hoi An.' },
      { day: 4, title: 'Hoi An Exploration', detail: 'Ancient town walking tour, Japanese Bridge, lantern-making workshop.' },
      { day: 5, title: 'Da Nang & Departure Prep', detail: 'Marble Mountains visit. Evening flight to Hanoi or direct departure.' },
      { day: 6, title: 'Departure', detail: 'Airport transfer for return flight.' },
    ],
    inclusions: ['Return flights', 'Hotels with breakfast', 'Ha Long Bay cruise (1 night)', 'Domestic flight Da Nang-Hanoi', 'Guided tours', 'Airport transfers'],
    exclusions: ['Visa on arrival', 'Lunch & dinner on cruise', 'Personal expenses', 'Travel insurance'],
    bestTime: 'February to April, September to November',
    imageKey: 'destinations.vietnam',
  },
  kashmir: {
    id: 'kashmir',
    name: 'Kashmir',
    type: 'domestic',
    region: 'Jammu & Kashmir',
    price: 12999,
    duration: '5 Days / 4 Nights',
    tagline: 'Paradise on earth — lakes, meadows & snow peaks',
    description: 'Experience the breathtaking beauty of Kashmir — shikara rides on Dal Lake, gondola rides in Gulmarg, meadows of Pahalgam, and the charm of Srinagar\'s Mughal gardens.',
    highlights: ['Dal Lake Shikara Ride', 'Gulmarg Gondola (Phase 1)', 'Pahalgam Betaab Valley', 'Mughal Gardens (Nishat & Shalimar)', 'Sonamarg Day Trip'],
    itinerary: [
      { day: 1, title: 'Arrival in Srinagar', detail: 'Airport pickup, houseboat/hotel check-in. Evening shikara ride on Dal Lake.' },
      { day: 2, title: 'Srinagar Sightseeing', detail: 'Mughal Gardens, Shankaracharya Temple, and local market visit.' },
      { day: 3, title: 'Gulmarg Excursion', detail: 'Day trip to Gulmarg — gondola ride, meadow walks, and photography.' },
      { day: 4, title: 'Pahalgam Day Trip', detail: 'Scenic drive to Pahalgam via Betaab Valley and Aru Valley.' },
      { day: 5, title: 'Departure', detail: 'Breakfast, checkout, airport transfer.' },
    ],
    inclusions: ['Srinagar airport transfers', '4 nights accommodation', 'Daily breakfast', 'Shikara ride', 'Gulmarg gondola ticket', 'All sightseeing by private cab'],
    exclusions: ['Flights to Srinagar', 'Lunch & dinner', 'Pony rides in Pahalgam', 'Travel insurance'],
    bestTime: 'March to October (April–June for flowers, Dec–Feb for snow)',
    imageKey: 'domestic.kashmir',
  },
  kerala: {
    id: 'kerala',
    name: 'Kerala',
    type: 'domestic',
    region: 'South India',
    price: 10999,
    duration: '5 Days / 4 Nights',
    tagline: 'Backwaters, beaches & Ayurveda',
    description: 'God\'s Own Country awaits with tranquil backwater houseboat cruises, misty hill stations of Munnar, wildlife in Thekkady, and golden beaches of Kovalam.',
    highlights: ['Alleppey Houseboat Cruise', 'Munnar Tea Plantations', 'Thekkady Periyar Wildlife', 'Kovalam Beach Sunset', 'Kathakali Cultural Show'],
    itinerary: [
      { day: 1, title: 'Arrival in Cochin', detail: 'Airport pickup, Fort Kochi walking tour — Chinese fishing nets, St. Francis Church.' },
      { day: 2, title: 'Cochin to Munnar', detail: 'Scenic drive to Munnar. Tea estate visit and Eravikulam National Park.' },
      { day: 3, title: 'Munnar to Thekkady', detail: 'Drive to Thekkady. Periyar Lake boat safari and spice plantation tour.' },
      { day: 4, title: 'Thekkady to Alleppey', detail: 'Houseboat check-in. Backwater cruise with Kerala lunch on board.' },
      { day: 5, title: 'Departure', detail: 'Disembark houseboat, transfer to Cochin airport.' },
    ],
    inclusions: ['Airport transfers', 'Hotels + 1 night houseboat', 'Daily breakfast & houseboat meals', 'Periyar boat safari', 'All transfers by AC vehicle', 'Sightseeing as per itinerary'],
    exclusions: ['Flights to Cochin', 'Lunch & dinner (except houseboat)', 'Ayurveda spa treatments', 'Elephant ride (optional)'],
    bestTime: 'September to March',
    imageKey: 'domestic.kerala',
  },
  ladakh: {
    id: 'ladakh',
    name: 'Ladakh',
    type: 'domestic',
    region: 'Ladakh',
    price: 16999,
    duration: '6 Days / 5 Nights',
    tagline: 'High-altitude desert, monasteries & Pangong Lake',
    description: 'Journey to the roof of the world — ancient Buddhist monasteries, the surreal blue of Pangong Lake, Nubra Valley\'s sand dunes, and the thrill of Khardung La pass.',
    highlights: ['Pangong Lake (3 Idiots fame)', 'Nubra Valley & Double-Hump Camels', 'Khardung La Pass', 'Thiksey & Hemis Monasteries', 'Shanti Stupa Sunset'],
    itinerary: [
      { day: 1, title: 'Arrival in Leh', detail: 'Airport pickup, rest for acclimatization. Evening Shanti Stupa visit.' },
      { day: 2, title: 'Leh Local Sightseeing', detail: 'Thiksey Monastery, Hemis Monastery, and Leh Palace.' },
      { day: 3, title: 'Leh to Nubra Valley', detail: 'Cross Khardung La. Diskit Monastery and Hunder sand dunes camel ride.' },
      { day: 4, title: 'Nubra to Pangong Lake', detail: 'Drive to Pangong Lake via Shyok Valley. Overnight camp by the lake.' },
      { day: 5, title: 'Pangong to Leh', detail: 'Sunrise at Pangong. Return to Leh via Chang La pass.' },
      { day: 6, title: 'Departure', detail: 'Airport transfer.' },
    ],
    inclusions: ['Leh airport transfers', '5 nights accommodation', 'Daily breakfast & dinner', 'Inner line permits', 'Private vehicle for entire tour', 'Oxygen cylinder in vehicle'],
    exclusions: ['Flights to Leh', 'Lunch', 'Camel ride charges', 'Travel insurance'],
    bestTime: 'May to September',
    imageKey: 'domestic.ladakh',
  },
  andaman: {
    id: 'andaman',
    name: 'Andaman',
    type: 'domestic',
    region: 'Andaman & Nicobar',
    price: 15999,
    duration: '5 Days / 4 Nights',
    tagline: 'Tropical islands, coral reefs & history',
    description: 'Discover the Andaman Islands — turquoise waters of Radhanagar Beach, snorkeling at North Bay, cellular jail light & sound show, and the untouched beauty of Havelock Island.',
    highlights: ['Radhanagar Beach (Asia\'s Best)', 'Scuba Diving / Snorkeling', 'Cellular Jail Light & Sound Show', 'Ross Island', 'Elephant Beach Water Sports'],
    itinerary: [
      { day: 1, title: 'Arrival in Port Blair', detail: 'Airport pickup. Cellular Jail visit and light & sound show.' },
      { day: 2, title: 'Port Blair to Havelock', detail: 'Ferry to Havelock. Radhanagar Beach sunset.' },
      { day: 3, title: 'Havelock Adventures', detail: 'Elephant Beach snorkeling trip. Optional scuba diving.' },
      { day: 4, title: 'Havelock to Port Blair', detail: 'Morning beach time. Ferry back. Ross Island visit.' },
      { day: 5, title: 'Departure', detail: 'Airport transfer.' },
    ],
    inclusions: ['Airport transfers', '4 nights hotel', 'Daily breakfast', 'Ferry tickets (Port Blair-Havelock)', 'Cellular Jail entry', 'Snorkeling trip to Elephant Beach'],
    exclusions: ['Flights to Port Blair', 'Scuba diving charges', 'Lunch & dinner', 'Camera fees at monuments'],
    bestTime: 'October to May',
    imageKey: 'domestic.andaman',
  },
  goa: {
    id: 'goa',
    name: 'Goa',
    type: 'domestic',
    region: 'Goa',
    price: 8999,
    duration: '4 Days / 3 Nights',
    tagline: 'Sun, sand & Portuguese charm',
    description: 'Goa offers the perfect beach holiday — golden sands, vibrant nightlife, Portuguese heritage churches, spice plantations, and delicious seafood by the sea.',
    highlights: ['North & South Goa Beaches', 'Old Goa Churches (UNESCO)', 'Dudhsagar Waterfalls', 'Spice Plantation Tour', 'Sunset River Cruise'],
    itinerary: [
      { day: 1, title: 'Arrival in Goa', detail: 'Airport/railway pickup. Evening beach walk and shack dinner.' },
      { day: 2, title: 'North Goa Tour', detail: 'Calangute, Baga, Fort Aguada, and Anjuna flea market.' },
      { day: 3, title: 'South Goa Tour', detail: 'Colva, Palolem beaches, Old Goa churches, and spice plantation.' },
      { day: 4, title: 'Departure', detail: 'Morning leisure. Airport/railway transfer.' },
    ],
    inclusions: ['Airport transfers', '3-star beach resort with breakfast', 'North & South Goa sightseeing', 'Spice plantation visit', 'Private AC vehicle'],
    exclusions: ['Flights/trains to Goa', 'Lunch & dinner', 'Water sports', 'Nightlife entry fees'],
    bestTime: 'November to February',
    imageKey: 'domestic.goa',
  },
  himachal: {
    id: 'himachal',
    name: 'Himachal Pradesh',
    type: 'domestic',
    region: 'Himachal Pradesh',
    price: 11999,
    duration: '5 Days / 4 Nights',
    tagline: 'Shimla, Manali & mountain magic',
    description: 'Escape to the Himalayas — colonial charm of Shimla, adventure hub of Manali, Rohtang Pass snow points, and serene valleys of Kullu.',
    highlights: ['Shimla Mall Road & Ridge', 'Manali Solang Valley', 'Rohtang Pass Snow Point', 'Hadimba Temple', 'Kullu Valley & River Rafting'],
    itinerary: [
      { day: 1, title: 'Arrival in Chandigarh', detail: 'Pickup and drive to Shimla. Evening Mall Road stroll.' },
      { day: 2, title: 'Shimla Sightseeing', detail: 'Kufri, Jakhu Temple, Christ Church, and Ridge.' },
      { day: 3, title: 'Shimla to Manali', detail: 'Scenic drive via Kullu Valley. Manali Mall Road evening.' },
      { day: 4, title: 'Manali Adventures', detail: 'Solang Valley, Hadimba Temple, and optional Rohtang Pass visit.' },
      { day: 5, title: 'Departure', detail: 'Drive to Chandigarh. Drop at airport/railway station.' },
    ],
    inclusions: ['Chandigarh pickup/drop', '4 nights hotel with breakfast', 'All sightseeing by private cab', 'Rohtang Pass permit', 'Toll & parking charges'],
    exclusions: ['Flights/trains to Chandigarh', 'Rohtang Pass vehicle charges', 'Adventure activities', 'Lunch & dinner'],
    bestTime: 'March to June, September to November',
    imageKey: 'domestic.himachal',
  },
  uttarakhand: {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    type: 'domestic',
    region: 'Uttarakhand',
    price: 9999,
    duration: '4 Days / 3 Nights',
    tagline: 'Rishikesh, Nainital & spiritual retreats',
    description: 'Uttarakhand blends spirituality and adventure — yoga capital Rishikesh, lake town Nainital, Jim Corbett wildlife safari, and the sacred Char Dham route.',
    highlights: ['Rishikesh Ganga Aarti', 'River Rafting in Rishikesh', 'Nainital Lake Boating', 'Jim Corbett Jeep Safari', 'Laxman Jhula & Beatles Ashram'],
    itinerary: [
      { day: 1, title: 'Arrival in Haridwar/Rishikesh', detail: 'Pickup, hotel check-in. Evening Ganga Aarti at Triveni Ghat.' },
      { day: 2, title: 'Rishikesh Adventure', detail: 'River rafting (16 km), Laxman Jhula, and Beatles Ashram visit.' },
      { day: 3, title: 'Rishikesh to Nainital', detail: 'Drive to Nainital. Naini Lake boating and Mall Road.' },
      { day: 4, title: 'Departure', detail: 'Morning Naina Devi Temple. Drive to Kathgodam/Delhi drop.' },
    ],
    inclusions: ['Pickup & drop', '3 nights hotel with breakfast', 'River rafting session', 'Nainital lake boating', 'All transfers by private cab'],
    exclusions: ['Flights/trains', 'Jim Corbett safari (add-on)', 'Lunch & dinner', 'Adventure activity extras'],
    bestTime: 'March to June, September to November',
    imageKey: 'domestic.uttarakhand',
  },
  rajasthan: {
    id: 'rajasthan',
    name: 'Rajasthan',
    type: 'domestic',
    region: 'Rajasthan',
    price: 13999,
    duration: '6 Days / 5 Nights',
    tagline: 'Royal palaces, desert safaris & vibrant culture',
    description: 'Experience the grandeur of Rajasthan — pink city Jaipur, blue city Jodhpur, golden fort of Jaisalmer, and romantic lakes of Udaipur. A royal journey through India\'s most colorful state.',
    highlights: ['Amber Fort Elephant Ride', 'Jaisalmer Desert Safari & Camping', 'Udaipur Lake Pichola Boat Ride', 'Mehrangarh Fort Jodhpur', 'Hawa Mahal & City Palace Jaipur'],
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', detail: 'Airport pickup. City Palace and Hawa Mahal visit.' },
      { day: 2, title: 'Jaipur Full Day', detail: 'Amber Fort, Jantar Mantar, and local bazaar shopping.' },
      { day: 3, title: 'Jaipur to Jodhpur', detail: 'Drive to Jodhpur. Mehrangarh Fort and blue city walk.' },
      { day: 4, title: 'Jodhpur to Jaisalmer', detail: 'Drive to Jaisalmer. Golden Fort visit. Evening desert safari with camp.' },
      { day: 5, title: 'Jaisalmer to Udaipur', detail: 'Long drive to Udaipur. Evening Lake Pichola boat ride.' },
      { day: 6, title: 'Departure', detail: 'City Palace Udaipur. Airport transfer.' },
    ],
    inclusions: ['Airport transfers', '5 nights heritage hotels with breakfast', 'Desert safari with dinner', 'All sightseeing by private cab', 'Boat ride on Lake Pichola'],
    exclusions: ['Flights', 'Lunch & dinner (except desert camp)', 'Fort entry fees', 'Elephant ride at Amber Fort'],
    bestTime: 'October to March',
    imageKey: 'domestic.rajasthan',
  },
};

const BLOGS = {
  'europe-destinations-2026': {
    id: 'europe-destinations-2026',
    title: 'Top 10 Europe Destinations for 2026',
    category: 'Destinations',
    date: 'March 15, 2026',
    readTime: '8 min read',
    imageKey: 'destinations.europe',
    excerpt: 'Discover the must-visit European cities and hidden gems for your next vacation.',
    content: `
      <p>Europe remains the dream destination for Indian travellers in 2026. With improved flight connectivity, competitive package prices, and a favourable exchange rate, there's never been a better time to explore the continent. Here are our top 10 picks.</p>

      <h3>1. Paris, France</h3>
      <p>The City of Light needs no introduction. From the Eiffel Tower to charming Montmartre cafés, Paris offers romance, art, and world-class cuisine. Best visited April–June or September–October.</p>

      <h3>2. Rome, Italy</h3>
      <p>Walk through 2,000 years of history at the Colosseum, Vatican City, and Trevi Fountain. Italian food alone is worth the trip — pasta, gelato, and espresso at every corner.</p>

      <h3>3. Barcelona, Spain</h3>
      <p>Gaudí's architectural masterpieces, vibrant La Rambla, and beautiful Mediterranean beaches make Barcelona a must-visit. Don't miss Park Güell and Sagrada Família.</p>

      <h3>4. Amsterdam, Netherlands</h3>
      <p>Canals, cycling culture, world-class museums (Van Gogh, Rijksmuseum), and a laid-back atmosphere. Perfect for a 3-day city break.</p>

      <h3>5. Prague, Czech Republic</h3>
      <p>One of Europe's most affordable gems. Gothic architecture, Charles Bridge, and a fairy-tale old town square — Prague is magical year-round.</p>

      <h3>6. Santorini, Greece</h3>
      <p>Iconic white-washed buildings, stunning sunsets in Oia, and crystal-clear Aegean waters. The ultimate honeymoon and photography destination.</p>

      <h3>7. Vienna, Austria</h3>
      <p>Imperial palaces, classical music heritage, and famous coffee house culture. Vienna is elegance personified.</p>

      <h3>8. Lisbon, Portugal</h3>
      <p>Colourful tiled buildings, historic trams, pasteis de nata, and nearby Sintra palaces. Lisbon is Europe's rising star destination.</p>

      <h3>9. Interlaken, Switzerland</h3>
      <p>Gateway to the Swiss Alps — Jungfraujoch, paragliding, and breathtaking mountain scenery. A nature lover's paradise.</p>

      <h3>10. Budapest, Hungary</h3>
      <p>Thermal baths, ruin bars, the Danube River, and stunning Parliament building. Budapest offers luxury at budget-friendly prices.</p>

      <p><strong>Planning tip:</strong> Book your Europe package 2–3 months in advance for the best rates. Kalpvriksh Hospitality offers customized multi-country tours with Schengen visa assistance. <a href="contact.html">Contact us</a> for a personalized quote.</p>
    `,
  },
  'packing-tips': {
    id: 'packing-tips',
    title: 'Smart Packing Tips for International Travel',
    category: 'Travel Tips',
    date: 'February 28, 2026',
    readTime: '6 min read',
    imageKey: 'blog.packing',
    excerpt: 'Pack light and smart with our expert guide to hassle-free international trips.',
    content: `
      <p>Packing smart can save you money on baggage fees, reduce travel stress, and make your trip more enjoyable. Here are proven tips from our travel experts.</p>

      <h3>1. Start with a Packing List</h3>
      <p>Create a checklist 1 week before departure. Categorize by clothing, toiletries, electronics, and documents. Tick items off as you pack to avoid forgetting essentials.</p>

      <h3>2. Roll, Don't Fold</h3>
      <p>Rolling clothes saves 30% more space than folding and reduces wrinkles. Use packing cubes to organize outfits by day or activity.</p>

      <h3>3. Follow the 5-4-3-2-1 Rule</h3>
      <p>For a week-long trip: 5 tops, 4 bottoms, 3 accessories, 2 shoes, 1 jacket. Mix and match neutral colours that coordinate easily.</p>

      <h3>4. Documents in Carry-On Only</h3>
      <p>Passport, visa, tickets, travel insurance, and hotel confirmations must stay in your hand luggage. Keep digital copies on your phone and email.</p>

      <h3>5. Toiletries: Think Travel-Size</h3>
      <p>Follow the 100ml liquid rule for cabin baggage. Buy travel-size containers or solid alternatives (shampoo bars, toothpaste tablets).</p>

      <h3>6. Pack a Universal Adapter</h3>
      <p>A single universal travel adapter with USB ports covers most countries. Essential for keeping devices charged.</p>

      <h3>7. Wear Bulky Items on the Flight</h3>
      <p>Wear your jacket and heaviest shoes during travel to free up suitcase space.</p>

      <h3>8. Leave Room for Souvenirs</h3>
      <p>Pack a foldable duffel bag for shopping. Or plan to do laundry mid-trip to reuse clothing.</p>

      <p><strong>Pro tip:</strong> Check your airline's baggage allowance before packing. Kalpvriksh Hospitality includes baggage details in every package confirmation. Need help? <a href="contact.html">Reach out to our team</a>.</p>
    `,
  },
  'thailand-visa': {
    id: 'thailand-visa',
    title: 'Thailand Visa Update: What You Need to Know',
    category: 'Visa Updates',
    date: 'January 20, 2026',
    readTime: '5 min read',
    imageKey: 'blog.visa',
    excerpt: 'Latest visa requirements and application process for Indian travellers visiting Thailand.',
    content: `
      <p>Thailand remains one of the most popular international destinations for Indian travellers. Here's the latest on visa requirements as of 2026.</p>

      <h3>Visa Exemption for Indian Passport Holders</h3>
      <p>Indian citizens can enter Thailand visa-free for tourism purposes for up to <strong>60 days</strong> (extended from the previous 30-day limit). This applies to arrivals by air and land border crossings.</p>

      <h3>Requirements for Visa-Free Entry</h3>
      <ul>
        <li>Valid Indian passport (minimum 6 months validity from date of entry)</li>
        <li>Confirmed return/onward ticket</li>
        <li>Proof of accommodation (hotel booking)</li>
        <li>Sufficient funds (approximately THB 10,000 per person or THB 20,000 per family)</li>
        <li>TM6 arrival/departure card (provided on flight or at immigration)</li>
      </ul>

      <h3>Thailand Digital Arrival Card (TDAC)</h3>
      <p>From 2025, all travellers must complete the Thailand Digital Arrival Card (TDAC) online within 72 hours before arrival. This replaces the paper TM6 form. Visit the official TDAC website or use the Thai immigration app.</p>

      <h3>When You Need a Visa</h3>
      <p>If you plan to stay longer than 60 days, work, study, or visit for business, you'll need to apply for the appropriate visa at the Royal Thai Embassy in New Delhi, Mumbai, Chennai, or Kolkata before travel.</p>

      <h3>How Kalpvriksh Can Help</h3>
      <p>Our visa assistance team handles TDAC registration, document preparation, and embassy applications for all visa types. We include visa guidance with every Thailand package. <a href="visa.html">Learn about our visa services</a> or <a href="contact.html">contact us</a> for personalized support.</p>
    `,
  },
};

const JOURNEY_TYPES = {
  festivals: {
    title: 'Festival Tours',
    shortTitle: 'Festivals',
    description: 'Celebrate culture around the world — Holi in India, Songkran in Thailand, Diwali festivals, and more.',
    image: 'img/journey/festivals.jpg',
    packages: ['kashmir', 'kerala', 'rajasthan', 'thailand', 'bali'],
  },
  friends: {
    title: 'Friends Trip',
    shortTitle: 'Friends Trip',
    description: 'Adventure-packed group getaways perfect for college reunions and squad vacations.',
    image: 'img/journey/friends.jpg',
    packages: ['goa', 'ladakh', 'andaman', 'bali', 'thailand'],
  },
  romantic: {
    title: 'Romantic Getaway',
    shortTitle: 'Romantic Getaway',
    description: 'Honeymoon and couple packages with private experiences and luxury stays.',
    image: 'img/journey/romantic.jpg',
    packages: ['maldives', 'kerala', 'kashmir', 'bali', 'europe'],
  },
  weekend: {
    title: 'Weekend Trips',
    shortTitle: 'Weekend Trips',
    description: 'Quick escapes from the city — perfect 3-4 day breaks near you.',
    image: 'img/journey/weekend.jpg',
    packages: ['goa', 'uttarakhand', 'himachal', 'rajasthan'],
  },
  international: {
    title: 'International Escapes',
    shortTitle: 'International Escapes',
    description: 'Explore the world with our best international holiday packages.',
    image: 'img/journey/international.jpg',
    packages: ['dubai', 'thailand', 'bali', 'singapore', 'europe'],
  },
  adventure: {
    title: 'Adventure Seekers',
    shortTitle: 'Adventure',
    description: 'Thrilling treks, high passes, and adrenaline-filled expeditions for the bold traveller.',
    image: 'img/journey/adventure.jpg',
    packages: ['ladakh', 'himachal', 'uttarakhand', 'andaman', 'vietnam'],
  },
};

const REVIEWS = [
  {
    name: 'Priya Sharma',
    package: 'Dubai Package',
    avatar: 'img/avatars/priya.jpg',
    rating: 5,
    text: 'Our Dubai trip was flawlessly organized. From visa to flights to hotel, everything was taken care of. Highly recommend Kalpvriksh!',
  },
  {
    name: 'Rahul Mehta',
    package: 'Kashmir Package',
    avatar: 'img/avatars/rahul.jpg',
    rating: 5,
    text: 'The Kashmir package exceeded our expectations. Beautiful hotels, knowledgeable guides, and seamless coordination throughout.',
  },
  {
    name: 'Ananya Gupta',
    package: 'Europe Tour',
    avatar: 'img/avatars/ananya.jpg',
    rating: 5,
    text: 'Visa processing for our Europe tour was smooth and stress-free. The team kept us updated at every step. Will book again!',
  },
  {
    name: 'Neha & Arjun',
    package: 'Bali Honeymoon',
    avatar: 'img/avatars/neha.jpg',
    rating: 5,
    text: 'Our Bali honeymoon was pure magic. Every detail was perfect — from the villa to the sunset dinner cruise. Thank you, Kalpvriksh!',
  },
  {
    name: 'Vikram Patel',
    package: 'Thailand Family Trip',
    avatar: 'img/avatars/vikram.jpg',
    rating: 5,
    text: 'Booked our Thailand family trip through Kalpvriksh. Great value, kid-friendly itinerary, and responsive support throughout. Five stars!',
  },
  {
    name: 'Sneha Reddy',
    package: 'Maldives Honeymoon',
    avatar: 'img/avatars/sneha.jpg',
    rating: 5,
    text: 'The Maldives overwater villa experience was a dream come true. Kalpvriksh handled every transfer and reservation without a single hiccup.',
  },
  {
    name: 'Amit Desai',
    package: 'Ladakh Adventure',
    avatar: 'img/avatars/amit.jpg',
    rating: 5,
    text: 'Ladakh was breathtaking and the itinerary was perfectly paced for acclimatization. Our driver and guide made the high-altitude trip feel effortless.',
  },
  {
    name: 'Kavita Nair',
    package: 'Kerala Backwaters',
    avatar: 'img/avatars/kavita.jpg',
    rating: 5,
    text: 'The houseboat stay in Alleppey was the highlight of our Kerala trip. Kalpvriksh curated a wonderful mix of Munnar, Thekkady, and the coast.',
  },
  {
    name: 'Rohan & Priyanka',
    package: 'Singapore City Break',
    avatar: 'img/avatars/rohan.jpg',
    rating: 5,
    text: 'Singapore in four days felt perfectly planned — Universal Studios, Gardens by the Bay, and great hotel locations. Hassle-free from start to finish.',
  },
  {
    name: 'Deepak Singh',
    package: 'Rajasthan Heritage Tour',
    avatar: 'img/avatars/deepak.jpg',
    rating: 5,
    text: 'Jaipur, Jodhpur, and Udaipur in one trip — every palace stay and desert safari was beautifully arranged. Felt like a royal experience throughout.',
  },
  {
    name: 'Meera Iyer',
    package: 'Vietnam Explorer',
    avatar: 'img/avatars/meera.jpg',
    rating: 5,
    text: 'Ha Long Bay cruise and Hoi An were unforgettable. The team recommended the best local experiences and kept us informed before every leg of the journey.',
  },
  {
    name: 'Arjun Khanna',
    package: 'Goa Weekend Getaway',
    avatar: 'img/avatars/arjun.jpg',
    rating: 5,
    text: 'Quick Goa escape done right — beachside resort, North and South Goa tours, and on-time pickups. Ideal for a short break without any planning stress.',
  },
];

const FEATURED_DOMESTIC = ['kashmir', 'kerala', 'ladakh', 'andaman', 'goa', 'himachal', 'uttarakhand', 'rajasthan'];

const FEATURED_INTERNATIONAL = ['dubai', 'thailand', 'bali', 'vietnam', 'singapore', 'maldives', 'europe'];

function getPackageUrl(id) {
  return `package.html?id=${id}`;
}

function getMoodDestinationsUrl(moodId) {
  return `destinations.html?mood=${moodId}`;
}

function getPackageImageSrc(pkg) {
  if (!pkg?.imageKey) return '';
  const [category, id] = pkg.imageKey.split('.');
  const folder = category === 'domestic' ? 'domestic' : 'destinations';
  return `img/${folder}/${id}.jpg`;
}

function getPackageBlurb(pkg) {
  if (pkg.tagline) return pkg.tagline;
  if (!pkg.description) return '';
  return pkg.description.length > 110 ? `${pkg.description.slice(0, 107)}...` : pkg.description;
}

function getBlogUrl(id) {
  return `blog.html?id=${id}`;
}

function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

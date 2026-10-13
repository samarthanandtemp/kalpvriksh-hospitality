const PACKAGES = {
  dubai: {
    id: 'dubai',
    name: 'Dubai',
    seoTitle: 'Customized Dubai Tour Package',
    metaDescription: 'Book your Dubai Tour Package with Kalpvriksh Hospitality. Choose curated stays, seamless planning and travel support. Enquire today and start your Dubai trip.',
    keywords: ['Customized Dubai Tour Package', 'International Customized Packages'],
    type: 'international',
    region: 'UAE',
    price: 24999,
    duration: '5 Days / 4 Nights',
    tagline: 'Luxury, desert adventures & iconic skylines',
    description: 'Book a customized Dubai tour package with Kalpvriksh Hospitality — Burj Khalifa, golden desert dunes, luxury shopping at Dubai Mall, and beaches along Jumeirah. Includes flights, a 4-star hotel stay, daily breakfast, desert safari with BBQ dinner, and city sightseeing.',
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
    seoTitle: 'Custom Thailand Holiday Package',
    metaDescription: 'Find your Thailand Tour Package with Kalpvriksh Hospitality, designed around smooth travel planning and thoughtful arrangements. Enquire today and get started.',
    keywords: ['Custom Thailand Holiday Package', 'International Customized Packages'],
    type: 'international',
    region: 'Southeast Asia',
    price: 22999,
    duration: '6 Days / 5 Nights',
    tagline: 'Temples, islands & vibrant street life',
    description: 'Plan a custom Thailand holiday package that blends ancient culture and tropical beaches. Explore Bangkok\'s golden temples and floating markets, then unwind on Phuket. Includes flights, hotels, transfers, and guided tours.',
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
    seoTitle: 'Delhi to Bali Tour Packages',
    metaDescription: 'Ready for Bali? Book an affordable Bali Tour Package with Kalpvriksh Hospitality. Find the right package, plan your arrangements and enquire today.',
    keywords: ['Delhi to Bali Tour Packages', 'Tailor Made Bali Honeymoon Itinerary', 'International Customized Packages'],
    type: 'international',
    region: 'Indonesia',
    price: 20999,
    duration: '5 Days / 4 Nights',
    tagline: 'Tailor Made Bali Honeymoon Itinerary',
    description: 'Delhi to Bali tour packages with a tailor made Bali honeymoon itinerary — Tanah Lot, Ubud rice terraces, Kuta beaches, and traditional Balinese culture. Flights from Delhi can be arranged with the stay.',
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
    seoTitle: '4 Nights 5 Days Singapore Tour Package',
    metaDescription: 'Choose an affordable Singapore Tour Package from Kalpvriksh Hospitality and make planning easier. Explore available options, enquire today and book your trip.',
    keywords: ['4 Nights 5 Days Singapore Tour Package'],
    type: 'international',
    region: 'Southeast Asia',
    price: 65000,
    priceNote: 'Per person on twin sharing. Value Hotel Thompson or similar, standard room with breakfast.',
    duration: '5 Days / 4 Nights',
    tagline: 'Night Safari, city tour & Sentosa Island',
    description: 'A 4 nights 5 days Singapore holiday at Value Hotel Thompson or a similar hotel, in a standard room. The stay includes breakfast, a Night Safari, a city tour, half a day on Sentosa, and private airport transfers.',
    highlights: ['Night Safari', 'Singapore City Tour', 'Sentosa Cable Car', 'Oceanarium & Wings of Time', 'Optional Universal Studios'],
    itinerary: [
      { day: 1, title: 'Arrival and Night Safari', detail: 'Meet your driver at Singapore International Airport and transfer to the hotel. The rest of the day is free. In the evening, join the Night Safari on a seat-in-coach transfer. Overnight in Singapore.' },
      { day: 2, title: 'City Tour and Sentosa', detail: 'After breakfast, a half-day city tour is followed by a half day on Sentosa Island, including the cable car, Oceanarium, and Wings of Time, on a seat-in-coach basis. Overnight in Singapore.' },
      { day: 3, title: 'Universal Studios (optional)', detail: 'After breakfast, Universal Studios can be added as a full-day seat-in-coach visit at extra cost. Overnight in Singapore.' },
      { day: 4, title: 'Day at Leisure', detail: 'After breakfast, the day is free to explore the city on your own. Overnight in Singapore.' },
      { day: 5, title: 'Departure', detail: 'After breakfast, check out and take the private transfer to the airport for your flight back to India.' },
    ],
    inclusions: [
      '4 nights at Value Hotel Thompson or a similar hotel',
      'Standard room on twin sharing',
      'Daily breakfast, except on the day of arrival',
      'Evening Night Safari with seat-in-coach transfers',
      'Half-day Sentosa Island tour on a seat-in-coach basis, including the cable car, Oceanarium, and Wings of Time',
      'Singapore city tour on a seat-in-coach basis',
      'Return airport transfers on a private basis',
    ],
    exclusions: [
      'Return economy airfare and airport taxes',
      'Universal Studios ticket',
      '5% GST',
      'TCS as applicable',
      'Personal expenses',
      'Anything not mentioned in the itinerary',
    ],
    notes: [
      'Rates are for a minimum of 2 adults travelling together, and for Indian nationals residing in India.',
      'International check-in is 14:00–15:00 and check-out is 11:00–12:00.',
      'The exchange rate used is 1 USD = ₹90. Any change in the rate is borne by the traveller, and the rate on the final payment day applies.',
      'Rates depend on availability of accommodation and sightseeing at the time of booking.',
      'An alternate hotel or service of the same or a higher standard may be used. A more expensive alternative may be re-quoted.',
      'Seat-in-coach transfers run at fixed times. Sightseeing timings can change and will be confirmed at booking.',
      'Unused services are not refunded, except services cancelled because of weather, which are refunded in full.',
      'Sightseeing is operated by local companies. Prices can change without notice.',
      'Card payments carry a 2% surcharge. The booking deposit is forfeited if the tour is cancelled.',
      'Kalpvriksh Hospitality is not liable if travel does not happen because a visa or other required document is missing.',
    ],
    bestTime: 'Subject to availability at booking',
    imageKey: 'destinations.singapore',
  },
  maldives: {
    id: 'maldives',
    name: 'Maldives',
    seoTitle: '4 Nights 5 Days Maldives Tour Package',
    metaDescription: 'Book your Maldives Tour Package with Kalpvriksh Hospitality and let the details come together. Explore affordable options, enquire today and start planning.',
    keywords: ['Personalized Maldives Luxury Package', '4 Nights 5 Days Maldives Tour Package', 'International Customized Packages'],
    type: 'international',
    region: 'Indian Ocean',
    price: 120000,
    priceNote: 'Per person on twin sharing. Centara Ras Fushi or similar: 2 nights in a beach villa and 2 nights in a water villa.',
    duration: '5 Days / 4 Nights',
    tagline: 'Beach villa, water villa & full board',
    description: 'A 4 nights 5 days Maldives stay at Centara Ras Fushi or a similar resort. Two nights are in a beach villa and two nights in a water villa, with breakfast, lunch, and dinner from the second day, green tax, and speedboat airport transfers.',
    highlights: ['Centara Ras Fushi or Similar', '2 Nights Beach Villa', '2 Nights Water Villa', 'Breakfast, Lunch & Dinner', 'Speedboat Airport Transfers'],
    itinerary: [
      { day: 1, title: 'Arrival in the Maldives', detail: 'Meet your driver at Velana International Airport and transfer to the resort by speedboat. Check in and spend the rest of the day at leisure. Overnight at the resort.' },
      { day: 2, title: 'Day at Leisure', detail: 'After breakfast, the day is free to enjoy the resort. Overnight in the Maldives.' },
      { day: 3, title: 'Day at Leisure', detail: 'After breakfast, the day is free. Overnight in the Maldives.' },
      { day: 4, title: 'Day at Leisure', detail: 'After breakfast, the day is free. Overnight in the Maldives.' },
      { day: 5, title: 'Departure', detail: 'After breakfast, check out and take the speedboat transfer back to the airport for your flight to India.' },
    ],
    inclusions: [
      '2 nights in a beach villa at Centara Ras Fushi or a similar resort',
      '2 nights in a water villa at Centara Ras Fushi or a similar resort',
      'Daily breakfast, lunch, and dinner, except on the day of arrival',
      'Green tax',
      'Return airport transfers by speedboat',
    ],
    exclusions: [
      'Return economy airfare and airport taxes',
      '5% GST',
      'TCS as applicable',
      'Personal expenses',
      'Anything not mentioned in the itinerary',
    ],
    notes: [
      'Rates are for a minimum of 2 adults travelling together, and for Indian nationals residing in India.',
      'International check-in is 14:00–15:00 and check-out is 11:00–12:00.',
      'The exchange rate used is 1 USD = ₹90. Any change in the rate is borne by the traveller, and the rate on the final payment day applies.',
      'Rates depend on availability of accommodation at the time of booking.',
      'An alternate resort of the same or a higher standard may be used. A more expensive alternative may be re-quoted.',
      'Unused services are not refunded, except services cancelled because of weather, which are refunded in full.',
      'Prices can change without notice. Card payments carry a 2% surcharge.',
      'The booking deposit is forfeited if the tour is cancelled.',
      'Kalpvriksh Hospitality is not liable if travel does not happen because a visa or other required document is missing.',
    ],
    bestTime: 'Subject to availability at booking',
    imageKey: 'destinations.maldives',
  },
  mauritius: {
    id: 'mauritius',
    name: 'Mauritius',
    seoTitle: '6 Nights 7 Days Mauritius Tour Package',
    metaDescription: 'Book a 6 nights 7 days Mauritius tour package with Kalpvriksh Hospitality. North and South island tours, Ile aux Cerfs, and stays at Anelia Resort & Spa or similar.',
    keywords: ['6 Nights 7 Days Mauritius Tour Package'],
    type: 'international',
    region: 'Indian Ocean',
    price: 120000,
    priceNote: 'Per person on twin sharing. Anelia Resort & Spa or similar, superior room with breakfast and dinner.',
    duration: '7 Days / 6 Nights',
    tagline: 'North and South island tours & Ile aux Cerfs',
    description: 'A 6 nights 7 days Mauritius holiday at Anelia Resort & Spa or a similar hotel, in a superior room. The stay includes breakfast and dinner from the second day, full-day North and South island tours, a day at Ile aux Cerfs, and seat-in-coach airport transfers.',
    highlights: ['Port Louis & Caudan Waterfront', 'Trou aux Cerfs & Chamarel', 'Grand Bassin & Gris Gris', 'Ile aux Cerfs', 'Anelia Resort & Spa or Similar'],
    itinerary: [
      { day: 1, title: 'Arrival in Mauritius', detail: 'Meet your Kalpvriksh Hospitality representative and transfer to the hotel. The rest of the day is free. Overnight in Mauritius.' },
      { day: 2, title: 'North Island Tour', detail: 'After breakfast, a full-day seat-in-coach tour of the north: Port Louis, the Caudan Waterfront, and the Citadel. Dinner and overnight at the hotel.' },
      { day: 3, title: 'Day at Leisure', detail: 'The day is free at the hotel. Optional extras, booked separately, include a helicopter tour, a Blue Safari submarine or sub-scooter ride, and a lion-park visit. Dinner and overnight at the hotel.' },
      { day: 4, title: 'South Island Tour', detail: 'After breakfast, visit Floreal, Curepipe, the Trou aux Cerfs crater, Grand Bassin, and the Chamarel seven-coloured earth. Lunch is on your own. Continue to the Pomponette viewpoint, the beach, Gris Gris, and Roche Qui Pleure. Dinner and overnight at the hotel.' },
      { day: 5, title: 'Day at Leisure', detail: 'After breakfast, the day is free for the beach and hotel facilities. Water sports are at your own cost. Dinner and overnight at the hotel.' },
      { day: 6, title: 'Ile aux Cerfs', detail: 'After breakfast, a full-day seat-in-coach excursion to Ile aux Cerfs, with free time on the beach and lagoon. An undersea walk can be added at extra cost. Dinner and overnight at the hotel.' },
      { day: 7, title: 'Departure', detail: 'After breakfast, check out and take the seat-in-coach transfer to the airport for your flight to India.' },
    ],
    inclusions: [
      '6 nights at Anelia Resort & Spa or a similar hotel',
      'Superior room on twin sharing',
      'Daily breakfast and dinner, except on the day of arrival',
      'Full-day North Island tour on a seat-in-coach basis',
      'Full-day South Island tour on a seat-in-coach basis',
      'Full-day Ile aux Cerfs tour on a seat-in-coach basis',
      'Return airport transfers on a seat-in-coach basis',
    ],
    exclusions: [
      'Return economy airfare and airport taxes',
      'Lunch, including lunch on the South Island tour',
      'Optional helicopter, submarine, lion-park, and undersea-walk activities',
      '5% GST',
      'TCS as applicable',
      'Personal expenses',
      'Anything not mentioned in the itinerary',
    ],
    notes: [
      'Rates are for a minimum of 2 adults travelling together, and for Indian nationals residing in India.',
      'International check-in is 14:00–15:00 and check-out is 11:00–12:00.',
      'The exchange rate used is 1 USD = ₹90. Any change in the rate is borne by the traveller, and the rate on the final payment day applies.',
      'Rates depend on availability of accommodation and sightseeing at the time of booking.',
      'An alternate hotel of the same or a higher standard may be used. A more expensive alternative may be re-quoted.',
      'Seat-in-coach transfers run at fixed times. Sightseeing timings can change and will be confirmed at booking.',
      'Unused services are not refunded, except services cancelled because of weather, which are refunded in full.',
      'Sightseeing is operated by local companies. Prices can change without notice.',
      'Card payments carry a 2% surcharge. The booking deposit is forfeited if the tour is cancelled.',
      'Kalpvriksh Hospitality is not liable if travel does not happen because a visa or other required document is missing.',
    ],
    bestTime: 'Subject to availability at booking',
    imageKey: 'destinations.mauritius',
  },
  europe: {
    id: 'europe',
    name: 'Europe',
    metaDescription: 'Choose an affordable Europe Tour Package from Kalpvriksh Hospitality, with customized travel plans, visa assistance, flight support and expert help. Book now.',
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
    metaDescription: 'Book a value-focused Vietnam Tour Package with Kalpvriksh Hospitality, offering tailored itineraries, visa assistance, flight support and 24/7 support. Plan your trip.',
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
    seoTitle: 'Kashmir Luxury Tour Packages',
    metaDescription: 'Experience Kashmir’s signature beauty with an affordable Kashmir Tour Package, from serene Dal Lake in Srinagar to Gulmarg and peaceful Pahalgam.',
    keywords: ['Kashmir Luxury Tour Packages', 'Customized Kashmir Holiday Package'],
    type: 'domestic',
    region: 'Jammu & Kashmir',
    price: 16499,
    priceNote: 'Per person on twin sharing. Quoted range ₹16,499–₹18,847. Hotel costs may vary.',
    duration: '5 Days / 4 Nights',
    tagline: 'Customized Kashmir Holiday Package',
    description: 'A customizable 5 days 4 nights Kashmir holiday from Jammu: Vaishno Devi in Katra, the Lidder Valley at Pahalgam, Mughal Gardens in Srinagar, and a Gulmarg gondola day. Breakfast, dinner, and a one-hour shikara ride are included.',
    highlights: ['Vaishno Devi Darshan, Katra', 'Pahalgam & Lidder Valley', 'Betaab Valley & Chandanwari', 'Srinagar Mughal Gardens', 'Gulmarg Cable Car', 'Dal Lake Shikara Ride'],
    itinerary: [
      { day: 1, title: 'Jammu to Katra — Vaishno Devi', detail: 'Reach Jammu and transfer to the hotel in Katra. Visit the Vaishno Devi shrine by trek, or by pony or palanquin. Return to the hotel after darshan.' },
      { day: 2, title: 'Pahalgam', detail: 'After breakfast, drive to Pahalgam. The day is at leisure in the Lidder Valley, with time to take in the valley views.' },
      { day: 3, title: 'Pahalgam to Srinagar', detail: 'Morning sightseeing at Betaab Valley and Chandanwari. Continue to Srinagar for the Mughal Gardens and the city’s other garden sights. Dinner and overnight at a hotel or houseboat.' },
      { day: 4, title: 'Gulmarg', detail: 'Day trip to Gulmarg after breakfast, with a cable-car ride. Return to the Srinagar hotel or houseboat by evening.' },
      { day: 5, title: 'Srinagar to Jammu', detail: 'Transfer to Jammu for the onward journey home.' },
    ],
    inclusions: [
      'Breakfast and dinner',
      'One-hour Shikara ride',
      'Cab for transport and sightseeing',
      'Airport or railway station transfers',
      'Parking charges and toll taxes',
      'Government taxes, VAT, and service charges',
    ],
    exclusions: [
      'Srinagar Airport arrival transfer',
      'Srinagar Airport departure transfer',
      'Etios or Indigo cab for sightseeing',
      'Pony or palanquin rides at Vaishno Devi',
      'Gulmarg cable-car ticket',
      'Personal expenses and travel insurance',
    ],
    notes: [
      'Rates are valid till 31 October 2026.',
      'Hotel costs may vary. Share your dates for the current rate.',
      'Rates are subject to availability and may change at confirmation.',
      'Rooms are on a double-sharing basis unless specified otherwise.',
    ],
    bestTime: 'Valid till 31 October 2026',
    imageKey: 'domestic.kashmir',
  },
  kerala: {
    id: 'kerala',
    name: 'Kerala',
    seoTitle: 'Kerala Tour Packages for 5 Days',
    metaDescription: 'Choose Kerala for its backwaters, beaches and green hill country. Book a reasonable Kerala tour package with Kalpvriksh Hospitality and expert support.',
    keywords: ['Kerala Tour Packages for 5 Days', 'Tailor Made Kerala Tour Package'],
    type: 'domestic',
    region: 'South India',
    price: 13000,
    priceNote: 'Starting per person on Deluxe for 2 adults. Group rates are listed below.',
    duration: '5 Days / 4 Nights',
    tagline: 'Tailor Made Kerala Tour Package',
    description: 'A 5 days 4 nights tailor made Kerala tour package through Munnar, Thekkady, and Kumarakom or Alleppey. Tea hills, Periyar wildlife, and the backwaters of God\'s Own Country, with stays and private transfers arranged by Kalpvriksh Hospitality.',
    highlights: ['Munnar Tea Hills & Eravikulam National Park', 'Cheeyappara & Valara Waterfalls', 'Tata Tea Museum & Mattupetty Dam', 'Periyar Lake Boat Safari', 'Alleppey Backwaters & Beach'],
    itinerary: [
      { day: 1, title: 'Cochin to Munnar', detail: 'Pickup from Cochin International Airport and a scenic drive to Munnar, with stops at Cheeyappara and Valara waterfalls. Check in and settle into the tea-plantation hills.' },
      { day: 2, title: 'Munnar', detail: 'Eravikulam National Park, home of the Nilgiri Tahr, then the Tata Tea Museum. Afternoon at Mattupetty Dam, Echo Point, and Kundala Lake.' },
      { day: 3, title: 'Thekkady', detail: 'Drive to Thekkady and a boat safari on Periyar Lake in Periyar Wildlife Sanctuary. Evening option of a spice plantation visit or a Kathakali or Kalaripayattu performance.' },
      { day: 4, title: 'Alleppey', detail: 'Travel to Alleppey, the Venice of the East. Optional motorboat or houseboat cruise through the backwaters, past paddy fields and village life, then sunset at Alleppey Beach.' },
      { day: 5, title: 'Departure', detail: 'Breakfast and transfer from Alleppey to Cochin International Airport.' },
    ],
    inclusions: [
      'Hotel stay with breakfast on a twin-sharing basis',
      'Non-A/C rooms in hill stations',
      'Private air-conditioned vehicle for transfers and sightseeing, with a driver from 8 AM to 8 PM',
      '20-hour houseboat cruise with meals on board, when the houseboat is included',
      'Taxes, tolls, interstate permits, parking, and driver allowance',
      'Welcome kit for arrivals at Cochin',
    ],
    exclusions: [
      'Airfare or train tickets to Cochin and from the departure point',
      'Lunch, dinner, and snacks, unless served on the houseboat',
      'Personal expenses, tips, laundry, calls, and portage',
      'Optional activities',
      'Entrance fees at sightseeing spots and monuments',
      'Travel insurance',
    ],
    notes: [
      'Rates are valid from 1 October 2026 to 31 March 2027.',
      'Not applicable from 5–20 November 2026 or 20 December 2026 to 5 January 2027.',
      'All rates are net and non-commissionable.',
      'Deluxe and Super Deluxe use a Deluxe houseboat. Premium and Super Premium use a Premium houseboat. Luxury and Super Luxury use a Luxury houseboat.',
      'Shared houseboats are not used on these packages.',
      'Please tell us during the trip if something needs attention. Complaints raised after the trip cannot be taken up.',
    ],
    rates: {
      caption: 'Package cost for the group, by hotel category',
      columns: ['Deluxe', 'Super Deluxe', 'Premium', 'Super Premium', 'Luxury', 'Super Luxury'],
      rows: [
        ['2 adults with Sedan', 26000, 29000, 31700, 33600, 41200, 55300],
        ['4 adults with Ertiga', 41000, 47000, 52000, 56000, 71200, 101000],
        ['6 adults with Ertiga', 52500, 61400, 69000, 75200, 98200, 142000],
        ['8 adults with Tempo Traveller', 70600, 82500, 92800, 101000, 131600, 190000],
        ['10 adults with Tempo Traveller', 82000, 97000, 109800, 120000, 158400, 231300],
        ['Extra bed', 3600, 3900, 4700, 6000, 8700, 11600],
        ['Child without bed', 2400, 2600, 2700, 3200, 3700, 6100],
        ['Dinner, per person', 2900, 2900, 3200, 3600, 4600, 6000],
        ['Houseboat surcharge', 8000, 7600, 10900, 10400, 13900, 6600],
      ],
      extras: [
        'Crysta instead of Ertiga: ₹4,200',
        'Urbania instead of Tempo Traveller: ₹14,400',
      ],
    },
    hotels: [
      {
        destination: 'Munnar',
        categories: [
          ['Green Ridge', 'Forest Haven', 'Prestige Summer Castle', 'Bellmount'],
          ['Princess De Munnar', 'Boulevard', 'Aranyaka', 'Arbour Resort'],
          ['Monsoon Grande', 'Violetwoods', 'Gokulam Park', 'Cloud Castle'],
          ['Haven Inn', 'Lake View', 'Parakkat Nature Resort', 'Munnar Queen'],
          ['Broadbean', 'Fogg', 'Blanket'],
          ['Vibe', 'Le Montfort'],
        ],
      },
      {
        destination: 'Thekkady',
        categories: [
          ['Livins Inn', 'Lake Shore Inn', 'Highrange Plaza'],
          ['Periyar Meadows', 'Karar Garden', 'Cardamom Thekkady'],
          ['Peppervine', 'Holiday Vista', 'Elephant Route'],
          ['Spice Grove', 'Grand Thekkady', 'Keys Prima'],
          ['Mountain Courtyard', 'Elephant Court', 'Poetree'],
          ['Blanket Days', 'Greenwoods', 'Sarovar'],
        ],
      },
      {
        destination: 'Kumarakom / Alleppey',
        categories: [
          ['AJ Park', 'Kalathil', 'Paloma', 'Backwaters World'],
          ['Venice', 'Ramada', 'Backwaters', 'Pagoda'],
          ['Iva Residency', 'Gokulam Grand', 'Time Square'],
          ['Grand Alleppey', 'Rhythm Alleppey', 'Camelot'],
          ['Arcadia', 'Prince', 'Classic'],
          ['AJ Palace', 'Regency'],
        ],
      },
    ],
    bestTime: '1 October 2026 to 31 March 2027',
    imageKey: 'domestic.kerala',
  },
  ladakh: {
    id: 'ladakh',
    name: 'Ladakh',
    seoTitle: 'Ladakh Group Tour Packages',
    metaDescription: 'Plan a thoughtfully curated Ladakh escape across Leh, Pangong Lake and Nubra Valley. Book an affordable tour package backed by Kalpvriksh support.',
    keywords: ['Ladakh Group Tour Packages', 'Custom Ladakh Adventure Trip'],
    type: 'domestic',
    region: 'Ladakh',
    price: 16999,
    duration: '6 Days / 5 Nights',
    tagline: 'Custom Ladakh Adventure Trip',
    description: 'Ladakh group tour packages and a custom Ladakh adventure trip — Buddhist monasteries, Pangong Lake, Nubra Valley sand dunes, and the drive over Khardung La.',
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
    seoTitle: '4 Nights 5 Days Andaman Package',
    metaDescription: 'Step into Andaman’s blue-water beauty. Book an affordable island tour package with Kalpvriksh Hospitality and discover beaches, sightseeing and tropical views.',
    keywords: ['4 Nights 5 Days Andaman Package'],
    type: 'domestic',
    region: 'Andaman & Nicobar',
    price: 15999,
    duration: '5 Days / 4 Nights',
    tagline: 'Tropical islands, coral reefs & history',
    description: 'Our 4 nights 5 days Andaman package covers Radhanagar Beach, snorkeling at North Bay, the Cellular Jail light and sound show, and Havelock Island.',
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
    seoTitle: 'Personalized Goa Family Vacation Package',
    metaDescription: 'Make Goa your next escape with a tailored Goa Tour Package covering beaches, heritage and more, with Kalpvriksh Hospitality’s trusted support.',
    keywords: ['Personalized Goa Family Vacation Package'],
    type: 'domestic',
    region: 'Goa',
    price: 13799,
    priceNote: 'Per person on twin sharing. Quoted range ₹13,799–₹16,664. Hotel costs may vary — share your details for the best rates.',
    duration: '4 Days / 3 Nights',
    tagline: 'North & South Goa family sightseeing',
    description: 'A customizable 3 nights 4 days Goa family holiday in a 4-star hotel, with breakfast, North and South Goa sightseeing, and airport or railway transfers.',
    highlights: ['Fort Aguada & Chapora Fort', 'Calangute, Baga & Coco Beach', 'Miramar Beach & Dona Paula', 'Se Cathedral & Basilica of Bom Jesus', 'Mangesh & Shantadurga Temples'],
    itinerary: [
      { day: 1, title: 'Arrival in Goa', detail: 'Meet the representative at the airport or railway station and transfer to the hotel. After check-in, the day is free for the beach, local markets, and street food on your own. Overnight at the hotel.' },
      { day: 2, title: 'North Goa Sightseeing', detail: 'After breakfast, a full-day North Goa tour covering Fort Aguada, Chapora Fort, Coco Beach, Calangute Beach, and Baga Beach. Watersports such as diving, parasailing, and kitesurfing can be added at extra cost. Overnight at the hotel.' },
      { day: 3, title: 'South Goa and Old Goa', detail: 'After breakfast, visit Shri Mangesh Temple and Shri Shantadurga Temple, then Se Cathedral and the Basilica of Bom Jesus in Old Goa. Lunch is on your own. Continue to Miramar Beach, Dona Paula Bay, and the Panjim market. A Mandovi River cruise can be added at extra cost. Overnight at the hotel.' },
      { day: 4, title: 'Departure', detail: 'After breakfast, check out and transfer to the airport or railway station for your journey home.' },
    ],
    inclusions: [
      '3 nights in a 4-star hotel',
      'Welcome drinks',
      'Breakfast',
      'North and South Goa sightseeing',
      'Airport or railway station transfers',
      'Government taxes',
      'VAT and service charges',
    ],
    exclusions: [
      'Lunch and dinner',
      'Watersports',
      'Mandovi River cruise',
      'Personal expenses',
      'Travel insurance',
      'Anything not mentioned in the inclusions',
    ],
    notes: [
      'This itinerary is customizable.',
      'The quoted range is ₹13,799–₹16,664 per person on twin sharing. Hotel costs may vary.',
    ],
    bestTime: 'November to February',
    imageKey: 'domestic.goa',
  },
  himachal: {
    id: 'himachal',
    name: 'Himachal Pradesh',
    seoTitle: 'Shimla Manali Tour Package for Couple',
    metaDescription: 'Ready for the mountains? Book a Himachal Pradesh Tour Package with Kalpvriksh Hospitality for scenic escapes, flexible plans and dependable travel support.',
    keywords: ['Shimla Manali Tour Package for Couple'],
    type: 'domestic',
    region: 'Himachal Pradesh',
    price: 11999,
    duration: '5 Days / 4 Nights',
    tagline: 'Colonial charm, snow points & quiet valleys',
    description: 'A Shimla Manali tour package for couple — Mall Road evenings, Solang Valley, Rohtang Pass snow points, and the quiet valleys of Kullu.',
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
    seoTitle: 'Uttarakhand Tour Packages For 2 Nights & 3 Days',
    metaDescription: 'Book an Uttarakhand Tour Package for Himalayan scenery, relaxing hill stays and meaningful local experiences, with Kalpvriksh Hospitality by your side. Book Your Trip.',
    keywords: ['Uttarakhand Tour Packages For 2 Nights & 3 Days'],
    type: 'domestic',
    region: 'Uttarakhand',
    price: 15750,
    priceNote: 'Per person on twin sharing. Quoted range ₹15,750–₹18,182. Hotel costs may vary.',
    duration: '3 Days / 2 Nights',
    tagline: 'Nainital lakes, viewpoints & Ranikhet',
    description: 'A customizable 2 nights 3 days Uttarakhand tour based in Nainital, with a Kathgodam transfer, lake and viewpoint sightseeing, a rowboat and cable-car ride, and a Ranikhet excursion before the return to Kathgodam.',
    highlights: ['Snow View Point & Lover\'s Point', 'Himalaya Darshan', 'Khurpatal Lake View Point', 'Nainital Rowboat & Cable Car', 'Ranikhet Temples & Golf Ground'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Nainital', detail: 'Transfer from Kathgodam and check in. Sightseeing covers Himalaya Darshan, Lover\'s Point, Snow View Point, and other viewpoints, about 2.5 hours. Return to the resort for dinner and overnight. Carry a motion-sickness tablet if hill roads affect you.' },
      { day: 2, title: 'Nainital Sightseeing', detail: 'After breakfast, visit Cave Garden, a waterfall, Lake View Point, and Khurpatal Lake View Point. Includes one rowboat ride and a cable-car ride, subject to availability. Wear comfortable shoes. Overnight in Nainital.' },
      { day: 3, title: 'Ranikhet and departure', detail: 'Excursion to Ranikhet for Haidakhan Temple, the Golf Ground, Mankameshwar Temple, and KRC Temple, plus time in the local market. Return via Nainital to Kathgodam.' },
    ],
    inclusions: [
      '2 nights in the offered hotel or resort',
      'Breakfast at the hotel',
      'Twin or double sharing rooms',
      'Private cab for local sightseeing',
      'All taxes',
    ],
    exclusions: [
      'Entrance fees at monuments and temples',
      'Meals not mentioned, including dinner',
      'Personal expenses',
      'Any increase in government or state taxes',
      'Insurance',
      'Anything not mentioned in the itinerary',
    ],
    notes: [
      'Hotel costs may vary. Share your dates for the current rate.',
      'The cable-car ride is subject to availability.',
      'Rates are subject to availability and may change at confirmation.',
      'Rooms are on a double-sharing basis unless specified otherwise.',
    ],
    bestTime: 'Subject to availability at booking',
    imageKey: 'domestic.uttarakhand',
  },
  'rishikesh-mussoorie': {
    id: 'rishikesh-mussoorie',
    name: 'Rishikesh Mussoorie',
    seoTitle: 'Rishikesh Mussoorie Tour Package From Delhi',
    metaDescription: 'Book a 3 days 2 nights Rishikesh Mussoorie tour package from Delhi with Kalpvriksh Hospitality. River rafting, Ganga Aarti, Kempty Falls, and Gun Hill.',
    keywords: ['Rishikesh Mussoorie Tour Package From Delhi'],
    type: 'domestic',
    region: 'Uttarakhand',
    price: 11999,
    priceNote: 'Per person on twin sharing. Quoted range ₹11,999–₹14,545. Hotel costs may vary.',
    duration: '3 Days / 2 Nights',
    tagline: 'River rafting, Ganga Aarti & Mussoorie hills',
    description: 'A customizable 3 days 2 nights Rishikesh Mussoorie tour package from Delhi. Rafting and riverside sights in Rishikesh, the evening Ganga Aarti, then Kempty Falls and Gun Hill in Mussoorie.',
    highlights: ['16 km River Rafting at Shivpuri', 'Ram Jhula & Laxman Jhula', 'Triveni Ghat Ganga Aarti', 'Tapovan & Bharat Mata Mandir', 'Kempty Falls & Gun Hill'],
    itinerary: [
      { day: 1, title: 'Delhi to Rishikesh', detail: 'Drive from Delhi and check in to your camp, hotel, or resort. Head to Shivpuri for 16 km river rafting, body surfing, free flow, and rappelling. Then visit Ram Jhula, Laxman Jhula, Tapovan, Bharat Mata Mandir, and Triveni Ghat for the Ganga Aarti. Wear comfortable clothes and footwear for the activities.' },
      { day: 2, title: 'Rishikesh to Mussoorie', detail: 'Breakfast and checkout, then drive to Mussoorie. After check-in, visit Kempty Falls and Gun Hill. Comfortable shoes are best for sightseeing.' },
      { day: 3, title: 'Departure from Mussoorie', detail: 'Breakfast, checkout, and the drive back home.' },
    ],
    inclusions: [
      '2 nights in the offered hotel, camp, or resort',
      'Breakfast at the hotel',
      'Twin or double sharing rooms',
      'Private cab for local sightseeing',
      'All taxes',
    ],
    exclusions: [
      'Entrance fees at monuments and temples',
      'Meals not mentioned, including dinner',
      'Personal expenses',
      'Any increase in government or state taxes',
      'Insurance',
      'Anything not mentioned in the itinerary',
    ],
    notes: [
      'Rates are valid till 31 October 2026.',
      'Hotel costs may vary. Share your dates for the current rate.',
      'Rates are subject to availability and may change at confirmation.',
      'Rooms are on a double-sharing basis unless specified otherwise.',
    ],
    bestTime: 'Valid till 31 October 2026',
    imageKey: 'domestic.rishikesh',
  },
  rajasthan: {
    id: 'rajasthan',
    name: 'Rajasthan',
    seoTitle: 'Rajasthan Tour Package 3 Nights & 4 Days',
    metaDescription: 'Experience what makes Rajasthan special, from historic forts and palaces to desert horizons. Book a Rajasthan Tour Package with Kalpvriksh Hospitality.',
    keywords: ['Rajasthan Tour Package 3 Nights & 4 Days'],
    type: 'domestic',
    region: 'Rajasthan',
    price: 9999,
    priceNote: 'Per person on twin sharing. Quoted range ₹9,999–₹13,235. Hotel costs may vary.',
    duration: '4 Days / 3 Nights',
    tagline: 'Jodhpur forts, Jaisalmer & the Thar Desert',
    description: 'A customizable 3 nights 4 days Rajasthan tour through Jodhpur and Jaisalmer. Mehrangarh Fort, the Golden Fort, Gadisar Lake, and a night at the Sam sand dunes with a camel safari and camp dinner.',
    highlights: ['Mehrangarh Fort & Jaswant Thada', 'Umaid Bhawan Palace Museum', 'Sonar Quila & Gadisar Lake', 'Sam Sand Dunes Camel Safari', 'Patwon ki Haveli'],
    itinerary: [
      { day: 1, title: 'Arrival in Jodhpur', detail: 'Meet the representative and check in. Visit Mehrangarh Fort, Jaswant Thada, and the Umaid Bhawan Palace Museum, then shop in the local markets. Overnight at the hotel.' },
      { day: 2, title: 'Jodhpur to Jaisalmer', detail: 'After breakfast, drive to Jaisalmer and check in. Visit Sonar Quila, then spend the evening at Gadisar Lake. Overnight at the hotel.' },
      { day: 3, title: 'Thar Desert', detail: 'After breakfast, visit Bada Bagh, Lodurva, the abandoned village of Kuldhara, and Khaba Fort. Continue to the Sam sand dunes for sunset, a camel safari, dinner at the camp, and folk music and dance. Overnight in the tents.' },
      { day: 4, title: 'Jaisalmer and departure', detail: 'After breakfast, visit Patwon ki Haveli, Salim Singh Haveli, and the Thar Heritage Museum. Check out and leave for home.' },
    ],
    inclusions: [
      'Hotel stay',
      'Breakfast',
      'Dinner at the desert camp',
      'Cultural program and camel safari at the camp',
      'Sightseeing',
      'Airport or railway station transfers',
    ],
    exclusions: [
      'Dinner at the hotel',
      'Guide',
      'English-speaking driver',
      'Trip supplements',
      'Meals not mentioned',
      'Insurance',
      'Anything not mentioned in the itinerary',
    ],
    notes: [
      'Hotel costs may vary. Share your dates for the current rate.',
      'Rates are subject to availability and may change at confirmation.',
      'Rooms are on a double-sharing basis unless specified otherwise.',
    ],
    bestTime: 'Subject to availability at booking',
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
    packages: ['goa', 'rishikesh-mussoorie', 'uttarakhand', 'himachal', 'rajasthan'],
  },
  international: {
    title: 'International Escapes',
    shortTitle: 'International Escapes',
    description: 'International customized packages to Dubai, Thailand, Bali, Singapore, and Europe.',
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

const FEATURED_DOMESTIC = ['kashmir', 'kerala', 'ladakh', 'andaman', 'goa', 'himachal', 'uttarakhand', 'rishikesh-mussoorie', 'rajasthan'];

const FEATURED_INTERNATIONAL = ['dubai', 'thailand', 'bali', 'vietnam', 'singapore', 'maldives', 'mauritius', 'europe'];

function getPackageUrl(id) {
  return `package/${id}/`;
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
  if (pkg.seoTitle) return pkg.seoTitle;
  if (pkg.tagline) return pkg.tagline;
  if (!pkg.description) return '';
  return pkg.description.length > 110 ? `${pkg.description.slice(0, 107)}...` : pkg.description;
}

function getBlogUrl(id) {
  return `blog/${id}/`;
}

function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

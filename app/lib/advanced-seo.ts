// Advanced SEO Schema Markup & Optimization

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best plots for sale in Vizag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vizag Yards offers the best VMRDA approved residential plots in Visakhapatnam. Our ventures like Radian Silicon Park and Nexus Valley provide gated community open plots with modern amenities and excellent connectivity near Bhogapuram Airport.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to buy plots in Visakhapatnam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can buy approved residential plots from Vizag Yards. Visit our website, explore our ventures, and contact us for site visits. We provide hassle-free property purchase with bank loan assistance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Vizag Yards plots VMRDA approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all residential plots at Vizag Yards are VMRDA approved. We ensure complete legal compliance and transparent documentation for all our ventures in Vizag.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price of plots in Vizag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plot prices in Vizag vary based on location, size, and amenities. Vizag Yards offers competitive pricing for open plots. Contact us for detailed pricing of our residential ventures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Radian Silicon Park a good investment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Radian Silicon Park in Bhogapuram is an excellent investment opportunity. Located near the upcoming Bhogapuram Airport with strong infrastructure development, it offers great appreciation potential.',
      },
    },
  ],
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: item.url,
  })),
});

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://vizagyards.com',
  name: 'Vizag Yards',
  alternateName: 'Prakruthi Avenues',
  image: 'https://vizagyards.com/logo.png',
  description: 'Premium residential plots and ventures in Visakhapatnam. VMRDA approved open plots in gated communities.',
  url: 'https://vizagyards.com',
  telephone: '+91 8790388887',
  email: 'info@prakrtiavenues.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sai Trade Center, 2nd Floor, Dwaraka Nagar',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'AP',
    postalCode: '530016',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '17.6869',
    longitude: '83.2185',
  },
  areaServed: ['Visakhapatnam', 'Vizag', 'Bhogapuram', 'Anandapuram', 'Bheemili'],
  priceRange: '₹40,00,000 - ₹1,00,00,000',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://vizagyards.com',
  ],
};

export const aggregateOfferSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateOffer',
  priceCurrency: 'INR',
  lowPrice: '4000000',
  highPrice: '10000000',
  offerCount: '2',
  offers: [
    {
      '@type': 'Offer',
      name: 'Radian Silicon Park',
      price: '5000000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://vizagyards.com/ventures/2',
    },
    {
      '@type': 'Offer',
      name: 'Nexus Valley',
      price: '4500000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://vizagyards.com/ventures/1',
    },
  ],
};

export const siteNavigationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: 'Vizag Yards - Real Estate in Visakhapatnam',
  url: 'https://vizagyards.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://vizagyards.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vizag Yards',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '250',
  },
};

// Meta tag optimizer for internal linking
export const internalLinkingStrategy = {
  home: [
    { text: 'Buy Plots in Vizag', href: '/ventures' },
    { text: 'Residential Ventures', href: '/ventures' },
    { text: 'About Vizag Yards', href: '/about' },
    { text: 'Contact Us', href: '/contact' },
  ],
  ventures: [
    { text: 'Home', href: '/' },
    { text: 'View All Properties', href: '/ventures' },
    { text: 'Investment Opportunities', href: '/ventures' },
  ],
};

// Keyword optimization for content
export const contentKeywordMap = {
  home: {
    h1: 'Buy Premium Residential Plots in Vizag & Visakhapatnam',
    h2: [
      'Best Plots for Sale in Visakhapatnam',
      'VMRDA Approved Open Plots Near Bhogapuram Airport',
      'Residential Ventures in Vizag by Prakruthi Avenues',
      'Investment Opportunities in Real Estate Vizag',
    ],
  },
  ventures: {
    h1: 'All Residential Plots & Ventures in Vizag',
    h2: [
      'Premium Residential Ventures in Visakhapatnam',
      'Approved Open Plots for Sale in Vizag',
      'Gated Community Plots in Visakhapatnam',
    ],
  },
  radianSiliconPark: {
    h1: 'Radian Silicon Park - Premium Plots in Bhogapuram, Vizag',
    h2: [
      'Plots for Sale in Bhogapuram',
      'Investment Opportunity Near Bhogapuram Airport',
      'VMRDA Approved Residential Plots',
      'Premium Lakeside Living at Radian Silicon Park',
    ],
  },
  nexusValley: {
    h1: 'Nexus Valley - Best Residential Plots in Vizag',
    h2: [
      'Open Plots in Vizag',
      'Gated Community Residential Plots',
      'Premium Ventures in Visakhapatnam',
      'Modern Architecture & Amenities',
    ],
  },
};

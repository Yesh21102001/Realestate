export const siteConfig = {
  name: 'Vizag Yards',
  description: 'Discover premium residential plots and ventures in Visakhapatnam. Vizag Yards by Prakruthi Avenues offers VMRDA approved plots with modern amenities and excellent connectivity near Bhogapuram Airport.',
  url: 'https://vizagyards.com',
  ogImage: '/logo.png',
  email: 'info@prakrtiavenues.com',
  phone: '+91 8790388887',
  address: 'Sai Trade Center, 2nd Floor, Prakruti Avenue Pvt Ltd, Dwaraka Nagar Second Line, Visakhapatnam',
  city: 'Visakhapatnam',
  state: 'Andhra Pradesh',
  country: 'India',
  zipCode: '530016',
};

export const keywordClusters = {
  primary: [
    'Vizag Yards',
    'Vizag Plots',
    'Plots for Sale in Vizag',
    'Plots for Sale in Visakhapatnam',
    'Open Plots in Vizag',
    'Residential Plots in Vizag',
    'Residential Plots in Visakhapatnam',
    'Real Estate in Vizag',
    'Vizag Real Estate',
  ],
  highIntent: [
    'Buy Plots in Vizag',
    'Buy Plots in Visakhapatnam',
    'Buy Open Plots in Vizag',
    'Buy Residential Plots in Vizag',
    'Best Plots in Vizag',
    'New Plots in Vizag',
    'Upcoming Ventures in Vizag',
    'Gated Community Plots in Vizag',
  ],
  locationBased: [
    'Plots in Bhogapuram',
    'Plots for Sale in Bhogapuram',
    'Plots near Bhogapuram Airport',
    'Plots in Anandapuram',
    'Plots for Sale in Anandapuram',
    'Plots in Bheemili',
    'Plots for Sale in Bheemili',
  ],
  venture: [
    'Residential Ventures in Vizag',
    'Residential Ventures in Visakhapatnam',
    'Open Plot Ventures in Vizag',
    'Premium Ventures in Vizag',
    'Approved Plots in Vizag',
    'VMRDA Approved Plots in Vizag',
  ],
  investment: [
    'Best Land Investment in Vizag',
    'Land Investment in Vizag',
    'Real Estate Investment in Vizag',
    'Property Investment in Vizag',
    'Best Areas to Buy Plots in Vizag',
  ],
  longTail: [
    'Affordable Plots for Sale in Vizag',
    'Premium Residential Plots in Vizag',
    'Plots Near Bhogapuram Airport',
    'Gated Community Open Plots in Vizag',
    'Best Residential Ventures Near Vizag',
  ],
  brand: [
    'Vizag Yards',
    'Vizag Yards Plots',
    'Vizag Yards Ventures',
    'Vizag Yards Real Estate',
    'Vizag Yards Visakhapatnam',
  ],
};

export const generateMetadata = (title: string, description: string, path: string, keywords?: string[]) => ({
  title: `${title} | Vizag Yards - Plots & Ventures in Visakhapatnam`,
  description,
  keywords: [
    ...keywordClusters.primary,
    ...keywordClusters.highIntent.slice(0, 3),
    ...(keywords || [])
  ].slice(0, 12).join(', '),
  openGraph: {
    title: `${title} | Vizag Yards`,
    description,
    url: `${siteConfig.url}${path}`,
    siteName: 'Vizag Yards',
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Vizag Yards`,
    description,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
  },
  canonical: `${siteConfig.url}${path}`,
});

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vizag Yards',
  alternateName: 'Prakruthi Avenues',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    postalCode: siteConfig.zipCode,
    addressCountry: siteConfig.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phone,
    contactType: 'Sales',
    email: siteConfig.email,
  },
  sameAs: [
    'https://vizagyards.com',
  ],
};

export const realEstateAgentSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Vizag Yards',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    postalCode: siteConfig.zipCode,
    addressCountry: siteConfig.country,
  },
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${siteConfig.url}/logo.png`,
  priceRange: '₹40 Lakh - ₹1 Crore+',
  areaServed: ['Visakhapatnam', 'Vizag', 'Bhogapuram', 'Andhra Pradesh'],
};

export const propertySchema = (property: any) => ({
  '@context': 'https://schema.org',
  '@type': 'Residence',
  name: property.name,
  description: property.description,
  url: `${siteConfig.url}/ventures/${property.id}`,
  image: `${siteConfig.url}${property.image}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: property.loc,
    addressRegion: siteConfig.state,
    addressCountry: siteConfig.country,
  },
  priceCurrency: 'INR',
  price: property.price?.replace(/[₹,]/g, ''),
  numberOfRooms: property.beds,
  numberOfBathroomsUnitComplete: property.baths,
  floorSize: {
    '@type': 'QuantitativeValue',
    value: property.sqft?.replace(/,/g, ''),
    unitCode: 'sqf',
  },
  agent: organizationSchema,
  amenityFeature: property.features?.map((feature: string) => ({
    '@type': 'LocationFeatureSpecification',
    name: feature,
  })) || [],
});

export const siteConfig = {
  name: 'Vizag Yards',
  description: 'Discover premium real estate properties in Visakhapatnam. Prakruthi Avenues offers residential plots and properties in Vizag with modern amenities and excellent connectivity.',
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

export const generateMetadata = (title: string, description: string, path: string, keywords?: string[]) => ({
  title: `${title} | Vizag Yards - Real Estate in Visakhapatnam`,
  description,
  keywords: [
    'real estate Vizag',
    'properties Visakhapatnam',
    'Prakruthi Avenues',
    'residential plots',
    'buy property Vizag',
    ...(keywords || [])
  ].join(', '),
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

import type { Metadata } from 'next';
import type { Venture } from '../data/ventures';
import type { Faq } from '../data/faqs';

export const siteConfig = {
  name: 'Vizag Yards',
  legalName: 'Prakruti Avenues Pvt. Ltd.',
  description: 'Discover premium residential plots and ventures in Visakhapatnam. Vizag Yards by Prakruti Avenues offers approved plots with modern amenities and excellent connectivity near Bhogapuram Airport.',
  url: 'https://vizagyards.com',
  ogImage: '/images/vizag-hero.png',
  logo: '/logo.png',
  email: 'info@prakrtiavenues.com',
  phone: '+91 8790388887',
  phoneE164: '+918790388887',
  streetAddress: 'Sai Trade Centre, 2nd Floor, 2nd Lane, Dwaraka Nagar',
  city: 'Visakhapatnam',
  state: 'Andhra Pradesh',
  country: 'IN',
  zipCode: '530016',
  locale: 'en_IN',
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
    'Plots in Bobbili',
    'Plots in Vizianagaram',
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
  brand: [
    'Vizag Yards',
    'Vizag Yards Plots',
    'Vizag Yards Ventures',
    'Prakruti Avenues',
    'Vizag Yards Visakhapatnam',
  ],
};

export const absoluteUrl = (path = '/') => new URL(path, siteConfig.url).toString();

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  absoluteTitle?: boolean;
}

export function pageMetadata({ title, description, path, image = siteConfig.ogImage, imageAlt, keywords, absoluteTitle = false }: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  const images = [{ url: image, alt: imageAlt ?? fullTitle }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: absoluteUrl(path),
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

// "₹45 Lakh" -> 4500000, "₹44 - 48 Lakhs" -> { low: 4400000, high: 4800000 }
export function parsePriceINR(price: string): { low: number; high: number } | null {
  const multiplier = /crore/i.test(price) ? 1e7 : /lakh/i.test(price) ? 1e5 : 1;
  const numbers = (price.replace(/,/g, '').match(/\d+(\.\d+)?/g) ?? []).map(Number);
  if (numbers.length === 0) return null;
  return { low: numbers[0] * multiplier, high: numbers[numbers.length - 1] * multiplier };
}

const formatLakh = (value: number) => `₹${value / 1e5} Lakh`;

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

export function businessSchema(ventures: Venture[]) {
  const prices = ventures.map((v) => parsePriceINR(v.price)).filter((p): p is { low: number; high: number } => p !== null);
  const low = Math.min(...prices.map((p) => p.low));
  const high = Math.max(...prices.map((p) => p.high));
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': organizationId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: 'Prakruti Avenues',
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.zipCode,
      addressCountry: siteConfig.country,
    },
    areaServed: ['Visakhapatnam', 'Bhogapuram', 'Anandapuram', 'Bobbili', 'Vizianagaram'].map((name) => ({ '@type': 'City', name })),
    ...(prices.length > 0 && { priceRange: `${formatLakh(low)} - ${formatLakh(high)}` }),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Telugu'],
    },
  };
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  url: siteConfig.url,
  name: siteConfig.name,
  inLanguage: 'en-IN',
  publisher: { '@id': organizationId },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function venturesListSchema(ventures: Venture[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Residential plot ventures by Vizag Yards',
    numberOfItems: ventures.length,
    itemListElement: ventures.map((venture, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: absoluteUrl(`/ventures/${venture.slug}`),
      name: venture.name,
    })),
  };
}

export function ventureSchema(venture: Venture) {
  const url = absoluteUrl(`/ventures/${venture.slug}`);
  const price = parsePriceINR(venture.price);
  const offerBase = {
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url,
    seller: { '@id': organizationId },
  };
  const offers = price
    ? price.low === price.high
      ? { '@type': 'Offer', ...offerBase, price: price.low }
      : { '@type': 'AggregateOffer', ...offerBase, lowPrice: price.low, highPrice: price.high }
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    '@id': `${url}#listing`,
    url,
    name: `${venture.name} – residential plots in ${venture.loc}`,
    description: venture.description,
    image: absoluteUrl(venture.image),
    inLanguage: 'en-IN',
    isPartOf: { '@id': websiteId },
    provider: { '@id': organizationId },
    about: {
      '@type': 'Place',
      name: venture.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: venture.loc,
        addressRegion: siteConfig.state,
        addressCountry: siteConfig.country,
      },
      ...(venture.amenities?.length && {
        amenityFeature: venture.amenities.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
      }),
    },
    ...(offers && { offers }),
  };
}

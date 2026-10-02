'use client';

import { MapPin, Heart } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ventures } from '../data/ventures';
import SchemaMarkup from '../components/SchemaMarkup';
import { keywordClusters } from '../lib/seo';

export default function VenturesPage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  useEffect(() => {
    document.title = 'All Plots & Ventures in Vizag | Residential Plot Projects | Vizag Yards';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore all residential ventures in Vizag. Browse approved open plots, gated communities, and premium projects in Visakhapatnam by Vizag Yards including Radian Silicon Park and Nexus Valley.');
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', [...keywordClusters.venture, ...keywordClusters.locationBased.slice(0, 3)].join(', '));
    }
  }, []);

  const collectiveListingSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'All Properties & Ventures',
    description: 'Explore premium residential properties and ventures in Visakhapatnam',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: ventures.map((venture, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Residence',
          name: venture.name,
          url: `https://vizagyards.com/ventures/${venture.id}`,
          image: `https://vizagyards.com${venture.image}`,
          description: venture.description,
          areaServed: venture.loc,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <SchemaMarkup schema={collectiveListingSchema} />
      <Header navLinks={navLinks} />

      {/* Ventures Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">All Ventures</h1>
            <p className="text-gray-600 text-sm sm:text-base">Explore our complete collection of premium properties and investment opportunities.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ventures.map((venture, idx) => (
              <Link key={idx} href={`/ventures/${venture.id}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-40 bg-gray-300 overflow-hidden">
                    <img
                      src={venture.image}
                      alt={venture.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Tag */}
                    <span className={`absolute top-2 left-2 px-2 py-1 text-white text-xs font-bold rounded-full ${venture.tagBg}`}>
                      {venture.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition">{venture.name}</h3>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-gray-600 text-xs mb-3">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate">{venture.loc}</span>
                    </div>

                    {/* Stats in horizontal layout */}
                    <div className="flex justify-between items-center text-xs mb-3 pb-3 border-b border-gray-200">
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{venture.beds}</p>
                        <p className="text-gray-600 text-xs">Beds</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{venture.baths}</p>
                        <p className="text-gray-600 text-xs">Baths</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{venture.sqft}</p>
                        <p className="text-gray-600 text-xs">Sqft</p>
                      </div>
                    </div>

                    {/* Price */}
                    <span className="text-lg font-bold text-blue-900">{venture.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

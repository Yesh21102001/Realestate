'use client';

import { ArrowUpRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { ventures } from '../data/ventures';
import SchemaMarkup from '../components/SchemaMarkup';
import { Section } from '../components/ui';
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
          url: `https://vizagyards.com/ventures/${venture.slug}`,
          image: `https://vizagyards.com${venture.image}`,
          description: venture.description,
          areaServed: venture.loc,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-ivory">
      <SchemaMarkup schema={collectiveListingSchema} />
      <Header navLinks={navLinks} />

      <PageHero
        currentPage="Ventures"
        eyebrow="The collection"
        title={<>Our ventures, <span className="italic text-gold-light">carefully chosen.</span></>}
        subtitle="Explore our complete collection of premium properties and investment opportunities."
      />

      <Section>
          <div className="mb-10 flex items-end justify-between border-b border-gold-line/50 pb-6 sm:mb-14">
            <p className="font-serif text-2xl text-ink sm:text-3xl">All ventures</p>
            <p className="text-xs uppercase tracking-[0.18em] text-gold">{ventures.length} communities</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {ventures.map((venture, idx) => (
              <Link key={venture.id} href={`/ventures/${venture.slug}`} className="group flex flex-col bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_-25px_rgba(23,37,84,0.35)]">
                <div className="relative h-56 overflow-hidden bg-linen sm:h-64">
                  <Image
                    src={venture.image}
                    alt={venture.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 bg-navy px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                    {venture.tag}
                  </span>
                  <span className="absolute right-5 top-4 font-serif text-3xl italic text-white/90 drop-shadow">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="mb-2 font-serif text-2xl text-ink transition group-hover:text-navy">{venture.name}</h2>

                  <div className="mb-5 flex items-center gap-2 text-sm text-ink/70">
                    <MapPin className="h-4 w-4 shrink-0 text-gold" />
                    <span className="truncate">{venture.loc}</span>
                  </div>

                  <div className="mb-5 grid grid-cols-3 border-y border-gold-line/50 py-4">
                    <div>
                      <p className="font-semibold text-ink">{venture.beds}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55">Beds</p>
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{venture.baths}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55">Baths</p>
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{venture.sqft}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55">Sqft</p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-serif text-xl text-gold">{venture.price}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-ink/80 transition group-hover:text-navy">
                      Explore <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </Section>

      <Footer />
    </div>
  );
}

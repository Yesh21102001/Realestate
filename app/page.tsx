'use client';

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SchemaMarkup from './components/SchemaMarkup';
import { ventures } from './data/ventures';
import { realEstateAgentSchema, keywordClusters } from './lib/seo';
import { faqSchema, localBusinessSchema, breadcrumbSchema, aggregateOfferSchema } from './lib/advanced-seo';

export default function HomePage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  const featuredVentures = ventures.slice(0, 3);

  useEffect(() => {
    document.title = 'Vizag Yards - Buy Plots in Vizag | Residential Plots in Visakhapatnam';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Buy best residential plots in Vizag. Vizag Yards offers VMRDA approved open plots near Bhogapuram Airport. Premium gated community ventures in Visakhapatnam with modern amenities.');
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', [...keywordClusters.primary, ...keywordClusters.highIntent.slice(0, 2), 'VMRDA approved plots'].join(', '));
    }
  }, []);

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://vizagyards.com' },
  ]);

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <SchemaMarkup schema={realEstateAgentSchema} />
      <SchemaMarkup schema={localBusinessSchema} />
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={aggregateOfferSchema} />
      <SchemaMarkup schema={breadcrumbs} />
      <Header navLinks={navLinks} />

      {/* Hero Section */}
      <section className="relative isolate flex min-h-[700px] flex-col items-stretch overflow-hidden bg-[#172554] sm:min-h-[720px] sm:flex-row sm:items-center lg:min-h-[790px]" style={{ backgroundImage: 'url(/images/vizag-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/65 to-[#0f172a]/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0f172a]/45 via-transparent to-black/10" />
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 py-10 sm:flex-none sm:px-8 sm:pb-28 sm:pt-20 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-xs">
              <Sparkles className="h-4 w-4 text-blue-200" />
              Thoughtfully chosen plots in Vizag
            </div>
            <h1 className="mb-6 max-w-3xl text-[2.5rem] font-medium leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Find a place to <span className="font-normal italic text-blue-200">put down roots.</span>
            </h1>
            <p className="mb-9 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Discover well-planned communities, considered locations and a more confident way to own land in Visakhapatnam.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/ventures" className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-800">
                Explore our ventures <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                Speak with an advisor
              </Link>
            </div>
          </div>
        </div>
        <div className="relative mt-auto border-t border-white/15 bg-[#172554]/75 backdrop-blur-md sm:absolute sm:bottom-0 sm:left-0 sm:right-0">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/15 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
            {[
              ['Curated locations', 'Across Vizag & Bhogapuram'],
              ['Thoughtful planning', 'Communities built to last'],
              ['Local expertise', 'Guidance at every step'],
              ['A confident start', 'Clear, personal support'],
            ].map(([title, detail]) => (
              <div key={title} className="px-3 py-5 first:pl-0 sm:px-6 sm:py-6 lg:px-8">
                <p className="text-xs font-semibold text-white sm:text-sm">{title}</p>
                <p className="mt-1 text-[10px] leading-4 text-white/60 sm:text-xs">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BadgeCheck, title: 'Carefully verified', desc: 'Clear details and considered due diligence' },
            { icon: ShieldCheck, title: 'Buy with confidence', desc: 'Support through each important decision' },
            { icon: Clock3, title: 'Here when you need us', desc: 'A responsive team, from first call onward' },
            { icon: Wallet, title: 'Honest guidance', desc: 'Straightforward conversations about value' }
          ].map((feature, idx) => (
            <div key={idx} className="group border-t border-gray-200 px-1 py-6 sm:px-4 lg:py-8">
              <feature.icon className="mb-5 h-6 w-6 text-blue-900 transition-transform group-hover:-translate-y-1" strokeWidth={1.5} />
              <h3 className="mb-2 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="text-sm leading-6 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discover Perfect Match Section */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-900">A better way to begin</p>
              <h2 className="max-w-2xl text-4xl font-medium leading-tight text-gray-900 sm:text-5xl">A considered place for <span className="italic text-blue-900">what comes next.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-gray-600">Explore a selection of communities shaped around the way you want to live and invest.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
            {/* Featured Image */}
            <div className="lg:col-span-1">
              <div className="group relative h-72 cursor-pointer overflow-hidden rounded-sm sm:h-80 lg:h-[490px]">
                <Image
                  src="/images/nexus-valley.png"
                  alt="Landscaped entrance at a Vizag Yards residential community"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8">
                  <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">Made for a quieter kind of luxury</span>
                  <p className="text-2xl font-medium sm:text-3xl">Room to grow.<br />Space to belong.</p>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:gap-5">
              <div className="group relative h-40 cursor-pointer overflow-hidden rounded-sm sm:h-56 lg:h-[238px]">
                <Image
                  src="/images/radian-silicon.png"
                  alt="Radian Silicon Park community"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="group relative h-40 cursor-pointer overflow-hidden rounded-sm sm:h-56 lg:h-[238px]">
                <Image
                  src="/images/oaks.png"
                  alt="River Oaks community"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="group relative h-40 cursor-pointer overflow-hidden rounded-sm sm:h-56 lg:h-[238px]">
                <Image
                  src="/images/nexus.png"
                  alt="Nexus Valley residential development"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="group relative h-40 cursor-pointer overflow-hidden rounded-sm sm:h-56 lg:h-[238px]">
                <Image
                  src="/images/river-oaks-grand.png"
                  alt="River Oaks Grand entrance"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-4 sm:mb-14">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-900">Selected communities</p>
              <h2 className="text-4xl font-medium text-gray-900 sm:text-5xl">Featured ventures</h2>
            </div>
            <Link href="/ventures" className="hidden items-center gap-2 pb-1 text-sm font-semibold text-blue-900 transition hover:text-blue-800 sm:inline-flex">
              View all ventures <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {featuredVentures.map((prop) => (
              <Link key={prop.id} href={`/ventures/${prop.slug}`} className="group overflow-hidden bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_-25px_rgba(24,37,29,0.3)]">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-gray-200 sm:h-64">
                    <Image
                      src={prop.image}
                      alt={prop.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 bg-blue-900 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                      {prop.tag}
                    </span>
                    <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 transition group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    {/* Title */}
                    <h3 className="mb-2 text-2xl font-medium text-gray-900 transition group-hover:text-blue-900">{prop.name}</h3>

                    {/* Location */}
                    <div className="mb-5 flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 shrink-0 text-blue-900" />
                      <span className="truncate">{prop.loc}</span>
                    </div>

                    {/* Stats in horizontal layout */}
                    <div className="mb-5 grid grid-cols-3 border-y border-gray-200 py-4">
                      <div>
                        <p className="font-semibold text-gray-900">{prop.beds}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-500">Beds</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{prop.baths}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-500">Baths</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{prop.sqft}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-500">Sqft</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-blue-900">{prop.price}</span>
                      <span className="text-xs font-medium text-gray-600">Explore property</span>
                    </div>
                  </div>
              </Link>
            ))}
          </div>
          <Link href="/ventures" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 sm:hidden">
            View all ventures <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#172554] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">The Vizag Yards difference</p>
            <h2 className="mb-6 text-4xl font-medium leading-tight text-white sm:text-5xl">
              Land well chosen.<br /><span className="italic text-blue-200">A future well begun.</span>
            </h2>
            <p className="mb-8 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              Finding the right plot should feel considered, not complicated. We bring local insight, carefully selected communities and personal guidance together—so every next step feels clear.
            </p>
            <div className="space-y-4">
              {['Personalized recommendations', 'Verified listings & owners', 'Secure transactions & support', 'Best market prices guaranteed'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-200/50 text-xs text-blue-200">✓</span>
                  <span className="text-sm text-white/85 sm:text-base">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="mt-9 inline-flex items-center gap-3 rounded-full bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800">
              Get to know us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-4 -top-4 h-full w-full border border-blue-200/45 sm:-left-6 sm:-top-6" />
            <div className="relative h-[360px] overflow-hidden sm:h-[480px]">
              <Image
                src="/images/river-oaks-grand.png"
                alt="A thoughtfully designed residential community by Vizag Yards"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/45 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center sm:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-900">A seamless experience</p>
            <h2 className="mb-4 text-4xl font-medium text-gray-900 sm:text-5xl">
              Your journey, made simple
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Thoughtful guidance at every stage—from the first conversation to the moment you find your place.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {[
              { num: '01', title: 'Tell us what matters', desc: 'Share your plans, preferences and the future you have in mind.' },
              { num: '02', title: 'Explore with confidence', desc: 'Tour considered communities with clear, knowledgeable guidance.' },
              { num: '03', title: 'Make it yours', desc: 'Move forward with a team by your side through every detail.' }
            ].map((step) => (
              <div key={step.num} className="border-t border-gray-200 pt-6 sm:pt-8">
                <span className="mb-8 block text-sm font-medium tracking-[0.18em] text-blue-900">{step.num}</span>
                <h3 className="mb-3 text-2xl font-medium text-gray-900">{step.title}</h3>
                <p className="max-w-sm text-sm leading-6 text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center sm:mb-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-900">Kind words, lasting trust</p>
            <h2 className="text-4xl font-medium text-gray-900 sm:text-5xl">A little reassurance goes a long way.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {[
              { name: 'Sarah Johnson', role: 'Happy Customer', text: 'Finding my dream home was incredibly easy with Vizag Yards. The process was smooth, transparent and hassle-free from start to finish.' },
              { name: 'Emily Garcia', role: 'Verified Buyer', text: 'Excellent service with outstanding support team. They made the entire buying process transparent, comfortable and stress-free.' }
            ].map((test, idx) => (
              <div key={idx} className="border border-gray-200 bg-gray-50 p-7 sm:p-9">
                <div className="mb-7 flex gap-1 text-blue-900" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, star) => <span key={star} aria-hidden="true">★</span>)}
                </div>
                <p className="mb-8 text-lg leading-8 text-gray-700 sm:text-xl">“{test.text}”</p>
                <div className="flex items-center gap-4 border-t border-gray-200 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-900">{test.name.split(' ').map((part) => part[0]).join('')}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{test.name}</p>
                    <p className="mt-1 text-xs text-gray-600">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center sm:mb-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-900">Here to help</p>
            <h2 className="mb-4 text-4xl font-medium text-gray-900 sm:text-5xl">Frequently asked questions</h2>
            <p className="text-sm text-gray-600 sm:text-base">A few helpful answers as you start planning your next step.</p>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {[
              {
                question: 'How do I start searching for properties?',
                answer: 'Simply use our search bar to filter properties by location, type, and budget. Browse through our listings or contact our team for personalized recommendations.'
              },
              {
                question: 'Are all properties verified?',
                answer: 'Yes! Every property on Vizag Yards is thoroughly verified by our team. We check documentation, take photos, and ensure all information is accurate and up-to-date.'
              },
              {
                question: 'What is your refund policy?',
                answer: 'We offer a satisfaction guarantee. If you\'re not satisfied with our service within 30 days, we provide a full refund. No questions asked.'
              },
              {
                question: 'How quickly can I schedule a property tour?',
                answer: 'Most properties can be scheduled within 24-48 hours. For urgent inquiries, our team can arrange same-day tours. Use our "Schedule Tour" button or contact us directly.'
              },
              {
                question: 'Do you provide investment consultation?',
                answer: 'Yes! Our investment specialists can help you analyze properties and create investment strategies. Book a consultation through our Contact page.'
              },
              {
                question: 'Is my personal information safe?',
                answer: 'Absolutely. We use bank-level encryption and comply with all data protection regulations. Your privacy is our top priority.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="group cursor-pointer py-5 sm:py-6">
                <summary className="flex list-none items-center justify-between gap-4 text-base font-medium text-gray-900 marker:hidden sm:text-lg">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 text-lg font-light text-blue-900 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl pr-10 text-sm leading-7 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import {
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  MapPin,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import SchemaMarkup from './components/SchemaMarkup';
import { Accent, ButtonLink, Eyebrow, Section, SectionHeader, container } from './components/ui';
import { ventures } from './data/ventures';
import { faqs } from './data/faqs';
import { faqPageSchema, keywordClusters, pageMetadata } from './lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Vizag Yards | Plots for Sale in Vizag & Visakhapatnam',
  absoluteTitle: true,
  description: 'Buy residential plots in Vizag with Vizag Yards by Prakruti Avenues. Gated plot ventures in Bhogapuram, Anandapuram and Bobbili, near the new Bhogapuram airport. Book a site visit.',
  path: '/',
  keywords: [...keywordClusters.primary, ...keywordClusters.highIntent.slice(0, 3)],
});

export default function HomePage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  const featuredVentures = ventures.slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <SchemaMarkup schema={faqPageSchema(faqs)} />
      <Header navLinks={navLinks} />

      {/* Hero Section */}
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-navy sm:min-h-[640px] lg:min-h-[720px]">
        <Image src="/images/vizag-hero.png" alt="Entrance gate of a Vizag Yards gated plot community" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10" />
        <div className={`w-full py-20 ${container}`}>
          <div className="max-w-3xl">
            <Eyebrow onDark>Thoughtfully chosen plots in Vizag</Eyebrow>
            <h1 className="mb-10 text-[2.6rem] leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Connecting you to the <Accent onDark>home you love.</Accent>
            </h1>
            <ButtonLink href="/ventures" variant="light">Explore our ventures</ButtonLink>
          </div>
        </div>
      </section>

      {/* Statement */}
      <Section>
        <p className="mx-auto max-w-4xl text-center font-serif text-3xl font-normal leading-snug text-ink sm:text-4xl lg:text-5xl">
          Good land is quiet about its value. <Accent>We help you hear it.</Accent>
        </p>
      </Section>

      {/* Features Section */}
      <section className="bg-linen py-16 sm:py-20">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${container}`}>
          {[
            { icon: BadgeCheck, title: 'Carefully verified', desc: 'Clear details and considered due diligence' },
            { icon: ShieldCheck, title: 'Buy with confidence', desc: 'Support through each important decision' },
            { icon: Clock3, title: 'Here when you need us', desc: 'A responsive team, from first call onward' },
            { icon: Wallet, title: 'Honest guidance', desc: 'Straightforward conversations about value' }
          ].map((feature, idx) => (
            <div key={feature.title} className={`group px-6 py-8 sm:py-10 ${idx > 0 ? 'lg:border-l lg:border-gold-line/50' : ''} ${idx % 2 === 1 ? 'sm:border-l sm:border-gold-line/50' : ''}`}>
              <feature.icon className="mb-6 h-7 w-7 text-gold transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.25} />
              <h3 className="mb-2 text-xl text-ink">{feature.title}</h3>
              <p className="text-sm leading-6 text-ink/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discover Perfect Match Section */}
      <Section>
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <SectionHeader eyebrow="A better way to begin" title={<>A considered place for <Accent>what comes next.</Accent></>} className="max-w-2xl" />
          <p className="max-w-sm text-sm leading-6 text-ink/70">Explore a selection of communities shaped around the way you want to live and invest.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          <div className="group relative h-72 cursor-pointer overflow-hidden sm:h-80 lg:col-span-1 lg:h-[490px]">
            <Image
              src="/images/nexus-valley.png"
              alt="Landscaped entrance at a Vizag Yards residential community"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8">
              <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light">Made for a quieter kind of luxury</span>
              <p className="font-serif text-2xl sm:text-3xl">Room to grow.<br />Space to belong.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:gap-5">
            {[
              { src: '/images/radian-silicon.png', alt: 'Radian Silicon Park community' },
              { src: '/images/oaks.png', alt: 'River Oaks community' },
              { src: '/images/nexus.png', alt: 'Nexus Valley residential development' },
              { src: '/images/river-oaks-grand.png', alt: 'River Oaks Grand entrance' },
            ].map((img) => (
              <div key={img.src} className="group relative h-40 cursor-pointer overflow-hidden sm:h-56 lg:h-[238px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Properties */}
      <Section tone="linen">
        <div className="mb-10 flex items-end justify-between gap-4 sm:mb-14">
          <SectionHeader eyebrow="Selected communities" title="Featured ventures" />
          <ButtonLink href="/ventures" variant="text" className="max-sm:hidden">View all ventures</ButtonLink>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredVentures.map((prop, idx) => (
            <Link key={prop.id} href={`/ventures/${prop.slug}`} className="group flex flex-col bg-ivory transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_-25px_rgba(23,37,84,0.35)]">
              <div className="relative h-56 overflow-hidden bg-linen sm:h-64">
                <Image
                  src={prop.image}
                  alt={prop.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 bg-navy px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                  {prop.tag}
                </span>
                <span className="absolute right-5 top-4 font-serif text-3xl italic text-white/90 drop-shadow">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-2 text-2xl text-ink transition group-hover:text-navy">{prop.name}</h3>

                <div className="mb-5 flex items-center gap-2 text-sm text-ink/70">
                  <MapPin className="h-4 w-4 shrink-0 text-gold" />
                  <span className="truncate">{prop.loc}</span>
                </div>

                <div className="mb-5 grid grid-cols-3 border-y border-gold-line/50 py-4">
                  <div>
                    <p className="font-semibold text-ink">{prop.beds}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55">Beds</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{prop.baths}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55">Baths</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{prop.sqft}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55">Sqft</p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className="font-serif text-xl text-gold">{prop.price}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-ink/80 transition group-hover:text-navy">
                    Explore <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <ButtonLink href="/ventures" variant="text" className="mt-8 sm:hidden">View all ventures</ButtonLink>
      </Section>

      {/* Why Choose Section */}
      <Section tone="ink">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              onDark
              eyebrow="The Vizag Yards difference"
              title={<>Land well chosen.<br /><Accent onDark>A future well begun.</Accent></>}
            />
            <p className="mb-8 mt-6 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              Finding the right plot should feel considered, not complicated. We bring local insight, carefully selected communities and personal guidance together—so every next step feels clear.
            </p>
            <div className="space-y-4 border-t border-white/10 pt-8">
              {['Personalized recommendations', 'Verified listings & owners', 'Secure transactions & support', 'Best market prices guaranteed'].map((item, i) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="font-serif text-sm italic text-gold-light">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm text-white/85 sm:text-base">{item}</span>
                </div>
              ))}
            </div>
            <ButtonLink href="/about" variant="textLight" className="mt-10">Get to know us</ButtonLink>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-4 -top-4 h-full w-full border border-gold-light/40 sm:-left-6 sm:-top-6" />
            <div className="relative h-[360px] overflow-hidden sm:h-[480px]">
              <Image
                src="/images/river-oaks-grand.png"
                alt="A thoughtfully designed residential community by Vizag Yards"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      {/* Steps Section */}
      <Section>
        <SectionHeader
          center
          eyebrow="A seamless experience"
          title="Your journey, made simple"
          intro="Thoughtful guidance at every stage—from the first conversation to the moment you find your place."
          className="mb-14 max-w-3xl sm:mb-16"
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {[
            { num: 'I', title: 'Tell us what matters', desc: 'Share your plans, preferences and the future you have in mind.' },
            { num: 'II', title: 'Explore with confidence', desc: 'Tour considered communities with clear, knowledgeable guidance.' },
            { num: 'III', title: 'Make it yours', desc: 'Move forward with a team by your side through every detail.' }
          ].map((step) => (
            <div key={step.num} className="relative border-t border-gold-line pt-8">
              <span className="mb-6 block font-serif text-5xl font-light italic text-gold">{step.num}</span>
              <h3 className="mb-3 text-2xl text-ink">{step.title}</h3>
              <p className="max-w-sm text-sm leading-6 text-ink/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="linen">
        <SectionHeader center eyebrow="Kind words, lasting trust" title="A little reassurance goes a long way." className="mb-12 max-w-3xl sm:mb-14" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {[
            { name: 'Sarah Johnson', role: 'Happy Customer', text: 'Finding my dream home was incredibly easy with Vizag Yards. The process was smooth, transparent and hassle-free from start to finish.' },
            { name: 'Emily Garcia', role: 'Verified Buyer', text: 'Excellent service with outstanding support team. They made the entire buying process transparent, comfortable and stress-free.' }
          ].map((test) => (
            <figure key={test.name} className="relative bg-ivory p-8 sm:p-12">
              <span aria-hidden="true" className="absolute left-8 top-4 font-serif text-7xl leading-none text-gold-line sm:left-12">“</span>
              <blockquote className="relative mb-8 pt-8 font-serif text-xl leading-relaxed text-ink/90 sm:text-2xl">
                {test.text}
              </blockquote>
              <figcaption className="flex items-center gap-4 border-t border-gold-line/50 pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-semibold text-gold-light">{test.name.split(' ').map((part) => part[0]).join('')}</span>
                <div>
                  <p className="text-sm font-semibold text-ink">{test.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink/55">{test.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            center
            eyebrow="Here to help"
            title="Frequently asked questions"
            intro="A few helpful answers as you start planning your next step."
            className="mb-12 sm:mb-14"
          />

          <div className="divide-y divide-gold-line/50 border-y border-gold-line/50">
            {faqs.map((faq) => (
              <details key={faq.question} className="group cursor-pointer py-5 sm:py-6">
                <summary className="flex list-none items-center justify-between gap-4 font-serif text-lg text-ink marker:hidden sm:text-xl">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-line text-lg font-light text-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl pr-10 text-sm leading-7 text-ink/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

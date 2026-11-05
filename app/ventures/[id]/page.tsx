'use client';

import { ChevronLeft, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, type ReactNode } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getVentureBySlug } from '../../data/ventures';
import SchemaMarkup from '../../components/SchemaMarkup';
import { ButtonLink, Eyebrow, Section, SectionHeader, container } from '../../components/ui';
import { useParams } from 'next/navigation';
import { propertySchema, keywordClusters } from '../../lib/seo';

function GoldList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid grid-cols-1 gap-x-10 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 border-b border-gold-line/40 py-4 text-sm leading-6 text-ink/80 sm:text-base">
          <span className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function VentureDetailPage() {
  const params = useParams();
  const venture = getVentureBySlug(params.id as string);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  useEffect(() => {
    if (venture) {
      const locationKeyword = venture.name.includes('Radian') ? 'Bhogapuram' : venture.loc;
      document.title = `${venture.name} - Buy Plots in ${locationKeyword} | Vizag Yards`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          `${venture.name} - Premium residential plots in ${venture.loc}. ${venture.description} Approved plots with ₹${venture.price} price. Best investment opportunity.`
        );
      }
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        const ventureKeywords = [
          `${venture.name}`,
          `Plots in ${locationKeyword}`,
          `Plots for Sale in ${locationKeyword}`,
          `Buy Plots in ${locationKeyword}`,
          ...keywordClusters.investment.slice(0, 2),
          'VMRDA approved plots',
          'Gated community plots',
        ];
        metaKeywords.setAttribute('content', ventureKeywords.join(', '));
      }
    }
  }, [venture]);

  if (!venture) {
    return (
      <div className="min-h-screen bg-ivory">
        <Header navLinks={navLinks} />
        <div className="flex min-h-[60vh] items-center justify-center px-5">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-medium text-ink">Venture not found</h1>
            <Link href="/ventures" className="border-b border-gold pb-0.5 text-sm font-semibold text-navy">
              Back to ventures
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const schema = propertySchema(venture);
  const whatsappUrl = `https://wa.me/918790388887?text=${encodeURIComponent(`Hi, I am interested in ${venture.name}. Please share more details.`)}`;

  const sections: { title: string; content: ReactNode }[] = [];
  if (venture.features?.length) {
    sections.push({ title: 'Project highlights', content: <GoldList items={venture.features} /> });
  }
  if (venture.clubFacilities?.length) {
    sections.push({ title: 'Club facilities', content: <GoldList items={venture.clubFacilities} /> });
  }
  if (venture.lakesideFacilities?.length) {
    sections.push({ title: 'Lakeside living', content: <GoldList items={venture.lakesideFacilities} /> });
  }
  if (venture.wellnessFacilities?.length) {
    sections.push({ title: 'Wellness & relaxation', content: <GoldList items={venture.wellnessFacilities} /> });
  }
  if (venture.amenities?.length) {
    sections.push({
      title: 'Amenities',
      content: (
        <div className="flex flex-wrap gap-3">
          {venture.amenities.map((amenity) => (
            <span key={amenity} className="border border-gold-line px-4 py-2 text-sm text-ink/80">{amenity}</span>
          ))}
        </div>
      ),
    });
  }
  if (venture.locationBenefits) {
    sections.push({
      title: 'Gateway to growth',
      content: <p className="max-w-3xl font-serif text-xl leading-relaxed text-ink/90 sm:text-2xl">{venture.locationBenefits}</p>,
    });
  }
  if (venture.keyHighlights?.length) {
    sections.push({ title: 'Key highlights', content: <GoldList items={venture.keyHighlights} /> });
  }
  if (venture.distancesFromSite?.length) {
    sections.push({
      title: 'Distances from site',
      content: (
        <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {venture.distancesFromSite.map((item) => (
            <div key={item.location} className="flex items-baseline justify-between gap-4 border-b border-gold-line/40 py-4">
              <dt className="text-sm text-ink/80 sm:text-base">{item.location}</dt>
              <dd className="shrink-0 font-serif text-xl text-gold">{item.distance}</dd>
            </div>
          ))}
        </dl>
      ),
    });
  }
  if (venture.educational?.length) {
    sections.push({
      title: 'Nearby facilities',
      content: (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {venture.educational.map((group) => (
            <div key={group.category}>
              <h3 className="mb-2 font-serif text-2xl text-ink">{group.category}</h3>
              <GoldList items={group.items} columns={1} />
            </div>
          ))}
        </div>
      ),
    });
  }
  if (venture.itCompanies?.length) {
    sections.push({ title: 'Nearby IT companies', content: <GoldList items={venture.itCompanies} /> });
  }

  return (
    <div className="min-h-screen bg-ivory">
      <SchemaMarkup schema={schema} />
      <Header navLinks={navLinks} />

      {/* Hero */}
      <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-ink sm:min-h-[620px]">
        <Image src={venture.image} alt={venture.name} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
        <div className={`w-full pb-12 pt-24 sm:pb-16 ${container}`}>
          <Link href="/ventures" className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70 transition hover:text-gold-light">
            <ChevronLeft className="h-4 w-4" /> All ventures
          </Link>
          <Eyebrow onDark>{venture.tag}</Eyebrow>
          <h1 className="mb-5 text-5xl font-medium leading-[1.02] text-white sm:text-6xl lg:text-7xl">{venture.name}</h1>
          {venture.tagline && <p className="mb-5 font-serif text-xl italic text-gold-light sm:text-2xl">{venture.tagline}</p>}
          <div className="flex items-center gap-2 text-sm text-white/80">
            <MapPin className="h-4 w-4 shrink-0 text-gold-light" />
            {venture.loc}
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-b border-gold-line/50 bg-linen">
        <dl className={`grid grid-cols-2 lg:grid-cols-4 ${container}`}>
          {[
            ['Starting price', venture.price],
            ['Plot size', `${venture.sqft} sqft`],
            ['Site area', venture.siteArea],
            ['Project', venture.projectArea],
          ]
            .filter((fact): fact is [string, string] => Boolean(fact[1]))
            .map(([label, value], idx) => (
              <div key={label} className={`py-6 sm:py-8 ${idx > 0 ? 'border-l border-gold-line/50 pl-5 sm:pl-8' : ''} ${idx === 2 ? 'max-lg:border-l-0 max-lg:border-t max-lg:pl-0' : ''} ${idx === 3 ? 'max-lg:border-t' : ''}`}>
                <dt className="mb-2 text-[10px] uppercase tracking-[0.18em] text-ink/55">{label}</dt>
                <dd className="font-serif text-xl text-ink sm:text-2xl">{value}</dd>
              </div>
            ))}
        </dl>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="self-start">
            <Eyebrow>About the venture</Eyebrow>
          </div>
          <div className="space-y-6">
            <p className="font-serif text-2xl leading-relaxed text-ink sm:text-3xl">{venture.description}</p>
            {venture.slug === 'nexus-valley' && (
              <div className="space-y-4 text-base leading-8 text-ink/80">
                <p>
                  Prakruti Avenues Pvt. Ltd. is launching the prestigious venture <span className="font-semibold text-navy">NEXUS</span> at Ramapuram Village, Anandapuram Mandal, Visakhapatnam Dist. The venture has every thing to offer in terms of facilities and comforts.
                </p>
                <p>
                  It is an offering of smart homes for smart living on every count right from location to features. Highly developed plots close to some of the best areas. Book the plot(s) for owning eco and investor friendly dream home. It is worth while to own plot in <span className="font-semibold text-navy">NEXUS</span>.
                </p>
              </div>
            )}
            {venture.overview && (
              <p className="border-l-2 border-gold-line pl-6 text-base italic leading-8 text-ink/80">{venture.overview}</p>
            )}
          </div>
        </div>
      </Section>

      {/* Detail sections */}
      {sections.map((section, idx) => (
        <Section key={section.title} tone={idx % 2 === 0 ? 'linen' : 'ivory'}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <SectionHeader number={idx + 1} title={section.title} className="self-start" />
            <div>{section.content}</div>
          </div>
        </Section>
      ))}

      {/* Enquiry */}
      <Section tone="ink">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow onDark>Starting price</Eyebrow>
            <p className="mb-8 font-serif text-5xl text-white sm:text-6xl">{venture.price}</p>
            <ButtonLink href={whatsappUrl} external variant="light">Enquire on WhatsApp</ButtonLink>
          </div>

          {venture.contact && (
            <dl className="space-y-6 border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <div>
                <dt className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/50">Address</dt>
                <dd className="text-sm leading-6 text-white/85">{venture.contact.address}</dd>
              </div>
              <div>
                <dt className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/50">Email</dt>
                <dd><a href={`mailto:${venture.contact.email}`} className="text-sm text-gold-light transition hover:text-white">{venture.contact.email}</a></dd>
              </div>
              <div>
                <dt className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/50">Website</dt>
                <dd><a href={`https://${venture.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gold-light transition hover:text-white">{venture.contact.website}</a></dd>
              </div>
            </dl>
          )}
        </div>
      </Section>

      <Footer />
    </div>
  );
}

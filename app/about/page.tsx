import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SchemaMarkup from '../components/SchemaMarkup';
import { Section, SectionHeader } from '../components/ui';
import { breadcrumbSchema, keywordClusters, pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About Us – Prakruti Avenues, Visakhapatnam',
  description: 'Vizag Yards is the real estate brand of Prakruti Avenues, developing approved residential plot ventures across Visakhapatnam, Bhogapuram and Vizianagaram. Our mission, values and story.',
  path: '/about',
  keywords: [...keywordClusters.brand, ...keywordClusters.venture.slice(0, 3)],
});

export default function AboutPage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  const values = [
    { title: 'Transparency', desc: 'We believe in honest, straightforward communication. All property information is verified and clearly presented.' },
    { title: 'Trust', desc: 'Your trust is our foundation. We maintain the highest standards of security and privacy for all our users.' },
    { title: 'Innovation', desc: 'We continuously evolve our platform with the latest technology to improve your experience.' },
    { title: 'Excellence', desc: 'We set high standards and deliver exceptional service in every interaction.' },
  ];

  const reasons = [
    { title: 'Verified Listings', desc: 'Every property is thoroughly verified and photographed by our team' },
    { title: 'Expert Team', desc: 'Our experienced professionals are here to guide you through every step' },
    { title: '24/7 Support', desc: 'Round-the-clock customer support to address your questions anytime' },
    { title: 'Best Prices', desc: 'We guarantee competitive pricing and exclusive deals for our members' },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <SchemaMarkup schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }])} />
      <Header navLinks={navLinks} />

      <PageHero
        currentPage="About Us"
        eyebrow="Our story"
        title={<>About <span className="italic text-gold-light">Vizag Yards.</span></>}
        subtitle="Transforming the real estate industry through innovation and trust"
      />

      {/* Mission */}
      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <SectionHeader number={1} title="Our mission" className="self-start" />
          <div className="space-y-6">
            <p className="font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
              At Vizag Yards, we believe everyone deserves to find the perfect home. Our mission is to revolutionize the real estate experience by making property discovery, purchasing, and investment accessible, transparent, and trustworthy for everyone.
            </p>
            <p className="text-base leading-8 text-ink/80">
              We combine cutting-edge technology with personalized service to connect buyers, sellers, and investors with opportunities that truly match their needs and aspirations.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="linen">
          <SectionHeader number={2} title="Our values" className="mb-12 sm:mb-16" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <div key={value.title} className={`border-t border-gold-line py-8 sm:pr-8 ${idx > 0 ? 'lg:border-l lg:pl-8' : ''} ${idx % 2 === 1 ? 'sm:border-l sm:pl-8' : ''}`}>
                <h3 className="mb-3 text-2xl text-ink">{value.title}</h3>
                <p className="text-sm leading-7 text-ink/70">{value.desc}</p>
              </div>
            ))}
          </div>
      </Section>

      {/* Story */}
      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <SectionHeader number={3} title="Our story" className="self-start" />
          <div className="space-y-6 text-base leading-8 text-ink/80">
            <p className="font-serif text-2xl leading-relaxed text-ink">
              Vizag Yards was founded with a simple vision: to make real estate simple.
            </p>
            <p>
              What started as a small team of passionate professionals has grown into a trusted platform serving thousands of satisfied customers.
            </p>
            <p>
              Over the years, we’ve continuously refined our approach, invested in technology, and expanded our portfolio to serve clients globally. Today, Vizag Yards stands as a beacon of trust and innovation in the real estate industry.
            </p>
            <p>
              Our commitment remains unchanged: to provide the best possible experience for everyone involved in real estate transactions.
            </p>
          </div>
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="ink">
          <SectionHeader number={4} title="Why choose us" onDark className="mb-12 sm:mb-16" />
          <div className="grid grid-cols-1 gap-x-16 sm:grid-cols-2">
            {reasons.map((reason, idx) => (
              <div key={reason.title} className="flex gap-6 border-t border-white/15 py-8">
                <span className="font-serif text-xl italic text-gold-light">{String(idx + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="mb-2 text-2xl text-white">{reason.title}</h3>
                  <p className="text-sm leading-7 text-white/70">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
      </Section>

      <Footer />
    </div>
  );
}

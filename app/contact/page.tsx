import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SchemaMarkup from '../components/SchemaMarkup';
import ContactPageForm from '../components/ContactPageForm';
import { Section } from '../components/ui';
import { breadcrumbSchema, pageMetadata, siteConfig } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us – Book a Site Visit in Vizag',
  description: `Contact Vizag Yards for plot enquiries and site visits in Visakhapatnam. Call or WhatsApp ${siteConfig.phone}, email ${siteConfig.email}, or visit our office in Dwaraka Nagar.`,
  path: '/contact',
  keywords: ['Contact Vizag Yards', 'Plot enquiry Vizag', 'Site visit Visakhapatnam', 'Buy plots in Vizag'],
});

export default function ContactPage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  const details = [
    { icon: Mail, label: 'Email', content: <a href={`mailto:${siteConfig.email}`} className="transition hover:text-gold">{siteConfig.email}</a> },
    {
      icon: Phone,
      label: 'Phone & WhatsApp',
      content: (
        <>
          <a href={`tel:${siteConfig.phoneE164}`} className="transition hover:text-gold">{siteConfig.phone}</a>
          {' · '}
          <a href={`https://wa.me/${siteConfig.phoneE164.slice(1)}`} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">WhatsApp</a>
        </>
      ),
    },
    {
      icon: MapPin,
      label: 'Address',
      content: (
        <address className="not-italic">
          Sai Trade Centre, 2nd Floor<br />
          Prakruti Avenues Pvt Ltd<br />
          2nd Lane, Dwaraka Nagar<br />
          Visakhapatnam 530016
        </address>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <SchemaMarkup schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <Header navLinks={navLinks} />

      <PageHero
        currentPage="Contact"
        eyebrow="Get in touch"
        title={<>Let’s begin a <span className="italic text-gold-light">conversation.</span></>}
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <Section>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="mb-10 text-3xl text-ink sm:text-4xl">Contact information</h2>
            <dl className="border-t border-gold-line">
              {details.map(({ icon: Icon, label, content }) => (
                <div key={label} className="flex gap-5 border-b border-gold-line/50 py-6">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <dt className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">{label}</dt>
                    <dd className="text-base leading-7 text-ink/90">{content}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <ContactPageForm />
        </div>
      </Section>

      <Footer />
    </div>
  );
}

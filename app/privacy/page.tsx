'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { Section } from '../components/ui';

const sections: { title: string; intro?: string; items?: string[]; body?: string }[] = [
  {
    title: 'Introduction',
    body: 'Vizag Yards ("we," "us," or "our") operates the website and mobile application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our platforms.',
  },
  {
    title: 'Information We Collect',
    intro: 'We may collect information about you in a variety of ways:',
    items: [
      'Information you provide directly (name, email, phone number, address)',
      'Information automatically collected (browser type, IP address, cookies)',
      'Information from third parties (payment processors, property data providers)',
      'Property viewing history and preferences',
    ],
  },
  {
    title: 'Use of Your Information',
    intro: 'We use the information we collect to:',
    items: [
      'Provide, operate, and maintain our services',
      'Improve and personalize your experience',
      'Send promotional communications (with your consent)',
      'Process transactions and send related information',
      'Comply with legal obligations',
      'Prevent fraud and improve security',
    ],
  },
  {
    title: 'Data Security',
    body: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.',
  },
  {
    title: 'Sharing Your Information',
    intro: 'We do not sell, trade, or rent your personal information. We may share information with:',
    items: [
      'Service providers who assist in our operations',
      'Legal authorities when required by law',
      'Business partners (with your consent)',
    ],
  },
  {
    title: 'Your Rights',
    intro: 'Depending on your location, you may have the right to:',
    items: [
      'Access your personal data',
      'Correct inaccurate data',
      'Request deletion of your data',
      'Opt-out of marketing communications',
      'Data portability',
    ],
  },
  {
    title: 'Cookies',
    body: 'We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.',
  },
  {
    title: 'Third-Party Links',
    body: 'Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on our platform. Your continued use of our services constitutes acceptance of the updated policy.',
  },
];

export default function PrivacyPage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Header navLinks={navLinks} />

      <PageHero
        currentPage="Privacy Policy"
        eyebrow="Your data, respected"
        title={<>Privacy <span className="italic text-gold-light">policy.</span></>}
        subtitle="We value your privacy and are committed to protecting your personal data"
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          {sections.map((section, idx) => (
            <div key={section.title} className="grid grid-cols-1 gap-4 border-t border-gold-line/60 py-10 sm:grid-cols-[5rem_1fr] sm:gap-8">
              <span className="font-serif text-3xl italic text-gold">{String(idx + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="mb-4 text-3xl font-medium text-ink">{section.title}</h2>
                {section.body && <p className="text-base leading-8 text-ink/80">{section.body}</p>}
                {section.intro && <p className="text-base leading-8 text-ink/80">{section.intro}</p>}
                {section.items && (
                  <ul className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-4 text-base leading-7 text-ink/80">
                        <span className="mt-3.5 h-px w-4 shrink-0 bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 gap-4 border-t border-gold-line/60 py-10 sm:grid-cols-[5rem_1fr] sm:gap-8">
            <span className="font-serif text-3xl italic text-gold">{String(sections.length + 1).padStart(2, '0')}</span>
            <div>
              <h2 className="mb-4 text-3xl font-medium text-ink">Contact Us</h2>
              <p className="mb-6 text-base leading-8 text-ink/80">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="border-l-2 border-gold-line bg-white p-6 text-sm leading-7 text-ink/80">
                <p className="mb-2 font-serif text-xl text-ink">Vizag Yards Privacy Team</p>
                <p>Email: info@prakrtiavenues.com</p>
                <p>Phone: +91 8790388887</p>
                <p>Address: Sai Trade Center, 2nd Floor, Prakruti Avenue Pvt Ltd, Dwaraka Nagar Second Line, Visakhapatnam</p>
              </div>
            </div>
          </div>

          <p className="border-t border-gold-line/60 pt-8 text-sm text-ink/55">
            Last Updated: {new Date().getFullYear()}. This privacy policy is effective as of the date last updated and applies to all users of the Vizag Yards platform.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SchemaMarkup from '../components/SchemaMarkup';
import { Section, buttonClass } from '../components/ui';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { organizationSchema } from '../lib/seo';

const fieldClass = 'w-full border-0 border-b border-gold-line bg-transparent px-0 py-3 text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none focus:ring-0';
const labelClass = 'mb-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold';

export default function ContactPage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    document.title = 'Contact Vizag Yards - Plots & Ventures Inquiry Visakhapatnam';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Vizag Yards for plot inquiries in Vizag. Call +91 8790388887 for VMRDA approved residential plots. Book a site visit to our ventures in Visakhapatnam.');
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', ['Vizag Yards', 'Contact Real Estate', 'Plot Inquiry', 'Buy Plots', 'Visakhapatnam', 'Vizag Real Estate Contact'].join(', '));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const details = [
    { icon: Mail, label: 'Email', content: <a href="mailto:info@prakrtiavenues.com" className="transition hover:text-gold">info@prakrtiavenues.com</a> },
    { icon: Phone, label: 'WhatsApp', content: <a href="https://wa.me/918790388887" target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">+91 8790388887</a> },
    {
      icon: MapPin,
      label: 'Address',
      content: (
        <>
          Sai Trade Center, 2nd Floor<br />
          Prakruti Avenue Pvt Ltd<br />
          Dwaraka Nagar Second Line<br />
          Visakhapatnam
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <SchemaMarkup schema={organizationSchema} />
      <Header navLinks={navLinks} />

      <PageHero
        currentPage="Contact"
        eyebrow="Get in touch"
        title={<>Let’s begin a <span className="italic text-gold-light">conversation.</span></>}
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <Section>
        <div className="grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="mb-10 text-3xl font-medium text-ink sm:text-4xl">Contact information</h2>
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

          <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12">
            <p className="mb-10 font-serif text-2xl text-ink sm:text-3xl">Send us a message</p>
            <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>Full name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={fieldClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={fieldClass} placeholder="you@example.com" />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="phone" className={labelClass}>Phone number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={fieldClass} placeholder="+91 98765 43210" />
            </div>

            <div className="mb-10">
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${fieldClass} resize-none`} placeholder="Tell us how we can help you..." />
            </div>

            <button type="submit" className={buttonClass('primary')}>
              Send message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { buttonClass } from './ui';

const fieldClass = 'w-full border-0 border-b border-gold-line bg-transparent px-0 py-3 text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none focus:ring-0';
const labelClass = 'mb-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold';
const emptyForm = { name: '', email: '', phone: '', message: '' };

export default function ContactPageForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello, I'd like to enquire about Vizag Yards.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/918790388887?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setFormData(emptyForm);
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12">
      <p className="mb-10 font-serif text-2xl text-ink sm:text-3xl">Send us a message</p>
      <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Full name</label>
          <input type="text" id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input type="email" id="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required className={fieldClass} placeholder="you@example.com" />
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="phone" className={labelClass}>Phone number</label>
        <input type="tel" id="phone" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} className={fieldClass} placeholder="+91 98765 43210" />
      </div>

      <div className="mb-10">
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${fieldClass} resize-none`} placeholder="Tell us how we can help you..." />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button type="submit" className={buttonClass('primary')}>
          Send via WhatsApp <ArrowRight className="h-4 w-4" />
        </button>
        {sent && (
          <p role="status" className="text-sm text-ink/70">
            WhatsApp opened with your message. Press send there to reach us.
          </p>
        )}
      </div>
    </form>
  );
}

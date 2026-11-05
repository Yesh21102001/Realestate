'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { buttonClass } from './ui';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send WhatsApp message
    const whatsappMessage = `Hello, I'm interested in your services. My details: Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Subject: ${formData.subject}, Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918790388887?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);

    // Reset form after 2 seconds and close
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 mx-4 w-[calc(100%-2rem)] max-w-md bg-ivory shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gold-line/50 p-6">
          <h2 className="text-3xl font-medium text-ink">Contact us</h2>
          <button
            onClick={onClose}
            className="text-ink/55 transition hover:text-gold"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="mb-4 font-serif text-5xl text-gold">✓</div>
              <h3 className="text-lg font-bold text-ink mb-2">Message Sent!</h3>
              <p className="text-ink/70">Thank you for contacting us. We’ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-0 border-b border-gold-line bg-transparent px-0 py-2 text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none focus:ring-0"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-0 border-b border-gold-line bg-transparent px-0 py-2 text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none focus:ring-0"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-gold-line bg-transparent px-0 py-2 text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none focus:ring-0"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-0 border-b border-gold-line bg-transparent px-0 py-2 text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none focus:ring-0"
                  placeholder="Inquiry about properties"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border-0 border-b border-gold-line bg-transparent px-0 py-2 text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none focus:ring-0 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className={`${buttonClass('primary')} mt-6 w-full`}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

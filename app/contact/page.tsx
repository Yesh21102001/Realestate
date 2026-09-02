'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

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

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <Header navLinks={navLinks} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg sm:text-xl text-indigo-100">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:pavaniprakruti12@gmail.com" className="text-gray-600 hover:text-purple-600 transition">pavaniprakruti12@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <a href="https://wa.me/918790388887" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition">+91 8790388887</a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">123 Real Estate Avenue</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

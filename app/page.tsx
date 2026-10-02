'use client';

import { Heart, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SchemaMarkup from './components/SchemaMarkup';
import { ventures } from './data/ventures';
import { realEstateAgentSchema, keywordClusters } from './lib/seo';

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

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <SchemaMarkup schema={realEstateAgentSchema} />
      <Header navLinks={navLinks} />

      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[700px] lg:h-[800px] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden" style={{ backgroundImage: 'url(/images/vizag-hero.png)' }}>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-12 max-w-6xl text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Connecting you to the <br /> home you love
          </h1>
          <Link href="/ventures" className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-blue-900 rounded-full font-bold text-sm sm:text-base hover:bg-gray-100 transition">
            Explore Ventures
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: '✓', title: 'Verified Properties', desc: 'All properties are verified' },
            { icon: '🔒', title: 'Safe & Secure', desc: 'Secure transactions guaranteed' },
            { icon: '🕐', title: '24/7 Support', desc: 'Round the clock support' },
            { icon: '💰', title: 'Best Price Guarantee', desc: 'Best market price' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white border border-blue-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center hover:shadow-md transition duration-300">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-5 flex justify-center">{feature.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discover Perfect Match Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Discover Your Perfect</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900">Property Match</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Featured Image */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 h-56 sm:h-64 lg:h-96 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop"
                  alt="Featured Property"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            </div>

            {/* Image Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-40 sm:h-48 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9b274b3cecab?w=500&h=400&fit=crop"
                  alt="Property"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-40 sm:h-48 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45ac003ce338?w=500&h=400&fit=crop"
                  alt="Property"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-40 sm:h-48 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop"
                  alt="Property"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-40 sm:h-48 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1469022563428-aa34faf8e8a9?w=500&h=400&fit=crop"
                  alt="Property"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">Featured Properties</h2>
            <a href="/ventures" className="text-blue-900 font-semibold hover:text-blue-800 text-xs sm:text-sm whitespace-nowrap">
              View All Properties →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredVentures.map((prop) => (
              <Link key={prop.id} href={`/ventures/${prop.id}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-40 bg-gray-300 overflow-hidden">
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Tag */}
                    <span className={`absolute top-2 left-2 px-2 py-1 text-white text-xs font-bold rounded-full ${prop.tagBg}`}>
                      {prop.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition">{prop.name}</h3>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-gray-600 text-xs mb-3">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate">{prop.loc}</span>
                    </div>

                    {/* Stats in horizontal layout */}
                    <div className="flex justify-between items-center text-xs mb-3 pb-3 border-b border-gray-200">
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{prop.beds}</p>
                        <p className="text-gray-600 text-xs">Beds</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{prop.baths}</p>
                        <p className="text-gray-600 text-xs">Baths</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{prop.sqft}</p>
                        <p className="text-gray-600 text-xs">Sqft</p>
                      </div>
                    </div>

                    {/* Price */}
                    <span className="text-lg font-bold text-blue-900">{prop.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              WHY CHOOSE <br /> VIZAG YARDS
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base font-light">
              Use other more-first access. We deliver premium service and transparent dealings with genuine customer feedback. Real homes for real people.
            </p>
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {['Personalized recommendations', 'Verified listings & owners', 'Secure transactions & support', 'Best market prices guaranteed'].map((item, i) => (
                <div key={i} className="flex gap-3 sm:gap-4 items-start">
                  <span className="text-blue-900 font-bold text-lg sm:text-xl shrink-0">✓</span>
                  <span className="text-gray-700 font-medium text-sm sm:text-base pt-1">{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 sm:mt-10 lg:mt-12 px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-900 text-white rounded-full font-semibold text-sm sm:text-base hover:bg-blue-800 transition">
              Learn More
            </button>
          </div>
          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl w-full max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=500&fit=crop"
                alt="Modern interior"
                className="w-full h-auto object-cover aspect-square sm:aspect-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 lg:mb-20 text-center">
            Find Your Dream Home in 3 Easy Steps
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {[
              { num: 1, title: 'Search & Browse', desc: 'Search for properties matching your criteria' },
              { num: 2, title: 'Choose Your Property', desc: 'Compare & select your favorite home' },
              { num: 3, title: 'Move In & Enjoy', desc: 'Complete process and move in' }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="inline-flex items-center justify-center w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-full mb-6 sm:mb-8 font-bold text-2xl sm:text-3xl lg:text-4xl shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-10 sm:mb-12 lg:mb-16 text-center">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {[
              { avatar: '👩', name: 'Sarah Johnson', role: 'Happy Customer', text: 'Finding my dream home was incredibly easy with Vizag Yards. The process was smooth, transparent and hassle-free from start to finish.' },
              { avatar: '👩‍💼', name: 'Emily Garcia', role: 'Verified Buyer', text: 'Excellent service with outstanding support team. They made the entire buying process transparent, comfortable and stress-free.' }
            ].map((test, idx) => (
              <div key={idx} className="bg-gray-50 p-5 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-100">
                <p className="text-gray-600 mb-5 sm:mb-6 italic text-xs sm:text-sm leading-relaxed font-light">"{test.text}"</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-3xl sm:text-4xl">{test.avatar}</span>
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-xs sm:text-sm truncate">{test.name}</p>
                    <p className="text-xs text-gray-600">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-sm sm:text-base">Find answers to common questions about our services</p>
          </div>

          <div className="space-y-4 sm:space-y-6">
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
              <details key={idx} className="bg-white p-5 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 cursor-pointer group">
                <summary className="font-bold text-gray-900 text-sm sm:text-base flex justify-between items-center">
                  {faq.question}
                  <span className="group-open:rotate-180 transition-transform ml-4 shrink-0">▼</span>
                </summary>
                <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-900 text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Ready To Find Your Dream Home?
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-indigo-100 mb-8 sm:mb-10 lg:mb-12 leading-relaxed font-light px-2">
            Join thousands of satisfied customers who discovered their perfect space with Vizag Yards. Your journey starts here.
          </p>
          <button className="px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 bg-white text-blue-900 rounded-full font-bold text-xs sm:text-sm lg:text-base hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

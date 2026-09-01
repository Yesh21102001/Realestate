'use client';

import { MapPin, Heart } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ventures } from '../data/ventures';

export default function VenturesPage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <Header navLinks={navLinks} />

      {/* Ventures Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">All Ventures</h1>
            <p className="text-gray-600 text-sm sm:text-base">Explore our complete collection of premium properties and investment opportunities.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ventures.map((venture, idx) => (
              <div key={idx} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="relative h-48 sm:h-56 lg:h-64 bg-gray-300">
                  <img
                    src={`https://images.unsplash.com/photo-${['1512917774080-9b274b3cecab', '1502672260266-1c1ef2d93688', '1570129477492-45ac003ce338', '1522708323590-d24dbb6b0267', '1469022563428-aa34faf8e8a9'][idx]}?w=500&h=400&fit=crop`}
                    alt={venture.name}
                    className="w-full h-full object-cover"
                  />
                  <span className={`absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 text-white text-xs font-bold rounded-full ${venture.tagBg}`}>
                    {venture.tag}
                  </span>
                  <button className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white p-2 sm:p-2.5 rounded-full hover:bg-gray-100 transition shadow-md">
                    <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                  </button>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{venture.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-5 sm:mb-6">
                    <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0" />
                    <span className="truncate">{venture.loc}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-5 lg:py-6 border-y border-gray-200 mb-4 sm:mb-5 lg:mb-6 text-xs sm:text-sm">
                    <div className="text-center">
                      <p className="font-bold text-gray-900">{venture.beds}</p>
                      <p className="text-gray-600 text-xs">Beds</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-900">{venture.baths}</p>
                      <p className="text-gray-600 text-xs">Baths</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-900">{venture.sqft}</p>
                      <p className="text-gray-600 text-xs">Sqft</p>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">{venture.price}</span>
                  </div>

                  <Link href={`/ventures/${venture.id}`} className="block w-full py-2.5 sm:py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition text-xs sm:text-sm text-center">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

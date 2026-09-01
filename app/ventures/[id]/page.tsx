'use client';

import { MapPin, Heart, ChevronLeft, Wifi, Zap, Droplets, Wind } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getVentureById } from '../../data/ventures';
import { useParams } from 'next/navigation';

export default function VentureDetailPage() {
  const params = useParams();
  const venture = getVentureById(params.id as string);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  if (!venture) {
    return (
      <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
        <Header navLinks={navLinks} />
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Venture not found</h1>
            <Link href="/ventures" className="text-purple-600 hover:text-purple-700 font-semibold">
              Back to Ventures
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <Header navLinks={navLinks} />

      {/* Back Button */}
      <div className="px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/ventures" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back to Ventures
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-12 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6 sm:mb-8">
            <img
              src={venture.image}
              alt={venture.name}
              className="w-full h-96 sm:h-[500px] object-cover"
            />
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex gap-2">
              <span className={`px-3 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm font-bold rounded-full ${venture.tagBg}`}>
                {venture.tag}
              </span>
            </div>
            <button className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white p-3 rounded-full hover:bg-gray-100 transition shadow-md">
              <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="px-4 sm:px-6 lg:px-12 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Info */}
            <div className="mb-8 sm:mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">{venture.name}</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <MapPin className="w-5 h-5 shrink-0" />
                <span className="text-sm sm:text-base">{venture.loc}</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{venture.description}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8 border-y border-gray-200 mb-8 sm:mb-10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{venture.beds}</p>
                <p className="text-gray-600 text-xs sm:text-sm">Bedrooms</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{venture.baths}</p>
                <p className="text-gray-600 text-xs sm:text-sm">Bathrooms</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{venture.sqft}</p>
                <p className="text-gray-600 text-xs sm:text-sm">Sqft</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venture.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-purple-600 font-bold text-lg shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {venture.amenities.map((amenity, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-gray-700 font-medium text-sm sm:text-base">{amenity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 sticky top-24">
              {/* Price */}
              <div className="mb-6 sm:mb-8">
                <p className="text-gray-600 text-sm mb-2">Price</p>
                <p className="text-4xl sm:text-5xl font-bold text-gray-900">{venture.price}</p>
              </div>

              {/* Buttons */}
              <button className="w-full py-3 sm:py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition text-sm sm:text-base mb-3 sm:mb-4">
                Schedule Tour
              </button>
              <button className="w-full py-3 sm:py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition text-sm sm:text-base">
                Request Information
              </button>

              {/* Property Highlights */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Property Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Wifi className="w-5 h-5 text-purple-600 shrink-0" />
                    <span className="text-gray-700 text-sm">High-Speed Internet Ready</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-purple-600 shrink-0" />
                    <span className="text-gray-700 text-sm">Energy Efficient</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-purple-600 shrink-0" />
                    <span className="text-gray-700 text-sm">Modern Plumbing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wind className="w-5 h-5 text-purple-600 shrink-0" />
                    <span className="text-gray-700 text-sm">Climate Control</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

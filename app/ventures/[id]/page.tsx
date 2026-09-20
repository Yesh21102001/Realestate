'use client';

import { MapPin, Heart, ChevronLeft } from 'lucide-react';
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

      {/* Gallery Section */}
      {venture.gallery && venture.gallery.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {venture.gallery.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 aspect-square sm:aspect-video cursor-pointer">
                  <img
                    src={img}
                    alt={`${venture.name} - Image ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Details Section */}
      <section className="px-4 sm:px-6 lg:px-12 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto">
          {/* Header Info */}
          <div className="mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{venture.name}</h1>
            {venture.tagline && <p className="text-lg sm:text-xl text-purple-600 font-semibold mb-4">{venture.tagline}</p>}
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin className="w-5 h-5 shrink-0" />
              <span className="text-sm sm:text-base">{venture.loc}</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{venture.description}</p>
            {venture.overview && <p className="text-gray-700 text-base leading-relaxed italic border-l-4 border-purple-600 pl-4">{venture.overview}</p>}
          </div>

          {/* Site Area Info */}
          {(venture.siteArea || venture.projectArea) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-6 bg-green-50 rounded-xl">
              {venture.siteArea && <div>
                <p className="text-3xl font-bold text-green-700">{venture.siteArea}</p>
              </div>}
              {venture.projectArea && <div>
                <p className="text-3xl font-bold text-green-700">{venture.projectArea}</p>
              </div>}
            </div>
          )}

          {/* Stats */}
          {venture.beds && (
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
          )}

          {/* Project Highlights */}
          {venture.features && venture.features.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Project Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venture.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-purple-600 font-bold text-lg shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Club Facilities */}
          {venture.clubFacilities && venture.clubFacilities.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Club Facilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venture.clubFacilities.map((facility, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-blue-50 p-4 rounded-lg">
                    <span className="text-blue-600 font-bold shrink-0">•</span>
                    <span className="text-gray-700 text-sm sm:text-base">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lakeside Facilities */}
          {venture.lakesideFacilities && venture.lakesideFacilities.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Lakeside Living</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venture.lakesideFacilities.map((facility, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-cyan-50 p-4 rounded-lg">
                    <span className="text-cyan-600 font-bold shrink-0">🌊</span>
                    <span className="text-gray-700 text-sm sm:text-base">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wellness Facilities */}
          {venture.wellnessFacilities && venture.wellnessFacilities.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wellness & Relaxation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venture.wellnessFacilities.map((facility, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-indigo-50 p-4 rounded-lg">
                    <span className="text-indigo-600 font-bold shrink-0">✨</span>
                    <span className="text-gray-700 text-sm sm:text-base">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Amenities */}
          {venture.amenities && venture.amenities.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {venture.amenities.map((amenity, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition">
                    <p className="text-gray-700 font-medium text-sm sm:text-base">{amenity}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location Benefits */}
          {venture.locationBenefits && (
            <div className="mb-10 sm:mb-12 bg-green-50 p-6 sm:p-8 rounded-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Gateway to Growth</h2>
              <p className="text-gray-700 leading-relaxed">{venture.locationBenefits}</p>
            </div>
          )}

          {/* Key Highlights */}
          {venture.keyHighlights && venture.keyHighlights.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venture.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-yellow-50 p-4 rounded-lg">
                    <span className="text-yellow-600 font-bold text-lg shrink-0">★</span>
                    <span className="text-gray-700 text-sm sm:text-base">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Distances From Site */}
          {venture.distancesFromSite && venture.distancesFromSite.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Distances From Site</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {venture.distancesFromSite.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                    <span className="text-gray-700 font-medium">{item.location}</span>
                    <span className="text-purple-600 font-bold">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Educational & Healthcare */}
          {venture.educational && venture.educational.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Nearby Facilities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {venture.educational.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{section.category}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-2 text-gray-700 text-sm">
                          <span className="text-purple-600 shrink-0">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* IT Companies */}
          {venture.itCompanies && venture.itCompanies.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nearby IT Companies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {venture.itCompanies.map((company, idx) => (
                  <div key={idx} className="flex gap-3 bg-blue-50 p-4 rounded-lg">
                    <span className="text-blue-600 shrink-0">💼</span>
                    <span className="text-gray-700 text-sm">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Developer Info */}
          {venture.developerInfo && (
            <div className="mb-10 sm:mb-12 bg-purple-50 p-6 sm:p-8 rounded-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">About Developer</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{venture.developerInfo}</p>
              {venture.developerStats && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {venture.developerStats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">{stat.value}</p>
                      <p className="text-gray-600 text-xs sm:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Contact Info */}
          {venture.contact && (
            <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Address</p>
                  <p className="text-white">{venture.contact.address}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href={`mailto:${venture.contact.email}`} className="text-purple-400 hover:text-purple-300">{venture.contact.email}</a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Website</p>
                  <a href={`https://${venture.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">{venture.contact.website}</a>
                </div>
              </div>
            </div>
          )}

          {/* Price CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6 sm:p-8 rounded-xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <p className="text-gray-300 text-sm mb-2">Starting Price</p>
                <p className="text-4xl sm:text-5xl font-bold">{venture.price}</p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none py-3 sm:py-4 px-6 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition text-sm sm:text-base">
                  Schedule Tour
                </button>
                <button className="flex-1 sm:flex-none py-3 sm:py-4 px-6 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition text-sm sm:text-base">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

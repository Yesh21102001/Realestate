'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">About Vizag Yards</h1>
          <p className="text-lg sm:text-xl text-indigo-100">Transforming the real estate industry through innovation and trust</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Mission */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              At Vizag Yards, we believe everyone deserves to find the perfect home. Our mission is to revolutionize the real estate experience by making property discovery, purchasing, and investment accessible, transparent, and trustworthy for everyone.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We combine cutting-edge technology with personalized service to connect buyers, sellers, and investors with opportunities that truly match their needs and aspirations.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600">We believe in honest, straightforward communication. All property information is verified and clearly presented.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
                <p className="text-gray-600">Your trust is our foundation. We maintain the highest standards of security and privacy for all our users.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">We continuously evolve our platform with the latest technology to improve your experience.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">We set high standards and deliver exceptional service in every interaction.</p>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Vizag Yards was founded with a simple vision: to make real estate simple. What started as a small team of passionate professionals has grown into a trusted platform serving thousands of satisfied customers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Over the years, we've continuously refined our approach, invested in technology, and expanded our portfolio to serve clients globally. Today, Vizag Yards stands as a beacon of trust and innovation in the real estate industry.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment remains unchanged: to provide the best possible experience for everyone involved in real estate transactions.
            </p>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-purple-600 font-bold text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Verified Listings</h3>
                  <p className="text-gray-600">Every property is thoroughly verified and photographed by our team</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-purple-600 font-bold text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Expert Team</h3>
                  <p className="text-gray-600">Our experienced professionals are here to guide you through every step</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-purple-600 font-bold text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock customer support to address your questions anytime</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-purple-600 font-bold text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Best Prices</h3>
                  <p className="text-gray-600">We guarantee competitive pricing and exclusive deals for our members</p>
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

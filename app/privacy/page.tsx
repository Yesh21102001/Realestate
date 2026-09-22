'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg sm:text-xl text-indigo-100">We value your privacy and are committed to protecting your personal data</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Vizag Yards ("we," "us," or "our") operates the website and mobile application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our platforms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Information you provide directly (name, email, phone number, address)</li>
                <li>Information automatically collected (browser type, IP address, cookies)</li>
                <li>Information from third parties (payment processors, property data providers)</li>
                <li>Property viewing history and preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve and personalize your experience</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Process transactions and send related information</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and improve security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sharing Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information. We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p>
                Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on our platform. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">Vizag Yards Privacy Team</p>
                <p>Email: pavaniprakruti12@gmail.com</p>
                <p>Phone: +91 8790388887</p>
                <p>Address: Sai Trade Center, 2nd Floor, Prakruti Avenue Pvt Ltd, Dwaraka Nagar Second Line, Visakhapatnam</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last Updated: {new Date().getFullYear()}. This privacy policy is effective as of the date last updated and applies to all users of the Vizag Yards platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

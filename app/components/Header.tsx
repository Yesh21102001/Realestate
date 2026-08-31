'use client';

import { Heart, Menu, X, Home as HomeIcon } from 'lucide-react';
import { useState } from 'react';
import ContactForm from './ContactForm';

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  navLinks: NavLink[];
}

export default function Header({ navLinks }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="w-full px-4 py-3 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <HomeIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-blue-900">Nestoria</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 xl:gap-8 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-purple-600 transition whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex gap-2 sm:gap-4 items-center">
            <button className="text-gray-400 hover:text-gray-600 transition p-1.5">
              <Heart className="w-5 h-5" />
            </button>
            <button
              onClick={() => setContactFormOpen(true)}
              className="hidden sm:block px-4 sm:px-6 py-2 bg-blue-900 text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-800 transition"
            >
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-purple-600 transition text-sm font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setContactFormOpen(true)}
                className="w-full sm:hidden mt-2 px-4 py-2.5 bg-blue-900 text-white rounded-full text-sm font-semibold hover:bg-blue-800 transition"
              >
                Contact Us
              </button>
            </div>
          </nav>
        )}
      </div>
      <ContactForm isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />
    </header>
  );
}

'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactForm from './ContactForm';
import { buttonClass } from './ui';

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
    <header className="sticky top-0 z-50 border-b border-gold-line/40 bg-ivory/95 backdrop-blur-md">
      <div className="w-full px-4 py-3 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition">
            <Image
              src="/logo.png"
              alt="Vizag Yards Logo"
              width={110}
              height={110}
              className="flex-shrink-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 xl:gap-10 text-[11px] font-semibold uppercase tracking-[0.18em]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-ink/80 transition hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex gap-2 sm:gap-4 items-center">
            <button
              onClick={() => setContactFormOpen(true)}
              className={`${buttonClass('primary')} max-sm:hidden`}
            >
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-ink/70 hover:text-ink"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="mt-4 border-t border-gold-line/40 pb-4 pt-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="border-b border-gold-line/30 py-3 font-serif text-xl text-ink transition hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setContactFormOpen(true)}
                className={`${buttonClass('primary')} mt-2 w-full sm:hidden`}
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

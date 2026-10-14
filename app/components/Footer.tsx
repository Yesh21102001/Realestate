import Image from 'next/image';
import Link from 'next/link';
import { ventures } from '../data/ventures';

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-12 text-gray-300 sm:px-6 sm:py-14 lg:px-12 lg:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
        <div>
          <div className="mb-3 sm:mb-4">
            <Image
              src="/logo.png"
              alt="Vizag Yards Logo"
              width={150}
              height={150}
              className="shrink-0"
            />
          </div>
          <p className="text-xs sm:text-sm font-light">Your trusted real estate partner.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3 sm:mb-4 text-xs sm:text-sm">Explore</h4>
          <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
            <li><Link href="/" className="hover:text-white transition font-light">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition font-light">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3 sm:mb-4 text-xs sm:text-sm">Ventures</h4>
          <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
            {ventures.map((venture) => (
              <li key={venture.id}>
                <Link href={`/ventures/${venture.slug}`} className="font-light transition hover:text-white">{venture.name}</Link>
              </li>
            ))}
            <li><Link href="/ventures" className="font-light text-blue-400 transition hover:text-blue-300">View all ventures</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3 sm:mb-4 text-xs sm:text-sm">Support</h4>
          <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
            <li><Link href="/contact" className="hover:text-white transition font-light">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition font-light">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3 sm:mb-4 text-xs sm:text-sm">Contact</h4>
          <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
            <li><a href="mailto:info@prakrtiavenues.com" className="font-light transition hover:text-white">info@prakrtiavenues.com</a></li>
            <li><a href="https://wa.me/918790388887" target="_blank" rel="noopener noreferrer" className="font-light transition hover:text-white">+91 8790388887 (WhatsApp)</a></li>
            <li><a href="https://vizagyards.com" target="_blank" rel="noopener noreferrer" className="font-light transition hover:text-white">vizagyards.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Vizag Yards. All rights reserved. | Design and developed by <a href="https://hosthive.online/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition font-medium">Host Hive</a></p>
      </div>
    </footer>
  );
}

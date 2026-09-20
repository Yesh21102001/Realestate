import { Home as HomeIcon } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-7 sm:w-8 h-7 sm:h-8 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
              <HomeIcon className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
            </div>
            <span className="font-bold text-white text-sm sm:text-base">Vizag Yards</span>
          </div>
          <p className="text-xs sm:text-sm font-light">Your trusted real estate partner.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3 sm:mb-4 text-xs sm:text-sm">Navigation</h4>
          <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
            <li><Link href="/" className="hover:text-white transition font-light">Home</Link></li>
            <li><Link href="/ventures" className="hover:text-white transition font-light">Ventures</Link></li>
            <li><Link href="/about" className="hover:text-white transition font-light">About Us</Link></li>
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
            <li><a href="mailto:pavaniprakruti12@gmail.com" className="hover:text-white transition font-light">pavaniprakruti12@gmail.com</a></li>
            <li><a href="https://wa.me/918790388887" target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-light">+91 8790388887 (WhatsApp)</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Vizag Yards. All rights reserved. | Design and developed by <a href="https://hosthive.online/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition font-medium">Host Hive</a></p>
      </div>
    </footer>
  );
}

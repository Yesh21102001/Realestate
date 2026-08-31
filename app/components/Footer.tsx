import { Home as HomeIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-7 sm:w-8 h-7 sm:h-8 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
              <HomeIcon className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
            </div>
            <span className="font-bold text-white text-sm sm:text-base">Nestoria</span>
          </div>
          <p className="text-xs sm:text-sm font-light">Your trusted real estate partner.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3 sm:mb-4 text-xs sm:text-sm">Company</h4>
          <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
            <li><a href="#" className="hover:text-white transition font-light">About Us</a></li>
            <li><a href="#" className="hover:text-white transition font-light">Careers</a></li>
            <li><a href="#" className="hover:text-white transition font-light">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3 sm:mb-4 text-xs sm:text-sm">Services</h4>
          <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
            <li><a href="#" className="hover:text-white transition font-light">Buy Property</a></li>
            <li><a href="#" className="hover:text-white transition font-light">Sell Property</a></li>
            <li><a href="#" className="hover:text-white transition font-light">Rent</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3 sm:mb-4 text-xs sm:text-sm">Support</h4>
          <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
            <li><a href="#" className="hover:text-white transition font-light">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition font-light">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition font-light">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm font-light">
        <p>&copy; 2024 Nestoria. All rights reserved.</p>
      </div>
    </footer>
  );
}

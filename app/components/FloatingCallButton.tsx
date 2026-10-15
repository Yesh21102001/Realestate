'use client';

import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="https://wa.me/918790388887"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-4 z-30 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-green-600 lg:bottom-6 lg:right-6"
    >
      <Phone className="w-5 h-5" />
      <span>Call</span>
    </a>
  );
}

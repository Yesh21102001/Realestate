'use client';

import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="https://wa.me/918790388887"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg transition-all duration-200 z-30"
    >
      <Phone className="w-5 h-5" />
      <span>Call</span>
    </a>
  );
}

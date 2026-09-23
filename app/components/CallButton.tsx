'use client';

import { Phone } from 'lucide-react';

export default function CallButton() {
  const phoneNumber = '+918790388887';
  const displayNumber = '+91 8790388887';

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
      title="Call us"
    >
      <Phone className="w-5 h-5" />
      <span className="hidden sm:inline font-semibold text-sm">{displayNumber}</span>
      <span className="sm:hidden font-semibold text-sm">Call</span>
    </a>
  );
}

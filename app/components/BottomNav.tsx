'use client';

import { Home, Building2, Info, Lock, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Building2, label: 'Ventures', href: '/ventures' },
    { icon: Info, label: 'About', href: '/about' },
    { icon: Phone, label: 'Contact', href: '/contact' },
    { icon: Lock, label: 'Privacy', href: '/privacy' }
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-2xl backdrop-blur-md lg:hidden">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex-1 flex flex-col items-center justify-center py-3 px-2 transition-colors duration-200 ${
                active
                  ? 'border-t-2 border-blue-900 text-blue-900'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="text-xs font-medium text-center">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

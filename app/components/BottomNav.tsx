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
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gold-line/50 bg-ivory/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
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
                  ? 'border-t-2 border-gold text-navy'
                  : 'border-t-2 border-transparent text-ink/55 hover:text-gold'
              }`}
            >
              <Icon className="mb-1 h-5 w-5" strokeWidth={1.5} />
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-center">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

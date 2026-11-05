import Image from 'next/image';
import Link from 'next/link';
import { ventures } from '../data/ventures';
import { ButtonLink, container } from './ui';

const headingClass = 'mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light';
const linkClass = 'text-sm text-white/70 transition hover:text-gold-light';

export default function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-16 text-white/70 sm:pt-20">
      <div className={container}>
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-end">
          <p className="max-w-xl font-serif text-3xl leading-snug text-white sm:text-4xl">
            Connecting you to the <span className="italic text-gold-light">home you love.</span>
          </p>
          <ButtonLink href="/contact" variant="textLight" className="self-start lg:self-auto">Speak with an advisor</ButtonLink>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div>
            <Image src="/logo.png" alt="Vizag Yards Logo" width={150} height={150} className="mb-4 shrink-0" />
            <p className="text-sm">Your trusted real estate partner.</p>
          </div>
          <div>
            <h4 className={headingClass}>Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/" className={linkClass}>Home</Link></li>
              <li><Link href="/about" className={linkClass}>About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={headingClass}>Ventures</h4>
            <ul className="space-y-3">
              {ventures.map((venture) => (
                <li key={venture.id}>
                  <Link href={`/ventures/${venture.slug}`} className={linkClass}>{venture.name}</Link>
                </li>
              ))}
              <li><Link href="/ventures" className="text-sm italic text-gold-light transition hover:text-white">View all ventures</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={headingClass}>Support</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className={linkClass}>Contact Us</Link></li>
              <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={headingClass}>Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:info@prakrtiavenues.com" className={linkClass}>info@prakrtiavenues.com</a></li>
              <li><a href="https://wa.me/918790388887" target="_blank" rel="noopener noreferrer" className={linkClass}>+91 8790388887 (WhatsApp)</a></li>
              <li><a href="https://vizagyards.com" target="_blank" rel="noopener noreferrer" className={linkClass}>vizagyards.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Vizag Yards. All rights reserved. | Design and developed by <a href="https://hosthive.online/" target="_blank" rel="noopener noreferrer" className="font-medium text-gold-light transition hover:text-white">Host Hive</a></p>
        </div>
      </div>
    </footer>
  );
}

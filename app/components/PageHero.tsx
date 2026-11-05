import Breadcrumbs from './Breadcrumbs';
import { Eyebrow, container } from './ui';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  currentPage: string;
}

export default function PageHero({ eyebrow, title, subtitle, currentPage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 border-l border-gold-light/15 lg:block" />
      <div className={`relative ${container}`}>
        <Breadcrumbs currentPage={currentPage} />
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}

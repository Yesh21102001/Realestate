import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Tone = 'ivory' | 'linen' | 'ink';

const toneClasses: Record<Tone, string> = {
  ivory: 'bg-ivory text-ink',
  linen: 'bg-linen text-ink',
  ink: 'bg-ink text-white',
};

export const container = 'mx-auto max-w-7xl px-5 sm:px-8 lg:px-12';

export function Section({ tone = 'ivory', className = '', children }: { tone?: Tone; className?: string; children: ReactNode }) {
  return (
    <section className={`${toneClasses[tone]} py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className={container}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, onDark = false, center = false }: { children: ReactNode; onDark?: boolean; center?: boolean }) {
  return (
    <p className={`mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] ${onDark ? 'text-gold-light' : 'text-gold'} ${center ? 'text-center' : ''}`}>
      {children}
    </p>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  number?: number;
  title: ReactNode;
  intro?: ReactNode;
  onDark?: boolean;
  center?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, number, title, intro, onDark = false, center = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} ${className}`}>
      {number !== undefined && (
        <span className={`mb-3 block font-serif text-4xl italic ${onDark ? 'text-gold-light' : 'text-gold'}`}>
          {String(number).padStart(2, '0')}
        </span>
      )}
      {eyebrow && <Eyebrow onDark={onDark} center={center}>{eyebrow}</Eyebrow>}
      <h2 className={`text-4xl leading-tight sm:text-5xl ${onDark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {intro && (
        <p className={`mt-5 max-w-xl text-base leading-7 ${center ? 'mx-auto' : ''} ${onDark ? 'text-white/70' : 'text-ink/70'}`}>{intro}</p>
      )}
    </div>
  );
}

export function Accent({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return <span className={`italic ${onDark ? 'text-gold-light' : 'text-gold'}`}>{children}</span>;
}

type ButtonVariant = 'primary' | 'light' | 'text' | 'textLight';

export function buttonClass(variant: ButtonVariant = 'primary') {
  const solid = 'group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition';
  const text = 'group inline-flex items-center gap-2 border-b pb-1 text-xs font-semibold uppercase tracking-[0.18em] transition';
  switch (variant) {
    case 'primary':
      return `${solid} bg-navy text-white hover:bg-gold`;
    case 'light':
      return `${solid} bg-ivory text-navy hover:bg-gold-light`;
    case 'text':
      return `${text} border-gold text-navy hover:text-gold`;
    case 'textLight':
      return `${text} border-gold-light text-gold-light hover:border-white hover:text-white`;
  }
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  arrow?: boolean;
  className?: string;
}

export function ButtonLink({ href, children, variant = 'primary', external = false, arrow = true, className = '' }: ButtonLinkProps) {
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />}
    </>
  );
  const classes = `${buttonClass(variant)} ${className}`;
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</a>;
  }
  return <Link href={href} className={classes}>{content}</Link>;
}

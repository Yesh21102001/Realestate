import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import { Accent, ButtonLink, Eyebrow, Section } from './components/ui';
import { ventures } from './data/ventures';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Ventures', href: '/ventures' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' }
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header navLinks={navLinks} />
      <Section>
        <div className="mx-auto max-w-2xl py-10 text-center">
          <Eyebrow center>Error 404</Eyebrow>
          <h1 className="mb-6 text-5xl text-ink sm:text-6xl">
            This plot is <Accent>still empty.</Accent>
          </h1>
          <p className="mb-10 text-base leading-7 text-ink/70">
            The page you were looking for doesn’t exist or has moved. Try one of our ventures instead.
          </p>
          <ul className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {ventures.map((venture) => (
              <li key={venture.id}>
                <ButtonLink href={`/ventures/${venture.slug}`} variant="text" arrow={false}>{venture.name}</ButtonLink>
              </li>
            ))}
          </ul>
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

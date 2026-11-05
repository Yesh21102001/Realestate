import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbsProps {
  currentPage: string;
}

export default function Breadcrumbs({ currentPage }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10">
      <ol className="flex items-center gap-2 text-xs uppercase tracking-[0.16em]">
        <li>
          <Link href="/" className="text-white/60 transition hover:text-gold-light">
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3.5 w-3.5 text-white/40" />
        </li>
        <li aria-current="page" className="font-medium text-white">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
}

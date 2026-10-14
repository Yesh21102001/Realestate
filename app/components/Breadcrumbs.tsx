import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbsProps {
  currentPage: string;
}

export default function Breadcrumbs({ currentPage }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center justify-center gap-2 text-sm">
        <li>
          <Link href="/" className="text-blue-100 transition hover:text-white">
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-4 w-4 text-blue-200/70" />
        </li>
        <li aria-current="page" className="font-medium text-white">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
}

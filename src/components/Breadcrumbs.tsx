/**
 * Navigation component for breadcrumb trails
 * Example: Kefir > Care Guide
 */
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        {items.map((item, idx) => (
          <li key={idx} className="breadcrumbs-item">
            <Link href={item.href} className="breadcrumbs-link">
              {item.label}
            </Link>
            {idx < items.length - 1 && (
              <span className="breadcrumbs-sep">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

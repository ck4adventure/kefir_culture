/**
 * Navigation buttons for moving between guide sections
 * Shows Previous and Next with page titles
 */
import Link from 'next/link';

interface NavPage {
  title: string;
  href: string;
}

interface NavButtonsProps {
  prev?: NavPage;
  next?: NavPage;
}

export function NavButtons({ prev, next }: NavButtonsProps) {
  return (
    <div className="nav-buttons">
      {prev ? (
        <Link href={prev.href} className="nav-button nav-button-prev">
          <span className="nav-button-label">← Previous</span>
          <span className="nav-button-title">{prev.title}</span>
        </Link>
      ) : (
        <div />
      )}
      
      {next ? (
        <Link href={next.href} className="nav-button nav-button-next">
          <span className="nav-button-label">Next →</span>
          <span className="nav-button-title">{next.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}

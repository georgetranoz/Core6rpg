import { Link } from 'react-router-dom';
import { handbookPdfUrl } from '../config';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFoundPage() {
  usePageMeta(
    'Page not found — Core6 RPG',
    "The Hero you're looking for has wandered off the map. Head back to safer ground or grab the Hero's Handbook on your way.",
  );

  return (
    <div className="page-inner page-inner--narrow notfound">
      <p className="section-label">404</p>
      <h1>That Hero has wandered off the map.</h1>
      <p>
        The page you&apos;re looking for doesn&apos;t exist — or never did.
        Head back to safer ground, or grab the Hero&apos;s Handbook on your way.
      </p>
      <div className="cta-row" style={{ justifyContent: 'center' }}>
        <Link className="btn btn--primary" to="/">
          Back to home
        </Link>
        <a className="btn btn--secondary" href={handbookPdfUrl}>
          Get the free PDF
        </a>
      </div>
    </div>
  );
}

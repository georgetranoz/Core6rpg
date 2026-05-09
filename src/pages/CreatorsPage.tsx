import { Link } from 'react-router-dom';
import { c6oglPdfUrl } from '../config';
import { usePageMeta } from '../hooks/usePageMeta';

export function CreatorsPage() {
  usePageMeta(
    'For Creators — Core6 Open Game License',
    'Publish Core6 settings, adventures, and Disciplines — commercially — under the C6OGL and reseller terms.',
  );

  return (
    <div className="page-inner page-inner--narrow">
      <p className="section-label">Creators</p>
      <h1 className="page-title">Build On Core6</h1>
      <p className="page-lead">
        Core6 is published under the Core6 Open Game Licence (C6OGL). That
        means royalty-free rights for indie creators and small businesses to
        build and sell their own Core6 content — and a fair, transparent path
        for larger studios.
      </p>

      <section className="content-section">
        <h2 id="c6ogl">Core6 Open Game Licence (C6OGL)</h2>
        <ul>
          <li>Run any of our settings at your table.</li>
          <li>Hack the rules to fit your group.</li>
          <li>
            Publish your own setting books, adventures,{' '}
            <em className="game-term">Disciplines</em>, miniatures, and
            merchandise — including commercially.
          </li>
          <li>
            Tell your stories — fan novels, fan films, live-play streams,
            podcasts.
          </li>
          <li>
            Independent creators and small businesses (under $2M USD annual
            revenue) keep 100% of their royalties.
          </li>
        </ul>
        <p>
          We built Core6 to be a gaming operating system, not a walled garden.
          The more creators build on it, the better the system gets for
          everyone.
        </p>
        <div className="cta-row">
          <Link className="btn btn--primary" to="/c6ogl">
            Read the C6OGL
          </Link>
          {c6oglPdfUrl ? (
            <a className="btn btn--secondary" href={c6oglPdfUrl}>
              Download as PDF
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
}

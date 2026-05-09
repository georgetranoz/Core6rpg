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
        Core6 is published under the Core6 Open Game License (C6OGL) and the
        Digital PDF Reseller License Agreement. That means you can:
      </p>

      <section className="content-section">
        <h2 id="c6ogl">Core6 Open Game License (C6OGL)</h2>
        <ul>
          <li>Run any of our settings at your table.</li>
          <li>Hack the rules to fit your group.</li>
          <li>
            Publish your own setting books, adventures,{' '}
            <em className="game-term">Disciplines</em>, and supplements —
            including commercially.
          </li>
          <li>
            Resell community-friendly digital editions under our reseller terms.
          </li>
        </ul>
        <p>
          We built Core6 to be a gaming operating system, not a walled garden.
          The more creators build on it, the better the system gets for everyone.
        </p>
        <div className="cta-row">
          {c6oglPdfUrl ? (
            <a className="btn btn--primary" href={c6oglPdfUrl}>
              Read the C6OGL
            </a>
          ) : (
            <button
              type="button"
              className="btn btn--primary"
              disabled
              style={{ opacity: 0.55, cursor: 'not-allowed' }}
            >
              Read the C6OGL
            </button>
          )}
          <a className="btn btn--secondary" href="#newsletter">
            Submit your supplement for community review
          </a>
        </div>
      </section>
    </div>
  );
}

import {
  type FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { handbookPdfUrl, newsletterActionUrl, siteOrigin } from '../config';

const navItems = [
  { to: '/system', label: 'The System' },
  { to: '/books', label: 'Books' },
  { to: '/universes', label: 'Universes' },
  { to: '/app', label: 'App' },
  { to: '/creators', label: 'Creators' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
];

export function Layout() {
  const location = useLocation();
  const [newsletterStatus, setNewsletterStatus] = useState<
    'idle' | 'thanks'
  >('idle');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const orgJsonLd = useMemo(
    () =>
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Mango Dog Pty Ltd',
        legalName: 'Mango Dog Pty Ltd',
        description:
          'Australian publisher of Core6 RPG — a universal tabletop roleplaying system.',
        url: siteOrigin || undefined,
        areaServed: 'Worldwide',
        foundingLocation: 'Australia',
      }),
    [],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsNavOpen(false); // close drawer on route change
  }, [location.pathname]);

  // Lock body scroll when the mobile drawer is open so background doesn't scroll under it.
  useEffect(() => {
    if (isNavOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isNavOpen]);

  function onNewsletterSubmit(e: FormEvent<HTMLFormElement>) {
    // If a provider URL is configured, let the form submit normally to that endpoint.
    // Otherwise fall back to the local "thanks" state used in dev.
    if (!newsletterActionUrl) {
      e.preventDefault();
      setNewsletterStatus('thanks');
    }
    // When configured, the browser's native form submission handles the POST.
  }

  return (
    <div className="shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgJsonLd }}
      />

      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="brand" end>
            <img
              className="brand-mark"
              src="/logo.png"
              alt=""
              width={36}
              height={36}
            />
            <span className="brand-text">Core6 RPG</span>
          </NavLink>

          <nav
            id="primary-nav"
            className={`nav-main ${isNavOpen ? 'open' : ''}`}
            aria-label="Primary"
          >
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a
              className="btn btn--primary btn--small header-cta"
              href={handbookPdfUrl}
            >
              <Download size={14} />
              Free PDF
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-controls="primary-nav"
              aria-expanded={isNavOpen}
              aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsNavOpen(o => !o)}
            >
              {isNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop for the mobile drawer */}
      <div
        className={`nav-overlay ${isNavOpen ? 'open' : ''}`}
        aria-hidden="true"
        onClick={() => setIsNavOpen(false)}
      />

      <main className="main-outlet">
        <Outlet />
      </main>

      <footer className="footer-site">
        <div className="footer-site__inner">
          <section className="newsletter" id="newsletter">
            <h2>Stay in the loop</h2>
            <p>
              Adventures, Tactics, Battlegrounds, new settings, app updates,
              and the occasional behind-the-scenes designer note. About one email
              a month. No spam.
            </p>
            <form
              className="newsletter-form"
              onSubmit={onNewsletterSubmit}
              {...(newsletterActionUrl
                ? {
                    action: newsletterActionUrl,
                    method: 'post',
                    target: '_blank',
                  }
                : {})}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
              <button type="submit" className="btn btn--primary btn--small">
                Subscribe
              </button>
            </form>
            {newsletterStatus === 'thanks' && !newsletterActionUrl ? (
              <p style={{ marginTop: '1rem', color: 'var(--accent)' }}>
                Thanks — you&apos;re on the list.
              </p>
            ) : null}
          </section>

          <div className="footer-meta">
            <p>
              <strong>Core6™</strong> — Fun, Fast, Flexible. Made in Australia by
              Mango Dog Pty Ltd. © {new Date().getFullYear()} Mango Dog Pty Ltd.
              Core6™.
              <br />
              World of Artos™, Lumenos City™, and Mythic Bound™ are trademarks.
            </p>
            <nav className="footer-links" aria-label="Footer">
              <NavLink to="/system">The System</NavLink>
              <span aria-hidden="true">·</span>
              <NavLink to="/books">Books</NavLink>
              <span aria-hidden="true">·</span>
              <NavLink to="/universes">Universes</NavLink>
              <span aria-hidden="true">·</span>
              <NavLink to="/app">App</NavLink>
              <span aria-hidden="true">·</span>
              <NavLink to="/creators">Creators</NavLink>
              <span aria-hidden="true">·</span>
              <NavLink to="/about">About</NavLink>
              <span aria-hidden="true">·</span>
              <NavLink to="/faq">FAQ</NavLink>
              <span aria-hidden="true">·</span>
              <NavLink to="/creators#c6ogl">Open Game License</NavLink>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

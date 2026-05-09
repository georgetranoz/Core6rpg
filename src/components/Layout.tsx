import {
  type FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { siteOrigin } from '../config';

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
  }, [location.pathname]);

  function onNewsletterSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewsletterStatus('thanks');
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
            Core6 RPG
          </NavLink>
          <nav className="nav-main" aria-label="Primary">
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
        </div>
      </header>

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
            <form className="newsletter-form" onSubmit={onNewsletterSubmit}>
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
            {newsletterStatus === 'thanks' ? (
              <p style={{ marginTop: '1rem', color: 'var(--accent)' }}>
                Thanks — you&apos;re on the list.
              </p>
            ) : null}
          </section>

          <div className="footer-meta">
            <p>
              <strong>Core6™</strong> — Fun, Fast, Flexible. Made in Australia by
              Mango Dog Pty Ltd. © {new Date().getFullYear()} Mango Dog Pty Ltd.
              Core6™, World of Artos™, Lumenos City™, and Mythic Bound™ are
              trademarks.
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

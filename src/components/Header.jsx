import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#projets', label: 'Projets' },
    { href: '#parcours', label: 'Parcours' },
    { href: '#competences', label: 'Compétences' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          MS<span className="header__logo-dot">.</span>
        </a>

        <nav className="header__nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="#contact" className="header__cta btn btn-primary">
          Me contacter
        </a>

        <button
          className="header__burger"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="header__mobile-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Me contacter
          </a>
        </nav>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 22px 0;
          transition: background 0.25s ease, padding 0.25s ease, box-shadow 0.25s ease;
        }
        .header--scrolled {
          background: rgba(247, 243, 236, 0.92);
          backdrop-filter: blur(8px);
          padding: 14px 0;
          box-shadow: 0 1px 0 var(--ligne);
        }
        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header__logo {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--encre);
        }
        .header__logo-dot {
          color: var(--terracotta);
        }
        .header__nav {
          display: flex;
          gap: 36px;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .header__nav a {
          position: relative;
          color: var(--encre);
        }
        .header__nav a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: var(--terracotta);
          transition: width 0.2s ease;
        }
        .header__nav a:hover::after {
          width: 100%;
        }
        .header__cta {
          padding: 10px 20px;
          font-size: 0.88rem;
        }
        .header__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
        }
        .header__burger span {
          width: 24px;
          height: 2px;
          background: var(--encre);
        }
        .header__mobile-nav {
          display: none;
        }
        @media (max-width: 860px) {
          .header__nav, .header__cta {
            display: none;
          }
          .header__burger {
            display: flex;
          }
          .header__mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 24px 20px 32px;
            background: var(--sable);
            border-top: 1px solid var(--ligne);
            font-weight: 600;
          }
          .header__mobile-nav .btn {
            margin-top: 8px;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}

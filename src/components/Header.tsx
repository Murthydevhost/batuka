import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

const companyLogo = new URL('../../assets/companyLogo.png', import.meta.url).href;

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#footer' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (hash: string) => {
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        
        <a href="#home" className="site-header__brand">
          <img
            src={companyLogo}
            alt="Batuka Properties"
            className="site-header__logo"
          />
        </a>

        <nav className="site-header__nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollToSection(link.href)}
              className={`site-header__link ${scrolled ? 'site-header__link--scrolled' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold site-header__cta"
        >
          Enquire Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`site-header__toggle ${scrolled ? 'site-header__toggle--scrolled' : ''}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__panel">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollToSection(link.href)}
              className="mobile-menu__link"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mobile-menu__cta"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </header>
  );
}

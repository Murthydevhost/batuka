import { useEffect, useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white transition-transform duration-300 group-hover:scale-110 ${
              scrolled ? '' : 'bg-white/15 backdrop-blur-sm'
            }`}
          >
            <Home size={20} />
          </span>
          <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-brand-green' : 'text-white'}`}>
            Batuka<span className="text-brand-gold"> Properties</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-brand-gold ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-gold"
        >
          Enquire Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-green' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x py-4 flex flex-col gap-1 bg-white/98 backdrop-blur-md mt-3 rounded-2xl shadow-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-brand-light hover:text-brand-green transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-2"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </header>
  );
}

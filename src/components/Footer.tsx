import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const PROJECT_LINKS = [
  { label: 'Batuka Greens', href: '#projects' },
  { label: 'Batuka Villas — Serenity', href: '#projects' },
  { label: 'Batuka Lakeview', href: '#projects' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a2e21] text-white/80 pt-16 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white">
                <Home size={20} />
              </span>
              <span className="font-bold text-xl text-white">
                Batuka<span className="text-brand-gold"> Properties</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-5">
              Building premium plots & luxury villas with trust, transparency, and
              timeless quality.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-brand-gold hover:text-brand-green-dark transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 hover:text-brand-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-semibold mb-5">Our Projects</h4>
            <ul className="space-y-3">
              {PROJECT_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 hover:text-brand-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Phone size={16} className="text-brand-gold mt-0.5" />
                <a href="tel:+919844829019" className="hover:text-brand-gold transition-colors">+91 91136 74869</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail size={16} className="text-brand-gold mt-0.5" />
                <a href="mailto:contact@batukaproperties.com" className="hover:text-brand-gold transition-colors break-all">contact@batukaproperties.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="text-brand-gold mt-0.5" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6">
              Enquire Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Batuka Properties. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Crafted with trust & transparency.
          </p>
        </div>
      </div>
    </footer>
  );
}

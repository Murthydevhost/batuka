import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#footer' },
];

const PROJECT_LINKS = [
  { label: 'Batuka HSR Layout', href: '#projects' },
  { label: 'Batuka Sadashiv Nagar', href: '#projects' },
  { label: 'Batuka Basaveshwaranagar', href: '#projects' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0B322D] text-white/80 pt-16 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={new URL('../../assets/companyLogo.png', import.meta.url).href} alt="Batuka Properties" className="h-24 w-auto" />
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
                <a href="tel:+919108809019" className="hover:text-brand-gold transition-colors">+91 9108809019</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail size={16} className="text-brand-gold mt-0.5" />
                <a href="mailto:info@batuka91.in" className="hover:text-brand-gold transition-colors break-all">info@batuka91.in</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="text-brand-gold mt-0.5" />
                <span>$14/1(Old #139/B,) 10th Main, Sadashivanagar, RMV Extension, Aramane Nagar,Bengaluru-560080</span>
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

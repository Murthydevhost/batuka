import { MapPin, ArrowRight, Building2 } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-brand-logo">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/90 via-brand-green-dark/75 to-brand-green-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Floating accent */}
      <div className="absolute top-1/4 right-12 hidden lg:block animate-float-slow">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 w-64 shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold text-brand-green-dark">
              <Building2 size={20} />
            </span>
            <p className="text-white font-semibold text-sm">Trusted Since 2024</p>
          </div>
          <p className="text-white/80 text-xs leading-relaxed">
            Premium plots & luxury villas crafted with precision and trust.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-x relative z-10 pt-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <MapPin size={14} className="text-brand-gold" />
            <span className="text-white/90 text-xs font-medium tracking-wide">
              PREMIUM REAL ESTATE DEVELOPER
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 animate-fade-up">
            Building Premium Plots
            <br />
            & <span className="text-brand-gold">Luxury Villas</span>
          </h1>

          <p className="text-lg text-white/85 mb-8 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            At Batuka Properties, we turn land into legacy. Thoughtfully planned
            plots and exquisitely crafted villas — designed for a life of
            distinction.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Book a Site Visit
              <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg animate-fade-up" style={{ animationDelay: '0.45s', opacity: 0 }}>
            {[
              { value: '5+', label: 'Projects Delivered' },
              { value: '100+', label: 'Happy Families' },
              { value: '50+', label: 'Acres Developed' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-brand-gold">{s.value}</p>
                <p className="text-white/70 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

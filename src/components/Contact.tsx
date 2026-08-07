import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_LINK } from '@/lib/constants';

const CONTACT_INFO = [
  { icon: Phone, label: 'Call Us', value: '919108809019', href: 'tel:+919108809019' },
  { icon: Mail, label: 'Email Us', value: 'info@batuka91.in', href: 'mailto:info@batuka91.in' },
  { icon: MapPin, label: 'Visit Us', value: 'Bangalore, Karnataka, India', href: '#contact' },
];

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contact" ref={ref} className="section-y bg-brand-green-dark relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-dark opacity-95" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: info */}
          <div className={`text-white transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-brand-gold font-semibold text-sm tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Let's Build Your Future, Together
            </h2>
            <p className="text-white/80 mb-10 max-w-md leading-relaxed">
              Have a question about our projects or want to schedule a site visit?
              Reach out — our team typically responds within a few hours.
            </p>

            <div className="space-y-5">
              {CONTACT_INFO.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 group"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green-dark transition-all duration-300">
                    <c.icon size={22} />
                  </span>
                  <div>
                    <p className="text-white/60 text-xs tracking-wide">{c.label}</p>
                    <p className="text-white font-medium">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-[#25D366] text-white font-semibold rounded-full px-6 py-3.5 hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          {/* Right: form */}
         

        </div>
      </div>
    </section>
  );
}

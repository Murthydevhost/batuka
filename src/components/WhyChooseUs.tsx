import { ShieldCheck, BadgeCheck, FileText, HeadphonesIcon, MapPinned, TrendingUp } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Clear Legal Titles',
    text: 'Every plot comes with verified documentation and clean legal titles — no surprises, ever.',
  },
  {
    icon: MapPinned,
    title: 'Prime Locations',
    text: 'Carefully selected sites in high-growth corridors with strong appreciation potential.',
  },
  {
    icon: BadgeCheck,
    title: 'Premium Quality',
    text: 'From roads to amenities, every detail is built to the highest standards.',
  },
  {
    icon: FileText,
    title: 'Transparent Pricing',
    text: 'Honest, all-inclusive pricing with no hidden charges or last-minute additions.',
  },
  {
    icon: TrendingUp,
    title: 'High ROI',
    text: 'Investments in Batuka projects have consistently delivered strong returns.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Lifetime Support',
    text: 'Our relationship doesnt end at the sale — were with you for the long haul.',
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="why-us" className="section-y bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-light rounded-full opacity-60" />
      <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-brand-light rounded-full opacity-50" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-gold font-semibold text-sm tracking-widest mb-3">Why Choose Us</p>
          <h2 className="section-title">The Batuka Advantage</h2>
          <p className="section-subtitle">
            Six reasons families and investors trust Batuka Properties with their
            most important purchase.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-green/10 transition-all duration-500 hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500 mb-5">
                <f.icon size={26} />
              </div>
              <h3 className="font-bold text-brand-green text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

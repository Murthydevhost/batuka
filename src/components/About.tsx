import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const VALUES = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To deliver premium plots and villas with uncompromising quality, transparency, and trust.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted real estate partner, transforming landscapes into thriving communities.',
  },
  {
    icon: Heart,
    title: 'Our Promise',
    text: 'Every project is crafted with precision, backed by clear documentation and lifelong support.',
  },
];

const HIGHLIGHTS = [
  'Clear titles & legal documentation',
  'Prime locations with high growth potential',
  'Gated communities with modern amenities',
  'Transparent pricing, no hidden costs',
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="section-y bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div ref={ref} className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Batuka Properties development"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-6 w-56 border border-gray-100">
              <p className="text-4xl font-bold text-brand-green">100%</p>
              <p className="text-gray-500 text-sm mt-1">Transparent dealings & clear titles</p>
            </div>
            <div className="absolute -top-6 -left-4 lg:-left-6 bg-brand-gold rounded-2xl shadow-xl px-5 py-4">
              <p className="text-brand-green-dark font-bold text-sm">Since 2024</p>
            </div>
          </div>

          {/* Text side */}
          <div className={`transition-all duration-1000 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-brand-gold font-semibold text-sm tracking-widest mb-3">About Batuka Properties</p>
            <h2 className="section-title">Crafting Spaces, Building Trust</h2>
            <p className="section-subtitle mb-8">
              Batuka Properties was founded with a singular vision: to redefine real
              estate by delivering premium plots and luxury villas that stand the
              test of time. We blend thoughtful planning, quality construction,
              and unwavering transparency into every project we touch.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="bg-brand-light rounded-2xl p-5 hover:shadow-lg hover:shadow-brand-green/10 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-brand-green/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green text-white mb-3">
                    <v.icon size={20} />
                  </span>
                  <h3 className="font-semibold text-brand-green text-sm mb-1">{v.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

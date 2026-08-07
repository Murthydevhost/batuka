import { useState } from 'react';
import { MapPin, Maximize, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_LINK } from '@/lib/constants';

type Project = {
  name: string;
  location: string;
  type: string;
  area: string;
  image: string;
  features: string[];
  status: string;
};

const PROJECTS: Project[] = [
  {
    name: 'Batuka HSR Layout',
    location: 'HSR Layout, Bangalore',
    type: 'Premium Residential Plots',
    area: '1200 - 2400 sq.ft',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Gated community', 'Underground utilities', 'Tree-lined avenues'],
    status: 'Selling Fast',
  },
  {
    name: 'Batuka Sadashiv Nagar',
    location: 'Sadashiv Nagar, Bangalore',
    type: 'Luxury Villas',
    area: '3 & 4 BHK',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Private garden', 'Modular kitchen', 'Premium fittings'],
    status: 'New Launch',
  },
  {
    name: 'Batuka Basaveshwaranagar',
    location: 'Basaveshwaranagar, Bangalore',
    type: 'Lakefront Plots',
    area: '1500 - 3000 sq.ft',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Lakeside views', 'Clubhouse', 'Jogging trails'],
    status: 'Premium',
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="projects" className="section-y bg-brand-light">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-gold font-semibold text-sm tracking-widest mb-3">Our Upcoming Projects</p>
          <h2 className="section-title">Explore Our Developments</h2>
          <p className="section-subtitle">
            Each Batuka project is a testament to thoughtful planning, premium
            locations, and lasting value.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-12 gap-8">
          {/* Project list */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PROJECTS.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className={`text-left rounded-2xl p-5 transition-all duration-300 border ${
                  active === i
                    ? 'bg-white border-brand-green shadow-xl shadow-brand-green/10 scale-[1.02]'
                    : 'bg-white/60 border-transparent hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-brand-gold tracking-wide">{p.type}</span>
                    <h3 className="text-lg font-bold text-brand-green mt-0.5">{p.name}</h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                      <MapPin size={13} /> {p.location}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className={`transition-all ${active === i ? 'text-brand-green rotate-0' : 'text-gray-300 -rotate-45'}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Active project detail */}
          <div className={`lg:col-span-7 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={PROJECTS[active].image}
                alt={PROJECTS[active].name}
                className="w-full h-[380px] md:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <span className="absolute top-5 left-5 bg-brand-gold text-brand-green-dark text-xs font-bold px-3 py-1.5 rounded-full">
                {PROJECTS[active].status}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{PROJECTS[active].name}</h3>
                <p className="text-white/80 text-sm flex items-center gap-1.5 mb-4">
                  <MapPin size={15} /> {PROJECTS[active].location}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <span className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs">
                    <Maximize size={14} /> {PROJECTS[active].area}
                  </span>
                  {PROJECTS[active].features.map((f) => (
                    <span key={f} className="flex items-center gap-1.5 text-xs text-white/90">
                      <CheckCircle2 size={14} className="text-brand-gold" /> {f}
                    </span>
                  ))}
                </div>

                <a
                  href="mailto:info@batuka91.in" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Enquire About This Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

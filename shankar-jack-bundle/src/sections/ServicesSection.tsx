import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  { id: '01', title: 'Product Management', desc: 'End-to-end product strategy, user research, and roadmap execution.' },
  { id: '02', title: 'Web Development', desc: 'High-performance React applications with stunning visual fidelity.' },
  { id: '03', title: 'UX/UI Design', desc: 'Immersive, user-centric interfaces focused on emotion and utility.' },
  { id: '04', title: 'Interaction Design', desc: 'Cinematic motion and micro-interactions that bring brands to life.' }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-40 bg-black">
      <div className="container mx-auto px-6">
        <FadeIn className="mb-20">
          <h2 className="text-5xl md:text-8xl font-heading italic">Capabilities</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {SERVICES.map((service, i) => (
            <div key={service.id} className="bg-black p-12 group hover:bg-neutral-900 transition-colors">
              <FadeIn delay={0.1 * i}>
                <span className="text-accent text-sm font-bold block mb-4">{service.id}</span>
                <h3 className="text-4xl font-heading italic mb-6">{service.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg">{service.desc}</p>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

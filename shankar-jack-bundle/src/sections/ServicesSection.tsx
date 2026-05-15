
import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  {
    id: "01",
    title: "Web Development",
    description: "Building high-performance, scalable web applications with a focus on speed, security, and modern architecture."
  },
  {
    id: "02",
    title: "Product Building",
    description: "End-to-end product engineering from concept to launch, ensuring user-centric features and robust technical foundations."
  },
  {
    id: "03",
    title: "Animated Experiences",
    description: "High-end, immersive websites featuring fluid motion design and interactive storytelling that captivates audiences."
  },
  {
    id: "04",
    title: "Shopify & E-commerce",
    description: "Bespoke e-commerce solutions and custom Shopify themes designed to drive conversions and elevate brand identity."
  },
  {
    id: "05",
    title: "UI/UX Implementation",
    description: "Translating complex design visions into pixel-perfect, responsive reality with a deep focus on user experience."
  }
];

export const ServicesSection = () => {
  return (
    <section id="capabilities" className="relative w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn y={40}>
          <h2 className="text-dark font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 tracking-tight leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Capabilities
          </h2>
        </FadeIn>

        <div className="flex flex-col max-w-5xl mx-auto">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} y={30} className="border-t border-dark/15 last:border-b">
              <div className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 gap-6 md:gap-10">
                <span className="font-black text-dark leading-none tracking-tighter" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                  {service.id}
                </span>
                
                <div className="flex flex-col gap-2 md:gap-4 flex-grow">
                  <h3 className="font-medium uppercase text-dark" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                    {service.title}
                  </h3>
                  <p className="font-light leading-relaxed text-dark opacity-60 max-w-2xl" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

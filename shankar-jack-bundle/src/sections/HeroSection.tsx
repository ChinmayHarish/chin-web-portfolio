import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-start pt-32 sm:pt-40 md:pt-48 overflow-hidden px-6">
      <div className="container mx-auto relative z-20 flex flex-col items-center">
        <FadeIn delay={0.2} y={30} className="w-full flex justify-center text-center">
          <h1 
            className="hero-heading font-black uppercase tracking-tighter leading-[0.85] text-[#D7E2EA]"
            style={{ fontSize: 'clamp(4rem, 18vw, 240px)' }}
          >
            SHANKAR <br /> JACK
          </h1>
        </FadeIn>

        <div className="mt-6 sm:mt-12 md:mt-20 w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center sm:items-end gap-10 sm:gap-0 px-4 sm:px-10">
          <FadeIn delay={0.4} y={20} className="text-center sm:text-left">
            <p 
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[280px] sm:max-w-[220px] md:max-w-[260px] text-xs sm:text-sm md:text-base"
              style={{ fontSize: 'clamp(0.7rem, 1.3vw, 1.4rem)' }}
            >
              a product manager & web creator driven by building user-centric products and striking digital experiences
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20} className="w-full sm:w-auto flex justify-center sm:block">
            <ContactButton href="#contact" />
          </FadeIn>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center sm:items-end justify-center pointer-events-none mt-10 sm:mt-0">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="z-10 w-[85vw] max-w-[350px] sm:max-w-none sm:w-[420px] md:w-[520px] lg:w-[650px] mb-0 pointer-events-auto"
        >
          <FadeIn delay={0.6} y={30}>
            <img
              src="/chinmay-hero.png"
              alt="Hero portrait"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </FadeIn>
        </Magnet>
      </div>
    </section>
  );
};

export default HeroSection;


import Navbar from './Navbar';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';

export const HeroSection = () => {
  return (
    <section className="h-[100dvh] min-h-[600px] flex flex-col overflow-visible relative bg-dark">
      <div className="flex flex-col h-full px-5 sm:px-8 md:px-10 relative z-20">
        <FadeIn delay={0} y={-20} className="pt-4 sm:pt-0">
          <Navbar />
        </FadeIn>

        <div className="flex-1 flex flex-col justify-start pt-[8vh] sm:pt-16 md:pt-20 items-center z-10">
          <FadeIn delay={0.15} y={40} className="overflow-hidden w-full">
            <h1
              className="hero-heading font-black uppercase leading-none tracking-tight whitespace-nowrap w-full text-center text-[10vw] sm:text-[9vw] md:text-[10vw] lg:text-[11vw]"
            >
              Hi, i&apos;m CHINMAY
            </h1>
          </FadeIn>
        </div>

        <div className="flex flex-col sm:flex-row justify-end sm:justify-between items-center sm:items-end pb-8 sm:pb-12 md:pb-16 gap-6 sm:gap-0 relative z-30">
          <FadeIn delay={0.35} y={20} className="w-full sm:w-auto flex justify-center sm:block text-center sm:text-left">
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

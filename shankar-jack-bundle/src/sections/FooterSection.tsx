
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative w-full bg-dark pt-20 pb-10 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Large "Get in touch" heading */}
        <FadeIn y={40} className="mb-12 md:mb-20 text-center">
          <h2 className="text-accent font-black uppercase tracking-tighter leading-none" style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}>
            Let&apos;s Build <br /> Together
          </h2>
        </FadeIn>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-20 md:mb-32">
          <FadeIn delay={0.2} y={20}>
            <ContactButton 
              href="mailto:chinmayharish03@gmail.com"
              label="Email Me"
            />
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <ContactButton 
              href="tel:9449124052"
              label="Call Me"
            />
          </FadeIn>
        </div>

        {/* Bottom Credits */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-10 border-t border-accent/10 gap-6">
          <FadeIn delay={0.4} className="text-accent/40 text-xs md:text-sm uppercase tracking-widest font-medium">
            © {currentYear} Chinmay — All Rights Reserved
          </FadeIn>
          
          <FadeIn delay={0.5} className="flex gap-8">
            <a 
              href="https://www.linkedin.com/in/chinmay-harish-03106t/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent/40 hover:text-accent transition-colors text-xs md:text-sm uppercase tracking-widest font-medium"
            >
              LinkedIn
            </a>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
};

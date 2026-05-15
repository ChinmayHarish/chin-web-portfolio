import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-black pt-40 pb-20 px-6">
      <div className="container mx-auto border-t border-white/10 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xl">
            <FadeIn delay={0.2}>
              <h2 className="text-6xl md:text-8xl font-heading italic mb-10 leading-none">Let's build something exceptional.</h2>
              <ContactButton />
            </FadeIn>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <FadeIn delay={0.4}>
              <h4 className="text-white/40 uppercase tracking-widest text-xs mb-6">Socials</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">X (Twitter)</a></li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.5}>
              <h4 className="text-white/40 uppercase tracking-widest text-xs mb-6">Location</h4>
              <p>Bangalore, India <br /> Available Worldwide</p>
            </FadeIn>
          </div>
        </div>
        <div className="mt-40 flex justify-between items-center text-white/30 text-xs uppercase tracking-widest">
          <p>© 2026 Shankar Jack</p>
          <p>Created by Shankar</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

import { useEffect, useState } from 'react';
import { FadeIn } from '../components/FadeIn';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <FadeIn delay={0.1} y={-20}>
          <a href="/" className="text-2xl font-heading italic">SJ</a>
        </FadeIn>
        <div className="flex gap-8">
          {['About', 'Services', 'Projects', 'Contact'].map((item, i) => (
            <FadeIn key={item} delay={0.2 + i * 0.1} y={-20}>
              <a href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
                {item}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

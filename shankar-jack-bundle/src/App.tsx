import { useState, useEffect } from 'react';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import MarqueeSection from './sections/MarqueeSection';
import ProjectsSection from './sections/ProjectsSection';
import FooterSection from './sections/FooterSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-black font-body overflow-x-hidden">
      {isLoading ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
          <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <main className="relative">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <MarqueeSection />
          <ProjectsSection />
          <FooterSection />
        </main>
      )}
    </div>
  );
}

export default App;

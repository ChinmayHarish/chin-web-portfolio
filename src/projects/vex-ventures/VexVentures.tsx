import React, { useState, useEffect } from 'react';
import { FadingVideo } from '../../components/shared/FadingVideo';

const AnimatedHeading = ({ text, delay = 200 }: { text: string, delay?: number }) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const lines = text.split('\n');
  let charCount = 0;

  return (
    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 tracking-[-0.04em] leading-[1.1]">
      {lines.map((line, lineIdx) => (
        <React.Fragment key={lineIdx}>
          <span className="block overflow-hidden">
            {line.split('').map((char, charIdx) => {
              const currentDelay = charCount * 30;
              charCount++;
              return (
                <span
                  key={charIdx}
                  className="inline-block transition-all duration-500 ease-out"
                  style={{
                    opacity: start ? 1 : 0,
                    transform: start ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDelay: `${currentDelay}ms`,
                    whiteSpace: char === ' ' ? 'pre' : 'normal'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </span>
        </React.Fragment>
      ))}
    </h2>
  );
};

const FadeIn = ({ children, delay = 0, duration = 1000 }: { children: React.ReactNode, delay?: number, duration?: number }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className="transition-opacity ease-out"
      style={{ 
        opacity: visible ? 1 : 0, 
        transitionDuration: `${duration}ms` 
      }}
    >
      {children}
    </div>
  );
};

export const VexVentures = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white/30 overflow-hidden relative">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Navbar */}
      <header className="relative z-20 px-6 md:px-12 lg:px-16 pt-6 w-full">
        <nav className="liquid-glass-dark rounded-xl px-4 py-2 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">VEX</div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Story', 'Investing', 'Building', 'Advisory'].map(item => (
              <a key={item} href="#" className="text-sm text-white/80 hover:text-gray-300 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            Start a Chat
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 min-h-[calc(100vh-100px)]">
        <div className="lg:grid lg:grid-cols-2 lg:items-end">
          {/* Left Column */}
          <div className="max-w-2xl">
            <AnimatedHeading text={"Shaping tomorrow\nwith vision and action."} />
            
            <FadeIn delay={800}>
              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-lg">
                We back visionaries and craft ventures that define what comes next.
              </p>
            </FadeIn>

            <FadeIn delay={1200}>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Start a Chat
                </button>
                <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all">
                  Explore Now
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="mt-12 lg:mt-0 flex items-end justify-start lg:justify-end">
            <FadeIn delay={1400}>
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <span className="text-lg md:text-xl lg:text-2xl font-light tracking-wide text-white/90">
                  Investing. Building. Advisory.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VexVentures;

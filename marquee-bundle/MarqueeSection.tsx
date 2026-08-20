import { useEffect, useRef, useState } from 'react';

interface ProjectMedia {
  src?: string;
  mp4?: string;
  name?: string;
  url?: string;
}

const IMAGES: ProjectMedia[] = [
  { src: "https://image.mux.com/QXSAAL9UTEAH3SoaMLIkSSb01m02TgV1qtSWjzPNO1pFY/animated.webp?width=640&fps=15", name: "Equilibrium", url: "https://equilibrium-liquid-glass.vercel.app" },
  { src: "/codenest.gif", name: "CodeNest", url: "https://codenest-education-hero.netlify.app" },
  { src: "/vex.gif", name: "VEX Ventures", url: "https://vex-ventures.vercel.app" },
  { src: "/mindloop.gif", name: "Mindloop", url: "https://mindloop-cinematic-landing-page.netlify.app" },
  { src: "/halo-usd.gif", name: "USD Halo", url: "https://usd-halo.vercel.app" },
  { src: "/skyelite.gif", name: "Sky Elite", url: "https://sky-elite-premium-jet.netlify.app" },
  { src: "/prisma.gif", name: "Prisma", url: "https://prisma-studio-landing-page.netlify.app" },
  { src: "/orbis-nft.gif", name: "Orbis NFT", url: "https://orbis-nft-cinematic-landing.netlify.app" }
];

const Row1 = IMAGES.slice(0, 4);
const Row2 = IMAGES.slice(4);

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderRow = (images: ProjectMedia[], direction: 'right' | 'left') => {
    const tripledImages = [...images, ...images, ...images];
    const baseOffset = direction === 'right' ? (offset - 200) : -(offset - 200);

    return (
      <div 
        className="flex gap-8 overflow-visible whitespace-nowrap hover:[&>a]:opacity-80 transition-opacity"
        style={{ 
          transform: `translateX(${baseOffset}px)`,
          willChange: 'transform',
          transition: 'transform 0.1s linear'
        }}
      >
        {tripledImages.map((media, idx) => (
          <a 
            key={idx} 
            href={media.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative block cursor-pointer overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02] flex-shrink-0"
            style={{ width: 'calc((100vw - 120px) / 3.2)' }}
          >
            {media.mp4 ? (
              <video
                src={media.mp4}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[16/9] rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            ) : (
              <img
                src={media.src}
                alt={media.name ?? `Work ${idx + 1}`}
                className="w-full aspect-[16/9] rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            )}
          </a>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="bg-dark pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-8">
      {renderRow(Row1, 'right')}
      {renderRow(Row2, 'left')}
    </section>
  );
};

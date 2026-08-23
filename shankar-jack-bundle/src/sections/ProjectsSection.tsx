import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

const PROJECTS = [
  {
    id: "01",
    name: "Capital Epitome",
    category: "Real Estate Experience",
    url: "https://capitalepitome.com/",
    description: "A luxury residential digital experience showcasing premium 2 BHK apartments in Mangalore. Designed with elegance and sophistication to reflect the high-end architectural vision.",
    images: {
      col1_1: "/capital-epitome-1.png",
      col1_2: "/capital-epitome-2.png"
    }
  },
  {
    id: "02",
    name: "GEECEE Production",
    category: "Video Production House",
    url: "https://geecee-productions.vercel.app/",
    description: "A bold, dynamic portfolio for a video production house crafting commercial films, brand stories, and social-first content designed from concept to final cut to make attention-starved audiences look twice.",
    images: {
      col1_1: "/geecee-3.png",
      col1_2: "/geecee-2.png"
    }
  },
  {
    id: "03",
    name: "Strata",
    category: "Productivity Workspace",
    url: "https://strata-workspace.vercel.app/",
    description: "A clean, fast-paced workspace built for teams tired of cluttered project boards and endless status meetings, designed to make managing tasks and shipping work feel effortless again.",
    images: {
      col1_1: "/strata-1.png",
      col1_2: "/strata-2.png"
    }
  },
  {
    id: "04",
    name: "Wind Seekers",
    category: "Luxury Maritime Flagship",
    url: "https://wind-seekers-yacht-club.vercel.app/",
    description: "A bespoke digital flagship for an elite maritime club, featuring hardware-accelerated video streaming, Lenis momentum physics scrolling, GSAP staggered multi-layer menus, and a refined glassmorphic design system.",
    images: {
      col1_1: "/yacht-1.jpg",
      col1_2: "/yacht-2.jpg"
    }
  }
];

export const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" ref={container} className="relative bg-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-40 px-5 sm:px-8 md:px-10 z-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <FadeIn y={40} className="mb-16 sm:mb-20 md:mb-24">
          <h2 className="hero-heading text-center font-black uppercase tracking-tight leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            My Works
          </h2>
        </FadeIn>

        <div className="w-full flex flex-col items-center gap-20 sm:gap-32 md:gap-40">
          {PROJECTS.map((project, index) => {
            return (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                totalCards={PROJECTS.length}
                progress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: any;
  index: number;
  totalCards: number;
  progress: any;
}

const ProjectCard = ({ project, index, totalCards, progress }: ProjectCardProps) => {
  // Scaling effect starts when the card hits its sticky position
  const start = index * (1 / totalCards);
  const targetScale = 1 - (totalCards - index) * 0.05;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  
  // Sticky offsets: index * 40px to show stacking
  const topOffset = 100 + (index * 40);

  return (
    <div 
      className="sticky w-full min-h-[500px] sm:min-h-[600px] h-[85vh] sm:h-[80vh] flex flex-col items-center"
      style={{ 
        top: topOffset,
        zIndex: index + 1,
      }}
    >
      <motion.div 
        style={{ scale }}
        className="w-full bg-dark border-2 border-accent rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 overflow-y-auto sm:overflow-hidden shadow-2xl h-full scrollbar-hide"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="flex items-center gap-6 sm:gap-10">
            <span className="font-black text-accent leading-none tracking-tighter" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="text-accent/60 uppercase tracking-widest text-xs sm:text-sm font-medium">
                {project.category}
              </span>
              <h3 className="text-accent font-medium uppercase" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}>
                {project.name}
              </h3>
            </div>
          </div>
          {project.url ? (
            <LiveProjectButton href={project.url} />
          ) : (
            <span className="text-accent/40 text-xs sm:text-sm uppercase tracking-widest font-medium py-3">
              Case Study
            </span>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 h-full overflow-hidden pb-4">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full md:w-[40%] h-full">
            <img 
              src={project.images.col1_1} 
              alt={`${project.name} - ${project.category} visual 1`} 
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: '40%' }}
            />
            <img 
              src={project.images.col1_2} 
              alt={`${project.name} - ${project.category} visual 2`} 
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover flex-grow"
              style={{ height: '60%' }}
            />
          </div>
          <div className="w-full md:w-[60%] h-full flex items-center justify-center p-6 md:p-12 lg:p-16">
            <p className="text-accent font-light leading-relaxed uppercase tracking-wider text-center md:text-left" style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}>
              {project.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

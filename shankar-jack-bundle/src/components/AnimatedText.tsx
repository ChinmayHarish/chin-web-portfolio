import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={`${className} relative flex flex-wrap justify-center`}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = (index + 1) / characters.length;
        
        return (
          <Character key={index} progress={scrollYProgress} range={[start, end]}>
            {char}
          </Character>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Character = ({ children, progress, range }: CharacterProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  
  return (
    <span className="relative">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
      {/* If character is space, add a bit more space to ensure wrapping works correctly */}
      {children === " " && "\u00A0"}
    </span>
  );
};

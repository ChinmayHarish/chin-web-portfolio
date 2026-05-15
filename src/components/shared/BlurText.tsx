import React from 'react';
import { motion } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, className = "", delayOffset = 0 }) => {
  const words = text.split(' ');

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '0.1em'
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: 50 },
            visible: {
              filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
              opacity: [0, 0.5, 1],
              y: [50, -5, 0],
              transition: {
                duration: 0.7,
                times: [0, 0.5, 1],
                ease: "easeOut",
                delay: delayOffset + (i * 100) / 1000
              }
            }
          }}
          style={{
            display: 'inline-block',
            marginRight: '0.28em' // Not non-breaking space as letter-spacing -4px eats nbsp
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

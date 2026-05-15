
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-dark overflow-hidden">
      {/* Decorative 3D Elements */}
      {/* Top Left: Moon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" className="w-full h-auto" />
        </FadeIn>
      </div>

      {/* Bottom Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" className="w-full h-auto" />
        </FadeIn>
      </div>

      {/* Top Right: Lego */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" className="w-full h-auto" />
        </FadeIn>
      </div>

      {/* Bottom Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" className="w-full h-auto" />
        </FadeIn>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-4xl text-center">
        <FadeIn y={40} duration={0.8}>
          <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText 
            text="I am Chinmay, a product-driven web creator who excels at the intersection of technology and strategy. With a background in Product Management, I specialize in building user-centric SaaS solutions, high-performance animated sites, and conversion-focused Shopify storefronts. Let's build something incredible together!"
            className="text-accent font-medium leading-relaxed max-w-[560px]"
          />
          
          <FadeIn delay={0.4}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

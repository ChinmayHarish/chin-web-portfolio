import { FadeIn } from '../components/FadeIn';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <FadeIn delay={0.2} x={-30}>
              <h2 className="text-5xl md:text-7xl font-heading italic mb-8">Crafting Digital Excellence</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-6">
                I specialize in building high-end, immersive digital experiences that blend aesthetic perfection with technical performance.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-accent text-lg font-bold mb-2">Strategy</h4>
                  <p className="text-white/60">Product vision and roadmap planning.</p>
                </div>
                <div>
                  <h4 className="text-accent text-lg font-bold mb-2">Design</h4>
                  <p className="text-white/60">Pixel-perfect UI and motion design.</p>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2 relative">
            <FadeIn delay={0.4} x={30}>
              <div className="aspect-square bg-neutral-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from 'framer-motion';
import { FadingVideo } from '../../components/shared/FadingVideo';
import { BlurText } from '../../components/shared/BlurText';
import { ArrowUpRight, Play, Clock, Globe, Image as ImageIcon, Film, Lightbulb } from 'lucide-react';

export const AetherisVoyage = () => {
  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-white/30">
      {/* Navbar */}
      <nav className="fixed top-4 px-8 lg:px-16 z-50 w-full flex justify-between items-center pointer-events-none">
        {/* Left */}
        <div className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center pointer-events-auto">
          <span className="font-heading italic text-2xl lowercase">a</span>
        </div>

        {/* Center */}
        <div className="hidden desktop-nav lg:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1 pointer-events-auto">
          {['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch'].map((item) => (
            <a key={item} href="#" className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 ml-2 whitespace-nowrap hover:bg-white/90 transition-colors">
            Claim a Spot <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        {/* Right Spacer */}
        <div className="w-12 h-12 invisible" />
      </nav>

      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Video */}
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
          style={{ width: "120%", height: "120%" }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 px-4">
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: "easeOut", duration: 0.8 }}
            className="liquid-glass rounded-full px-1 py-1 pr-4 flex items-center gap-3 mb-6"
          >
            <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">New</span>
            <span className="text-sm text-white/90">Maiden Crewed Voyage to Mars Arrives 2026</span>
          </motion.div>

          <BlurText 
            text="Venture Past Our Sky Across the Universe"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl text-center tracking-[-4px]"
            delayOffset={0.6}
          />

          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ease: "easeOut", duration: 0.8 }}
            className="mt-6 text-sm md:text-base text-white/80 max-w-2xl text-center font-light leading-tight"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>

          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 1.1, ease: "easeOut", duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
          >
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
              Start Your Voyage <ArrowUpRight className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 text-sm font-medium hover:text-white/80 transition-colors">
              View Liftoff <Play className="w-4 h-4 fill-current" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 1.3, ease: "easeOut", duration: 0.8 }}
            className="flex flex-wrap items-stretch justify-center gap-4 mt-12"
          >
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col justify-between">
              <Clock className="w-7 h-7 mb-8 text-white/90" strokeWidth={1.5} />
              <div>
                <div className="font-heading italic text-4xl tracking-[-1px] leading-none">34.5 Min</div>
                <div className="text-xs text-white/80 font-light mt-2">Average Videos Watch Time</div>
              </div>
            </div>
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col justify-between">
              <Globe className="w-7 h-7 mb-8 text-white/90" strokeWidth={1.5} />
              <div>
                <div className="font-heading italic text-4xl tracking-[-1px] leading-none">2.8B+</div>
                <div className="text-xs text-white/80 font-light mt-2">Users Across the Globe</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.4, ease: "easeOut", duration: 0.8 }}
          className="relative z-10 flex flex-col items-center gap-6 pb-12 mt-16"
        >
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white/90">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 font-heading italic text-2xl md:text-3xl tracking-tight text-white/80">
            <span>Aeon</span>
            <span>Vela</span>
            <span>Apex</span>
            <span>Orbit</span>
            <span>Zeno</span>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Capabilities */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 px-6 md:px-16 lg:px-20 pt-24 pb-16 flex flex-col min-h-screen">
          <div className="mb-auto">
            <p className="text-sm text-white/80 mb-6 font-light">// Capabilities</p>
            <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
              Production<br />evolved
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {/* Card 1 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0">
                  <ImageIcon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {['Natural Context', 'Photo Realism', 'Infinite Settings', 'Eco-Vibe'].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <div className="mt-6">
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none">AI Scenery</h3>
                <p className="mt-3 text-sm text-white/80 font-light leading-relaxed max-w-[32ch]">
                  AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0">
                  <Film className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {['Scale Fast', 'Visual Consistency', 'Time Saver', 'Ready to Post'].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <div className="mt-6">
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none">Batch Production</h3>
                <p className="mt-3 text-sm text-white/80 font-light leading-relaxed max-w-[32ch]">
                  Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {['Ray Tracing', 'Physical Shadows', 'Studio Quality', 'Sunlight Sync'].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <div className="mt-6">
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none">Smart Lighting</h3>
                <p className="mt-3 text-sm text-white/80 font-light leading-relaxed max-w-[32ch]">
                  Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AetherisVoyage;

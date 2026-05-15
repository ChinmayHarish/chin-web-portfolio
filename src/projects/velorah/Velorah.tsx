import { motion } from 'framer-motion';
import { FadingVideo } from '../../components/shared/FadingVideo';

export const Velorah = () => {
  return (
    <div className="bg-[#0a1a24] min-h-screen text-white font-sans selection:bg-white/30 overflow-hidden">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Navigation */}
      <nav className="relative z-10 flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-1">
          <span className="text-3xl tracking-tight font-heading">Velorah<sup className="text-xs ml-0.5">®</sup></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-white font-medium">Home</a>
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-medium">Studio</a>
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-medium">About</a>
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-medium">Journal</a>
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-medium">Reach Us</a>
        </div>

        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium hover:scale-[1.03] transition-transform">
          Begin Journey
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-[calc(100vh-80px)]">
        <motion.h1 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-heading font-normal"
        >
          Where dreams <em className="not-italic text-white/40">rise</em><br />
          <em className="not-italic text-white/40">through the silence.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-white/60 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed font-light"
        >
          We're designing tools for deep thinkers, bold creators, and quiet rebels. 
          Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="liquid-glass rounded-full px-14 py-5 text-base font-medium mt-12 hover:scale-[1.03] transition-transform cursor-pointer"
        >
          Begin Journey
        </motion.button>
      </main>

      {/* Custom Styles for this page */}
      <style>{`
        .font-heading {
          font-family: 'Instrument Serif', serif;
        }
      `}</style>
    </div>
  );
};

export default Velorah;

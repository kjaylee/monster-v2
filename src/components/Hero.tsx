'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center text-center px-4 py-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/10 blur-[120px] pointer-events-none rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <span className="inline-block px-3 py-1 rounded-full border border-gold-500/30 text-gold-500 text-xs font-bold uppercase tracking-widest mb-6 bg-gold-500/5">
          Monster V2 Redesign
        </span>
        <h1 className="hero-title mb-6">
          One-stop <br />
          <span className="text-white">Indie Game Discovery</span>
        </h1>
        <p className="hero-desc mx-auto mb-10">
          Stop searching, start playing. We curate the best indie titles, news, and novels 
          so you can spend more time in worlds that matter.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" size="lg" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
            Explore Games
          </Button>
          <Button variant="secondary" size="lg">
            Join Community
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

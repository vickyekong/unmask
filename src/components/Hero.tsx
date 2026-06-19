"use client";

import { motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { WaxSeal } from "./ui/WaxSeal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ink-surface">
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <Reveal delay={0.2}>
          <p className="museum-label mb-8">Est. MMXXIV · A Literary Society</p>
        </Reveal>

        <Reveal delay={0.4}>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wide text-aged-paper leading-[0.95]">
            <span className="block">Un</span>
            <span className="block gold-foil italic">mask</span>
          </h1>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="ornament-rule mx-auto my-10 max-w-md text-sm">
            <span>✦</span>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <p className="mx-auto max-w-2xl font-body text-lg md:text-xl leading-relaxed text-aged-paper/75 font-light">
            A hidden identity card experience for those who believe
            every person is a library of untold stories — waiting to be
            opened, read aloud, and finally understood.
          </p>
        </Reveal>

        <Reveal delay={0.9} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#premise"
            className="group relative inline-flex items-center gap-3 border border-burnished-gold/50 bg-burnished-gold/5 px-8 py-4 font-body text-xs tracking-[0.25em] uppercase text-burnished-gold transition-all hover:bg-burnished-gold/15 hover:border-burnished-gold"
          >
            Open The Archive
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#how-to-play"
            className="font-body text-xs tracking-[0.2em] uppercase text-aged-paper/50 transition-colors hover:text-aged-paper"
          >
            Discover How It Works
          </a>
        </Reveal>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <WaxSeal size={72} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="museum-label text-[0.55rem] text-aged-paper/30">Descend</span>
        <motion.div
          className="h-12 w-px bg-gradient-to-b from-burnished-gold/50 to-transparent"
          animate={{ scaleY: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

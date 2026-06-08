import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <section className="relative h-[60vh] sm:h-[81rem] flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover scale-105"
          loading="eager"
          fetchpriority="high"
        />
        {/* Top-to-bottom gradient: dark top, transparent center, dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f4a]/85 via-[#0d1f4a]/35 to-[#0d1f4a]/80" />
        {/* Side vignette so text stays readable at all edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f4a]/55 via-transparent to-[#0d1f4a]/55" />
      </div>

      {/* Gold accent — top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80" />
      {/* Gold accent — bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      {/* Content */}
      <div className="relative w-full max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">

        {/* Eyebrow: decorative lines + brand label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-secondary/80" />
          <span className="font-body text-[11px] tracking-[0.32em] uppercase text-secondary font-semibold">
            Royal Bakery Nashville
          </span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-secondary/80" />
        </motion.div>

        {/* Page title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl sm:text-6xl lg:text-[4.5rem] text-white leading-[1.1] [text-shadow:0_4px_40px_rgba(0,0,0,0.5)]"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="font-body text-base sm:text-lg text-white/65 mt-5 max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Animated gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.58, duration: 0.7, ease: "easeOut" }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-8 origin-center"
        />
      </div>
    </section>
  );
}

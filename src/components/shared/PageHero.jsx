import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, bgImage, breadcrumb }) {
  return (
    <section className="relative h-[28rem] sm:h-[36rem] flex items-end pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f4a]/90 via-[#0d1f4a]/70 to-[#0d1f4a]/50" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"
      >
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">{title}</h1>
        {subtitle && (
          <p className="font-body text-sm text-white/60 mt-3 max-w-lg">{subtitle}</p>
        )}
        <div className="w-10 h-px bg-secondary mt-5" />
      </motion.div>
    </section>
  );
}
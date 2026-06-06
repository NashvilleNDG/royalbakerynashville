import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

const igImages = [
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80&fit=crop", alt: "Custom chocolate layer cake" },
  { src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&q=80&fit=crop", alt: "Elegant white wedding cake" },
  { src: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500&q=80&fit=crop", alt: "Colorful French macarons" },
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80&fit=crop", alt: "Freshly baked artisan bread loaves" },
  { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80&fit=crop", alt: "Fresh cinnamon rolls from the oven" },
  { src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=80&fit=crop", alt: "Decorated celebration cupcakes" },
];

export default function InstagramSection() {
  return (
    <section className="py-20 bg-[#0a1730]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-3">Follow Our Baking Journey</h2>
          <p className="font-body text-sm text-white/50 mb-6">Stay inspired — follow us for daily baking art &amp; fresh creations.</p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://instagram.com/royalcateringnashville_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-secondary/40 text-secondary hover:bg-secondary/10 transition-all duration-200 font-body text-xs font-semibold tracking-wide uppercase"
            >
              <Instagram className="w-3.5 h-3.5" />
              Instagram
            </a>
            <a
              href="https://facebook.com/people/Royal-Catering/61578157525542"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-secondary/40 text-secondary hover:bg-secondary/10 transition-all duration-200 font-body text-xs font-semibold tracking-wide uppercase"
            >
              <Facebook className="w-3.5 h-3.5" />
              Facebook
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {igImages.map((img, i) => (
            <motion.a
              key={img.src}
              href="https://instagram.com/royalcateringnashville_"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="relative group aspect-square rounded-xl overflow-hidden block"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0a1730]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

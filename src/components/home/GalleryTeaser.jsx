import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const teaserImages = [
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80&fit=crop", alt: "Royal Bakery custom chocolate cake" },
  { src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80&fit=crop", alt: "Royal Bakery elegant wedding cake" },
  { src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80&fit=crop", alt: "Royal Bakery freshly baked pastries" },
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop", alt: "Royal Bakery artisan bread loaves" },
  { src: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80&fit=crop", alt: "Royal Bakery colorful macarons" },
  { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&fit=crop", alt: "Royal Bakery cinnamon rolls" },
];

export default function GalleryTeaser() {
  return (
    <section className="py-24 bg-[#0a1730] section-gold-top">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 mb-12"
        >
          <div className="w-full text-center">
            <span className="font-body text-xs tracking-[0.2em] uppercase text-secondary font-semibold">Our Work &amp; Creations</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mt-3 leading-tight">
              A Taste of Our Finest Creations
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          {teaserImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 group-hover:ring-secondary/60 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/gallery">
            <button className="btn-gold inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold shadow-md">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

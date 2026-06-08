import React from "react";
import { Link } from "react-router-dom";
import { Phone, Download } from "lucide-react";

const MENU_PDF = "https://media.base44.com/files/public/6a049c1bb802156b1d1612cd/a92ca7628_RoyalcatererMenu.pdf";
import { motion } from "framer-motion";

const BG = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=80&fit=crop";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={BG} alt="Artisan breads by Royal Bakery Nashville" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1730]/55" />
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <span className="inline-block font-body text-xs tracking-[0.2em] uppercase text-secondary/80 font-semibold mb-5">
            Let's Create Something Extraordinary
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] text-white leading-[1.15] mb-6 [text-shadow:0_2px_24px_rgba(0,0,0,0.3)]">
            Ready to Order Your{" "}
            <em className="not-italic text-secondary [filter:drop-shadow(0_0_14px_hsla(42,90%,65%,0.5))]">
              Perfect Creation
            </em>?
          </h2>
          <p className="font-body text-[1.05rem] text-white/75 mb-12 max-w-xl mx-auto leading-[1.75]">
            Let our bakers craft a custom creation that will leave everyone amazed.
            Contact us today for a free consultation and personalized quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={MENU_PDF} download="RoyalBakery_Menu.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn-gold inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-base font-semibold shadow-xl">
                <Download className="w-4 h-4" />
                Download Menu
              </button>
            </a>
            <a href="tel:6156031262">
              <button className="btn-ghost-white inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-base font-medium">
                <Phone className="w-4 h-4" />
                (615) 603-1262
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

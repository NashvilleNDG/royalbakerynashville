import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const ORDER_URL = "https://royalcateringnashville.com/menu";

const BG = "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=1920&q=80&fit=crop";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const specialties = ["CUSTOM CAKES", "ARTISAN BREADS", "PASTRIES & DESSERTS", "SPECIAL ORDERS"];

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax BG */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgRef}
          src={BG}
          alt="Fresh artisan baked goods by Royal Bakery Nashville"
          className="hero-bg w-full h-[115%] object-cover -top-[7.5%] absolute"
        />
        <div className="absolute inset-0 bg-[#0a1730]/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1730]/60 via-[#0a1730]/50 to-[#0a1730]/85" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16 pb-20 sm:pt-28 sm:pb-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-heading text-[2.2rem] sm:text-5xl lg:text-[3.8rem] text-white leading-[1.15] mb-6 max-w-4xl [text-shadow:0_2px_32px_rgba(0,0,0,0.35)]"
          >
            Nashville's Artisan Bakery —{" "}
            <em className="not-italic text-secondary [filter:drop-shadow(0_0_14px_hsla(42,90%,65%,0.5))]">
              Custom Cakes, Pastries &amp; Fresh Breads
            </em>
          </motion.h1>

          {/* Specialty pills */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-2 sm:gap-0 mb-10">
            {specialties.map((type, i) => (
              <React.Fragment key={type}>
                <span className="font-body text-[11px] tracking-[0.18em] uppercase text-white/70 font-medium px-4">{type}</span>
                {i < specialties.length - 1 && (
                  <span className="hidden sm:inline text-secondary/50 text-lg">|</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-gold inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-base font-semibold shadow-xl tracking-wide">
                Order a Custom Creation
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-ghost-white inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-base font-medium tracking-wide">
                <ShoppingBag className="w-4 h-4" />
                View Menu
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

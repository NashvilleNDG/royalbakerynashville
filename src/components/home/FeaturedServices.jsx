import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Cakes",
    description: "Make your wedding day unforgettable with a custom tiered cake designed to match your vision — from classic elegance to modern artistry.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80&fit=crop",
    path: "/services",
  },
  {
    title: "Custom Cakes",
    description: "Birthdays, anniversaries, baby showers — we design and bake show-stopping custom cakes for every celebration, big or small.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80&fit=crop",
    path: "/services",
  },
  {
    title: "Artisan Breads",
    description: "Handcrafted sourdoughs, brioche, baguettes, and seasonal loaves baked fresh daily from locally sourced, premium ingredients.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&fit=crop",
    path: "/services",
  },
  {
    title: "Pastries & Croissants",
    description: "Buttery croissants, flaky danishes, cinnamon rolls, and seasonal pastries — made fresh every morning for a perfect indulgence.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80&fit=crop",
    path: "/services",
  },
  {
    title: "Cookies & Treats",
    description: "Classic chocolate chip, artisan shortbread, fudgy brownies, and custom decorated sugar cookies for gifts and gatherings.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80&fit=crop",
    path: "/services",
  },
  {
    title: "Dessert Tables",
    description: "Curated dessert spreads and gift boxes for corporate events, weddings, and private parties — beautifully styled and delicious.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80&fit=crop",
    path: "/services",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-28 bg-white section-gold-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow-gold font-body text-xs uppercase tracking-[0.22em] font-semibold">What We Offer</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mt-4 leading-tight text-center">
            Our Bakery Specialties
          </h2>
          <div className="gold-divider mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <Link to={service.path} className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border/40">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-lg text-foreground mb-2 uppercase tracking-wider">{service.title}</h3>
                  <p className="font-body text-[13px] text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <button className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200 group border border-primary/30 hover:border-secondary/50 px-8 py-3 rounded-full">
              View All Specialties
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import Hero from "../components/home/Hero";
import FeaturedServices from "../components/home/FeaturedServices";
import GalleryTeaser from "../components/home/GalleryTeaser";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";
import InstagramSection from "../components/home/InstagramSection";
import HomeContactFAQ from "../components/home/HomeContactFAQ";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Clock, Users, Cookie } from "lucide-react";

const FEATURE_IMG = "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=700&q=80&fit=crop";

const stats = [
  { icon: Award,  value: "15+",    label: "Years of Excellence" },
  { icon: Users,  value: "2,000+", label: "Happy Customers" },
  { icon: Cookie, value: "500+",   label: "Baked Goods" },
  { icon: Clock,  value: "100%",   label: "Fresh Daily" },
];

export default function Home() {
  return (
    <main itemScope itemType="https://schema.org/WebPage">
      <h1 className="sr-only">
        Royal Bakery Nashville — Artisan Custom Cakes, Pastries &amp; Fresh Breads in Nashville, TN
      </h1>

      <Hero />

      {/* Trust / Stats Bar */}
      <section aria-label="Royal Bakery at a glance" className="bg-white pb-0">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-border/60 rounded-2xl overflow-hidden shadow-md -mt-14 relative z-10 bg-white">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`text-center py-8 px-4 ${i < 3 ? "lg:border-r border-border/60" : ""} ${i === 2 ? "border-t border-border/60 lg:border-t-0" : ""} ${i === 3 ? "border-t border-border/60 lg:border-t-0" : ""} ${i === 1 ? "border-r border-border/60" : ""}`}
              >
                <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-2" aria-hidden="true">
                  <stat.icon className="w-4 h-4 text-secondary" />
                </div>
                <p className="font-heading text-4xl text-primary">{stat.value}</p>
                <p className="font-body text-xs text-muted-foreground mt-1.5 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bakery Specialties */}
      <FeaturedServices />

      {/* Why Choose Royal Bakery */}
      <section aria-labelledby="why-choose-heading" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-border/40">
            <div className="relative min-h-[420px]">
              <img
                src={FEATURE_IMG}
                alt="Royal Bakery Nashville expert baker crafting an artisan creation"
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
                width="700"
                height="525"
              />
            </div>
            <div className="bg-[#0a1730] p-12 sm:p-16 flex flex-col justify-center">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-secondary font-semibold text-center lg:text-left block">
                Nashville's Artisan Bakery
              </span>
              <h2 id="why-choose-heading" className="font-heading text-3xl sm:text-4xl text-white mt-4 mb-6 leading-tight text-center lg:text-left">
                Why Choose Royal Bakery?
              </h2>
              <p className="font-body text-sm text-white/70 leading-relaxed mb-8">
                We combine the finest local Tennessee ingredients with artful baking to craft creations that are visually stunning and exceptionally delicious — from everyday treats to custom wedding cakes for 500 guests.
              </p>
              <ul className="space-y-3 mb-10" itemScope itemType="https://schema.org/ItemList">
                {[
                  "Custom cakes designed to your vision &amp; budget",
                  "Expert bakers &amp; skilled cake decorators",
                  "Fresh baked daily — never day-old",
                  "Locally sourced, seasonal Tennessee ingredients",
                ].map((feat, idx) => (
                  <li key={feat} className="flex items-center gap-3 font-body text-sm text-white/80"
                    itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <meta itemProp="position" content={String(idx + 1)} />
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" aria-hidden="true" />
                    <span itemProp="name" dangerouslySetInnerHTML={{ __html: feat }} />
                  </li>
                ))}
              </ul>
              <p className="font-body text-xs text-secondary/70 mb-5">Free consultation · Custom designs · 24hr response</p>
              <Link to="/about" className="inline-flex items-center gap-2 font-body text-sm text-secondary hover:text-white transition-colors font-medium">
                Learn About Our Story <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <GalleryTeaser />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact & FAQ */}
      <HomeContactFAQ />

      {/* Final CTA */}
      <CTASection />
    </main>
  );
}

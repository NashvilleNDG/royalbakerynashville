import React from "react";
import PageSEO from "../components/shared/PageSEO";
import PageHero from "../components/shared/PageHero";
import CTASection from "../components/home/CTASection";
import ServiceAreaBadges from "../components/shared/ServiceAreaBadges";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Award, Users } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&q=80&fit=crop";
const BAKER_IMG = "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80&fit=crop";

const values = [
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standards in every item we bake and every order we fulfill." },
  { icon: Leaf, title: "Fresh & Local", description: "We source the finest local and seasonal ingredients from Tennessee farms and trusted suppliers." },
  { icon: Heart, title: "Passion", description: "Our love for the craft of baking drives us to create unforgettable treats and beautiful cakes." },
  { icon: Users, title: "Service", description: "Warm, professional, and attentive — our customer service is as exceptional as our baked goods." },
];

const whyChooseUs = [
  { title: "Custom Designs", text: "No two orders are alike. We work with you to create baked goods that perfectly match your vision, theme, flavor preferences, and budget." },
  { title: "Expert Bakers", text: "Our pastry chefs and bakers bring decades of combined experience to ensure every detail — from flavor to decoration — is handled with skill and artistry." },
  { title: "Premium Ingredients", text: "We source the freshest, highest-quality ingredients from local farms and trusted purveyors to deliver exceptional flavor in every bite." },
  { title: "Fresh Daily", text: "Everything is baked fresh to order. We never compromise on freshness, ensuring you receive the very best quality every single time." },
  { title: "Nashville Proud", text: "Based in the heart of Nashville, we understand the unique character and hospitality of our city, and we bring that spirit to every creation." },
];

export default function About() {
  return (
    <div>
      <PageSEO
        title="About Us"
        description="Learn the story behind Royal Bakery Nashville — 15+ years of artisan baking excellence, local ingredients, and custom cakes for weddings and celebrations across Middle Tennessee."
        canonical="https://royalcateringnashville.com/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Us | Royal Bakery Nashville",
          "url": "https://royalcateringnashville.com/about",
          "description": "15+ years of baking excellence in Nashville, TN — meet the Royal Bakery team.",
          "isPartOf": { "@id": "https://royalcateringnashville.com/#website" }
        }}
      />
      <PageHero title="About Us" subtitle="The story behind Nashville's favorite artisan bakery" bgImage={HERO_BG} />

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <img src={BAKER_IMG} alt="Royal Bakery Nashville expert baker crafting an artisan creation" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary rounded-2xl p-5 shadow-lg hidden sm:block">
                <p className="font-heading text-3xl text-primary">15+</p>
                <p className="font-body text-xs text-primary/70 mt-1">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center lg:text-left">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Our Story</span>
              <h1 className="font-heading text-4xl sm:text-5xl text-foreground mt-4 mb-7 leading-tight">
                A Legacy of Artisan Baking in Nashville
              </h1>
              <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                <p>Royal Bakery was born from a simple belief: that every gathering deserves extraordinary baked goods made with love and care. Founded in Nashville, Tennessee, we've grown from a passionate home kitchen into one of the city's most beloved artisan bakeries.</p>
                <p>Our team of experienced bakers and pastry chefs brings together classic techniques and modern creativity, infused with the warmth and hospitality that Nashville is known for. Every cake we design, every loaf we bake, and every pastry we craft tells a story — your story — through carefully selected ingredients and time-honored techniques.</p>
                <p>Over the years, we've had the privilege of creating wedding cakes, birthday celebrations, corporate orders, and everyday treats for thousands of happy customers. Each creation has strengthened our commitment to excellence and deepened our passion for the art of baking.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Our Values</span>
            <h2 className="font-heading text-4xl text-white mt-4">What Drives Us</h2>
            <div className="w-10 h-px bg-secondary/60 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors text-center">
                <div className="w-12 h-12 mb-5 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto">
                  <value.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">{value.title}</h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto lg:max-w-none">
            <div className="text-center lg:text-left mb-10">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Why Royal Bakery</span>
              <h2 className="font-heading text-4xl text-foreground mt-4 leading-tight">Why Choose Royal Bakery?</h2>
            </div>
            <div className="space-y-6">
              {whyChooseUs.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }} className="flex gap-5">
                  <div className="w-8 h-8 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-heading text-xs text-primary font-bold">{`0${i + 1}`}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="font-body text-xs text-secondary/80 font-medium mt-6 text-center lg:text-left">Free consultation · Custom designs · 24hr response</p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-body font-semibold text-sm px-9 gap-2 h-12">
                  Place Your Order <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <ServiceAreaBadges />
      <CTASection />
    </div>
  );
}

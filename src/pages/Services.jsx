import PageSEO from "../components/shared/PageSEO";
import React from "react";
import PageHero from "../components/shared/PageHero";
import CTASection from "../components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Building2, Cake, GraduationCap, Utensils, Gift, ArrowRight, CheckCircle2 } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1920&q=80&fit=crop";

const services = [
  {
    icon: Heart,
    title: "Wedding Cakes",
    description: "Your wedding day deserves nothing less than perfection. Our wedding cake team works closely with you to design a stunning tiered cake that reflects your love story and delights every guest.",
    features: ["Custom design consultation", "Complimentary tasting session", "Fondant & buttercream finishes", "Fresh floral & sugar flowers", "Delivery & professional setup"],
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80&fit=crop",
  },
  {
    icon: Building2,
    title: "Corporate & Business Orders",
    description: "From boardroom pastry platters to company celebration cakes, we deliver polished, professional bakery orders that reflect your brand's standards and impress every guest.",
    features: ["Branded custom cookies & cakes", "Office breakfast pastry boxes", "Conference & event dessert platters", "Holiday gift assortments", "Bulk and recurring order discounts"],
    image: "https://images.unsplash.com/photo-1587536849024-cb2d22dfafde?w=800&q=80&fit=crop",
  },
  {
    icon: Cake,
    title: "Celebration Cakes & Cupcakes",
    description: "Birthdays, anniversaries, baby showers, and more — we bring artistry and attention to detail to every celebration cake and cupcake tower, big or small.",
    features: ["Custom birthday cakes", "Anniversary & milestone cakes", "Baby & bridal shower cakes", "Cupcake towers", "Smash cakes & cake pops"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "Graduation Cakes",
    description: "Celebrate academic achievements with a custom cake that honors the occasion. From school colors to personalized toppers, we make graduation day extra sweet.",
    features: ["School colors & themes", "Personalized toppers & designs", "Sheet cakes for large groups", "Cupcake assortments", "Delivery to venues"],
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80&fit=crop",
  },
  {
    icon: Utensils,
    title: "Artisan Breads & Pastries",
    description: "Handcrafted sourdoughs, buttery croissants, flaky danishes, and seasonal pastries baked fresh daily — perfect for events, gifts, or simply treating yourself.",
    features: ["Sourdough & specialty loaves", "Butter & almond croissants", "Seasonal danish & morning buns", "Custom bread baskets for events", "Weekly subscription boxes"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80&fit=crop",
  },
  {
    icon: Gift,
    title: "Dessert Tables & Gift Boxes",
    description: "Curated dessert spreads and beautifully packaged gift boxes for weddings, corporate events, and private parties — styled to impress and delicious to the last bite.",
    features: ["Custom dessert table styling", "Assorted pastry gift boxes", "Cookie & brownie gift sets", "Macaron & truffle collections", "Branded packaging available"],
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80&fit=crop",
  },
];

export default function Services() {
  return (
    <div>
      <PageSEO
        title="Bakery Services"
        description="Royal Bakery Nashville offers custom cakes, artisan breads, pastries, wedding cakes, corporate orders, and dessert tables across Middle Tennessee. Free consultation — (615) 603-1262."
        canonical="https://royalcateringnashville.com/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Bakery Services | Royal Bakery Nashville",
          "url": "https://royalcateringnashville.com/services",
          "description": "Custom cakes, artisan breads, pastries, and dessert tables in Nashville, TN.",
          "isPartOf": { "@id": "https://royalcateringnashville.com/#website" }
        }}
      />
      <PageHero title="Our Services" subtitle="Artisan baked goods and custom creations for every occasion" bgImage={HERO_BG} />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="space-y-28">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
              >
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative group">
                    <img src={service.image} alt={`${service.title} by Royal Bakery Nashville`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-body text-xs uppercase tracking-[0.15em] text-secondary font-semibold">{`0${i + 1}`}</span>
                  </div>
                  <h2 className="font-heading text-3xl text-foreground mb-4">{service.title}</h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-7">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="font-body text-sm text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <section className="hidden">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="font-body text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Let's Connect</span>
          <h2 className="font-heading text-4xl text-foreground mt-4 mb-5">Let's Create Your Perfect Order</h2>
          <p className="font-body text-sm text-muted-foreground mb-4 max-w-xl mx-auto leading-relaxed">
            Every order is unique. Reach out for a complimentary consultation and personalized quote.
          </p>
          <p className="font-body text-xs text-secondary/80 font-medium mb-8">Free consultation · Custom designs · 24hr response time</p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-body font-semibold text-sm px-10 gap-2 h-12">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

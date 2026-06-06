import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Classic",
    price: "$85",
    unit: "starting price",
    tagline: "Perfect for birthdays & celebrations",
    highlight: false,
    badge: null,
    features: [
      "6–8 inch custom cake",
      "2 flavor options",
      "Buttercream finish",
      "Basic custom design",
      "Standard message topper",
      "3-day advance order",
    ],
  },
  {
    name: "Signature",
    price: "$185",
    unit: "starting price",
    tagline: "Our most popular custom cake package",
    highlight: true,
    badge: "Most Popular",
    features: [
      "2–3 tier custom cake",
      "Up to 4 flavor layers",
      "Fondant or premium buttercream",
      "Custom design consultation",
      "Fresh florals or sugar flowers",
      "Complimentary tasting session",
      "Delivery included",
    ],
  },
  {
    name: "Royal",
    price: "Custom",
    unit: "pricing",
    tagline: "The ultimate bespoke experience",
    highlight: false,
    badge: "Bespoke",
    features: [
      "Multi-tier wedding cakes",
      "Unlimited flavor & design options",
      "Premium artisan finish",
      "Private design consultation",
      "Professional delivery & setup",
      "Full dessert table option",
      "Dedicated baker on-site",
    ],
  },
];

export default function PackagesSection() {
  return (
    <section className="py-24 bg-background section-gold-top">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.2em] uppercase text-secondary font-semibold">Pricing & Packages</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mt-3">Choose Your Package</h2>
          <div className="w-10 h-px bg-secondary mx-auto mt-5" />
          <p className="font-body text-sm text-muted-foreground mt-5 max-w-xl mx-auto">
            Every package includes expert baking, custom design, and quality ingredients. All orders are fully customizable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                pkg.highlight
                  ? "border-secondary bg-primary text-white shadow-[0_0_0_1px_hsla(42,90%,60%,0.5),0_20px_60px_rgba(20,40,100,0.25)] scale-[1.03]"
                  : "border-border/60 bg-white shadow-sm hover:shadow-md transition-shadow"
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest font-body shadow-md ${
                  pkg.highlight ? "bg-secondary text-primary" : "bg-primary text-primary-foreground"
                }`}>
                  {pkg.highlight && <Star className="w-3 h-3 fill-current" />}
                  {pkg.badge}
                </div>
              )}

              <div className="mb-6">
                <p className={`font-body text-xs uppercase tracking-[0.2em] font-semibold mb-2 ${pkg.highlight ? "text-secondary/80" : "text-secondary"}`}>
                  {pkg.name} Package
                </p>
                <div className="flex items-end gap-1.5">
                  <span className={`font-heading text-4xl ${pkg.highlight ? "text-white" : "text-primary"}`}>
                    {pkg.price}
                  </span>
                  <span className={`font-body text-sm mb-1 ${pkg.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                    {pkg.unit}
                  </span>
                </div>
                <p className={`font-body text-sm mt-2 ${pkg.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                  {pkg.tagline}
                </p>
              </div>

              <div className={`h-px mb-6 ${pkg.highlight ? "bg-white/15" : "bg-border/60"}`} />

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      pkg.highlight ? "bg-secondary/25" : "bg-secondary/15"
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${pkg.highlight ? "text-secondary" : "text-secondary"}`} />
                    </div>
                    <span className={`font-body text-sm ${pkg.highlight ? "text-white/85" : "text-foreground/80"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                {pkg.highlight ? (
                  <button className="btn-gold w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold">
                    Get Custom Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${
                    "border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary"
                  }`}>
                    Get Custom Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-body text-xs text-muted-foreground mt-8">
          Prices vary based on design complexity, tier count, and ingredients.
          <br />
          <span className="text-secondary/80 font-medium">Free consultation · Custom designs · 24hr response</span>
        </p>
      </div>
    </section>
  );
}

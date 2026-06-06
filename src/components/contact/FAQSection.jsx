import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How far in advance should I order?",
    a: "We recommend ordering custom cakes and specialty items at least 2–4 weeks in advance to secure your date. For wedding cakes, booking 3–6 months ahead is ideal. For everyday pastries and breads, orders can typically be placed 48–72 hours ahead. We do our best to accommodate last-minute requests based on availability.",
  },
  {
    q: "What is your delivery area?",
    a: "We proudly deliver to Nashville, Brentwood, Franklin, Murfreesboro, Hendersonville, and surrounding Middle Tennessee areas. Delivery fees may apply for orders more than 30 miles from our bakery in Nashville.",
  },
  {
    q: "Do you accommodate dietary restrictions?",
    a: "Absolutely — we craft customized baked goods for gluten-free, vegan, dairy-free, nut-free, and other allergy-specific needs. Our bakers are experienced in creating delicious items that meet diverse dietary requirements without compromising on flavor or texture.",
  },
  {
    q: "Is delivery included with my order?",
    a: "Delivery is available for custom cakes and large orders. Standard delivery fees apply based on your location. For wedding cakes, professional delivery and setup at your venue is included in our packages. We handle transport with care so your creation arrives in perfect condition.",
  },
  {
    q: "What is your minimum order?",
    a: "For custom cakes, our minimum order starts at a 6-inch single-tier cake. For pastry boxes and bulk cookie orders, minimums vary by item. For corporate and event orders, please contact us to discuss your needs — we'll do our best to accommodate any size.",
  },
  {
    q: "Do you offer tastings before booking?",
    a: "Yes! We offer complimentary tasting sessions for wedding cake orders. For other custom cake orders, tasting boxes are available for a small fee that is credited toward your final order. Contact us to schedule your tasting.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 bg-muted/30 section-gold-top">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <span className="font-body text-xs tracking-[0.2em] uppercase text-secondary font-semibold">FAQ</span>
          <h2 className="font-heading text-4xl text-foreground mt-3">Frequently Asked Questions</h2>
          <div className="w-10 h-px bg-secondary mx-auto mt-5" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "border-secondary/40 shadow-[0_0_0_1px_hsla(42,90%,60%,0.2)] bg-white"
                  : "border-border/60 bg-white hover:border-secondary/25"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <h3 className="font-heading text-[17px] text-foreground leading-snug">{faq.q}</h3>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                  open === i ? "bg-secondary text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  {open === i
                    ? <Minus className="w-3.5 h-3.5" />
                    : <Plus className="w-3.5 h-3.5" />
                  }
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-secondary/20 mb-4" />
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-body text-sm text-muted-foreground mt-10">
          Still have questions?{" "}
          <a href="tel:6156031262" className="text-primary font-semibold hover:text-secondary transition-colors">
            Call us at (615) 603-1262
          </a>
        </p>
      </div>
    </section>
  );
}

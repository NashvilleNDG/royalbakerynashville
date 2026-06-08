import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah & James Mitchell",
    event: "Wedding Cake Order",
    initials: "SJ",
    text: "Royal Bakery made our wedding day absolutely magical. Our cake was a masterpiece — every layer was perfection and our guests are still raving about it!",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    event: "Corporate Gift Boxes",
    initials: "MT",
    text: "We've ordered from Royal Bakery for three company events now, and they never disappoint. Professional, punctual, and the quality is outstanding every single time.",
    rating: 5,
  },
  {
    name: "Linda Patterson",
    event: "50th Birthday Cake",
    initials: "LP",
    text: "From the initial consultation to the final delivery, the experience was seamless. They accommodated all our flavor and dietary requests with grace and creativity.",
    rating: 5,
  },
  {
    name: "David & Rachel Kim",
    event: "Anniversary Cake",
    initials: "DK",
    text: "An absolutely extraordinary cake. The design was flawlessly executed, and the attention to detail in decoration and flavor was beyond anything we expected.",
    rating: 5,
  },
  {
    name: "Nashville Grand Hotel",
    event: "Conference Pastry Order",
    initials: "NG",
    text: "We've partnered with Royal Bakery for our annual conference for the past four years. Consistently exceptional quality, seamless delivery, and a team that truly understands hospitality.",
    rating: 5,
  },
  {
    name: "Jennifer Mosely",
    event: "Sweet 16 Custom Cake",
    initials: "JM",
    text: "They turned my daughter's Sweet 16 into a fairy-tale with the most stunning cake. Every single guest left with huge smiles and asked where we ordered it. Highly recommend!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.2em] font-semibold text-secondary">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mt-4 leading-tight">
            What Our Customers Say
          </h2>
          <div className="gold-divider mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative group rounded-2xl p-7 border border-border/60 bg-muted/30 hover:bg-muted/60 hover:border-secondary/40 transition-all duration-300 flex flex-col"
              style={{ boxShadow: "0 2px 16px rgba(10,23,48,0.07)" }}
            >
              <div className="absolute top-5 right-6 font-heading text-5xl sm:text-[68px] leading-none text-secondary/20 select-none pointer-events-none" aria-hidden="true">"</div>

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="font-body text-[14px] text-foreground/70 leading-[1.8] mb-6 italic flex-1">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/40">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-sm text-secondary font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-heading text-[14px] text-foreground leading-tight">{t.name}</p>
                  <p className="font-body text-xs text-secondary/80 mt-0.5 tracking-wide">{t.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

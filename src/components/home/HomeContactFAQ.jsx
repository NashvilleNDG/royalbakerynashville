import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronDown } from "lucide-react";

const LOGO_URL = "/royal-bakery-logo.png";

const faqs = [
  {
    q: "What baked goods does Royal Bakery offer?",
    a: "Royal Bakery offers a full range of artisan baked goods including custom wedding cakes, birthday and celebration cakes, pastries, croissants, artisan breads, cookies, brownies, macarons, cupcakes, dessert tables, and fully custom orders for any occasion. All designs are fully customizable.",
  },
  {
    q: "Where is Royal Bakery located and what areas do you serve?",
    a: "We are based in Nashville, TN (2703 McCampbell Ave, Nashville, TN 37214). We serve clients throughout Middle Tennessee including Nashville, Brentwood, Franklin, Murfreesboro, Hendersonville, Smyrna, Gallatin, and Mount Juliet. Delivery fees may apply for orders beyond 30 miles.",
  },
  {
    q: "How do I contact Royal Bakery to place an order?",
    a: "You can contact us by calling (615) 603-1262 or (615) 829-4411, emailing royalcateringnashville@gmail.com, or filling out the inquiry form on our Contact page. Our team responds within 24 hours to discuss your order and provide a customized quote.",
  },
  {
    q: "Does Royal Bakery make custom wedding cakes?",
    a: "Yes! We specialize in custom wedding cakes throughout Nashville and Middle Tennessee. We offer comprehensive packages including complimentary tasting sessions, custom design consultations, tiered cakes, fondant and buttercream finishes, and floral or themed decorations.",
  },
  {
    q: "Does Royal Bakery handle corporate and business orders?",
    a: "Absolutely. We provide premium corporate bakery orders for office events, conferences, holiday parties, and team celebrations of all sizes across the Nashville area. Contact us for a corporate order quote.",
  },
  {
    q: "Does Royal Bakery accommodate dietary restrictions?",
    a: "Yes. We specialize in fully customizable creations tailored to your preferences and dietary requirements. We accommodate gluten-free, vegan, nut-free, dairy-free, and other dietary needs. Complimentary tastings are available before finalizing your order.",
  },
  {
    q: "Do you offer gluten-free and vegan baked goods?",
    a: "Yes! Our experienced bakers craft delicious gluten-free and vegan options across our full range — from cakes and cupcakes to cookies and breads. Simply let us know your requirements when you reach out.",
  },
];

export default function HomeContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <>
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-secondary/40" />
            <img src={LOGO_URL} alt="Royal Bakery" className="h-[77px] w-auto opacity-80" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-secondary/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
            <div>
              <p className="font-body text-[11px] uppercase tracking-[0.22em] text-secondary font-bold mb-3">Address</p>
              <p className="font-body text-[15.4px] text-foreground font-bold leading-relaxed">
                2703 McCampbell Ave<br />Nashville, TN 37214
              </p>
            </div>
            <div>
              <p className="font-body text-[11px] uppercase tracking-[0.22em] text-secondary font-bold mb-3">E-Mail</p>
              <a href="mailto:royalcateringnashville@gmail.com" className="font-body text-[15.4px] text-foreground font-bold hover:text-secondary transition-colors whitespace-nowrap">
                royalcateringnashville@gmail.com
              </a>
            </div>
            <div>
              <p className="font-body text-[11px] uppercase tracking-[0.22em] text-secondary font-bold mb-3">Telephone</p>
              <a href="tel:6156031262" className="font-body text-[15.4px] text-foreground font-bold hover:text-secondary transition-colors block">
                (615) 603-1262
              </a>
              <a href="tel:6158294411" className="font-body text-[15.4px] text-foreground font-bold hover:text-secondary transition-colors block mt-1">
                (615) 829-4411
              </a>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a1730]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-4xl sm:text-5xl text-white leading-tight mb-4">
              Frequently Asked Questions About<br />
              <em className="not-italic text-secondary">Royal Bakery</em>
            </h2>
            <p className="font-body text-[15.4px] text-white italic">
              Everything you need to know about our baked goods and custom orders across Nashville
            </p>
            <div className="gold-divider mt-5" />
          </motion.div>

          <div className="space-y-0">
            {visibleFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                >
                  <span className="font-body text-[15.4px] text-secondary font-medium leading-snug">{faq.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border border-secondary/40 flex items-center justify-center text-secondary">
                    {openIndex === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-[15.4px] text-white leading-relaxed pb-5 pr-10">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {!showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 font-body text-[15.4px] font-semibold text-secondary border border-secondary/40 hover:bg-secondary/10 px-8 py-3 rounded-full transition-all duration-200"
              >
                View More
                <ChevronDown className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

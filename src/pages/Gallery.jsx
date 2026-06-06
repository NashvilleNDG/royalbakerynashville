import PageSEO from "../components/shared/PageSEO";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import CTASection from "../components/home/CTASection";

const HERO_BG = "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=1920&q=80&fit=crop";

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80&fit=crop", caption: "Custom Chocolate Layer Cake" },
  { src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80&fit=crop", caption: "Elegant Wedding Cake" },
  { src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80&fit=crop", caption: "Freshly Baked Pastries" },
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80&fit=crop", caption: "Artisan Bread Loaves" },
  { src: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80&fit=crop", caption: "Colorful French Macarons" },
  { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80&fit=crop", caption: "Fresh Cinnamon Rolls" },
  { src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80&fit=crop", caption: "Artisan Cookies Assortment" },
  { src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80&fit=crop", caption: "Decorated Celebration Cupcakes" },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80&fit=crop", caption: "New York Cheesecake Slice" },
  { src: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=80&fit=crop", caption: "Fresh Blueberry Muffins" },
  { src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80&fit=crop", caption: "Dessert Table Display" },
  { src: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=800&q=80&fit=crop", caption: "Artisan Fruit Tarts" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setLightbox(i => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setLightbox(i => (i + 1) % galleryImages.length);

  return (
    <div>
      <PageSEO
        title="Bakery Gallery"
        description="Browse Royal Bakery Nashville's photo gallery — stunning custom cakes, artisan breads, pastries, macarons, and more. See our baking artistry and creations in action."
        canonical="https://royalcateringnashville.com/gallery"
        schema={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Bakery Gallery | Royal Bakery Nashville",
          "url": "https://royalcateringnashville.com/gallery",
          "description": "Photos of custom cakes, artisan breads, pastries and baked goods by Royal Bakery Nashville.",
          "isPartOf": { "@id": "https://royalcateringnashville.com/#website" }
        }}
      />
      <PageHero
        title="Photo Gallery"
        subtitle="A glimpse into our baking artistry and custom creations"
        bgImage={HERO_BG}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                onClick={() => setLightbox(i)}
                className="relative group rounded-2xl overflow-hidden cursor-zoom-in aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                  <p className="font-heading text-base text-white">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <button
              className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/40 transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl max-h-[80vh] w-full flex flex-col items-center gap-4"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].caption}
                className="max-h-[70vh] max-w-full w-auto rounded-xl object-contain shadow-2xl"
              />
              <p className="font-heading text-lg text-white mt-1">{galleryImages[lightbox].caption}</p>
            </motion.div>

            <button
              className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/40 transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-body text-xs text-white/40">
              {lightbox + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

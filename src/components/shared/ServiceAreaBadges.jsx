import React from "react";
import { MapPin } from "lucide-react";

const areas = [
  { name: "Nashville", primary: true },
  { name: "Brentwood", primary: false },
  { name: "Franklin", primary: false },
  { name: "Murfreesboro", primary: false },
  { name: "Hendersonville", primary: false },
  { name: "Smyrna", primary: false },
  { name: "Gallatin", primary: false },
  { name: "Mount Juliet", primary: false },
];

export default function ServiceAreaBadges({ dark = false }) {
  return (
    <section className={`py-16 ${dark ? "bg-[#0a1730]" : "bg-muted/40"}`}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
          <span className="font-body text-xs uppercase tracking-[0.2em] font-semibold text-secondary">
            Where We Deliver
          </span>
        </div>
        <h2 className={`font-heading text-3xl mb-8 ${dark ? "text-white" : "text-foreground"}`}>
          Proudly Serving Middle Tennessee
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-7">
          {areas.map((area) => (
            <span
              key={area.name}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-sm font-medium border transition-colors ${
                area.primary
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : dark
                  ? "bg-secondary/10 text-secondary border-secondary/30 hover:bg-secondary/20"
                  : "bg-white text-primary border-secondary/40 hover:border-secondary hover:bg-secondary/10"
              }`}
            >
              {area.primary && <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block flex-shrink-0" />}
              {area.name}
              {area.primary && (
                <span className={`font-body text-[10px] ${dark ? "text-secondary/70" : "text-secondary/80"}`}>(Primary)</span>
              )}
            </span>
          ))}
        </div>

        <p className={`font-body text-sm ${dark ? "text-white/50" : "text-muted-foreground"} max-lg mx-auto leading-relaxed`}>
          Based in Nashville, TN — serving Middle Tennessee and beyond.{" "}
          <span className={`font-medium ${dark ? "text-white/70" : "text-foreground/70"}`}>
            Delivery fees may apply for orders over 30 miles.
          </span>
        </p>
      </div>
    </section>
  );
}

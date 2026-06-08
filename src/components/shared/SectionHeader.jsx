import React from "react";

export default function SectionHeader({ subtitle, title, light = false }) {
  return (
    <div className="text-center mb-16">
      <span className={`font-body text-sm uppercase tracking-widest font-semibold ${light ? "text-secondary" : "text-secondary"}`}>
        {subtitle}
      </span>
      <h2 className={`font-heading text-4xl sm:text-5xl mt-3 ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-secondary mx-auto mt-4" />
    </div>
  );
}
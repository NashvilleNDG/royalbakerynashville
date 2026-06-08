import React, { useState, useEffect } from "react";
import { X, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("rc_bar_dismissed");
    if (dismissed) setVisible(false);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("rc_bar_dismissed", "1");
  };

  if (!visible) return null;

  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-[#0a1730] border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-11 flex items-center justify-between gap-4">
        <div className="flex-1" />
        <div className="flex items-center gap-2 text-center">
          <Calendar className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
          <p className="font-body text-xs sm:text-sm text-secondary tracking-wide">
            <span className="font-semibold">Fresh baked daily — Summer &amp; Fall orders filling fast</span>
            <span className="text-white/60 mx-1.5">·</span>
            <span className="text-white/70">Reserve your date early.</span>
            <a href="tel:6158294411" className="ml-1.5 text-secondary underline underline-offset-2 hover:text-white transition-colors font-semibold">
              Call (615) 829-4411 →
            </a>
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="p-1 text-white/40 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
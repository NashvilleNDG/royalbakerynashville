import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const LOGO_URL = "/royal-bakery-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0a1730] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/8">

          {/* Brand + social */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="bg-white rounded-xl p-3 inline-block mb-5">
              <img src={LOGO_URL} alt="Royal Bakery logo" className="h-12 w-auto" />
            </div>
            <p className="font-body text-sm text-white leading-relaxed mb-6 max-w-xs mx-auto md:mx-0">
              Nashville's premier artisan bakery, crafting custom cakes, pastries, and fresh breads for your most memorable occasions.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-6 justify-center md:justify-start">
              <a href="https://www.instagram.com/royalcateringnashville_" target="_blank" rel="noopener noreferrer" aria-label="Royal Bakery on Instagram"
                className="w-9 h-9 rounded-full border border-secondary/40 flex items-center justify-center text-secondary hover:bg-secondary/20 hover:border-secondary transition-all duration-200">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.facebook.com/people/Royal-Catering/61578157525542" target="_blank" rel="noopener noreferrer" aria-label="Royal Bakery on Facebook"
                className="w-9 h-9 rounded-full border border-secondary/40 flex items-center justify-center text-secondary hover:bg-secondary/20 hover:border-secondary transition-all duration-200">
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold mb-5">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Our Menu", path: "/menu" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map(link => (
                <Link key={link.path} to={link.path} className="block font-body text-sm text-white hover:text-secondary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary/70 flex-shrink-0" />
                <span className="font-body text-sm text-white leading-relaxed">2703 McCampbell Ave<br />Nashville, TN 37214</span>
              </div>
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4 mt-0.5 text-secondary/70 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:6156031262" className="font-body text-sm text-white hover:text-secondary transition-colors">(615) 603-1262</a>
                  <a href="tel:6158294411" className="font-body text-sm text-white hover:text-secondary transition-colors">(615) 829-4411</a>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 mt-0.5 text-secondary/70 flex-shrink-0" />
                <a href="mailto:royalcateringnashville@gmail.com" className="font-body text-sm text-white hover:text-secondary transition-colors break-all">royalcateringnashville@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Our Specialties */}
          <div className="text-center md:text-left">
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold mb-5">Our Specialties</h4>
            <div className="space-y-3">
              {["Wedding Cakes", "Custom Cakes", "Artisan Breads", "Pastries & Croissants", "Cookies & Treats", "Dessert Tables"].map(service => (
                <Link key={service} to="/services" className="block font-body text-sm text-white hover:text-secondary transition-colors">
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-body text-sm text-white">
            © {new Date().getFullYear()} Royal Bakery. All rights reserved.{" "}
            <span className="text-secondary">Design &amp; Developed By{" "}
              <a href="https://nashvilledigitalgroup.com" target="_blank" rel="noopener noreferrer" className="text-secondary underline underline-offset-2 hover:text-secondary/80 transition-colors">Nashville Digital Group</a>
            </span>
          </p>
          <p className="font-body text-sm text-white">Nashville, TN · (615) 603-1262 · royalcateringnashville@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

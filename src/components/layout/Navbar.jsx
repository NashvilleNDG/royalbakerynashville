import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ORDER_URL = "https://royalcateringnashville.com/menu";
const PDF_URL = "https://media.base44.com/files/public/6a049c1bb802156b1d1612cd/a92ca7628_RoyalcatererMenu.pdf";

const LOGO_URL = "/royal-bakery-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [barVisible, setBarVisible] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const check = () => setBarVisible(!sessionStorage.getItem("rc_bar_dismissed"));
    check();
    window.addEventListener("storage", check);
    return () => window.removeEventListener("storage", check);
  }, []);

  const desktopOffset = barVisible ? "md:top-11" : "md:top-0";

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 top-0 ${desktopOffset} bg-white border-b border-border/30 shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* Logo */}
          <Link to="/" className="flex items-center md:relative absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0">
            <img
              src={LOGO_URL}
              alt="Royal Bakery logo"
              className="h-[52px] w-auto"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-[13px] tracking-[0.12em] uppercase font-semibold transition-colors duration-200 relative pb-0.5 group text-[#0a1f5c] hover:text-[#0a1f5c] ${
                  location.pathname === link.path ? "text-[#0a1f5c]" : ""
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-secondary transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}

            {/* Social icons */}
            <div className="flex items-center gap-2 border-l pl-5 border-border/40">
              <a href="https://www.instagram.com/royalcateringnashville_" target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-secondary/50 text-secondary flex items-center justify-center transition-all duration-200 hover:bg-secondary/10"
                aria-label="Royal Bakery on Instagram">
                <Instagram className="w-3 h-3" />
              </a>
              <a href="https://www.facebook.com/people/Royal-Catering/61578157525542" target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-secondary/50 text-secondary flex items-center justify-center transition-all duration-200 hover:bg-secondary/10"
                aria-label="Royal Bakery on Facebook">
                <Facebook className="w-3 h-3" />
              </a>
            </div>

            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
              <button className="font-body text-[12.1px] font-bold tracking-wider uppercase px-6 py-2.5 rounded-full bg-[#0a1f5c] text-white hover:bg-[#0a1f5c]/90 transition-all duration-200 flex items-center gap-2">
                <ShoppingBag className="w-3.5 h-3.5" />
                Order Now
              </button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary ml-auto"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border/40 overflow-hidden shadow-lg"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between py-3 font-body text-[15.4px] font-bold border-b border-border/30 last:border-0 ${
                    location.pathname === link.path ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && <span className="w-1.5 h-1.5 rounded-full bg-secondary" />}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-body text-sm font-semibold">
                  <ShoppingBag className="w-4 h-4" />
                  Order Now
                </a>
                <a href={PDF_URL} download="RoyalCatering_Menu.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-primary text-primary font-body text-sm font-semibold">
                  Download Menu
                </a>
                <div className="flex justify-center gap-3">
                  <a href="https://www.instagram.com/royalcateringnashville_" target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-secondary/40 flex items-center justify-center text-secondary hover:bg-secondary/10 transition-colors" aria-label="Royal Catering Nashville on Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://www.facebook.com/people/Royal-Catering/61578157525542" target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-secondary/40 flex items-center justify-center text-secondary hover:bg-secondary/10 transition-colors" aria-label="Royal Catering Nashville on Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
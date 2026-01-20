"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; 
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const desktopCTARef = useRef<HTMLDivElement>(null);
  const [desktopCTAHeight, setDesktopCTAHeight] = useState(40); 

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Services", action: () => scrollToSection("services") },
    { label: "Get a Quote", action: () => scrollToSection("contact") },
    { label: "Contact", action: () => scrollToSection("contact") },
    { href: "/tc", label: "T&C", action: null },
  ];

  useEffect(() => {
    if (desktopCTARef.current) {
      setDesktopCTAHeight(desktopCTARef.current.clientHeight);
    }
  }, []);

  return (
    <>
      {/* Desktop CTA (Top) */}
      <div
        ref={desktopCTARef}
        className="hidden md:flex fixed top-0 left-0 right-0 z-[9999] bg-green-900 text-white text-sm"
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between py-1.5">
          <span className="font-medium opacity-90 text-xs lg:text-sm">
            Need a deep clean? Fast quotes & trusted professionals.
          </span>

          <div className="flex gap-3 items-center">
            <Link
              to="/contact"
              className="px-4 py-1 bg-white text-green-900 text-xs font-bold rounded-full hover:bg-green-50 transition shadow-sm"
            >
              Get a Quote
            </Link>

            <a
              href="https://wa.me/441234567890"
              className="px-3 py-1 bg-white/10 rounded-full flex items-center gap-2 hover:bg-white/20 transition text-xs font-medium"
            >
              <FaWhatsapp className="text-sm" /> WhatsApp
            </a>

            <a
              href="tel:+441234567890"
              className="px-3 py-1 bg-white/10 rounded-full flex items-center gap-2 hover:bg-white/20 transition text-xs font-medium"
            >
              <FaPhoneAlt className="text-xs" /> Call
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm"
        style={{ top: `${desktopCTAHeight}px` }} 
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-2.5">
          <Link to="/" className="text-lg font-bold tracking-tight text-green-950 flex items-center gap-2">
            <div className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">D</div>
            DDeep Cleaning
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            {links.map((link) => (
              <li key={link.label}>
                {link.action ? (
                  <button 
                    onClick={link.action} 
                    className="hover:text-green-600 transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                  </button>
                ) : (
                  <Link 
                    to={link.href!} 
                    className="hover:text-green-600 transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            className="md:hidden focus:outline-none p-1"
          >
            <div className={`w-5 h-0.5 bg-slate-900 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-5 h-0.5 bg-slate-900 mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-slate-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
          <ul className="bg-white border-t border-slate-100 flex flex-col px-6 py-4 gap-4 text-slate-700 font-medium shadow-xl">
            {links.map((link) => (
              <li key={link.label}>
                {link.action ? (
                  <button
                    onClick={() => {
                      link.action && link.action();
                      setMenuOpen(false);
                    }}
                    className="block hover:text-green-600 transition-colors w-full text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.href!}
                    className="block hover:text-green-600 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Mobile CTA (Bottom Bar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-green-100 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-3 text-xs font-semibold text-slate-600">
          <a href="tel:+441234567890" className="py-3 flex flex-col items-center gap-1 active:bg-green-50">
            <FaPhoneAlt className="text-lg text-green-600" />
            Call
          </a>

          <a
            href="https://wa.me/441234567890"
            className="py-3 flex flex-col items-center gap-1 border-x border-slate-100 active:bg-green-50"
          >
            <FaWhatsapp className="text-lg text-green-600" />
            WhatsApp
          </a>

          <a href="mailto:info@ddeepcleaning.co.uk" className="py-3 flex flex-col items-center gap-1 active:bg-green-50">
            <FaEnvelope className="text-lg text-green-600" />
            Email
          </a>
        </div>
      </div>

      {/* ✅ FIX ADDED HERE: 
        Mobile Bottom Spacer to prevent content from being hidden behind the fixed CTA. 
        h-[65px] creates just enough room. 
      */}
      <div className="md:hidden h-[65px]" />

      {/* Desktop Top Spacer */}
      <div className="hidden md:block" style={{ height: `${desktopCTAHeight + 55}px` }} />
    </>
  );
}
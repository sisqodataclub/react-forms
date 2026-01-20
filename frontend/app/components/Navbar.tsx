"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const desktopCTARef = useRef<HTMLDivElement>(null);
  const [desktopCTAHeight, setDesktopCTAHeight] = useState(50); // default

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

  // Dynamically measure CTA height
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
        className="hidden md:flex fixed top-0 left-0 right-0 z-[9999] bg-green-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between py-3">
          <span className="font-semibold">
            Need a deep clean? Fast quotes & trusted professionals.
          </span>

          <div className="flex gap-3">
            <Link
              to="/contact"
              className="px-5 py-2 bg-white text-green-700 rounded-full font-semibold hover:bg-green-50 transition"
            >
              Get a Quote
            </Link>

            <a
              href="https://wa.me/441234567890"
              className="px-4 py-2 bg-green-900/40 rounded-full flex items-center gap-2 hover:bg-green-900/60 transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              href="tel:+441234567890"
              className="px-4 py-2 bg-green-900/40 rounded-full flex items-center gap-2 hover:bg-green-900/60 transition"
            >
              <FaPhoneAlt /> Call
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className="bg-white border-b border-slate-200 sticky top-0 z-50"
        style={{ top: `${desktopCTAHeight}px` }} // immediately below desktop CTA
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between p-4">
          <Link to="/" className="text-xl font-bold tracking-tight">
            D Deep Cleaning Services
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {links.map((link) => (
              <li key={link.label}>
                {link.action ? (
                  <button onClick={link.action} className="hover:text-blue-600 transition-colors">
                    {link.label}
                  </button>
                ) : (
                  <Link to={link.href} className="hover:text-blue-600 transition-colors">
                    {link.label}
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
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            <div className="w-6 h-0.5 bg-slate-900 mb-1 transition-transform" />
            <div className="w-6 h-0.5 bg-slate-900 mb-1 transition-transform" />
            <div className="w-6 h-0.5 bg-slate-900 transition-transform" />
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-white border-t border-slate-200 flex flex-col px-4 py-2 gap-2">
            {links.map((link) => (
              <li key={link.label}>
                {link.action ? (
                  <button
                    onClick={() => {
                      link.action && link.action();
                      setMenuOpen(false);
                    }}
                    className="block py-2 hover:text-blue-600 transition-colors w-full text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="block py-2 hover:text-blue-600 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Mobile CTA (Bottom Bar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-green-200 shadow-xl">
        <div className="grid grid-cols-3 text-sm font-semibold text-green-700">
          <a href="tel:+441234567890" className="py-3 flex flex-col items-center gap-1">
            <FaPhoneAlt className="text-lg" />
            Call
          </a>

          <a
            href="https://wa.me/441234567890"
            className="py-3 flex flex-col items-center gap-1 border-x border-green-200"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>

          <a href="mailto:info@ddeepcleaning.co.uk" className="py-3 flex flex-col items-center gap-1">
            <FaEnvelope className="text-lg" />
            Email
          </a>
        </div>
      </div>

      {/* Spacer to push content below desktop CTA + navbar */}
      <div className="hidden md:block" style={{ height: `${desktopCTAHeight + 72}px` }} />
    </>
  );
}

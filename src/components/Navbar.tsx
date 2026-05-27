"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/foundation", label: "Foundation Track" },
  { href: "/advanced", label: "Advanced AI Track" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <img
            src="/images/autonomousX.png"
            alt="AutonomousX"
            className="h-13 w-auto object-contain group-hover:scale-105 transition-transform rounded-full"
          />
        </Link>

        {/* Desktop Nav */}
        <nav 
          className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-gradient-to-r from-soft-red via-coral to-sky shadow-sm" 
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-2 text-sm font-bold text-black bg-white hover:bg-gray-50 rounded-full transition-all shadow-sm no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/#contact" className="btn-outline !py-2.5 !px-5 !text-sm no-underline">
            Book a Demo
          </Link>
          <Link href="/#curriculum-timeline" className="btn-gradient !py-2.5 !px-5 !text-sm no-underline">
            Explore Curriculum
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-0.5 bg-text rounded-full origin-center"
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-text rounded-full"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-text rounded-full origin-center"
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-text no-underline rounded-xl transition-colors hover:bg-black/[0.03]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <Link
                  href="/#contact"
                  className="btn-outline text-center no-underline"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Demo
                </Link>
                <Link
                  href="/#curriculum-timeline"
                  className="btn-gradient text-center no-underline"
                  onClick={() => setMobileOpen(false)}
                >
                  Explore Curriculum
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

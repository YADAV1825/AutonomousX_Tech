"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Body scroll lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("body-scroll-locked");
    } else {
      document.body.classList.remove("body-scroll-locked");
    }
    return () => document.body.classList.remove("body-scroll-locked");
  }, [mobileOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && mobileOpen) {
      setMobileOpen(false);
      hamburgerRef.current?.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Focus trap within drawer
  useEffect(() => {
    if (!mobileOpen || !drawerRef.current) return;

    const focusableEls = drawerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableEls.length === 0) return;

    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    drawerRef.current.addEventListener("keydown", trapFocus);
    // Focus first element when drawer opens
    setTimeout(() => firstEl.focus(), 100);

    const ref = drawerRef.current;
    return () => ref?.removeEventListener("keydown", trapFocus);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-strong ${
        scrolled ? "shadow-lg" : "shadow-sm border-b border-border/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <img
            src="/images/autonomousX.png"
            alt="AutonomousX"
            className="h-10 sm:h-11 lg:h-13 w-auto object-contain group-hover:scale-105 transition-transform rounded-full"
          />
        </Link>

        {/* Desktop Nav — visible at lg+ */}
        <nav 
          className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-gradient-to-r from-soft-red via-coral to-sky shadow-sm" 
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

        {/* Desktop CTAs — visible at lg+ */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/#contact" className="btn-outline !py-2.5 !px-5 !text-sm no-underline">
            Book a Demo
          </Link>
          <Link href="/#curriculum-timeline" className="btn-gradient !py-2.5 !px-5 !text-sm no-underline">
            Explore Curriculum
          </Link>
        </div>

        {/* Mobile hamburger — visible below lg */}
        <button
          ref={hamburgerRef}
          className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer z-[60]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
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

      {/* Mobile Quick Nav Strip — visible below lg, hidden when drawer open */}
      {!mobileOpen && (
        <div className="lg:hidden overflow-x-auto scrollbar-hide border-t border-border/30">
          <nav
            className="flex items-center gap-1 px-2 py-2 w-max min-w-full mx-auto justify-center"
            aria-label="Quick navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex-shrink-0 px-2.5 py-1 text-[11px] font-semibold text-text-muted bg-white/50 hover:bg-white/80 hover:text-text rounded-xl transition-all no-underline border border-border/40 text-center flex flex-col items-center justify-center leading-[1.2]"
              >
                {link.label === "Foundation Track" ? (
                  <><span>Foundation</span><span>Track</span></>
                ) : link.label === "Advanced AI Track" ? (
                  <><span>Advanced AI</span><span>Track</span></>
                ) : (
                  link.label
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Mobile Drawer + Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="drawer-overlay lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in drawer */}
            <motion.div
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-[100dvh] w-[min(320px,85vw)] z-50 bg-white/95 backdrop-blur-xl shadow-2xl lg:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-border/50">
                <Link href="/" className="flex items-center gap-2 no-underline" onClick={() => setMobileOpen(false)}>
                  <img
                    src="/images/autonomousX.png"
                    alt="AutonomousX"
                    className="h-9 w-auto object-contain rounded-full"
                  />
                  <span className="text-sm font-bold text-text">AI Academy</span>
                </Link>
                {/* Removed extra X button since hamburger morphs into X */}
              </div>

              {/* Nav links */}
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center px-4 py-3.5 text-base font-medium text-text no-underline rounded-xl transition-colors hover:bg-black/[0.03] min-h-[48px]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTAs */}
              <div className="flex flex-col gap-3 p-5 mt-auto border-t border-border/50">
                <Link
                  href="/#contact"
                  className="btn-outline text-center no-underline !py-3.5"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Demo
                </Link>
                <Link
                  href="/#curriculum-timeline"
                  className="btn-gradient text-center no-underline !py-3.5"
                  onClick={() => setMobileOpen(false)}
                >
                  Explore Curriculum
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

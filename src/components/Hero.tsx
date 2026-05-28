"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const taglines = [
  "Learn Modern AI Tools",
  "Build AI Websites & SaaS Products",
  "Future-Proof Your Career with AI",
  "Hands-on AI Bootcamps",
];

const achievements = [
  { title: "Founder, AutonomousX AI", desc: "Built 25+ LLMs from scratch, Hugging Face", icon: <img src="/images/autonomousX.png" alt="AutonomousX" className="h-7 rounded-full object-cover shadow-sm" /> },
  { title: "Google TRC Recipient", desc: "Exclusive compute grant for TPUs", icon: <img src="/images/google.jpg" alt="Google" className="h-7 rounded-full object-cover shadow-sm" />, highlight: true },
  { title: "IIT JEE MAINS", desc: "98.72 %ile", icon: <img src="/images/JEE.png" alt="JEE" className="h-7 rounded-full object-cover shadow-sm" /> },
  { title: "KVPY AIR 2590", desc: "National fellowship", icon: <img src="/images/kvpy.png" alt="KVPY" className="h-7 rounded-full object-cover shadow-sm" /> },
  { title: "Founder, AutonomousX AI Academy", desc: "AutonomousX AI Academy", icon: <img src="/images/autonomousX.png" alt="AutonomousX" className="h-7 rounded-full object-cover shadow-sm" /> },
  { title: "IOQM Merit", desc: "Mathematics olympiad", icon: <img src="/images/IOQM.jpg" alt="IOQM" className="h-7 rounded-full object-cover shadow-sm" /> },
  { title: "Bachelors in Information Technology", desc: "NIT Jalandhar", icon: <img src="/images/nit_logo.png" alt="NIT" className="h-7 rounded-full object-cover shadow-sm" /> }
];

export default function Hero() {
  const [tagIndex, setTagIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/26-Tahoe-Beach-Dawn.png"
          alt="Lake Tahoe at dawn"
          className="w-full h-full object-cover"
        />
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/50" />
        {/* Subtle color tints */}
        <div className="absolute inset-0 bg-gradient-to-br from-blush/20 via-transparent to-ice/30" />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-soft-red/10 to-sky/10 blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-ice/20 to-lavender/10 blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />

      {/* Floating Ticker Window (Right Side) */}
      <motion.div
        style={{ y, opacity }}
        className="hidden lg:flex absolute top-[20%] right-[5%] xl:right-[10%] w-[340px] xl:w-[420px] h-[420px] xl:h-[500px] flex-col glass-card overflow-hidden border-2 border-white/60 shadow-2xl z-20 backdrop-blur-xl bg-white/40 rounded-3xl"
      >
        <div className="p-4 border-b border-white/40 bg-white/50 backdrop-blur-md shrink-0 flex items-center justify-between">
          <h3 className="font-extrabold text-text text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-soft-red animate-pulse shadow-[0_0_8px_rgba(232,64,87,0.8)]" />
            Live Instructor Stats
          </h3>
          <span className="text-[10px] uppercase font-bold text-text-muted tracking-widest bg-white/50 px-2 py-0.5 rounded-full">Active</span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          {/* Fade overlays */}
          <div className="absolute top-0 w-full h-10 bg-gradient-to-b from-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white/90 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex flex-col gap-3 px-4 py-6"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {[...achievements, ...achievements].map((item, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl flex items-start gap-3 backdrop-blur-md shadow-sm transition-all ${item.highlight
                    ? 'bg-gradient-to-r from-blush/80 to-ice/80 border border-soft-red/40'
                    : 'bg-white/80 border border-white/60 hover:bg-white'
                  }`}
              >
                <div className="mt-0.5 flex-shrink-0 text-lg flex items-center justify-center w-6">{item.icon}</div>
                <div>
                  <div className="font-bold text-[13px] text-text leading-tight">{item.title}</div>
                  <div className="text-[11px] text-text-muted mt-0.5 leading-snug font-medium">{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-44 pb-20 sm:pt-48 sm:pb-24 lg:pt-48 lg:pb-32 flex w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl lg:max-w-3xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0"
        >
          {/* Academy badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full glass mb-6 sm:mb-8"
          >
            <img
              src="/images/autonomousX.png"
              alt="AutonomousX"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-cover rounded-full shadow-sm"
            />
            <span className="text-base sm:text-lg lg:text-xl font-bold text-text">AI Academy</span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-6">
            <span className="text-text">Master AI.</span>
            <br />
            <span className="gradient-text">Build Real Products.</span>
          </h1>

          {/* Animated tagline */}
          <div className="h-8 sm:h-10 mb-6 sm:mb-8 overflow-hidden">
            <motion.p
              key={tagIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-text-muted font-medium"
            >
              {taglines[tagIndex]}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 w-full sm:w-auto justify-center lg:justify-start"
          >
            <Link href="#contact" className="btn-gradient text-base no-underline text-center">
              Book a Demo
            </Link>
            <Link href="#curriculum-timeline" className="btn-outline text-base no-underline text-center">
              Explore Curriculum
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {[
              { num: "48", label: "Weeks" },
              { num: "2", label: "Tracks" },
              { num: "100%", label: "Hands-on" },
              { num: "3+", label: "SaaS Products" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold gradient-text">
                  {stat.num}
                </div>
                <div className="text-[10px] sm:text-xs text-text-muted font-medium uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

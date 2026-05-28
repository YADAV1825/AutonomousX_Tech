"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tracks = [
  {
    title: "Foundation Track",
    subtitle: "Ages 13–18 · School Students",
    description:
      "Project-driven learning: build websites, games, and AI-powered apps. No boring theory  build and ship from week one.",
    features: [
      "Build real websites with AI tools",
      "Python programming fundamentals",
      "Hardware deep-dive (CPU/GPU/TPU)",
      "AI art, 3D assets & game dev",
      "Cloud computing basics",
      "Capstone project + portfolio",
    ],
    price: "$25",
    originalPrice: "$40",
    href: "/foundation",
    color: "pink" as const,
    badge: "Recommended for students",
  },
  {
    title: "Advanced AI Track",
    subtitle: "Ages 18+ · College, University & Graduates",
    description:
      "From zero to shipping AI SaaS. Heavy coding, production-grade deployment, and real business skills.",
    features: [
      "Full-stack engineering (React, Next.js)",
      "PyTorch & JAX neural networks",
      "Fine-tune LLMs (PEFT/LoRA)",
      "Local LLMs with Ollama",
      "Ship 3 complete SaaS products",
      "AI agents & automation",
    ],
    price: "$40",
    originalPrice: "$50",
    href: "/advanced",
    color: "blue" as const,
    badge: "Most comprehensive",
  },
];

export default function TracksOverview() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative" id="tracks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <h2 className="inline-block p-1.5 rounded-full bg-gradient-to-r from-soft-red via-coral to-sky shadow-sm">
              <span className="block px-5 sm:px-8 py-2.5 sm:py-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black bg-white rounded-full">
                Choose Your Track
              </span>
            </h2>
          </div>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Two paths. One mission: help you build real things with AI  websites, apps, and production-ready products.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`glass-card p-5 sm:p-6 lg:p-8 relative group ${track.color === "pink"
                  ? "hover:shadow-[0_8px_40px_rgba(232,64,87,0.1)]"
                  : "hover:shadow-[0_8px_40px_rgba(126,184,240,0.1)]"
                }`}
            >
              {/* Glow border on hover */}
              <div
                className={`absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${track.color === "pink"
                    ? "shadow-[inset_0_0_0_1.5px_rgba(232,64,87,0.2)]"
                    : "shadow-[inset_0_0_0_1.5px_rgba(126,184,240,0.2)]"
                  }`}
              />

              {/* Badge */}
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 ${track.color === "pink"
                    ? "bg-blush text-soft-red"
                    : "bg-ice text-sky"
                  }`}
              >
                {track.badge}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-text mb-1">{track.title}</h3>
              <p className="text-sm text-text-muted font-medium mb-4">{track.subtitle}</p>
              <p className="text-text-muted text-sm leading-relaxed mb-6">{track.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {track.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-text">
                    <span className={`mt-0.5 text-xs ${track.color === "pink" ? "text-soft-red" : "text-sky"}`}>
                      ✔
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Price teaser */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-extrabold text-text">{track.price}</span>
                <span className="text-sm text-text-muted">/month</span>
                <span className="text-sm text-text-light line-through ml-2">{track.originalPrice}</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={track.href}
                  className={`flex-1 text-center py-3 rounded-xl font-semibold text-sm no-underline transition-all ${track.color === "pink"
                      ? "bg-gradient-to-r from-soft-red to-coral text-white hover:shadow-lg"
                      : "bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white hover:shadow-lg"
                    }`}
                >
                  View Curriculum and Syllabus in Detail
                </Link>
                <Link
                  href="#contact"
                  className="px-5 py-3 rounded-xl font-semibold text-sm border border-border text-text-muted no-underline hover:border-soft-red hover:text-soft-red transition-all text-center"
                >
                  Demo
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

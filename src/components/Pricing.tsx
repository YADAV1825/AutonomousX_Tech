"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Foundation Track",
    subtitle: "Ages 13–18 · School Students",
    monthly: { price: 25, original: 40 },
    oneTime: { price: 169, discount: "55% OFF" },
    features: [
      "48 weeks of live instruction",
      "AI-assisted web development",
      "Python programming",
      "Hardware deep-dive modules",
      "AI art & 3D creation",
      "Capstone project + certificate",
      "Portfolio website",
    ],
    color: "pink" as const,
    popular: false,
  },
  {
    name: "Advanced AI Track",
    subtitle: "Ages 18+ · College & Graduates",
    monthly: { price: 40, original: 50 },
    oneTime: { price: 270, discount: "40% OFF" },
    features: [
      "Everything in Foundation Track",
      "Full-stack engineering (React/Next.js)",
      "PyTorch & JAX neural networks",
      "Fine-tune LLMs (PEFT/LoRA)",
      "Ship 3 SaaS products",
      "AI agents & automation",
      "Production GPU deployment",
    ],
    color: "blue" as const,
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative" id="pricing">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ice/30 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <h2 className="inline-block p-1.5 rounded-full bg-gradient-to-r from-soft-red via-coral to-sky shadow-sm">
              <span className="block px-5 sm:px-8 py-2.5 sm:py-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black bg-white rounded-full">
                Transparent Pricing
              </span>
            </h2>
          </div>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Invest in your future. Choose monthly flexibility or save big with a one-time purchase.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pt-4"
            >
              {/* Popular badge — outside overflow:hidden card */}
              {plan.popular && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-sky to-lavender text-white text-xs font-bold shadow-lg whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Glow background */}
              <div
                className={`pricing-card-glow glass-card p-5 sm:p-6 lg:p-8 h-full flex flex-col ${
                  plan.popular ? "ring-2 ring-sky/20" : ""
                }`}
              >

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-text mb-1">{plan.name}</h3>
                  <p className="text-sm text-text-muted">{plan.subtitle}</p>
                </div>

                {/* Monthly pricing */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-text">
                      ${plan.monthly.price}
                    </span>
                    <span className="text-text-muted text-sm">/month</span>
                    <span className="text-text-light line-through text-lg ml-2">
                      ${plan.monthly.original}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted">Billed monthly. Cancel anytime.</p>
                </div>

                {/* One-time pricing */}
                <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-cream/60 to-ice/60 border border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-text-muted font-medium mb-1">One-time purchase</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold text-text">
                          ${plan.oneTime.price}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                        plan.color === "pink"
                          ? "bg-blush text-soft-red"
                          : "bg-ice text-sky"
                      }`}
                    >
                      {plan.oneTime.discount}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-text">
                      <span
                        className={`mt-0.5 ${
                          plan.color === "pink" ? "text-soft-red" : "text-sky"
                        }`}
                      >
                        ✔
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="#contact"
                  className={`block text-center py-4 rounded-xl font-bold text-base no-underline transition-all ${
                    plan.color === "pink"
                      ? "bg-gradient-to-r from-soft-red to-coral text-white hover:shadow-[0_8px_30px_rgba(232,64,87,0.3)]"
                      : "bg-gradient-to-r from-sky to-lavender text-white hover:shadow-[0_8px_30px_rgba(126,184,240,0.3)]"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

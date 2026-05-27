"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { comparisonFeatures } from "@/data/comparison";

export default function ComparisonTable() {
  // Group by category
  const categories = Array.from(new Set(comparisonFeatures.map((f) => f.category)));

  return (
    <section className="py-24 relative" id="comparison">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <h2 className="inline-block p-1.5 rounded-full bg-gradient-to-r from-sky to-lavender shadow-sm">
              <span className="block px-8 py-3 text-3xl md:text-5xl font-extrabold text-black bg-white rounded-full">
                Compare Features
              </span>
            </h2>
          </div>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            See exactly what each track covers. The Advanced Track includes everything in Foundation — and much more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              {/* Header */}
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-5 text-sm font-semibold text-text-muted w-[50%]">
                    Feature
                  </th>
                  <th className="text-center p-5 w-[25%]">
                    <div className="inline-flex flex-col items-center gap-1">
                      <span className="text-sm font-bold text-text">Foundation</span>
                      <span className="text-xs text-text-light font-normal">Ages 13–18</span>
                    </div>
                  </th>
                  <th className="text-center p-5 w-[25%]">
                    <div className="inline-flex flex-col items-center gap-1">
                      <span className="text-sm font-bold text-text">Advanced AI</span>
                      <span className="text-xs text-text-light font-normal">Ages 18+</span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {categories.map((category) => (
                  <Fragment key={category}>
                    {/* Category header */}
                    <tr>
                      <td
                        colSpan={3}
                        className="px-5 pt-8 pb-3 text-lg font-extrabold text-text bg-cream/50 tracking-wide border-b border-border/50"
                      >
                        {category}
                      </td>
                    </tr>

                    {/* Features */}
                    {comparisonFeatures
                      .filter((f) => f.category === category)
                      .map((feature, idx) => (
                        <tr
                          key={feature.feature}
                          className={`border-b border-border/50 transition-colors hover:bg-cream/30 ${
                            idx % 2 === 0 ? "bg-white/30" : "bg-transparent"
                          }`}
                        >
                          <td className="p-4 pl-5 text-sm text-text">{feature.feature}</td>
                          <td className="p-4 text-center">
                            {feature.foundation ? (
                              <span className="comparison-check text-lg">✔</span>
                            ) : (
                              <span className="comparison-x text-lg">✖</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {feature.advanced ? (
                              <span className="comparison-check text-lg">✔</span>
                            ) : (
                              <span className="comparison-x text-lg">✖</span>
                            )}
                          </td>
                        </tr>
                      ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

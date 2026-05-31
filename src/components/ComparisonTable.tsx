"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { comparisonFeatures } from "@/data/comparison";
import DownloadPDFButton from "./DownloadPDFButton";

export default function ComparisonTable() {
  // Group by category
  const categories = Array.from(new Set(comparisonFeatures.map((f) => f.category)));

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative" id="comparison">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex justify-center mb-4">
            <h2 className="inline-block p-1.5 rounded-full bg-gradient-to-r from-sky to-lavender shadow-sm">
              <span className="block px-5 sm:px-8 py-2.5 sm:py-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black bg-white rounded-full">
                Compare Features
              </span>
            </h2>
          </div>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-8">
            See exactly what each track covers. The Advanced Track includes everything in Foundation — and much more.
          </p>
          <DownloadPDFButton />
        </motion.div>

        {/* Desktop Table — hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden hidden md:block"
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

        {/* Mobile Card View — visible only on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:hidden space-y-6"
        >
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-base font-extrabold text-text mb-3 px-1 tracking-wide">
                {category}
              </h3>
              <div className="space-y-2">
                {comparisonFeatures
                  .filter((f) => f.category === category)
                  .map((feature) => (
                    <div
                      key={feature.feature}
                      className="glass-card p-4 flex items-center justify-between gap-3"
                    >
                      <span className="text-sm text-text flex-1 leading-snug">{feature.feature}</span>
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="text-[10px] font-semibold text-text-muted uppercase">Found.</span>
                          {feature.foundation ? (
                            <span className="comparison-check text-base">✔</span>
                          ) : (
                            <span className="comparison-x text-base">✖</span>
                          )}
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="text-[10px] font-semibold text-text-muted uppercase">Adv.</span>
                          {feature.advanced ? (
                            <span className="comparison-check text-base">✔</span>
                          ) : (
                            <span className="comparison-x text-base">✖</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

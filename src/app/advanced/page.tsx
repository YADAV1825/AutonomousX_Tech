"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TRACKS } from "@/data/tracks";

const track = TRACKS.advanced;

export default function AdvancedPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ice/40 via-white to-cream/20 pointer-events-none" />
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-sky/10 to-lavender/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-ice text-sky text-sm font-semibold mb-6">
              Recommended for Ages 18+ · College, University & Graduates
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="gradient-text-blue">Advanced AI</span> Track
            </h1>

            <p className="text-lg text-text-muted max-w-2xl mb-8 leading-relaxed">
              {track.tagline} Ship 3 SaaS products, fine-tune LLMs, and deploy on cloud GPU clusters.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="#contact" className="btn-gradient no-underline">
                Book a Demo
              </Link>
              <Link href="/#pricing" className="btn-outline no-underline">
                View Pricing
              </Link>
            </div>

            {/* Pace & Outcomes */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Pace</h3>
                <ul className="space-y-2 text-sm text-text">
                  <li>📅 {track.pace.live}</li>
                  <li>📝 {track.pace.assignment}</li>
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Outcomes</h3>
                <ul className="space-y-2 text-sm text-text">
                  {track.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <span className="text-sky mt-0.5 text-xs">✔</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-center"
          >
            Full <span className="gradient-text-blue">Curriculum</span>
          </motion.h2>

          <div className="space-y-6">
            {track.quarters.map((quarter, qi) => (
              <motion.details
                key={quarter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: qi * 0.1 }}
                className="glass-card overflow-hidden group"
                open={qi === 0}
              >
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center hover:bg-white/30 transition-colors">
                  <div>
                    <h3 className="text-lg font-bold text-text">{quarter.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{quarter.theme}</p>
                  </div>
                  <span className="text-text-muted text-xl transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>

                <div className="px-6 pb-6 space-y-8">
                  {quarter.months.map((month) => (
                    <div key={month.title}>
                      <h4 className="font-bold text-text mb-2">{month.title}</h4>
                      <p className="text-xs text-text-muted mb-4">
                        <span className="font-semibold uppercase tracking-wider">Deliverable:</span>{" "}
                        {month.deliverable}
                      </p>

                      <div className="overflow-x-auto rounded-xl border border-border/50">
                        <table className="w-full min-w-[500px] text-sm">
                          <thead>
                            <tr className="bg-ice/40">
                              <th className="text-left p-3 font-semibold text-text-muted w-16">Week</th>
                              <th className="text-left p-3 font-semibold text-text-muted">Topic</th>
                              <th className="text-left p-3 font-semibold text-text-muted">What You Build</th>
                            </tr>
                          </thead>
                          <tbody>
                            {month.weeks.map((w) => (
                              <tr key={w.week} className="border-t border-border/30 hover:bg-ice/20 transition-colors">
                                <td className="p-3 font-mono text-text-muted">{w.week}</td>
                                <td className="p-3 text-text">{w.topic}</td>
                                <td className="p-3 text-text-muted">{w.build}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}

                  {quarter.finalDeliverables && (
                    <div className="p-5 rounded-xl border border-dashed border-sky/20 bg-ice/20">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-sky mb-3">
                        Final Deliverables
                      </h4>
                      <ul className="space-y-1.5 text-sm text-text">
                        {quarter.finalDeliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <span className="text-sky text-xs mt-0.5">✔</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="glass-card p-10 glow-blue">
            <h3 className="text-2xl font-extrabold text-text mb-3">Ready to Build Production AI?</h3>
            <p className="text-text-muted mb-6">
              Join the Advanced AI Track and ship 3 SaaS products, fine-tune LLMs, and master production AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#contact" className="btn-gradient no-underline">
                Book a Demo
              </Link>
              <Link href="/#pricing" className="btn-outline no-underline">
                View Pricing  $40/mo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

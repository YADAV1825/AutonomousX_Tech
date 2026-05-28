"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TRACKS } from "@/data/tracks";
import DemoBooking from "@/components/DemoBooking";

const track = TRACKS.foundation;

export default function FoundationPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-44 pb-12 sm:pt-48 sm:pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blush/40 via-white to-cream/30 pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-soft-red/10 to-rose/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blush text-soft-red text-sm font-semibold mb-6">
              Ages 13–18 · School Students
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6">
              <span className="gradient-text-pink">Foundation</span> Track
            </h1>

            <p className="text-lg text-text-muted max-w-2xl mb-8 leading-relaxed">
              {track.tagline} From first website to running AI models  no prior coding required.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Link href="#contact" className="btn-gradient no-underline text-center">
                Book a Demo
              </Link>
              <Link href="/#pricing" className="btn-outline no-underline text-center">
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
                      <span className="text-soft-red mt-0.5 text-xs">✔</span>
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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-center"
          >
            Full <span className="gradient-text-pink">Curriculum</span>
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
                            <tr className="bg-cream/40">
                              <th className="text-left p-3 font-semibold text-text-muted w-16">Week</th>
                              <th className="text-left p-3 font-semibold text-text-muted">Topic</th>
                              <th className="text-left p-3 font-semibold text-text-muted">What You Build</th>
                            </tr>
                          </thead>
                          <tbody>
                            {month.weeks.map((w) => (
                              <tr key={w.week} className="border-t border-border/30 hover:bg-cream/20 transition-colors">
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
                    <div className="p-5 rounded-xl border border-dashed border-soft-red/20 bg-blush/20">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-soft-red mb-3">
                        Final Deliverables
                      </h4>
                      <ul className="space-y-1.5 text-sm text-text">
                        {quarter.finalDeliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <span className="text-soft-red text-xs mt-0.5">✔</span>
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



      {/* Demo Booking Section */}
      <DemoBooking />
    </>
  );
}

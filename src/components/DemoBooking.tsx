"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DemoBooking() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);

        setTimeout(() => setSubmitted(false), 15000);

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blush/20 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Book a <span className="gradient-text">Demo</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            See the platform in action. Get your questions answered. No commitment required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8"
        >
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="demo-name" className="block text-sm font-semibold text-text mb-2">
                  Name
                </label>
                <input
                  id="demo-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-border text-text text-base input-glow transition-all placeholder:text-text-light"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="demo-email" className="block text-sm font-semibold text-text mb-2">
                  Email
                </label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-border text-text text-base input-glow transition-all placeholder:text-text-light"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="demo-message" className="block text-sm font-semibold text-text mb-2">
                  Message
                </label>
                <textarea
                  id="demo-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-border text-text text-base input-glow transition-all resize-none placeholder:text-text-light"
                  placeholder="Tell us about your learning goals..."
                />
              </div>

              <button
                type="submit"
                className="btn-gradient w-full !text-base !py-4"
              >
                {submitted ? "✔ Demo Request Sent!" : "Book a Demo"}
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center text-green-600 font-medium"
                >
                  <strong>Your Message was sent Successfully!</strong><br></br>Thank you! We&apos;ll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="glass-card p-6">
              <h4 className="font-bold text-text mb-3">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blush flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-soft-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-medium">Email</p>
                    <a href="mailto:yrohit1825@gmail.com" className="text-sm text-soft-red no-underline font-medium hover:underline">
                      yrohit1825@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-ice flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-medium">Response Time</p>
                    <p className="text-sm text-text">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-medium">Bootcamp Start</p>
                    <p className="text-sm text-text">June 2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="font-bold text-text mb-2">What to expect</h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-soft-red mt-0.5">→</span>
                  15-minute live walkthrough
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-red mt-0.5">→</span>
                  Curriculum deep-dive
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-red mt-0.5">→</span>
                  Q&A with the instructor
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-red mt-0.5">→</span>
                  No commitment required
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

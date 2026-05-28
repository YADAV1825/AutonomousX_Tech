"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface QuarterBlock {
  quarter: string;
  period: string;
  theme: string;
  color: string;
  months: { name: string; focus: string; deliverable: string }[];
}

const roadmap: QuarterBlock[] = [
  {
    quarter: "Bootcamp Kickoff",
    period: "June 2026",
    theme: "Orientation & Setup",
    color: "soft-red",
    months: [
      {
        name: "June 2026",
        focus: "Orientation, tool setup, first AI-assisted coding session",
        deliverable: "Dev environment ready + first website deployed",
      },
    ],
  },
  {
    quarter: "Q1 — Build & Ship with AI",
    period: "Jul – Sep 2026",
    theme: '"I can make the internet."',
    color: "soft-red",
    months: [
      {
        name: "Month 1 — Web Dev with AI",
        focus: "HTML, CSS, AI-assisted coding (Cursor, Bolt.new, v0, Lovable)",
        deliverable: "Live personal website on Vercel",
      },
      {
        name: "Month 2 — Python Fundamentals",
        focus: "Variables, loops, functions, modules, text-based games",
        deliverable: "Python guessing game + calculator",
      },
      {
        name: "Month 3 — Git & Deployment",
        focus: "GitHub, Streamlit apps, frontend + backend basics",
        deliverable: "GitHub profile + 2 live projects",
      },
    ],
  },
  {
    quarter: "Q2 — Hardware & AI Tools",
    period: "Oct – Dec 2026",
    theme: '"I understand the machine and the magic."',
    color: "sky",
    months: [
      {
        name: "Month 4 — Hardware Deep Dive",
        focus: "CPU/GPU/TPU architecture, RAM, storage, thermals",
        deliverable: "Tech comparison blog post",
      },
      {
        name: "Month 5 — AI Tools Mastery",
        focus: "ChatGPT, Claude, Gemini, Copilot, NotebookLM, Perplexity",
        deliverable: '"My AI Toolkit" with 5 mini-projects',
      },
      {
        name: "Month 6 — AI Art & 3D",
        focus: "AI image generation, 3D asset creation, game dev with AI",
        deliverable: "3D asset + AI art gallery",
      },
    ],
  },
  {
    quarter: "Q3 — AI Practitioner",
    period: "Jan – Feb 2027",
    theme: '"I can talk to the brain (models)."',
    color: "lavender",
    months: [
      {
        name: "Month 7 — Python for Data",
        focus: "Pandas, NumPy, Matplotlib, APIs, data analysis",
        deliverable: "Data analysis project with charts",
      },
      {
        name: "Month 8 — Cloud GPUs",
        focus: "Google Colab, Kaggle, Lightning AI, GPU tiers",
        deliverable: "Colab notebook + Kaggle submission",
      },
      {
        name: "Month 9 — Open Source Models",
        focus: "Hugging Face, DistilBERT, TinyLlama, LLM concepts",
        deliverable: "Live web app using a real AI model",
      },
    ],
  },
  {
    quarter: "Q4 — Capstone & Graduation",
    period: "March 2027",
    theme: '"I am an AI Builder."',
    color: "soft-red",
    months: [
      {
        name: "Months 10–11 — Final Projects",
        focus: "AI agents, game dev with AI assets, 3D worlds, automation",
        deliverable: "Working AI agent + playable mini-game",
      },
      {
        name: "Month 12 — Graduation",
        focus: "Portfolio assembly, presentation skills, Demo Day",
        deliverable: "Certificate + polished portfolio website",
      },
    ],
  },
];

export default function CurriculumTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Moves the ball from 0% (top) to 100% (bottom)
  const yPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Make the ball fade in when we start scrolling
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative" id="curriculum-timeline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <h2 className="inline-block p-1.5 rounded-full bg-gradient-to-r from-soft-red via-coral to-sky shadow-sm">
              <span className="block px-5 sm:px-8 py-2.5 sm:py-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black bg-white rounded-full">
                Learning Roadmap
              </span>
            </h2>
          </div>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Bootcamp kicks off <strong className="text-text">June 2026</strong>. Full batch runs{" "}
            <strong className="text-text">July 2026 → March 2027</strong>. Here&apos;s what you&apos;ll learn each quarter.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto py-10">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-border to-transparent transform md:-translate-x-1/2 z-0" />
          
          {/* Scrolling Ball */}
          <motion.div 
            className="absolute left-4 md:left-[50%] w-5 h-5 rounded-full bg-gradient-to-r from-soft-red to-sky shadow-[0_0_20px_rgba(232,64,87,0.8)] z-20 origin-center -ml-2 md:-ml-2.5"
            style={{ 
              top: yPosition, 
              opacity: opacity
            }}
          />

          {/* Quarter blocks */}
          <div className="space-y-16">
            {roadmap.map((block, qi) => (
              <motion.div
                key={block.quarter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: qi * 0.08 }}
                className={`relative z-10 pl-12 md:pl-0 ${qi % 2 === 0 ? "md:pr-[50%] md:mr-6" : "md:pl-[50%] md:ml-6"}`}
              >
                {/* Dot for each card */}
                <div 
                  className={`hidden md:block absolute top-[28px] w-4 h-4 rounded-full border-4 border-white ${
                    block.color === "soft-red" ? "bg-soft-red" : block.color === "sky" ? "bg-sky" : "bg-lavender"
                  } ${qi % 2 === 0 ? "right-[-14px]" : "left-[-14px]"}`}
                />
                
                {/* Mobile dot */}
                <div 
                  className={`md:hidden absolute left-[-4px] top-[28px] w-4 h-4 rounded-full border-4 border-white ${
                    block.color === "soft-red" ? "bg-soft-red" : block.color === "sky" ? "bg-sky" : "bg-lavender"
                  }`}
                />

                <div className="glass-card overflow-hidden">
                  {/* Quarter header */}
                  <div
                    className={`px-4 py-4 sm:px-6 sm:py-5 border-b border-border/50 flex flex-col md:flex-row md:items-center md:justify-between gap-2 ${
                      block.color === "soft-red"
                        ? "bg-blush/40"
                        : block.color === "sky"
                        ? "bg-ice/40"
                        : "bg-gradient-to-r from-blush/20 to-ice/20"
                    }`}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-text">{block.quarter}</h3>
                      <p className="text-sm text-text-muted mt-0.5 italic">{block.theme}</p>
                    </div>
                    <span
                      className={`inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap self-start md:self-auto ${
                        block.color === "soft-red"
                          ? "bg-soft-red/10 text-soft-red"
                          : block.color === "sky"
                          ? "bg-sky/10 text-[#2563eb]"
                          : "bg-lavender/10 text-[#7c3aed]"
                      }`}
                    >
                      {block.period}
                    </span>
                  </div>

                  {/* Months grid */}
                  <div className={`grid gap-0 divide-y divide-border/30 ${block.months.length === 1 ? "" : ""}`}>
                    {block.months.map((month) => (
                      <div key={month.name} className="px-4 py-4 sm:px-6 sm:py-5 hover:bg-cream/20 transition-colors">
                        <div className="flex flex-col gap-4">
                          {/* Month name */}
                          <div>
                            <p className="font-bold text-text text-sm mb-1">{month.name}</p>
                          </div>

                          {/* Focus */}
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-text-light mb-1">What you&apos;ll learn</p>
                            <p className="text-sm text-text-muted leading-relaxed">{month.focus}</p>
                          </div>

                          {/* Deliverable */}
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-text-light mb-1">You&apos;ll deliver</p>
                            <p className="text-sm text-text font-medium">{month.deliverable}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

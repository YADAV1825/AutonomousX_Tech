"use client";

import { motion } from "framer-motion";

const experience = [
  {
    period: "AI & Machine Learning",
    description:
      "Deep expertise in PyTorch, JAX, TensorFlow, and large language models. Hands-on experience with fine-tuning, distributed training on GPUs & TPUs, and building production AI systems.",
  },
  {
    period: "Full-Stack Web Development",
    description:
      "Proficient in React, Next.js, TypeScript, Node.js, and modern deployment stacks. Built and shipped multiple SaaS products from concept to production.",
  },
  {
    period: "LLMs & Real-World AI Tools",
    description:
      "Expert in prompt engineering, RAG architectures, local LLM deployment (Ollama, vLLM), quantization, and multi-agent AI systems.",
  },
  {
    period: "Hardware Architecture",
    description:
      "Deep understanding of CPU architectures, GPU compute (CUDA/VRAM), TPU programming, memory hierarchies, and performance optimization.",
  },
];

export default function Instructor() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative" id="instructor">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <h2 className="inline-block p-1.5 rounded-full bg-gradient-to-r from-soft-red via-pink-400 to-rose shadow-sm">
              <span className="block px-5 sm:px-8 py-2.5 sm:py-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black bg-white rounded-full">
                Your Instructor
              </span>
            </h2>
          </div>
          <p className="text-text-muted text-lg">
            Learn from the person who built LLMs from scratch !!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 text-center">
              {/* Avatar - Infinite Flip Animation */}
              <motion.div
                className="relative w-48 h-52 sm:w-56 sm:h-64 md:w-64 md:h-72 lg:w-80 lg:h-87 mx-auto mb-6 perspective-[1000px]"
                animate={{ rotateY: [0, 0, 180, 180, 360] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.4, 0.5, 0.9, 1]
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Image */}
                <div
                  className="absolute inset-0 w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white bg-white"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <img src="/images/rohit.png" alt="Rohit Yadav" className="w-full h-full object-cover" />
                </div>

                {/* Back Image (Anime) */}
                <div
                  className="absolute inset-0 w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white bg-white"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <img src="/images/anime.png" alt="Anime Rohit" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold text-text mb-1">Rohit Yadav</h3>
              <p className="flex items-center justify-center gap-1.5 text-sm text-text-muted font-semibold">
                <img src="/images/autonomousX.png" alt="AutonomousX" className="w-4 h-4 rounded-full object-cover" />
                Founder of AutonomousX AI
              </p>
              <p className="text-xs text-text-muted mb-4">TPU & JAX Training | AutonomousX AI Academy</p>

              {/* Badges/Links Row */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {/* Google TRC Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blush to-ice border border-blush-dark/30 shadow-sm">
                  <img src="/images/google.jpg" alt="Google" className="w-4 h-4 rounded-full object-cover" />
                  <span className="text-[11px] font-bold text-soft-red">Google TRC Recipient</span>
                </div>
                {/* AutonomousX */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black border border-gray-800 shadow-sm">
                  <img src="/images/autonomousX.png" alt="AutonomousX" className="w-4 h-4 object-contain rounded-full bg-white" />
                  <span className="text-[11px] font-bold text-white">AutonomousX</span>
                </div>
                {/* Hugging Face */}
                <a href="https://huggingface.co/AutonomousX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border shadow-sm hover:shadow-md transition-shadow no-underline text-text">
                  <span className="text-[11px] font-bold">Hugging Face</span>
                </a>
                {/* Resume */}
                <a href="/Rohit_resume_Compiler.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky/10 to-lavender/10 border border-sky/30 shadow-sm hover:shadow-md transition-shadow no-underline text-sky">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-[11px] font-bold">Resume</span>
                </a>
              </div>

              {/* Achievements & Education */}
              <div className="text-left bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-gray-200 shadow-lg shadow-black/5 text-sm mb-6 transition-all hover:shadow-xl">
                <div className="flex items-start gap-3 mb-3">
                  <img src="/images/nit_logo.png" alt="NIT" className="w-5 h-5 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  <span className="leading-tight">B.Tech in IT, <strong>NIT Jalandhar</strong></span>
                </div>
                <hr className="border-t-2 border-black/20 my-3" />
                <div className="flex items-start gap-3 mb-3">
                  <img src="/images/kvpy.png" alt="KVPY" className="w-5 h-5 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  <span className="leading-tight"><strong>KVPY AIR 2590</strong></span>
                </div>
                <hr className="border-t-2 border-black/20 my-3" />
                <div className="flex items-start gap-3 mb-3">
                  <img src="/images/JEE.png" alt="JEE" className="w-5 h-5 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  <span className="leading-tight"><strong>JEE MAINS 98.7%ile</strong></span>
                </div>
                <hr className="border-t-2 border-black/20 my-3" />
                <div className="flex items-start gap-3">
                  <img src="/images/IOQM.jpg" alt="IOQM" className="w-5 h-5 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  <span className="leading-tight"><strong>IOQM Merit</strong></span>
                </div>
              </div>

              <p className="text-sm text-text-muted leading-relaxed">
                AI engineer, educator, and mentor. Passionate about making cutting-edge AI accessible to everyone from school students to working professionals.
              </p>
              <h6>
                <strong>I build LLMs from scratch</strong>
              </h6>
            </div>
          </motion.div>

          {/* Experience Cards */}
          <div className="lg:col-span-3 space-y-4">
            {experience.map((item, i) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${i % 2 === 0
                      ? "bg-blush text-soft-red"
                      : "bg-ice text-sky"
                      }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                      {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
                      {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                      {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-1">{item.period}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
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

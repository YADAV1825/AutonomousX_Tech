"use client";

import { useRef } from "react";

interface LogoItem {
  src: string;
  alt: string;
}

const homeLogos: LogoItem[] = [
  { src: "/images/home/chatgpt-logo.webp", alt: "ChatGPT" },
  { src: "/images/home/Claude.jpg", alt: "Claude AI" },
  { src: "/images/home/Gemini-770x435-1.webp", alt: "Google Gemini" },
  { src: "/images/home/KIMI-K2.jpg", alt: "Kimi K2" },
  { src: "/images/home/Visual_Studio_Code_1.35_icon.svg.png", alt: "VS Code" },
  { src: "/images/home/github-copilot-cli.png", alt: "GitHub Copilot" },
  { src: "/images/home/Google-Colab-Guide-e1620759490851.jpg", alt: "Google Colab" },
  { src: "/images/home/AI-first-Google-Colab-now-available-banner.original.png", alt: "Google Colab AI" },
];

const advancedLogos: LogoItem[] = [
  { src: "/images/advanced/pytorch.png", alt: "PyTorch" },
  { src: "/images/advanced/tensorflow.png", alt: "TensorFlow" },
  { src: "/images/advanced/Python-logo-notext.svg.png", alt: "Python" },
  { src: "/images/advanced/ollama-logo.png", alt: "Ollama" },
  { src: "/images/advanced/h100-og.jpg", alt: "NVIDIA H100" },
  { src: "/images/advanced/tpu-2.webp", alt: "Google TPU" },
  { src: "/images/advanced/unsloth logo black text.png", alt: "Unsloth" },
  { src: "/images/advanced/chatgpt-logo.webp", alt: "ChatGPT" },
  { src: "/images/advanced/Claude.jpg", alt: "Claude" },
  { src: "/images/advanced/github-copilot-cli.png", alt: "GitHub Copilot" },
];

function LogoTrack({ logos, reverse = false }: { logos: LogoItem[]; reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  // Duplicate for infinite scroll
  const doubled = [...logos, ...logos];

  return (
    <div className="overflow-hidden py-4 group">
      <div
        ref={trackRef}
        className={reverse ? "logo-track-reverse" : "logo-track"}
      >
        {doubled.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex-shrink-0 h-10 sm:h-12 lg:h-14 px-3 sm:px-4 flex items-center justify-center glass rounded-xl hover:shadow-md transition-shadow"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-7 max-w-[100px] sm:h-8 sm:max-w-[120px] lg:h-10 lg:max-w-[140px] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoSlider() {
  return (
    <section className="py-10 sm:py-12 lg:py-16 relative overflow-hidden" id="logos">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 lg:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 lg:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
        <p className="text-center text-xs sm:text-sm font-medium text-text-muted uppercase tracking-widest">
          Tools & Technologies You&apos;ll Master
        </p>
      </div>

      <LogoTrack logos={homeLogos} />
      <LogoTrack logos={advancedLogos} reverse />
    </section>
  );
}

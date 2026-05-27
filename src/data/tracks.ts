export interface Week {
  week: number;
  topic: string;
  build: string;
}

export interface Month {
  title: string;
  deliverable: string;
  weeks: Week[];
}

export interface Quarter {
  id: string;
  title: string;
  theme: string;
  months: Month[];
  finalDeliverables?: string[];
}

export interface Track {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  pace: { live: string; assignment: string };
  outcomes: string[];
  quarters: Quarter[];
}

export const TRACKS: Record<string, Track> = {
  foundation: {
    id: "foundation",
    title: "Foundation Track",
    subtitle: "Ages 13–18 · School Students",
    tagline:
      "Project-driven learning: build websites, games, and AI-powered apps  no boring theory.",
    pace: {
      live: "2 hours/week live",
      assignment: "1 hour/week assignment",
    },
    outcomes: [
      "Live website portfolio deployed online",
      "A simple game or app with AI integration",
      "Practical hardware understanding (CPU/RAM/GPU/SSD)",
      "Confident use of modern AI tools to create",
    ],
    quarters: [
      {
        id: "f-q1",
        title: "Quarter 1: Build & Ship with AI",
        theme: '"I can make the internet."',
        months: [
          {
            title: "Month 1: Vibe Coding & First Websites",
            deliverable: "Live personal website deployed on Vercel.",
            weeks: [
              { week: 1, topic: "What is the web? How do websites work? Intro to AI-assisted coding (Cursor, Bolt.new, v0, Lovable).", build: 'A personal "About Me" page using AI prompts.' },
              { week: 2, topic: "HTML structure with AI help. Tags, images, links.", build: "A photo gallery page for their hobby." },
              { week: 3, topic: "CSS styling with AI. Colors, fonts, layouts.", build: "A styled landing page for a fake pizza shop." },
              { week: 4, topic: "Responsive design basics. Mobile vs desktop.", build: "A portfolio homepage (live on Vercel)." },
            ],
          },
          {
            title: "Month 2: Python  The Language of AI",
            deliverable: "A Python text-based game (Guess the Number or Quiz).",
            weeks: [
              { week: 5, topic: "Python setup (VS Code + Replit). Variables, print, input.", build: "A chatbot that asks your name and favorite color." },
              { week: 6, topic: "Loops (for/while) and conditionals (if/else).", build: "A number guessing game." },
              { week: 7, topic: "Lists, dictionaries, simple data.", build: 'A "Top 5 Movies" list with ratings.' },
              { week: 8, topic: "Functions and modules.", build: "A mini calculator with +, −, ×, ÷." },
            ],
          },
          {
            title: "Month 3: Ship It  Deployment & Git Basics",
            deliverable: "GitHub profile + 2 live projects.",
            weeks: [
              { week: 9, topic: "What is Git? Saving code history with GitHub.", build: "Push their Python game to GitHub." },
              { week: 10, topic: "Deploying Python apps online.", build: "Deploy a simple Streamlit app." },
              { week: 11, topic: "Connecting frontend + backend basics.", build: 'A "Joke Generator" site (HTML frontend, Python API).' },
              { week: 12, topic: "Quarter 1 Review + Show & Tell.", build: "Present their portfolio + game to the batch." },
            ],
          },
        ],
      },
      {
        id: "f-q2",
        title: "Quarter 2: The Hardware & AI Tools Universe",
        theme: '"I understand the machine and the magic."',
        months: [
          {
            title: "Month 4: Hardware Deep Dive",
            deliverable: 'A blog post/video: "The Perfect Student Laptop Under $600."',
            weeks: [
              { week: 13, topic: "CPU Architecture: U/H/HX/P series, cores, threads, clock speed.", build: "Benchmark their own laptop vs a friend's." },
              { week: 14, topic: "Memory: DDR4 vs DDR5 vs LPDDR5X, cache (L1/L2/L3).", build: 'Create a "Best Laptop for Coding" comparison chart.' },
              { week: 15, topic: "GPUs vs TPUs: VRAM, 8GB vs 16GB, what TPUs do.", build: "Draw a diagram: CPU vs GPU vs TPU." },
              { week: 16, topic: "Storage & thermals: SSD vs HDD, throttling, battery reality.", build: "Diagnose their own machine's specs using tools." },
            ],
          },
          {
            title: "Month 5: AI Tools Mastery (The Modern Toolbox)",
            deliverable: 'A "My AI Toolkit" Notion page with 5 completed mini-projects.',
            weeks: [
              { week: 17, topic: "ChatGPT, Claude, Gemini: how to ask properly (task delegation).", build: "Use AI to write a story, then critique it." },
              { week: 18, topic: "Codex & GitHub Copilot: AI that writes code with you.", build: "Build a to-do list app using only AI assistance." },
              { week: 19, topic: "NotebookLM & Perplexity: research and learning with AI.", build: "Create a study guide for their hardest subject." },
              { week: 20, topic: "Advanced agent tools (research + verification mindset).", build: "Find 10 facts about a topic and verify with AI." },
            ],
          },
          {
            title: "Month 6: AI Creation  Art, 3D, and Games",
            deliverable: "A 3D asset + AI art gallery.",
            weeks: [
              { week: 21, topic: "AI image generation basics + prompt craft.", build: "10 AI-generated images for their portfolio." },
              { week: 22, topic: "3D AI tools for characters/objects.", build: "A 3D character or object for a game." },
              { week: 23, topic: "AI in game development (Roblox/Unity/Godot workflows).", build: "A simple 3D scene with AI textures." },
              { week: 24, topic: "Quarter 2 Review: hardware + AI tools demo day.", build: 'Present: "I made this with AI."' },
            ],
          },
        ],
      },
      {
        id: "f-q3",
        title: "Quarter 3: Junior AI Practitioner",
        theme: '"I can talk to the brain (models)."',
        months: [
          {
            title: "Month 7: Python for Data & AI",
            deliverable: "A data analysis project with charts.",
            weeks: [
              { week: 25, topic: "Pandas basics: read CSVs, filter, explore.", build: "Analyze a dataset of their favorite sports players." },
              { week: 26, topic: "NumPy basics: arrays + simple math.", build: "A grade calculator that handles 100 students." },
              { week: 27, topic: "Matplotlib: charts and graphs.", build: "Visualize their screen time or gaming stats." },
              { week: 28, topic: "APIs: what is an API? calling a weather API.", build: "A script that tells them today's weather." },
            ],
          },
          {
            title: "Month 8: Cloud GPUs  Touching Real AI Compute",
            deliverable: "A Colab notebook + Kaggle profile + first submission.",
            weeks: [
              { week: 29, topic: "Google Colab: using a free T4 GPU.", build: "Run a pre-written image classifier on Colab." },
              { week: 30, topic: "Kaggle: datasets, notebooks, beginner competitions.", build: "Enter a beginner Kaggle competition." },
              { week: 31, topic: "Lightning AI: what is a GPU cluster? credits mindset.", build: "Run a text-generation model on cloud compute." },
              { week: 32, topic: "GPU specs: A100 vs T4, VRAM limits, tiers.", build: 'Create a "GPU Tier List" for AI beginners.' },
            ],
          },
          {
            title: "Month 9: Open Source Models & Hugging Face",
            deliverable: "A live web app using a real AI model to answer questions.",
            weeks: [
              { week: 33, topic: "Hugging Face: model cards, spaces, datasets.", build: "Create an account and explore 5 models." },
              { week: 34, topic: "Using small models (DistilBERT/TinyLlama/Phi).", build: "A sentiment analyzer for movie reviews." },
              { week: 35, topic: "What are LLMs? simplified transformers intuition.", build: "Draw/explain how a transformer works in their own words." },
              { week: 36, topic: "API vs local models: tradeoffs and cost.", build: 'An "Ask the AI" web app (API-powered).' },
            ],
          },
        ],
      },
      {
        id: "f-q4",
        title: "Quarter 4: Capstone & Real-World Projects",
        theme: '"I am an AI Builder."',
        months: [
          {
            title: "Month 10: SaaS AI Projects  Docs & Video Calls",
            deliverable: "Two mini SaaS apps: AI Docs Maker and Video Call AI.",
            weeks: [
              { week: 37, topic: "Building a SaaS website for making Docs with AI.", build: "A document generation AI tool." },
              { week: 38, topic: "Adding export and sharing to Docs SaaS.", build: "PDF export and shareable links." },
              { week: 39, topic: "Building a simple SaaS for video calls.", build: "A basic WebRTC video chat room." },
              { week: 40, topic: "Integrating AI notes into the video call app.", build: "Live transcripts for video calls." },
            ],
          },
          {
            title: "Month 11: 3D AI & PIXAL3D",
            deliverable: "An app to turn images to 3D models with PIXAL3D.",
            weeks: [
              { week: 41, topic: "Introduction to 3D AI & PIXAL3D.", build: "Setup PIXAL3D API access." },
              { week: 42, topic: "Uploading images and generating 3D models.", build: "An image-to-3D pipeline." },
              { week: 43, topic: "Building a 3D model viewer gallery.", build: "A web gallery with 3D model viewer." },
              { week: 44, topic: "Testing and polish.", build: "Playtest a classmate's app." },
            ],
          },
          {
            title: "Month 12: Capstone, Portfolio, Graduation",
            deliverable: "Graduation demo + certificate.",
            weeks: [
              { week: 45, topic: "Portfolio assembly: GitHub, personal site, demos.", build: "A polished portfolio website." },
              { week: 46, topic: "Presentation skills: demoing like a founder.", build: "A 3-minute pitch of their best project." },
              { week: 47, topic: "Final project week: build anything with AI help.", build: "The capstone." },
              { week: 48, topic: "Graduation Demo Day.", build: "Live demo + certificate." },
            ],
          },
        ],
        finalDeliverables: [
          "Live portfolio website",
          "GitHub with 6+ projects",
          "1 deployed AI-powered app",
          "1 game or 3D scene",
          "Certificate: Foundation Track Graduate",
        ],
      },
    ],
  },
  advanced: {
    id: "advanced",
    title: "Advanced AI Track",
    subtitle: "Ages 18+ · College, University & Graduates",
    tagline:
      "From zero to shipping AI SaaS. Heavy coding and production-grade deployment.",
    pace: {
      live: "2 hours/week live",
      assignment: "3–4 hours/week self-work",
    },
    outcomes: [
      "Ship 3 complete SaaS products",
      "Understand LLM architecture and production inference",
      "Fine-tune models (PEFT/LoRA) and publish to Hugging Face",
      "Deploy on cloud GPU clusters with monitoring",
    ],
    quarters: [
      {
        id: "a-q1",
        title: "Quarter 1: Full-Stack Engineering",
        theme: '"I can build anything on the web."',
        months: [
          {
            title: "Month 1: Frontend Mastery",
            deliverable: "A type-safe interactive web app.",
            weeks: [
              { week: 1, topic: "HTML5 semantics, accessibility, SEO basics.", build: "A landing page for a product." },
              { week: 2, topic: "CSS3: Flexbox, Grid, animations, variables.", build: "A responsive dashboard layout." },
              { week: 3, topic: "JavaScript ES6+: async/await, DOM.", build: "An interactive to-do app." },
              { week: 4, topic: "TypeScript basics: types, interfaces, generics intro.", build: "Refactor the to-do app to TypeScript." },
            ],
          },
          {
            title: "Month 2: React & Modern Frontend",
            deliverable: "A Next.js marketing site + dashboard UI.",
            weeks: [
              { week: 5, topic: "React fundamentals: components, state, hooks.", build: "A job board UI." },
              { week: 6, topic: "Next.js app router, SSR/SSG basics.", build: "A blog with markdown support." },
              { week: 7, topic: "Tailwind + component systems + dark mode.", build: "A polished SaaS landing page clone." },
              { week: 8, topic: "Forms & validation (React Hook Form + Zod).", build: "A multi-step onboarding form." },
            ],
          },
          {
            title: "Month 3: SaaS Product #1  3D Models from Images",
            deliverable: "SaaS Product #1: 3D generation platform using PIXAL3D, deployed live.",
            weeks: [
              { week: 9, topic: "Backend basics: FastAPI vs Node.js. Image uploads.", build: "An API for image handling." },
              { week: 10, topic: "Integrating PIXAL3D APIs for image-to-3D generation.", build: "Automated 3D model generation." },
              { week: 11, topic: "Auth & Stripe billing for 3D model downloads.", build: "A checkout system for assets." },
              { week: 12, topic: "Deployment & 3D viewer integration (Three.js).", build: "A deployed 3D SaaS platform." },
            ],
          },
        ],
      },
      {
        id: "a-q2",
        title: "Quarter 2: Python & AI Core",
        theme: '"I understand the engine under the hood."',
        months: [
          {
            title: "Month 4: Advanced Python for AI",
            deliverable: "A Python CLI tool + data analysis notebook.",
            weeks: [
              { week: 13, topic: "OOP deep dive: dataclasses, Pydantic patterns.", build: "A data pipeline class system." },
              { week: 14, topic: "Functional Python: decorators, generators, itertools.", build: "A memory-efficient data processor." },
              { week: 15, topic: "Async Python: asyncio, concurrent execution.", build: "A scraper that hits 100 URLs in parallel." },
              { week: 16, topic: "Python data stack: Pandas/NumPy/Matplotlib/Seaborn.", build: "A data visualization dashboard." },
            ],
          },
          {
            title: "Month 5: PyTorch  Building Neural Networks",
            deliverable: "A trained image model + training log.",
            weeks: [
              { week: 17, topic: "Tensors, GPU acceleration, autograd.", build: "A tensor math engine on GPU." },
              { week: 18, topic: "Neural net from scratch (no nn.Module).", build: "An MNIST digit classifier from scratch." },
              { week: 19, topic: "nn.Module, optimizers, training loops.", build: "A proper image classifier with DataLoader." },
              { week: 20, topic: "Transfer learning: fine-tune ResNet, save models.", build: "A cat vs dog classifier with strong accuracy." },
            ],
          },
          {
            title: "Month 6: JAX & Distributed Thinking",
            deliverable: "A JAX benchmark report + a TPU-trained small model.",
            weeks: [
              { week: 21, topic: "JAX basics: jit/grad/vmap mental model.", build: "A function optimizer using grad." },
              { week: 22, topic: "pmap and multi-device programming.", build: "Parallel compute across CPU cores." },
              { week: 23, topic: "Why TPUs? TPU vs GPU. JAX on TPU (Colab TPU v2).", build: "Benchmark CPU vs GPU vs TPU." },
              { week: 24, topic: "Scaling laws intro: data, compute, and tradeoffs.", build: 'A plan: "How I would train a 1B model."' },
            ],
          },
        ],
      },
      {
        id: "a-q3",
        title: "Quarter 3: LLM Engineering & Production AI",
        theme: '"I control the large models."',
        months: [
          {
            title: "Month 7: Hugging Face Ecosystem",
            deliverable: "A fine-tuned model published on Hugging Face Hub.",
            weeks: [
              { week: 25, topic: "Transformers: pipelines, tokenizers, model cards.", build: "A sentiment analysis API." },
              { week: 26, topic: "Fine-tuning with PEFT/LoRA.", build: "A fine-tuned model for their domain." },
              { week: 27, topic: "Datasets library: process 10GB+ efficiently.", build: "A cleaned dataset ready for training." },
              { week: 28, topic: "Tokenizers: BPE/WordPiece + training basics.", build: "A tokenizer trained on their own corpus." },
            ],
          },
          {
            title: "Month 8: Local LLMs & Optimization",
            deliverable: "A local LLM stack (Ollama + UI) running on laptop/VM.",
            weeks: [
              { week: 29, topic: "Ollama: run modern open models locally.", build: "A local chatbot web UI." },
              { week: 30, topic: "Quantization: 4-bit/8-bit loading and tradeoffs.", build: "A quantized model running on 8GB VRAM." },
              { week: 31, topic: "Efficient fine-tuning workflows (speed + memory).", build: "A fine-tuned chatbot on cheap compute." },
              { week: 32, topic: "vLLM/TGI: production inference servers.", build: "A local inference API serving a 7B model." },
            ],
          },
          {
            title: "Month 9: SaaS Product #2  Video Calling & Learning",
            deliverable: "SaaS Product #2: AI-powered video calling and learning platform.",
            weeks: [
              { week: 33, topic: "WebRTC basics & video call integration.", build: "A real-time video chat interface." },
              { week: 34, topic: "Real-time audio-to-text transcription models.", build: "Live captions for video calls." },
              { week: 35, topic: "AI summarization & learning notes extraction.", build: "Auto-generated study guides from calls." },
              { week: 36, topic: "Live deployment of Video AI SaaS.", build: "A live video-learning SaaS." },
            ],
          },
        ],
      },
      {
        id: "a-q4",
        title: "Quarter 4: Shipping Real Businesses",
        theme: '"I ship products that make money."',
        months: [
          {
            title: "Month 10: SaaS Product #3  OS Level AI Agent",
            deliverable: "SaaS Product #3: OS level AI agent converting API to Agent.",
            weeks: [
              { week: 37, topic: "Desktop OS automation & API to Agent patterns.", build: "An agent that controls local OS tools." },
              { week: 38, topic: "Agent swarms & system-level control.", build: "A swarm managing files and tasks." },
              { week: 39, topic: "Building the desktop agent app (Electron/Tauri).", build: "A native desktop AI agent UI." },
              { week: 40, topic: "Payments & SaaS logic for the Agent.", build: "A paid OS-level AI agent service." },
            ],
          },
          {
            title: "Month 11: 3D AI, Edge & Specialized Models",
            deliverable: "A 3D/multimodal AI feature added to their SaaS.",
            weeks: [
              { week: 41, topic: "3D AI asset pipelines for web games.", build: "A 3D asset pipeline." },
              { week: 42, topic: "Multimodal: vision-language, audio-to-text.", build: "An app that describes images aloud." },
              { week: 43, topic: "Edge deployment: ONNX/Transformers.js on web.", build: "A client-side AI feature." },
              { week: 44, topic: "Monitoring & observability: logs, analytics.", build: "Production monitoring for their SaaS." },
            ],
          },
          {
            title: "Month 12: Capstone, Scale & Graduation",
            deliverable: "Demo Day + portfolio-ready GitHub + blog.",
            weeks: [
              { week: 45, topic: "Performance: caching, CDN, indexing, rate limits.", build: "Scale to 1000 users (stress-tested plan)." },
              { week: 46, topic: "Security: secrets, XSS/SQLi, audits.", build: "A security audit of their own app." },
              { week: 47, topic: "Final build week: polish, docs, README.", build: "The capstone." },
              { week: 48, topic: "Demo Day: pitch + live demo.", build: "Graduate with certificate." },
            ],
          },
        ],
        finalDeliverables: [
          "3 deployed SaaS products (live URLs)",
          "GitHub with 15+ production-grade repos",
          "1 fine-tuned open-source model on Hugging Face",
          "1 technical blog post",
          "Portfolio site showcasing work",
        ],
      },
    ],
  },
};

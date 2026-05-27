export interface ComparisonFeature {
  category: string;
  feature: string;
  foundation: boolean;
  advanced: boolean;
}

export const comparisonFeatures: ComparisonFeature[] = [
  { category: "AI Tools & Productivity", feature: "AI Website Building", foundation: true, advanced: true },
  { category: "AI Tools & Productivity", feature: "AI Tools Mastery (ChatGPT, Claude, Gemini)", foundation: true, advanced: true },
  { category: "AI Tools & Productivity", feature: "SaaS Creation with AI", foundation: true, advanced: true },
  { category: "AI Tools & Productivity", feature: 'Build $100k SaaS Ideas Using AI', foundation: true, advanced: true },
  { category: "AI Tools & Productivity", feature: "Automation Basics (Make / Zapier)", foundation: true, advanced: true },
  { category: "AI Tools & Productivity", feature: "AI Productivity Workflows", foundation: true, advanced: true },
  { category: "AI Tools & Productivity", feature: "AI Image & 3D Asset Generation", foundation: true, advanced: true },
  { category: "Hardware & Infrastructure", feature: "GPU Computing Fundamentals", foundation: true, advanced: true },
  { category: "Hardware & Infrastructure", feature: "TPU Architecture & Programming", foundation: true, advanced: true },
  { category: "Hardware & Infrastructure", feature: "Cloud GPU Clusters (H100, A100)", foundation: true, advanced: true },
  { category: "Hardware & Infrastructure", feature: "AI Infrastructure & Deployment", foundation: true, advanced: true },
  { category: "Deep Learning & ML", feature: "PyTorch  Neural Networks from Scratch", foundation: false, advanced: true },
  { category: "Deep Learning & ML", feature: "JAX  Distributed Computing", foundation: false, advanced: true },
  { category: "Deep Learning & ML", feature: "Transfer Learning & Fine-tuning", foundation: false, advanced: true },
  { category: "Deep Learning & ML", feature: "Deep Learning Architectures", foundation: false, advanced: true },
  { category: "Deep Learning & ML", feature: "Machine Learning Pipelines", foundation: false, advanced: true },
  { category: "LLM Engineering", feature: "Fine-tuning LLMs (PEFT/LoRA)", foundation: false, advanced: true },
  { category: "LLM Engineering", feature: "Ollama  Local LLM Deployment", foundation: false, advanced: true },
  { category: "LLM Engineering", feature: "Local LLMs & Quantization", foundation: false, advanced: true },
  { category: "LLM Engineering", feature: "RAG Systems & Vector Databases", foundation: false, advanced: true },
  { category: "LLM Engineering", feature: "Production Inference (vLLM/TGI)", foundation: false, advanced: true },
];

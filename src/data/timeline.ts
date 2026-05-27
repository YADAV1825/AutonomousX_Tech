export interface TimelineMilestone {
  month: string;
  date: string;
  title: string;
  description: string;
  quarter: number;
  isStart?: boolean;
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    month: "June 2026",
    date: "Jun '26",
    title: "Bootcamp Kickoff",
    description: "Orientation, tool setup, and first AI-assisted coding session. Build your first website on day one.",
    quarter: 0,
    isStart: true,
  },
  {
    month: "July 2026",
    date: "Jul '26",
    title: "Q1 Begins  Build & Ship",
    description: "HTML/CSS with AI, Python fundamentals, first deployments to Vercel. Live portfolio online by week 4.",
    quarter: 1,
  },
  {
    month: "August 2026",
    date: "Aug '26",
    title: "Python & Deployment",
    description: "Python games, Git/GitHub mastery, connecting frontend to backend. Ship 2 live projects.",
    quarter: 1,
  },
  {
    month: "September 2026",
    date: "Sep '26",
    title: "Q1 Demo Day",
    description: "Present your portfolio and projects. GitHub profile with live deployed apps.",
    quarter: 1,
  },
  {
    month: "October 2026",
    date: "Oct '26",
    title: "Q2  Hardware & AI Tools",
    description: "Deep dive into CPU/GPU/TPU architecture. Master ChatGPT, Copilot, NotebookLM, and more.",
    quarter: 2,
  },
  {
    month: "November 2026",
    date: "Nov '26",
    title: "AI Creation Studio",
    description: "AI image generation, 3D asset creation, game development with AI-powered tools.",
    quarter: 2,
  },
  {
    month: "December 2026",
    date: "Dec '26",
    title: "Q2 Review & Demo",
    description: "Hardware knowledge showcase + AI art gallery. Present 'I made this with AI.'",
    quarter: 2,
  },
  {
    month: "January 2027",
    date: "Jan '27",
    title: "Q3  AI Practitioner",
    description: "Data science with Python, cloud GPUs (Colab/Kaggle), Hugging Face models.",
    quarter: 3,
  },
  {
    month: "February 2027",
    date: "Feb '27",
    title: "Models & APIs",
    description: "Open source models, sentiment analysis, building AI-powered web apps with real models.",
    quarter: 3,
  },
  {
    month: "March 2027",
    date: "Mar '27",
    title: "Graduation & Capstone",
    description: "Final capstone project, Demo Day presentation, certificate ceremony. You are now an AI Builder.",
    quarter: 4,
  },
];

# AutonomousX (LMS)

AutonomousX is a lightweight LMS-style website with two learning tracks:

- **AI Builders Jr. (13–18)**: project-driven, build + ship weekly
- **AI Engineers Pro (18+ / Adults)**: full-stack + LLM engineering, ship AI SaaS

This repo is a React + Vite frontend MVP (landing, curriculum, and a simple portal with local progress).

## Run

```bash
npm install
npm run dev
```

## Notes

- Curriculum content lives in `src/content/tracks.js`.
- The “Student Portal” is an MVP UI and stores progress in `localStorage`.

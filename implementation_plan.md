# AutonomousX Academy  Complete Website Redesign

A complete teardown of the existing dark-themed Vite+React site, replaced with a premium, light-themed, glassmorphism-styled website using **Next.js 15 + TailwindCSS v4 + Framer Motion**.

## User Review Required

> [!IMPORTANT]
> **Stack Migration**: The current project uses plain Vite + React with vanilla CSS. Your request specifies **Next.js + TailwindCSS + Framer Motion**. This means we'll initialize a brand-new Next.js project in-place, replacing the old Vite setup entirely. The existing `src/` folder, `vite.config.js`, and old CSS will be removed.

> [!IMPORTANT]
> **Image assets will be preserved**: All image directories (`images_home/`, `images_normal_batch/`, `images_advanced_batch/`, `26-Tahoe-Beach-Dawn.png`) will be moved into Next.js's `public/` directory so they're served statically.

> [!WARNING]
> **Branding rename**: Per your instructions, "AI Builders Jr." → **"Foundation Track"** (ages 13–18, school students) and "AI Engineers Pro" → **"Advanced AI Track"** (ages 18+, college/university/graduates). The word "Kids" will never appear.

## Open Questions

> [!IMPORTANT]
> **TailwindCSS Version**: You mentioned TailwindCSS  should I use **TailwindCSS v4** (latest, CSS-first config) or **TailwindCSS v3** (utility-config based)? I'll default to **v4** unless you say otherwise.

> [!IMPORTANT]
> **Instructor Photo**: The resume PDF mentions your experience but doesn't include a photo. Would you like me to generate a professional placeholder avatar, or do you have a photo you'd like to use for the "About the Instructor" section?

> [!IMPORTANT]
> **Social Links**: For the footer social links, which platforms do you want? I'll default to placeholders for: Twitter/X, LinkedIn, GitHub, YouTube, and Email.

---

## Proposed Changes

### Phase 1: Project Scaffolding & Migration

#### [DELETE] Old Vite files
- `vite.config.js`
- `src/App.jsx`, `src/App.css`, `src/index.css`, `src/main.jsx`
- `src/components/` (all old components)
- `src/content/tracks.js`
- `src/lib/hashRoute.js`, `src/lib/storage.js`
- `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg`
- `eslint.config.js`

#### [NEW] Next.js 15 project initialization
- Initialize with `npx -y create-next-app@latest ./ --ts --tailwind --eslint --app --src-dir --no-import-alias`
- Install additional deps: `framer-motion`
- Move image assets into `public/images/`

#### [NEW] Tailwind & Global Design System
- **`src/app/globals.css`**  Light theme design tokens, custom properties for:
  - Colors: white `#FEFEFE`, cream `#FFF8F0`, light pink `#FFF0F3`, light blue `#F0F7FF`, soft red accent `#E84057`
  - Glassmorphism utilities (backdrop-blur, translucent backgrounds)
  - Gradient animation keyframes
  - Smooth scroll behavior (`scroll-behavior: smooth`)
  - Google Font: **Inter** (clean, modern)
  - Animated gradient border utilities
  - Glowing card utilities

---

### Phase 2: Layout & Navigation

#### [NEW] `src/app/layout.tsx`
- Root layout with `<html>`, Inter font loaded via `next/font/google`
- SEO meta tags: title "AutonomousX AI Academy  Learn AI, Build Real Products"
- Smooth scroll CSS applied

#### [NEW] `src/components/Navbar.tsx`
- Sticky top nav with glass effect (backdrop-blur, white/translucent bg)
- Logo: "AX" mark + "AutonomousX" text
- Links: Home, Foundation Track, Advanced Track, Pricing, Contact
- CTA buttons: "Book a Demo" (outlined), "Explore Curriculum" (gradient filled)
- Mobile hamburger menu with animated slide-in
- Animated underline on hover for nav links

#### [NEW] `src/components/Footer.tsx`
- 4-column grid: Brand, Quick Links, Tracks, Contact
- Glass effect background with gradient top border
- Social link placeholders (icons)
- Contact email: yrohit1825@gmail.com
- Smooth gradient overlay at the top edge

---

### Phase 3: Home Page (8+ Sections)

#### [NEW] `src/app/page.tsx`  Home Page

##### Section 1: Hero
#### [NEW] `src/components/Hero.tsx`
- Full-width Tahoe beach image as background with glossy overlay
- White/cream gradient overlay at bottom for text readability
- Main headline: **"Master AI. Build Real Products."**
- Animated tagline rotator cycling through:
  - "Learn Modern AI Tools"
  - "Build AI Websites & SaaS Products"
  - "Future-Proof Your Career with AI"
  - "Hands-on AI Bootcamps"
- Two CTA buttons with gradient glow: "Book a Demo" + "Explore Curriculum"
- Subtle parallax effect on scroll
- Framer Motion fade-in and slide-up on load

##### Section 2: Logo Carousel
#### [NEW] `src/components/LogoSlider.tsx`
- Dual-row infinite horizontal scroll animation (CSS-driven, no JS overhead)
- Row 1 scrolls left-to-right, Row 2 scrolls right-to-left
- Images sourced from `images_home/`, `images_normal_batch/`, `images_advanced_batch/`
- All images same height (60px), `object-fit: contain`  no stretching
- Supports jpg, jpeg, png, webp formats
- Slight glass card background behind the carousel section
- Pause on hover

##### Section 3: Tracks Overview
#### [NEW] `src/components/TracksOverview.tsx`
- Two premium glass cards side by side (stacked on mobile)
- **Foundation Track** card:
  - Badge: "Ages 13–18 • School Students"
  - Key features list, pricing teaser, CTA → Foundation Track page
- **Advanced AI Track** card:
  - Badge: "Ages 18+ • College & Graduates"
  - Key features list, pricing teaser, CTA → Advanced Track page
- Glowing border on hover (soft pink for Foundation, soft blue for Advanced)
- Framer Motion staggered entrance animation

##### Section 4: Comparison Table
#### [NEW] `src/components/ComparisonTable.tsx`
- Large modern responsive table with glass card background
- Two columns: Foundation Track vs Advanced AI Track
- Feature rows with ✔ (green check text) and ✖ (muted X text)  no emojis
- Foundation features: AI website building, AI tools, SaaS creation, "Build $100k SaaS ideas using AI", automation basics, AI productivity
- Advanced features: everything in Foundation PLUS GPUs, TPUs, PyTorch, JAX, Fine-tuning LLMs, Deep Learning, Machine Learning, Ollama, Local LLMs, AI infrastructure
- Sticky header row
- Alternating subtle row backgrounds
- Hover highlight on rows

##### Section 5: Curriculum Timeline
#### [NEW] `src/components/CurriculumTimeline.tsx`
- Visual vertical timeline with month-by-month progression
- Bootcamp starts: **June 2026** | Full batch: **July 2026 → March 2027**
- Each month shows: module title, key topics, milestone project
- Left/right alternating cards connected by a center timeline line
- Animated dots/nodes at each milestone
- Quarter dividers with theme labels
- Framer Motion scroll-reveal for each card
- Data sourced from `course.txt` content (embedded in component data)

##### Section 6: About the Instructor
#### [NEW] `src/components/Instructor.tsx`
- Section title: "Meet Your Instructor"
- Professional card with name: **Rohit Yadav**
- Highlight badge: **"Google TRC Recipient"**
- Professional summary derived from resume:
  - AI & Machine Learning expertise
  - Full-stack web development
  - LLMs and real-world AI tools
  - Hardware architecture knowledge
- Professional timeline/experience cards showing key achievements
- Glass card with subtle gradient border
- Framer Motion slide-in from left

##### Section 7: Pricing
#### [NEW] `src/components/Pricing.tsx`
- Two premium pricing cards side by side
- **Foundation Track**:
  - Monthly: ~~$40~~ → **$25/month**
  - One-time: **$169** with "55% OFF" badge
- **Advanced AI Track**:
  - Monthly: ~~$50~~ → **$40/month**
  - One-time: **$270** with "40% OFF" badge
- Glowing border animation on cards
- Gradient background behind the pricing section
- "Most Popular" badge on Advanced track
- CTA button on each card

##### Section 8: Demo Booking
#### [NEW] `src/components/DemoBooking.tsx`
- Glass card form with:
  - Name input
  - Email input
  - Message textarea
  - "Book a Demo" gradient submit button
- Contact email shown: yrohit1825@gmail.com
- Dummy form handler (console.log + success toast for now)
- Framer Motion entrance animation
- Input focus glow effects

---

### Phase 4: Track Detail Pages

#### [NEW] `src/app/foundation/page.tsx`  Foundation Track Page
- Hero banner with track-specific messaging (soft pink gradient)
- "Ages 13–18 • School Students" badge
- Full quarter-by-quarter curriculum breakdown (from tracks.js data)
- Each quarter as an expandable accordion with month details
- Week-by-week table inside each month
- Deliverables highlighted
- Final deliverables section
- Pricing card at bottom
- CTA: "Book a Demo" + "Enroll Now"

#### [NEW] `src/app/advanced/page.tsx`  Advanced AI Track Page
- Hero banner with track-specific messaging (soft blue gradient)
- "Ages 18+ • College & Graduates" badge
- Full quarter-by-quarter curriculum breakdown
- Same layout pattern as Foundation but with Advanced data
- Pricing card at bottom
- CTA: "Book a Demo" + "Enroll Now"

---

### Phase 5: Data & Content Layer

#### [NEW] `src/data/tracks.ts`
- TypeScript version of track curriculum data
- Renamed: "AI Builders Jr." → "Foundation Track", "AI Engineers Pro" → "Advanced AI Track"
- All subtitle references updated to professional age-group labels
- Structure: quarters → months → weeks with topics and build projects

#### [NEW] `src/data/comparison.ts`
- Comparison table feature data with Foundation/Advanced boolean flags

#### [NEW] `src/data/timeline.ts`
- Curriculum timeline milestones with dates (June 2026 → March 2027)

---

### Phase 6: Shared UI Components

#### [NEW] `src/components/ui/GlassCard.tsx`
- Reusable glass card with configurable blur, opacity, border glow color

#### [NEW] `src/components/ui/GradientButton.tsx`
- Reusable gradient CTA button with hover glow effect

#### [NEW] `src/components/ui/Badge.tsx`
- Small badge/tag component with color variants

#### [NEW] `src/components/ui/SectionHeading.tsx`
- Consistent section heading with subtitle support

#### [NEW] `src/components/ui/AnimatedGradientBorder.tsx`
- Wrapper component that adds animated gradient border to any child

---

### Phase 7: Animation & Polish

- **Smooth scrolling**: CSS `scroll-behavior: smooth` on `html`
- **Animated gradients**: CSS `@keyframes` for background gradient shifts
- **Glowing borders**: Animated border-color rotation on glass cards
- **Hover animations**: Scale transforms, shadow lifts, border glows
- **Section transitions**: Framer Motion `whileInView` for fade/slide entrance
- **Subtle animated lines**: CSS animated decorative lines between sections
- **Parallax hero**: Framer Motion `useScroll` + `useTransform` for hero image

---

## Architecture Summary

```
src/
├── app/
│   ├── layout.tsx          # Root layout + fonts + meta
│   ├── page.tsx            # Home page (8 sections)
│   ├── globals.css         # Design system + animations
│   ├── foundation/
│   │   └── page.tsx        # Foundation Track detail page
│   └── advanced/
│       └── page.tsx        # Advanced AI Track detail page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LogoSlider.tsx
│   ├── TracksOverview.tsx
│   ├── ComparisonTable.tsx
│   ├── CurriculumTimeline.tsx
│   ├── Instructor.tsx
│   ├── Pricing.tsx
│   ├── DemoBooking.tsx
│   └── ui/
│       ├── GlassCard.tsx
│       ├── GradientButton.tsx
│       ├── Badge.tsx
│       ├── SectionHeading.tsx
│       └── AnimatedGradientBorder.tsx
├── data/
│   ├── tracks.ts
│   ├── comparison.ts
│   └── timeline.ts
public/
├── images/
│   ├── hero/
│   │   └── 26-Tahoe-Beach-Dawn.png
│   ├── home/        (from images_home/)
│   ├── foundation/  (from images_normal_batch/)
│   └── advanced/    (from images_advanced_batch/)
```

---

## Verification Plan

### Automated Tests
- `npm run build`  ensure production build succeeds with zero errors
- `npm run lint`  ensure no ESLint errors

### Manual Verification
- Run `npm run dev` and visually verify:
  - Home page loads with all 8 sections
  - Hero image displays correctly with glossy overlay
  - Logo carousel animates without image distortion
  - Comparison table renders ✔ and ✖ correctly
  - Curriculum timeline shows dates from June 2026
  - Pricing cards show correct crossed-out vs final prices
  - Demo form accepts input and shows feedback
  - Navigation between Home / Foundation / Advanced works
  - Mobile responsive layout (hamburger menu, stacked cards)
  - All animations are smooth and performant
  - Light theme throughout  no dark backgrounds

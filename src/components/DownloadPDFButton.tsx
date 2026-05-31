"use client";

import { useState, useCallback } from "react";
import { TRACKS } from "@/data/tracks";
import { comparisonFeatures } from "@/data/comparison";

/* ── schedule batch data ── */
const batches = [
  { id: "B1", track: "Foundation AI", days: "Mon, Tue, Wed, Thu", utcTiming: "10:30 PM – 12:30 AM UTC" },
  { id: "B2", track: "Foundation AI", days: "Mon, Tue, Wed, Thu", utcTiming: "04:30 AM – 06:30 AM UTC" },
  { id: "B3", track: "Foundation AI", days: "Mon, Tue, Wed, Thu", utcTiming: "09:00 AM – 11:00 AM UTC" },
  { id: "B4", track: "Advanced AI",   days: "Mon, Tue, Wed, Thu", utcTiming: "12:00 PM – 02:00 PM UTC" },
  { id: "B5", track: "Foundation AI", days: "Thu, Fri, Sat, Sun", utcTiming: "10:30 PM – 12:30 AM UTC" },
  { id: "B6", track: "Foundation AI", days: "Thu, Fri, Sat, Sun", utcTiming: "04:30 AM – 06:30 AM UTC" },
  { id: "B7", track: "Advanced AI",   days: "Thu, Fri, Sat, Sun", utcTiming: "09:00 AM – 11:00 AM UTC" },
  { id: "B8", track: "Advanced AI",   days: "Thu, Fri, Sat, Sun", utcTiming: "12:00 PM – 02:00 PM UTC" },
];

/* ── roadmap data ── */
const roadmap = [
  { quarter: "Bootcamp Kickoff", period: "June 2026", theme: "Orientation & Setup", color: [232, 64, 87] as [number, number, number],
    months: [{ name: "June 2026", focus: "Orientation, tool setup, first AI-assisted coding session", deliverable: "Dev environment ready + first website deployed" }] },
  { quarter: "Q1 — Build & Ship with AI", period: "Jul – Sep 2026", theme: '"I can make the internet."', color: [232, 64, 87] as [number, number, number],
    months: [
      { name: "Month 1 — Web Dev with AI", focus: "HTML, CSS, AI-assisted coding", deliverable: "Live personal website on Vercel" },
      { name: "Month 2 — Python Fundamentals", focus: "Variables, loops, functions, modules", deliverable: "Python guessing game + calculator" },
      { name: "Month 3 — Git & Deployment", focus: "GitHub, Streamlit apps, frontend + backend", deliverable: "GitHub profile + 2 live projects" },
    ] },
  { quarter: "Q2 — Hardware & AI Tools", period: "Oct – Dec 2026", theme: '"I understand the machine and the magic."', color: [126, 184, 240] as [number, number, number],
    months: [
      { name: "Month 4 — Hardware Deep Dive", focus: "CPU/GPU/TPU architecture, RAM, storage", deliverable: "Tech comparison blog post" },
      { name: "Month 5 — AI Tools Mastery", focus: "ChatGPT, Claude, Gemini, Copilot, NotebookLM", deliverable: '"My AI Toolkit" with 5 mini-projects' },
      { name: "Month 6 — AI Art & 3D", focus: "AI image generation, 3D asset creation, game dev", deliverable: "3D asset + AI art gallery" },
    ] },
  { quarter: "Q3 — AI Practitioner", period: "Jan – Feb 2027", theme: '"I can talk to the brain (models)."', color: [196, 181, 253] as [number, number, number],
    months: [
      { name: "Month 7 — Python for Data", focus: "Pandas, NumPy, Matplotlib, APIs", deliverable: "Data analysis project with charts" },
      { name: "Month 8 — Cloud GPUs", focus: "Google Colab, Kaggle, Lightning AI, GPU tiers", deliverable: "Colab notebook + Kaggle submission" },
      { name: "Month 9 — Open Source Models", focus: "Hugging Face, DistilBERT, TinyLlama, LLM concepts", deliverable: "Live web app using a real AI model" },
    ] },
  { quarter: "Q4 — Capstone & Graduation", period: "March 2027", theme: '"I am an AI Builder."', color: [232, 64, 87] as [number, number, number],
    months: [
      { name: "Months 10–11 — Final Projects", focus: "AI agents, game dev, 3D worlds, automation", deliverable: "Working AI agent + playable mini-game" },
      { name: "Month 12 — Graduation", focus: "Portfolio assembly, presentation skills, Demo Day", deliverable: "Certificate + polished portfolio website" },
    ] },
];

/* ── timezone helpers ── */
function convertUtcToLocal(utcStr: string, daysStr: string) {
  try {
    const daysMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const cleanStr = utcStr.replace(" UTC", "").replace("–", "-");
    const parts = cleanStr.split("-").map((s) => s.trim());
    if (parts.length !== 2) return { time: utcStr, days: daysStr };

    const parseTime = (t: string) => {
      const m = t.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
      if (!m) return null;
      let h = parseInt(m[1]);
      const min = parseInt(m[2]);
      const period = m[3].toUpperCase();
      if (period === "PM" && h !== 12) h += 12;
      if (period === "AM" && h === 12) h = 0;
      return new Date(Date.UTC(2026, 0, 15, h, min, 0));
    };

    const startD = parseTime(parts[0]);
    const endD = parseTime(parts[1]);
    if (!startD || !endD) return { time: utcStr, days: daysStr };

    const fmt = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit", hour12: true });
    const startDay = startD.getUTCDate();
    const localStartDay = startD.getDate();
    let dayOffset = 0;
    if (localStartDay > startDay) dayOffset = 1;
    else if (localStartDay < startDay) dayOffset = -1;

    const shiftDays = (ds: string, off: number) => {
      if (off === 0) return ds;
      return ds.split(", ").map((d) => {
        const idx = daysMap.indexOf(d);
        if (idx === -1) return d;
        return daysMap[(idx + off + 7) % 7];
      }).join(", ");
    };

    return { time: `${fmt.format(startD)} – ${fmt.format(endD)}`, days: shiftDays(daysStr, dayOffset) };
  } catch {
    return { time: utcStr, days: daysStr };
  }
}

/* ── colours ── */
const RED: [number, number, number] = [232, 64, 87];
const SKY: [number, number, number] = [126, 184, 240];
const GREEN: [number, number, number] = [16, 185, 129];
const GRAY_LIGHT: [number, number, number] = [209, 213, 219];
const TEXT: [number, number, number] = [15, 15, 26];
const MUTED: [number, number, number] = [59, 63, 74];
const LIGHT: [number, number, number] = [107, 114, 128];
const CREAM_BG: [number, number, number] = [255, 248, 240];
const ICE_BG: [number, number, number] = [240, 247, 255];
const WHITE: [number, number, number] = [255, 255, 255];

/* ── text sanitization to fix jspdf encoding issues ── */
function sanitizeText(str: string | undefined | null): string {
  if (!str) return "";
  return str
    .replace(/[\u2018\u2019]/g, "'") // smart single quotes
    .replace(/[\u201C\u201D]/g, '"') // smart double quotes
    .replace(/[\u2013\u2014]/g, "-") // dashes
    .replace(/\u2212/g, "-") // minus sign
    .replace(/\u00d7/g, "x") // multiplication sign
    .replace(/[\u00A0\u200B-\u200D\uFEFF]/g, " ") // spaces
    .replace(/[\u2714\u2705]/g, "Yes") // checkmarks
    .replace(/[\u2716\u274C]/g, "No") // crosses
    .replace(/[^\x20-\x7E]/g, "") // strip all other non-ASCII chars
    .trim();
}

/* ──────────────────────────────────────────────────── */
/* ── GENERATE PDF ─────────────────────────────────── */
/* ──────────────────────────────────────────────────── */
async function generatePdf() {
  // Dynamic imports — only load on client when user clicks
  const jsPDFModule = await import("jspdf");
  const jsPDF = jsPDFModule.default || jsPDFModule.jsPDF;
  const autoTableModule = await import("jspdf-autotable");
  const autoTable = autoTableModule.default || autoTableModule.autoTable;

  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginL = 14;
  const marginR = 14;
  const contentW = pageW - marginL - marginR;

  const tz = sanitizeText(Intl.DateTimeFormat().resolvedOptions().timeZone);

  /* ── helper: add a new page ── */
  const newPage = () => { doc.addPage(); };

  /* ── helper: check if we need a new page (with buffer) ── */
  const ensureSpace = (needed: number, y: number): number => {
    if (y + needed > pageH - 20) {
      newPage();
      return 20;
    }
    return y;
  };

  /* ── helper: draw section title ── */
  const drawSectionTitle = (title: string, y: number): number => {
    y = ensureSpace(20, y);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...RED);
    doc.text(sanitizeText(title), pageW / 2, y, { align: "center" });
    return y + 12;
  };

  /* ── helper: draw subtitle ── */
  const drawSubtitle = (text: string, y: number): number => {
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...MUTED);
    const lines = doc.splitTextToSize(sanitizeText(text), contentW - 20);
    doc.text(lines, pageW / 2, y, { align: "center" });
    return y + lines.length * 5 + 6;
  };

  /* ═══════════════════════════════════════════════════ */
  /* PAGE 1: COVER / INDEX                              */
  /* ═══════════════════════════════════════════════════ */

  // Gradient background bar
  doc.setFillColor(...CREAM_BG);
  doc.rect(0, 0, pageW, pageH, "F");

  // Title
  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...RED);
  doc.text("AutonomousX", pageW / 2, 70, { align: "center" });

  doc.setFontSize(36);
  doc.setTextColor(...SKY);
  doc.text("AI Academy", pageW / 2, 84, { align: "center" });

  doc.setFontSize(16);
  doc.setTextColor(...MUTED);
  doc.text("Year-Long Curriculum", pageW / 2, 98, { align: "center" });

  // Decorative line
  doc.setDrawColor(...RED);
  doc.setLineWidth(0.8);
  doc.line(pageW / 2 - 40, 106, pageW / 2 + 40, 106);

  // Table of Contents box
  const tocX = 40;
  const tocW = pageW - 80;
  let tocY = 120;

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(229, 231, 235);
  doc.roundedRect(tocX, tocY, tocW, 80, 4, 4, "FD");

  tocY += 12;
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...TEXT);
  doc.text("Table of Contents", tocX + 12, tocY);

  tocY += 4;
  doc.setDrawColor(229, 231, 235);
  doc.line(tocX + 12, tocY, tocX + tocW - 12, tocY);
  tocY += 10;

  const tocItems = [
    `1.  Class Schedule (${tz})`,
    "2.  Foundation Track Curriculum",
    "3.  Advanced AI Track Curriculum",
    "4.  Learning Roadmap",
    "5.  Compare Features",
  ];

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  tocItems.forEach((item) => {
    doc.setTextColor(...TEXT);
    doc.text(sanitizeText(item), tocX + 16, tocY);
    tocY += 11;
  });

  // Footer
  doc.setFontSize(9);
  doc.setTextColor(...LIGHT);
  doc.text(`Generated for timezone: ${tz}`, pageW / 2, pageH - 20, { align: "center" });

  /* ═══════════════════════════════════════════════════ */
  /* PAGES 2+: TRACK CURRICULA                          */
  /* ═══════════════════════════════════════════════════ */
  const renderTrack = (trackKey: string, accent: [number, number, number]) => {
    const track = TRACKS[trackKey];
    newPage();
    let y = 20;

    // Track title
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...accent);
    doc.text(sanitizeText(track.title), pageW / 2, y, { align: "center" });
    y += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...MUTED);
    doc.text(sanitizeText(`${track.subtitle}  -  ${track.tagline}`), pageW / 2, y, { align: "center", maxWidth: contentW });
    y += 10;

    // Pace info
    doc.setFontSize(9);
    doc.setTextColor(...LIGHT);
    doc.text(sanitizeText(`Pace: ${track.pace.live}  |  ${track.pace.assignment}`), pageW / 2, y, { align: "center" });
    y += 10;

    let qIdx = 0;
    for (const quarter of track.quarters) {
      if (qIdx > 0) {
        newPage();
        y = 20;
      } else {
        y = ensureSpace(30, y);
      }
      qIdx++;

      // Quarter header bar
      doc.setFillColor(accent[0], accent[1], accent[2]);
      doc.roundedRect(marginL, y, contentW, 14, 2, 2, "F");
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(255, 255, 255);
      doc.text(sanitizeText(quarter.title), marginL + 6, y + 9);

      doc.setFontSize(8);
      doc.setFont("helvetica", "italic");
      doc.text(sanitizeText(quarter.theme), marginL + contentW - 6, y + 9, { align: "right" });
      y += 20;

      for (const month of quarter.months) {
        y = ensureSpace(40, y);

        // Month name
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(...TEXT);
        doc.text(sanitizeText(month.title), marginL, y);
        y += 5;

        // Deliverable
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(accent[0], accent[1], accent[2]);
        doc.text(sanitizeText(`DELIVERABLE: ${month.deliverable}`), marginL, y);
        y += 5;

        // Week table
        const weekRows = month.weeks.map((w) => [
          String(w.week),
          sanitizeText(w.topic),
          sanitizeText(w.build),
        ]);

        autoTable(doc, {
          startY: y,
          margin: { left: marginL, right: marginR },
          head: [["Week", "Topic", "What You Build"]],
          body: weekRows,
          theme: "grid",
          headStyles: {
            fillColor: [...accent] as [number, number, number],
            textColor: [255, 255, 255],
            fontStyle: "bold",
            fontSize: 8,
            cellPadding: 3,
          },
          bodyStyles: {
            fontSize: 8,
            cellPadding: 3,
            textColor: [...TEXT] as [number, number, number],
            lineColor: [229, 231, 235],
            lineWidth: 0.3,
          },
          alternateRowStyles: {
            fillColor: [...CREAM_BG] as [number, number, number],
          },
          columnStyles: {
            0: { cellWidth: 14, halign: "center", fontStyle: "bold" },
            1: { cellWidth: contentW * 0.48 },
            2: { cellWidth: contentW * 0.4 },
          },
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        y = (doc as any).lastAutoTable.finalY + 8;
      }

      // Final deliverables
      if (quarter.finalDeliverables) {
        y = ensureSpace(30, y);
        doc.setFillColor(255, 240, 243);
        doc.roundedRect(marginL, y, contentW, 6 + quarter.finalDeliverables.length * 5.5, 3, 3, "F");
        doc.setDrawColor(accent[0], accent[1], accent[2]);
        doc.setLineWidth(0.3);
        doc.roundedRect(marginL, y, contentW, 6 + quarter.finalDeliverables.length * 5.5, 3, 3, "S");

        y += 5;
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(accent[0], accent[1], accent[2]);
        doc.text("FINAL DELIVERABLES:", marginL + 6, y);
        y += 5;

        doc.setFont("helvetica", "normal");
        doc.setTextColor(...TEXT);
        doc.setFontSize(8);
        quarter.finalDeliverables.forEach((d) => {
          doc.text(`-  ${sanitizeText(d)}`, marginL + 8, y);
          y += 5.5;
        });
        y += 4;
      }
    }
  };

  /* ═══════════════════════════════════════════════════ */
  /* CLASS SCHEDULE                                      */
  /* ═══════════════════════════════════════════════════ */
  newPage();
  let scheduleY = drawSectionTitle("Class Schedule", 24);
  scheduleY = drawSubtitle(`Timings converted to your timezone: ${tz}`, scheduleY);

  const schedRows = batches.map((b) => {
    const local = convertUtcToLocal(b.utcTiming, b.days);
    return [
      sanitizeText(b.id), 
      sanitizeText(b.track), 
      sanitizeText(b.days), 
      sanitizeText(b.utcTiming), 
      sanitizeText(local.days), 
      sanitizeText(local.time)
    ];
  });

  autoTable(doc, {
    startY: scheduleY,
    margin: { left: marginL, right: marginR },
    head: [["Batch", "Track", "UTC Days", "Global Time (UTC)", "Your Days", "Your Time"]],
    body: schedRows,
    theme: "grid",
    headStyles: {
      fillColor: [...SKY] as [number, number, number],
      textColor: [...WHITE],
      fontStyle: "bold",
      fontSize: 8,
      cellPadding: 3.5,
      halign: "center",
    },
    bodyStyles: {
      fontSize: 8,
      cellPadding: 3,
      textColor: [...TEXT] as [number, number, number],
      lineColor: [229, 231, 235],
      lineWidth: 0.3,
    },
    columnStyles: {
      0: { cellWidth: 14, halign: "center", fontStyle: "bold" },
      1: { cellWidth: 28 },
      4: { fillColor: [...ICE_BG] as [number, number, number], fontStyle: "bold" },
      5: { fillColor: [...ICE_BG] as [number, number, number], fontStyle: "bold" },
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scheduleY = (doc as any).lastAutoTable.finalY + 12;

  // Timezone indicator
  doc.setFillColor(...ICE_BG);
  doc.roundedRect(marginL, scheduleY, contentW, 10, 3, 3, "F");
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(37, 99, 235);
  doc.text(`*  Your detected timezone: ${tz}  -  "Your Days" and "Your Time" columns are auto-converted.`, marginL + 6, scheduleY + 6.5);

  renderTrack("foundation", RED);
  renderTrack("advanced", SKY);

  /* ═══════════════════════════════════════════════════ */
  /* LEARNING ROADMAP                                    */
  /* ═══════════════════════════════════════════════════ */
  newPage();
  let y = drawSectionTitle("Learning Roadmap", 24);
  y = drawSubtitle("Bootcamp kicks off June 2026. Full batch runs July 2026 - March 2027.", y);

  let rIdx = 0;
  for (const block of roadmap) {
    if (rIdx > 0) {
      newPage();
      y = 20;
    } else {
      y = ensureSpace(20 + block.months.length * 14, y);
    }
    rIdx++;

    // Quarter header
    doc.setFillColor(block.color[0], block.color[1], block.color[2]);
    doc.roundedRect(marginL, y, contentW, 12, 2, 2, "F");
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(sanitizeText(block.quarter), marginL + 6, y + 8);
    doc.setFontSize(8);
    doc.text(sanitizeText(block.period), marginL + contentW - 6, y + 8, { align: "right" });
    y += 16;

    for (const m of block.months) {
      y = ensureSpace(16, y);
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...TEXT);
      doc.text(sanitizeText(m.name), marginL + 4, y);
      y += 4.5;

      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...MUTED);
      const focusLines = doc.splitTextToSize(`Learn: ${sanitizeText(m.focus)}`, contentW - 12);
      doc.text(focusLines, marginL + 4, y);
      y += focusLines.length * 3.5;

      doc.setFont("helvetica", "bold");
      doc.setTextColor(...TEXT);
      doc.text(`Deliver: ${sanitizeText(m.deliverable)}`, marginL + 4, y);
      y += 6;

      // Separator
      doc.setDrawColor(229, 231, 235);
      doc.setLineWidth(0.2);
      doc.line(marginL + 4, y, marginL + contentW - 4, y);
      y += 4;
    }
    y += 4;
  }

  /* ═══════════════════════════════════════════════════ */
  /* COMPARE FEATURES                                    */
  /* ═══════════════════════════════════════════════════ */
  newPage();
  y = drawSectionTitle("Compare Features", 24);
  y = drawSubtitle("See exactly what each track covers. The Advanced Track includes everything in Foundation - and much more.", y);

  const categories = Array.from(new Set(comparisonFeatures.map((f) => f.category)));
  const compRows: (string | { content: string; styles?: Record<string, unknown> })[][] = [];

  for (const cat of categories) {
    compRows.push([{
      content: sanitizeText(cat),
      styles: { fontStyle: "bold" as const, fillColor: [...CREAM_BG] as [number, number, number], fontSize: 9, cellPadding: 4 },
    }, {
      content: "",
      styles: { fillColor: [...CREAM_BG] as [number, number, number] },
    }, {
      content: "",
      styles: { fillColor: [...CREAM_BG] as [number, number, number] },
    }]);

    comparisonFeatures
      .filter((f) => f.category === cat)
      .forEach((f) => {
        compRows.push([
          sanitizeText(f.feature),
          { content: f.foundation ? "Yes" : "No", styles: { halign: "center" as const, textColor: f.foundation ? [...GREEN] as [number, number, number] : [...GRAY_LIGHT] as [number, number, number], fontStyle: "bold" as const } },
          { content: f.advanced ? "Yes" : "No", styles: { halign: "center" as const, textColor: f.advanced ? [...GREEN] as [number, number, number] : [...GRAY_LIGHT] as [number, number, number], fontStyle: "bold" as const } },
        ]);
      });
  }

  autoTable(doc, {
    startY: y,
    margin: { left: marginL, right: marginR },
    head: [["Feature", "Foundation (13-18)", "Advanced AI (18+)"]],
    body: compRows,
    theme: "grid",
    headStyles: {
      fillColor: [...SKY] as [number, number, number],
      textColor: [...WHITE],
      fontStyle: "bold",
      fontSize: 9,
      halign: "center",
      cellPadding: 4,
    },
    bodyStyles: {
      fontSize: 8,
      cellPadding: 3,
      textColor: [...TEXT] as [number, number, number],
      lineColor: [229, 231, 235],
      lineWidth: 0.3,
    },
    columnStyles: {
      0: { cellWidth: contentW * 0.55 },
      1: { cellWidth: contentW * 0.225, halign: "center" },
      2: { cellWidth: contentW * 0.225, halign: "center" },
    },
  });



  /* ═══════════════════════════════════════════════════ */
  /* FOOTER ON ALL PAGES                                 */
  /* ═══════════════════════════════════════════════════ */
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);

    // Decorative line
    doc.setDrawColor(...RED);
    doc.setLineWidth(0.4);
    doc.line(marginL, pageH - 12, pageW - marginR, pageH - 12);

    // Footer text
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...LIGHT);
    doc.text("AutonomousX AI Academy  -  autonomousx.tech", marginL, pageH - 8);
    doc.text(`Page ${i} of ${totalPages}`, pageW - marginR, pageH - 8, { align: "right" });
  }

  /* ── SAVE ── */
  doc.save("AutonomousX_AI_Curriculum.pdf");
}

/* ──────────────────────────────────────────────────── */
/* ── BUTTON COMPONENT ──────────────────────────────── */
/* ──────────────────────────────────────────────────── */

interface DownloadPDFButtonProps {
  className?: string;
}

export default function DownloadPDFButton({ className = "" }: DownloadPDFButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = useCallback(async () => {
    setIsGenerating(true);
    try {
      await generatePdf();
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
        isGenerating
          ? "bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300"
          : "bg-white text-black border border-border/50 hover:shadow-md hover:border-black"
      } ${className}`}
    >
      {isGenerating ? (
        <>
          <span className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
          Generating PDF…
        </>
      ) : (
        <>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF Curriculum
        </>
      )}
    </button>
  );
}

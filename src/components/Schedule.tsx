"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Batch {
  id: string;
  track: string;
  mode: string;
  language: string;
  days: string;
  utcTiming: string;
}

const batches: Batch[] = [
  { id: "B1", track: "Foundation AI", mode: "Remote + Online", language: "English", days: "Mon, Tue, Wed, Thu", utcTiming: "10:30 PM – 12:30 AM UTC" },
  { id: "B2", track: "Foundation AI", mode: "Remote + Online", language: "English", days: "Mon, Tue, Wed, Thu", utcTiming: "04:30 AM – 06:30 AM UTC" },
  { id: "B3", track: "Foundation AI", mode: "Remote + Online", language: "English", days: "Mon, Tue, Wed, Thu", utcTiming: "09:00 AM – 11:00 AM UTC" },
  { id: "B4", track: "Advanced AI", mode: "Remote + Online", language: "English", days: "Mon, Tue, Wed, Thu", utcTiming: "12:00 PM – 02:00 PM UTC" },
  { id: "B5", track: "Foundation AI", mode: "Remote + Online", language: "English", days: "Thu, Fri, Sat, Sun", utcTiming: "10:30 PM – 12:30 AM UTC" },
  { id: "B6", track: "Foundation AI", mode: "Remote + Online", language: "English", days: "Thu, Fri, Sat, Sun", utcTiming: "04:30 AM – 06:30 AM UTC" },
  { id: "B7", track: "Advanced AI", mode: "Remote + Online", language: "English", days: "Thu, Fri, Sat, Sun", utcTiming: "09:00 AM – 11:00 AM UTC" },
  { id: "B8", track: "Advanced AI", mode: "Remote + Online", language: "English", days: "Thu, Fri, Sat, Sun", utcTiming: "12:00 PM – 02:00 PM UTC" },
];

export default function Schedule() {
  const [userTimeZone, setUserTimeZone] = useState<string>("Detecting...");
  const [localData, setLocalData] = useState<Record<string, { time: string, days: string }>>({});

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setUserTimeZone(tz);

      const data: Record<string, { time: string, days: string }> = {};
      
      const shiftDays = (daysStr: string, offset: number) => {
        if (offset === 0) return daysStr;
        const daysMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return daysStr.split(", ").map(day => {
          const idx = daysMap.indexOf(day);
          if (idx === -1) return day;
          const newIdx = (idx + offset + 7) % 7;
          return daysMap[newIdx];
        }).join(", ");
      };

      const parseAndConvert = (timeStringUTC: string, daysString: string) => {
        // e.g. "10:30 PM – 12:30 AM UTC"
        const cleanStr = timeStringUTC.replace(" UTC", "").replace("–", "-");
        const parts = cleanStr.split("-").map(s => s.trim());
        if (parts.length !== 2) return { time: timeStringUTC, days: daysString };

        const parseTime = (timeStr: string) => {
          const match = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
          if (!match) return null;
          let hours = parseInt(match[1]);
          const mins = parseInt(match[2]);
          const period = match[3].toUpperCase();
          if (period === "PM" && hours !== 12) hours += 12;
          if (period === "AM" && hours === 12) hours = 0;
          
          // Use an arbitrary date (Jan 15, 2026) to avoid month edge cases
          return new Date(Date.UTC(2026, 0, 15, hours, mins, 0));
        };

        const startD = parseTime(parts[0]);
        const endD = parseTime(parts[1]);

        if (!startD || !endD) return { time: timeStringUTC, days: daysString };

        const formatter = new Intl.DateTimeFormat(undefined, {
          hour: "numeric",
          minute: "2-digit",
          hour12: true
        });

        // Check if day changed
        const startDay = startD.getUTCDate();
        const localStartDay = startD.getDate();
        let dayOffset = 0;
        if (localStartDay > startDay) dayOffset = 1;
        else if (localStartDay < startDay) dayOffset = -1;

        return {
          time: `${formatter.format(startD)} - ${formatter.format(endD)}`,
          days: shiftDays(daysString, dayOffset)
        };
      };

      batches.forEach(b => {
        data[b.id] = parseAndConvert(b.utcTiming, b.days);
      });

      setLocalData(data);
    } catch (e) {
      setUserTimeZone("Unknown");
    }
  }, []);

  return (
    <section className="py-24 relative" id="schedule">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <h2 className="inline-block p-1.5 rounded-full bg-gradient-to-r from-soft-red via-coral to-sky shadow-sm">
              <span className="block px-8 py-3 text-3xl md:text-5xl font-extrabold text-black bg-white rounded-full">
                Class Schedule
              </span>
            </h2>
          </div>
          <p className="text-2xl md:text-3xl font-black max-w-3xl mx-auto leading-[1.6] mt-4 text-center">
            <span className="bg-blush-dark text-text px-3 py-1 italic box-decoration-clone">
              Choose the batch that fits your lifestyle. Timings are automatically converted to your local timezone.
            </span>
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ice/50 text-text-muted text-sm font-medium border border-border/50">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            Your detected timezone: <strong className="text-text">{userTimeZone}</strong>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-text-muted bg-cream/30 border-b border-border/50">Batch</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-text-muted bg-cream/30 border-b border-border/50">Track</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-text-muted bg-cream/30 border-b border-border/50">Global Time (UTC)</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#2563eb] bg-ice/30 border-b border-border/50">Your Days</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#2563eb] bg-ice/30 border-b border-border/50">Your Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {batches.map((batch, idx) => (
                  <tr key={batch.id} className={`transition-colors hover:bg-cream/30 ${idx % 2 === 0 ? "bg-white/30" : "bg-transparent"}`}>
                    <td className="px-5 py-4 text-sm font-bold text-text">{batch.id}</td>
                    <td className="px-5 py-4 text-sm font-medium">
                      <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                        batch.track === "Foundation AI" ? "bg-soft-red/10 text-soft-red" : "bg-sky/10 text-[#2563eb]"
                      }`}>
                        {batch.track}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-text-muted font-mono">{batch.utcTiming}</td>
                    <td className="px-5 py-4 text-sm font-bold text-text bg-ice/10">
                      {localData[batch.id]?.days || "Calculating..."}
                    </td>
                    <td className="px-5 py-4 text-sm font-bold text-text font-mono bg-ice/10">
                      {localData[batch.id]?.time || "Calculating..."}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

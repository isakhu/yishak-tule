```tsx
"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Sidama Science and Technology Agency",
    location: "Hawassa, Ethiopia",
    period: "Mar 2025 – Jul 2025",
    type: "Internship",
    tech: ["React", "Node.js", "Express", "Git", "Tailwind CSS"],
  },
];

const education = [
  {
    degree: "BSc in Software Engineering",
    school: "Dire Dawa University",
    location: "Dire Dawa, Ethiopia",
    period: "2024 – Present",
  },
];

const stats = [
  { value: "4+", label: "projects" },
  { value: "1+", label: "years exp." },
  { value: "10+", label: "technologies" },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="w-full max-w-4xl mx-auto px-10 py-20">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-[9px] text-zinc-700 tracking-widest uppercase">002</span>
          <div className="h-px flex-1 bg-white/4" />
          <span className="font-mono text-[9px] text-zinc-700 tracking-widest uppercase">experience & education</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-[9px] text-zinc-700 tracking-widest uppercase block mb-4">work</span>
            <div className="border border-white/5 rounded-lg p-5 bg-white/[0.02]">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="text-white text-[13px] font-semibold">{experiences[0].role}</p>
                  <p className="font-mono text-[10px] text-zinc-500 mt-0.5">{experiences[0].company}</p>
                </div>
                <span className="shrink-0 px-2 py-0.5 border border-white/5 rounded font-mono text-[9px] text-zinc-700">
                  {experiences[0].type}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[9px] text-zinc-700">{experiences[0].period}</span>
                <span className="text-white/10">/</span>
                <span className="font-mono text-[9px] text-zinc-700">{experiences[0].location}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {experiences[0].tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 border border-white/4 rounded-sm font-mono text-[9px] text-zinc-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education + Stats */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="font-mono text-[9px] text-zinc-700 tracking-widest uppercase block mb-4">education</span>
              <div className="border border-white/5 rounded-lg p-5 bg-white/[0.02]">
                <p className="text-white text-[13px] font-semibold mb-0.5">{education[0].degree}</p>
                <p className="font-mono text-[10px] text-zinc-500 mb-3">{education[0].school}</p>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-zinc-700">{education[0].period}</span>
                  <span className="text-white/10">/</span>
                  <span className="font-mono text-[9px] text-zinc-700">{education[0].location}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-3"
            >
              {stats.map((s) => (
                <div key={s.label} className="border border-white/5 rounded-lg p-4 bg-white/[0.02] text-center">
                  <p className="text-white font-extrabold text-xl tracking-tight">{s.value}</p>
                  <p className="font-mono text-[9px] text-zinc-700 tracking-widest mt-1 uppercase">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
```

Stripped down to just the essentials — role, company, period, location, tech pills. No descriptions, no achievement lists, no icons. Clean and tight.

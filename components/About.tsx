"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Code2, Zap } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Dire Dawa University",
    sub: "BSc Software Engineering · 2024–Present",
    color: "text-indigo-400",
    bg: "bg-indigo-500/8",
    border: "border-indigo-500/15",
    dot: "bg-indigo-400",
  },
  {
    icon: Briefcase,
    label: "Internship",
    value: "Sidama Science & Tech Agency",
    sub: "Mar – Jul 2025 · Hawassa, Ethiopia",
    color: "text-purple-400",
    bg: "bg-purple-500/8",
    border: "border-purple-500/15",
    dot: "bg-purple-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ethiopia 🇪🇹",
    sub: "Open to remote worldwide",
    color: "text-pink-400",
    bg: "bg-pink-500/8",
    border: "border-pink-500/15",
    dot: "bg-pink-400",
  },
  {
    icon: Zap,
    label: "Focus",
    value: "Full Stack & SaaS",
    sub: "React · Next.js · Node.js · UI/UX",
    color: "text-cyan-400",
    bg: "bg-cyan-500/8",
    border: "border-cyan-500/15",
    dot: "bg-cyan-400",
  },
];

const stack = ["React", "Next.js", "Node.js", "TypeScript", "Python", "Tailwind"];

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-10">
        <p className="text-[10px] font-mono tracking-[0.3em] text-indigo-500 uppercase">
          Who I Am
        </p>
        <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
      </div>

      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">

        {/* ── LEFT ── */}
        <div className="space-y-8">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
              About{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#6366f1,#a855f7,#ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Me
              </span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-lg">
              I&apos;m <span className="text-zinc-300 font-medium">Yishak Tule</span> — a software
              engineer passionate about building scalable web apps and modern digital experiences.
              Currently studying at{" "}
              <span className="text-indigo-400 font-medium">Dire Dawa University</span> and
              interning at Sidama Science &amp; Technology Agency.
            </p>
          </motion.div>

          {/* Highlight cards — 2×2 grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className={`flex items-start gap-3 p-3.5 rounded-xl border ${h.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200 cursor-default`}
              >
                <div className={`w-8 h-8 rounded-lg ${h.bg} border ${h.border} flex items-center justify-center shrink-0 mt-0.5`}>
                  <h.icon size={14} className={h.color} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-0.5">{h.label}</p>
                  <p className="text-zinc-200 text-xs font-semibold leading-snug truncate">{h.value}</p>
                  <p className="text-zinc-600 text-[10px] leading-snug mt-0.5">{h.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-zinc-400
                           bg-white/[0.03] border border-white/[0.07]
                           hover:text-indigo-400 hover:border-indigo-500/25 transition-colors duration-150 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Profile image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden lg:flex flex-col items-center gap-3"
        >
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 blur-xl scale-110" />
            <div
              className="relative w-44 h-44 rounded-2xl overflow-hidden border border-white/10"
              style={{ boxShadow: "0 0 0 1px rgba(99,102,241,0.15), 0 20px 40px rgba(0,0,0,0.4)" }}
            >
              <Image
                src="/profile.png"
                alt="Yishak Tule"
                fill
                className="object-cover object-top"
                sizes="176px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Online badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d0d14] border border-white/10 text-[10px] font-mono text-zinc-400 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available
            </div>
          </div>

          {/* Mini stat column */}
          <div className="flex flex-col gap-2 mt-3 w-full">
            {[
              { n: "7+", t: "Projects" },
              { n: "4mo", t: "Internship" },
              { n: "10+", t: "Skills" },
            ].map((s) => (
              <div
                key={s.t}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.06] w-44"
              >
                <span className="text-zinc-600 text-[10px] font-mono">{s.t}</span>
                <span className="text-sm font-black gradient-text">{s.n}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Mobile profile image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:hidden flex justify-center mt-8"
      >
        <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-white/10">
          <Image src="/profile.png" alt="Yishak Tule" fill className="object-cover object-top" sizes="112px" />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

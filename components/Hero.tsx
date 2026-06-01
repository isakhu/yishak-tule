"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Code2, Globe, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Variants } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "React Engineer",
  "Next.js Specialist",
  "UI/UX Craftsman",
  "Node.js Developer",
];

const floatA: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  },
};
const floatB: Variants = {
  animate: {
    y: [0, 16, 0],
    x: [0, 8, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay: 1 },
  },
};

function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1400);
      return () => clearTimeout(t);
    }
    const current = roles[index];
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        setPause(true);
        setDeleting(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }
    }
  }, [displayed, deleting, pause, index]);

  return (
    <span className="text-indigo-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050508]"
    >
      {/* ── Noise overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Ambient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-[100px]"
        />
      </div>

      {/* ── Main content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* ── LEFT ── */}
          <div className="flex-1 min-w-0 text-center lg:text-left">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 text-sm font-medium
                         bg-white/[0.04] border border-white/[0.08] text-zinc-300
                         backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Open to opportunities
              <Sparkles size={13} className="text-indigo-400" />
            </motion.div>

            {/* Brand tag */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-xs font-mono tracking-[0.35em] text-indigo-500 uppercase mb-4"
            >
              yzak.dev
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.95] tracking-tight mb-6"
            >
              <span className="block text-white">Yishak</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #a855f7 45%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 40px rgba(99,102,241,0.4))",
                }}
              >
                Tule.
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-xl sm:text-2xl font-semibold text-zinc-400 mb-6 h-8"
            >
              <TypewriterRole />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            >
              Building scalable web applications and modern digital experiences.
              BSc Software Engineering student at{" "}
              <span className="text-zinc-300 font-medium">Dire Dawa University</span>,
              Ethiopia 🇪🇹
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-12"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm overflow-hidden w-full sm:w-auto justify-center"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #a855f7)",
                  boxShadow: "0 0 0 1px rgba(99,102,241,0.3), 0 8px 32px rgba(99,102,241,0.25)",
                }}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight size={15} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-zinc-300 text-sm w-full sm:w-auto justify-center
                           bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-indigo-500/30
                           backdrop-blur-sm transition-all duration-200"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {[
                { icon: Code2, href: "https://github.com/isakhu", label: "GitHub" },
                { icon: Globe, href: "https://www.linkedin.com/in/yishak-tule", label: "LinkedIn" },
                { icon: Mail, href: "mailto:yishakhak@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-500
                             bg-white/[0.04] border border-white/[0.08]
                             hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5
                             transition-all duration-200"
                >
                  <Icon size={16} />
                </motion.a>
              ))}

              <div className="w-px h-5 bg-white/10 mx-1" />

              <span className="text-zinc-600 text-xs font-mono">
                yishakhak@gmail.com
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT: Profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative shrink-0 flex flex-col items-center gap-4"
          >
            {/* Card frame */}
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-2xl scale-110" />

              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-dashed border-indigo-500/20"
              />

              {/* Image */}
              <div
                className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-white/10"
                style={{ boxShadow: "0 0 0 1px rgba(99,102,241,0.2), 0 32px 64px rgba(0,0,0,0.5)" }}
              >
                <Image
                  src="/profile.png"
                  alt="Yishak Tule — Software Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 240px, 288px"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating chip — top right */}
              <motion.div
                variants={floatA}
                animate="animate"
                className="absolute -top-4 -right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium
                           bg-[#0d0d14] border border-indigo-500/30 text-indigo-300
                           shadow-[0_0_20px_rgba(99,102,241,0.15)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                &lt;dev /&gt;
              </motion.div>

              {/* Floating chip — bottom left */}
              <motion.div
                variants={floatB}
                animate="animate"
                className="absolute -bottom-4 -left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium
                           bg-[#0d0d14] border border-purple-500/30 text-purple-300
                           shadow-[0_0_20px_rgba(168,85,247,0.15)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Full Stack ✦
              </motion.div>
            </div>

            {/* Stats row below image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 mt-2"
            >
              {[
                { value: "7+", label: "Projects" },
                { value: "2+", label: "Internship" },
                { value: "10+", label: "Skills" },
              ].map((s) => (
                <div key={s.label} className="text-center px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-lg font-black gradient-text leading-none">{s.value}</p>
                  <p className="text-zinc-600 text-[10px] mt-0.5 font-mono">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-700"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles, Code2, Globe } from "lucide-react";
import Image from "next/image";
import type { Variants } from "framer-motion";

const floatingVariants: Variants = {
  animate: {
    y: [0, -18, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const floatingVariants2: Variants = {
  animate: {
    y: [0, 14, 0],
    x: [0, 8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 1,
    },
  },
};

const floatingVariants3: Variants = {
  animate: {
    y: [0, -10, 0],
    x: [0, -6, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 2,
    },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-32 right-16 md:right-32 w-12 h-12 rounded-xl glass border border-indigo-500/30 flex items-center justify-center text-indigo-400"
      >
        <span className="text-lg font-mono font-bold">{`{}`}</span>
      </motion.div>

      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute bottom-40 left-10 md:left-24 w-10 h-10 rounded-lg glass border border-purple-500/30 flex items-center justify-center text-purple-400"
      >
        <span className="text-sm font-mono font-bold">{`</>`}</span>
      </motion.div>

      <motion.div
        variants={floatingVariants3}
        animate="animate"
        className="absolute top-48 left-16 md:left-40 w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30"
      />

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-56 right-20 md:right-48 w-6 h-6 rounded-full bg-purple-500/30 border border-purple-500/40"
      />

      {/* Main content — two-column on lg, stacked on mobile */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* ── Left: Text content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6"
            >
              <Sparkles size={14} className="text-indigo-400" />
              Available for opportunities
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            {/* Brand */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase mb-3"
            >
              YZAK
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-5 leading-none"
            >
              <span className="gradient-text text-glow">Yishak.T</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-300 mb-5"
            >
              Software Engineer &{" "}
              <span className="text-indigo-400">Full Stack Developer</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-zinc-500 text-base max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building scalable web applications and modern digital experiences
              from{" "}
              <span className="text-zinc-300 font-medium">Ethiopia 🇪🇹</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-base glow-indigo transition-all duration-200 w-full sm:w-auto"
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl glass border border-white/10 text-white font-semibold text-base hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-200 w-full sm:w-auto"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-4"
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
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors duration-200"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative shrink-0"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-2xl opacity-30 scale-110" />

            {/* Spinning dashed border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30"
              style={{ margin: "-8px" }}
            />

            {/* Image container */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-indigo-500/40 shadow-2xl shadow-indigo-500/20">
              <Image
                src="/profile.png"
                alt="Yishak Tule — Software Engineer"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
              />
            </div>

            {/* Floating badge — top right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
              className="absolute -top-3 -right-3 glass border border-indigo-500/30 rounded-xl px-3 py-1.5 text-xs font-mono text-indigo-300 whitespace-nowrap"
            >
              &lt;dev /&gt;
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
              className="absolute -bottom-3 -left-3 glass border border-purple-500/30 rounded-xl px-3 py-1.5 text-xs font-mono text-purple-300 whitespace-nowrap"
            >
              Full Stack ✦
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Code2, Globe, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const roles = ["Full Stack Developer", "Software Engineer", "UI/UX Designer"];

function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const current = roles[index];
    if (pause) {
      const timer = window.setTimeout(() => {
        setPause(false);
        setDeleting(true);
      }, 1500);
      return () => window.clearTimeout(timer);
    }
    if (!deleting && displayed.length < current.length) {
      const timer = window.setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 62);
      return () => window.clearTimeout(timer);
    }
    if (!deleting && displayed.length === current.length) {
      setPause(true);
      return;
    }
    if (deleting && displayed.length > 0) {
      const timer = window.setTimeout(() => setDisplayed(displayed.slice(0, -1)), 34);
      return () => window.clearTimeout(timer);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((value) => (value + 1) % roles.length);
    }
  }, [displayed, deleting, pause, index]);

  return (
    <span className="text-[#d99b16]">
      {displayed}
      <span className="ml-1 inline-block w-px h-6 align-[-3px] bg-[#f5b82e] animate-pulse" />
    </span>
  );
}

const particles = [
  [8, 18], [18, 72], [29, 34], [42, 12], [55, 82], [66, 27], [76, 66], [88, 18], [94, 76], [51, 48],
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#f4f3ef]">
      <div className="absolute inset-0 pointer-events-none opacity-70 hero-grid" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.28, 0.18], x: [0, 35, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-56 -left-40 h-[620px] w-[620px] rounded-full bg-[#f5b82e]/25 blur-[110px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08], x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-56 -right-44 h-[650px] w-[650px] rounded-full bg-[#111111]/10 blur-[130px]"
        />
        {particles.map(([left, top], index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.15 }}
            animate={{ y: [0, -14, 0], opacity: [0.12, 0.5, 0.12] }}
            transition={{ duration: 4 + (index % 4), repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }}
            className="absolute h-1 w-1 rounded-full bg-[#d99b16]"
            style={{ left: `${left}%`, top: `${top}%` }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <div className="min-w-0 flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[#3f3f3f] shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f5b82e] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d99b16]" />
              </span>
              Open to opportunities
              <Sparkles size={13} className="text-[#d99b16]" />
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[#8a650e]">
              yzak.dev
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-[clamp(3.4rem,8vw,6.5rem)] font-black leading-[0.9] tracking-[-0.055em] text-[#111111]"
            >
              Yishak
              <span className="block text-[#d99b16]">Tule.</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.72 }} className="mb-6 h-9 text-xl font-bold sm:text-2xl">
              <TypewriterRole />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.82 }} className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[#555555] sm:text-lg lg:mx-0">
              Building scalable web applications and modern digital experiences with clean engineering and intentional design.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.92 }} className="mb-11 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <motion.button
                onClick={() => scrollTo("projects")}
                whileHover={{ scale: 1.035, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#111111] px-7 py-3.5 text-sm font-bold text-[#f5f5f5] shadow-[0_12px_30px_rgba(17,17,17,.18)] sm:w-auto"
              >
                View My Work <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                onClick={() => scrollTo("contact")}
                whileHover={{ scale: 1.035, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/15 bg-white/70 px-7 py-3.5 text-sm font-bold text-[#111111] backdrop-blur-sm transition-colors hover:border-[#f5b82e] hover:bg-[#f5b82e]/10 sm:w-auto"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }} className="flex items-center justify-center gap-3 lg:justify-start">
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
                  whileHover={{ scale: 1.12, y: -3, rotate: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-[#555555] shadow-sm backdrop-blur-sm transition-colors hover:border-[#f5b82e] hover:text-[#111111]"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative shrink-0"
          >
            <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-[2rem] border border-dashed border-[#d99b16]/45"
              />
              <div className="absolute -inset-8 rounded-[2rem] bg-[#f5b82e]/20 blur-3xl" />
              <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 rounded-[2rem] bg-[linear-gradient(120deg,#111111,#f5b82e,#111111)] bg-[length:220%_220%]"
              />
              <div className="relative h-64 w-64 overflow-hidden rounded-[1.7rem] border-4 border-[#f4f3ef] bg-[#d0d0d0] shadow-[0_28px_70px_rgba(17,17,17,.2)] sm:h-80 sm:w-80">
                <Image src="/profile.png" alt="Yishak Tule — Software Engineer" fill priority sizes="(max-width: 640px) 256px, 320px" className="object-cover object-top" />
                <motion.div
                  animate={{ y: ["-110%", "110%"] }}
                  transition={{ duration: 3.8, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                  className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-[#f5b82e]/20 to-transparent"
                />
              </div>
              <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-5 -top-5 rounded-xl border border-[#f5b82e]/60 bg-[#111111] px-3 py-2 font-mono text-xs font-bold text-[#f5b82e] shadow-lg">
                &lt;dev /&gt;
              </motion.div>
              <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -bottom-5 -left-5 rounded-xl border border-black/10 bg-white px-3 py-2 font-mono text-xs font-bold text-[#111111] shadow-lg">
                TS · React · Next
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#666666] transition-colors hover:text-[#111111] md:flex"
        >
          Scroll to explore <ArrowDown size={14} className="animate-bounce" />
        </motion.button>
      </motion.div>
    </section>
  );
}

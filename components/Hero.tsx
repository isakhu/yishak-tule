"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 w-full pt-32 pb-24">

        {/* Avatar + status row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/10">
            <Image
              src="/profile.png"
              alt="Yishak Tule"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6"
        >
          Yishak Tule
          <span className="block text-zinc-500 font-normal mt-1 text-3xl sm:text-4xl md:text-5xl">
            Full Stack Engineer
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-xl mb-10"
        >
          I build fast, accessible, and well-crafted web applications.
          Based in{" "}
          <span className="text-zinc-300">Ethiopia</span>
          {" "}— working with teams and clients worldwide.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 mb-16"
        >
          
            href="#projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-colors duration-150"
          >
            View work
            <ArrowUpRight size={14} />
          </a>
          
            href="mailto:yishakhak@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-150"
          >
            <Mail size={14} />
            Get in touch
          </a>
          
            href="/cv.pdf"
            download="Yishak_Tule_CV.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/5 text-zinc-500 text-sm font-mono hover:text-zinc-300 hover:border-white/10 transition-all duration-150"
          >
            <Download size={13} />
            resume.pdf
          </a>
        </motion.div>

        {/* Footer row — social + stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/5"
        >
          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/isakhu", label: "GitHub", icon: Github },
              { href: "https://www.linkedin.com/in/yishak-tule", label: "LinkedIn", icon: Linkedin },
            ].map(({ href, label, icon: Icon }) => (
              
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-300 text-sm transition-colors duration-150"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>

          {/* Stack pills */}
          <div className="flex items-center gap-2">
            {["Next.js", "React", "Python"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md border border-white/5 text-zinc-600 text-[11px] font-mono bg-white/[0.02]"
              >
                {tech}
              </span>
            ))}
            <span className="text-zinc-700 text-[11px] font-mono">+more</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

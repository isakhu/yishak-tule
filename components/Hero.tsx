"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-10 pt-28 pb-20">
        <div className="absolute top-6 right-10 font-mono text-[10px] text-white/10 tracking-widest">
          EST. 2024 // ET
        </div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 mb-9">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/7 text-[10px] text-zinc-500 font-mono tracking-wider">
            <span className="w-1 h-1 rounded-full bg-green-500" />
            available for work
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/7 text-[10px] text-zinc-500 font-mono tracking-wider">
            ethiopia
          </span>
          <span className="ml-auto font-mono text-[10px] text-white/10 tracking-widest">001</span>
        </motion.div>
        <div className="grid grid-cols-[1fr_200px] gap-10 items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <span className="block text-[60px] font-extrabold text-white tracking-[-0.04em] leading-none">YISHAK</span>
              <span className="block text-[60px] font-extrabold tracking-[-0.04em] leading-none text-transparent" style={{ WebkitTextStroke: "1px #2a2a2a" }}>TULE</span>
              <div className="flex items-center gap-3 mt-3">
                <span className="font-mono text-[11px] text-zinc-500 tracking-wider uppercase">Software Engineer</span>
                <span className="font-mono text-[11px] text-white/10">/</span>
                <span className="font-mono text-[11px] text-zinc-600 tracking-wider">Full Stack Developer</span>
              </div>
            </motion.div>
            <div className="h-px bg-white/4 my-5" />
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-mono text-[13px] text-zinc-600 leading-relaxed max-w-md mb-7">
              Building fast, accessible, and well-crafted web apps. Focused on{" "}
              <span className="text-zinc-400">architecture</span>,{" "}
              <span className="text-zinc-400">performance</span>, and the details that make products feel professional.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-2 flex-wrap mb-5">
              <a href="#projects" className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-black text-[11px] font-bold rounded-md hover:bg-zinc-100 transition-colors">
                View work <ArrowUpRight size={12} />
              </a>
              <a href="mailto:yishakhak@gmail.com" className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/7 text-zinc-500 text-[11px] font-mono rounded-md hover:border-white/10 hover:text-zinc-400 transition-all">
                <Mail size={12} /> get in touch
              </a>
              <a href="/cv.pdf" download="Yishak_Tule_CV.pdf" className="inline-flex items-center gap-1.5 px-3 py-2 border border-white/4 text-zinc-700 text-[10px] font-mono rounded-md hover:text-zinc-500 transition-all">
                <Download size={11} /> cv.pdf
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex items-center gap-4">
              <a href="https://github.com/isakhu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-800 hover:text-zinc-500 transition-colors tracking-wide">
                <Github size={12} /> gh / isakhu
              </a>
              <a href="https://www.linkedin.com/in/yishak-tule" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-800 hover:text-zinc-500 transition-colors tracking-wide">
                <Linkedin size={12} /> li / yishak-tule
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex items-center gap-1 flex-wrap mt-5">
              {["next.js", "react", "typescript", "node.js", "python", "tailwind"].map((t) => (
                <span key={t} className="px-2 py-0.5 border border-white/4 rounded-sm font-mono text-[9px] text-zinc-800 tracking-wide">{t}</span>
              ))}
              <span className="font-mono text-[9px] text-zinc-800 ml-1">+more</span>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col items-end gap-3 pt-1">
            <div className="w-px h-8 bg-white/5 ml-auto" />
            <div className="w-[180px] h-[220px] rounded-lg overflow-hidden border border-white/7 bg-zinc-900">
              <Image src="/profile.png" alt="Yishak Tule" width={180} height={220} className="object-cover object-top w-full h-full grayscale-[20%]" priority />
            </div>
            <div className="font-mono text-[9px] text-zinc-800 tracking-wider text-right leading-relaxed">
              yishak tule<br />@ ethiopia
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

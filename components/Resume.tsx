"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Resume() {
  return (
    <SectionWrapper id="resume" className="bg-white/[0.01]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass border border-white/10 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6">
            <FileText size={28} className="text-indigo-400" />
          </div>

          <p className="text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase mb-3">
            My Resume
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Download My{" "}
            <span className="gradient-text">CV</span>
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto mb-10 leading-relaxed">
            Get a comprehensive overview of my skills, experience, education, and projects in a clean, professional format.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold glow-indigo transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Download size={18} />
              Download PDF
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass border border-white/10 text-white font-semibold hover:border-indigo-500/40 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Eye size={18} />
              View Online
            </motion.a>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-sm mx-auto">
            {[
              { value: "7+", label: "Projects" },
              { value: "1+", label: "Years" },
              { value: "10+", label: "Skills" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black gradient-text">{stat.value}</p>
                <p className="text-zinc-600 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

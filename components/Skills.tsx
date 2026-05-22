"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Code, Wrench } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    icon: Monitor,
    title: "Frontend",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    glow: "hover:shadow-indigo-500/20",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "hover:shadow-purple-500/20",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "REST APIs", level: 85 },
      { name: "Databases", level: 72 },
    ],
  },
  {
    icon: Code,
    title: "Programming",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    glow: "hover:shadow-pink-500/20",
    skills: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 80 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    glow: "hover:shadow-cyan-500/20",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Vercel", level: 85 },
    ],
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-zinc-300 text-sm font-medium">{name}</span>
        <span className="text-zinc-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={`h-full rounded-full bg-gradient-to-r ${
            color === "text-indigo-400"
              ? "from-indigo-500 to-indigo-400"
              : color === "text-purple-400"
              ? "from-purple-500 to-purple-400"
              : color === "text-pink-400"
              ? "from-pink-500 to-pink-400"
              : "from-cyan-500 to-cyan-400"
          }`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white/[0.01]">
      <SectionHeading
        label="What I Know"
        title="Skills & Technologies"
        subtitle="A curated set of tools and technologies I use to build modern web applications."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className={`glass border ${cat.border} rounded-2xl p-6 hover:shadow-xl ${cat.glow} transition-all duration-300`}
          >
            <div className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center mb-5`}>
              <cat.icon size={22} className={cat.color} />
            </div>
            <h3 className="text-white font-bold text-lg mb-5">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={cat.color} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech badges row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 flex flex-wrap justify-center gap-3"
      >
        {[
          "React", "Next.js", "TypeScript", "Node.js", "Express",
          "Python", "Tailwind CSS", "Git", "GitHub", "Figma", "Vercel", "MongoDB"
        ].map((tech) => (
          <motion.span
            key={tech}
            whileHover={{ scale: 1.08, y: -2 }}
            className="px-4 py-2 rounded-full glass border border-white/10 text-zinc-400 text-sm font-mono hover:text-indigo-400 hover:border-indigo-500/30 transition-colors duration-200 cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

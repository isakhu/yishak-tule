"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const techStack = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs"],
  },
  {
    category: "Database",
    techs: ["PostgreSQL", "MongoDB", "SQLite", "SQLAlchemy"],
  },
  {
    category: "Tools & Platforms",
    techs: ["Git", "GitHub", "Vercel", "Render", "Figma", "VS Code"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white/[0.01]">
      <SectionHeading
        label="Tech Stack"
        title="What I Work With"
        subtitle="Technologies I use to build fast, scalable, and modern applications."
      />

      <div className="space-y-6">
        {techStack.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col sm:flex-row sm:items-start gap-3"
          >
            <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest w-36 pt-1.5 shrink-0">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.techs.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -2 }}
                  className="px-3 py-1 rounded-md glass border border-white/10 text-zinc-300 text-xs font-mono hover:text-white hover:border-white/20 transition-all duration-150 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

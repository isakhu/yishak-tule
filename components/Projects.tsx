"use client";

import { ExternalLink, Code2, Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Yzak Luxury Brand",
    description:
      "Ethiopia's premier luxury e-commerce platform featuring fine gold, diamonds, fashion, watches, handbags, and accessories. Built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/isakhu",
    demo: "https://yzak-luxury-brand.vercel.app",
    featured: true,
    badge: "Live",
    badgeColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    gradient: "from-yellow-500/20 to-amber-500/20",
    border: "border-yellow-500/20",
  },
  {
    title: "Yzak Fashion Store",
    description:
      "Full-stack Ethiopian fashion e-commerce platform with product management, orders, and admin dashboard. Branches in Dire Dawa and Hawassa.",
    tech: ["FastAPI", "SQLAlchemy", "Python", "SQLite"],
    github: "https://github.com/isakhu/yzak-fashion-store",
    demo: "https://yzak-fashion-store-1.onrender.com",
    featured: true,
    badge: "Live",
    badgeColor: "text-green-400 bg-green-500/10 border-green-500/20",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
  },
  {
    title: "Student Task Planner",
    description:
      "Productivity app for students to manage assignments, deadlines, and study schedules. Features task filtering, priority levels, and progress tracking.",
    tech: ["Flask", "SQLAlchemy", "Python", "JavaScript"],
    github: "https://github.com/isakhu/student-task-planer",
    demo: "https://student-task-planner-6kkd.onrender.com",
    featured: true,
    badge: "Live",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    gradient: "from-cyan-500/20 to-indigo-500/20",
    border: "border-cyan-500/20",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, dark-mode developer portfolio built with Next.js and Framer Motion. Features smooth animations, glassmorphism design, and a fully responsive layout.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/isakhu",
    demo: "https://yishak-tule.vercel.app",
    featured: true,
    badge: "Live",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/20",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="What I've Built"
        title="Featured Projects"
        subtitle="A selection of real, live projects that showcase my skills across the full stack."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className={`group glass border ${project.border} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col`}
          >
            <div className={`relative w-full h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
              <Code2 size={36} className="text-white/20" />
              <div className="absolute top-3 left-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>
              {project.featured && (
                <div className="absolute top-3 right-3">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-md bg-white/5 text-zinc-400 text-xs font-mono border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm transition-colors"
                >
                  <Code2 size={15} />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-indigo-400 text-sm transition-colors ml-auto"
                >
                  <ExternalLink size={15} />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <motion.a
          href="https://github.com/isakhu"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-zinc-300 hover:text-white hover:border-indigo-500/40 transition-all duration-200 font-medium"
        >
          <Code2 size={18} />
          View All on GitHub
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
}

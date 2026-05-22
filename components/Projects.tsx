"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Star } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, dark-mode developer portfolio built with Next.js and Framer Motion. Features smooth animations, glassmorphism design, and a fully responsive layout.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/isakhu",
    demo: "#",
    featured: true,
    badge: "Project",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/20",
    image: "/project-portfolio.png",
  },
  {
    title: "YZAK Fashion Store",
    description:
      "A full-featured e-commerce platform for fashion products. Includes product listings, cart management, user authentication, and a clean checkout flow.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/isakhu",
    demo: "#",
    featured: true,
    badge: "Project",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
    image: null,
  },
  {
    title: "Student Task Planner",
    description:
      "A productivity app designed for students to manage assignments, deadlines, and study schedules. Features drag-and-drop task management and progress tracking.",
    tech: ["React", "Tailwind CSS", "LocalStorage", "JavaScript"],
    github: "https://github.com/isakhu",
    demo: "#",
    featured: false,
    badge: "Project",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    gradient: "from-cyan-500/20 to-indigo-500/20",
    border: "border-cyan-500/20",
    image: "/project-planner.png",
  },
  {
    title: "DevCollab",
    description:
      "A developer collaboration platform where engineers can find teammates, share project ideas, and collaborate in real-time. Features live chat, project boards, and skill matching.",
    tech: ["Next.js", "Socket.io", "PostgreSQL", "TypeScript"],
    github: "https://github.com/isakhu",
    demo: "#",
    featured: true,
    badge: "Project",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    gradient: "from-indigo-500/20 to-cyan-500/20",
    border: "border-indigo-500/20",
    image: "/project-devcollab.png",
  },
  {
    title: "SmartHire AI",
    description:
      "An AI-powered job matching system that analyzes candidate profiles and job descriptions to provide intelligent match scores, skill gap analysis, and personalized recommendations.",
    tech: ["Python", "FastAPI", "React", "OpenAI API"],
    github: "https://github.com/isakhu",
    demo: "#",
    featured: true,
    badge: "Project",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    gradient: "from-purple-500/20 to-indigo-500/20",
    border: "border-purple-500/20",
    image: "/project-smarthire.png",
  },
  {
    title: "EcoTrack",
    description:
      "A sustainability tracker that helps individuals and organizations monitor their carbon footprint, set eco-goals, and visualize environmental impact through interactive dashboards.",
    tech: ["Next.js", "Chart.js", "Node.js", "MongoDB"],
    github: "https://github.com/isakhu",
    demo: "#",
    featured: false,
    badge: "Project",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    gradient: "from-green-500/20 to-cyan-500/20",
    border: "border-green-500/20",
    image: "/project-ecotrack.png",
  },
  {
    title: "CodeVault",
    description:
      "A code snippet manager for developers to save, organize, search, and share reusable code snippets. Features syntax highlighting, tagging, and team workspaces.",
    tech: ["React", "Express", "SQLite", "Prism.js"],
    github: "https://github.com/isakhu",
    demo: "#",
    featured: false,
    badge: "Project",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    gradient: "from-pink-500/20 to-purple-500/20",
    border: "border-pink-500/20",
    image: "/project-codevault.png",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="What I've Built"
        title="Featured Projects"
        subtitle="A selection of projects that showcase my skills across the full stack."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            {/* Project image / gradient fallback */}
            <div className="relative h-44 overflow-hidden">
              {project.image ? (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </>
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <Code2 size={36} className="text-white/20" />
                </div>
              )}

              {/* Badge overlaid on image */}
              <div className="absolute top-3 left-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>

              {/* Star */}
              {project.featured && (
                <div className="absolute top-3 right-3">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-1">
              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
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

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm transition-colors"
                  aria-label={`GitHub for ${project.title}`}
                >
                  <Code2 size={15} />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-indigo-400 text-sm transition-colors ml-auto"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink size={15} />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all CTA */}
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

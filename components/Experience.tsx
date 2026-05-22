"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Sidama Science and Technology Agency",
    location: "Hawassa, Sidama, Ethiopia",
    period: "Mar 2025 – Jul 2025 (4 months)",
    type: "Internship",
    description:
      "Contributing to the development of web applications at Sidama Science and Technology University as part of a software engineering internship. Working with a team on real-world projects using modern development practices.",
    achievements: [
      "Built and maintained responsive UI components using React and Tailwind CSS",
      "Developed RESTful API endpoints with Node.js and Express",
      "Collaborated with senior engineers on code reviews and architecture decisions",
      "Improved page load performance by 30% through code optimization",
      "Participated in daily standups, sprint planning, and retrospectives",
      "Wrote unit tests and contributed to CI/CD pipeline improvements",
    ],
    tech: ["React", "Node.js", "Express", "Git", "Tailwind CSS"],
    color: "border-indigo-500/40",
    dotColor: "bg-indigo-500",
    glow: "shadow-indigo-500/20",
  },
];

const education = [
  {
    degree: "BSc in Software Engineering",
    school: "Dire Dawa University",
    location: "Dire Dawa, Ethiopia",
    period: "2022 – Present",
    description:
      "Studying core software engineering principles including algorithms, data structures, software design, and full stack web development.",
    color: "border-purple-500/40",
    dotColor: "bg-purple-500",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-white/[0.01]">
      <SectionHeading
        label="My Journey"
        title="Experience & Education"
        subtitle="Where I've worked and what I've studied to get where I am today."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
              <Briefcase size={16} className="text-indigo-400" />
            </div>
            <h3 className="text-white font-bold text-xl">Work Experience</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 to-transparent" />

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 pb-8"
              >
                {/* Dot */}
                <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full ${exp.dotColor} ring-4 ring-background`} />

                <div className={`glass border ${exp.color} rounded-2xl p-6 hover:shadow-xl hover:${exp.glow} transition-all duration-300`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-white font-bold text-lg">{exp.role}</h4>
                      <p className="text-indigo-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-zinc-500 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-zinc-400 text-sm">
                        <CheckCircle2 size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-md bg-white/5 text-zinc-400 text-xs font-mono border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl">Education</h3>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />

            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 pb-8"
              >
                <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full ${edu.dotColor} ring-4 ring-background`} />

                <div className={`glass border ${edu.color} rounded-2xl p-6`}>
                  <h4 className="text-white font-bold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-purple-400 font-medium mb-3">{edu.school}</p>

                  <div className="flex flex-wrap gap-4 text-zinc-500 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mt-4"
          >
            {[
              { value: "7+", label: "Projects" },
              { value: "1+", label: "Years Exp." },
              { value: "10+", label: "Technologies" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass border border-white/10 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-black gradient-text">{stat.value}</p>
                <p className="text-zinc-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

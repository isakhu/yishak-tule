"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Code2 } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Software Engineering student at Dire Dawa University",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    icon: Briefcase,
    title: "Experience",
    desc: "Software Engineering Intern at Sidama Science and Technology University",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: MapPin,
    title: "Location",
    desc: "Based in Ethiopia, open to remote opportunities worldwide",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    icon: Code2,
    title: "Focus",
    desc: "Full stack web development, modern UI/UX, and SaaS products",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="Who I Am"
        title="About Me"
        subtitle="A passionate engineer who loves turning ideas into elegant digital products."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Profile image — visible on mobile above text, hidden on lg (shown in right column) */}
          <div className="flex justify-center lg:hidden mb-2">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-indigo-500/40 shadow-xl shadow-indigo-500/20">
              <Image
                src="/profile.png"
                alt="Yishak Tule"
                fill
                className="object-cover object-top"
                sizes="144px"
              />
            </div>
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I&apos;m{" "}
            <span className="text-white font-semibold">Yishak Tule</span>, a
            software engineer and full stack developer passionate about building
            scalable web applications and modern digital experiences.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Currently studying Software Engineering at{" "}
            <span className="text-indigo-400 font-medium">
              Dire Dawa University
            </span>
            , I&apos;ve gained hands-on experience through internships where I
            worked on real-world web development projects, collaborated with
            cross-functional teams, and shipped production-ready features.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I specialize in the JavaScript ecosystem — from crafting pixel-perfect
            UIs with React and Next.js to building robust APIs with Node.js. I
            care deeply about performance, clean code, and user experience.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {["React", "Next.js", "Node.js", "TypeScript", "Python", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg glass border border-white/10 text-zinc-300 text-sm font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`glass border ${item.border} rounded-2xl p-5 cursor-default`}
            >
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                <item.icon size={20} className={item.color} />
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

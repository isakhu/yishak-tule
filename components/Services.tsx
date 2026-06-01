"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const services = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "End-to-end web applications built with Next.js, React, and Node.js. Clean architecture, fast APIs, and production-ready code.",
    tags: ["Next.js", "REST APIs", "PostgreSQL", "Vercel"],
  },
  {
    number: "02",
    title: "Frontend Engineering",
    description:
      "Pixel-perfect UIs with smooth animations and great performance. Every detail considered — from accessibility to Core Web Vitals.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Interfaces that feel intuitive and look sharp. From wireframe to polished design system, focused on real user experience.",
    tags: ["Figma", "Design Systems", "Prototyping", "Accessibility"],
  },
  {
    number: "04",
    title: "SaaS Products",
    description:
      "Scalable software products with auth, subscriptions, dashboards, and multi-tenancy. Built to grow from day one.",
    tags: ["Auth", "Stripe", "Multi-tenancy", "Analytics"],
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        label="What I Offer"
        title="Services"
        subtitle="Focused on building things that work well, look great, and scale."
      />

      <div className="divide-y divide-white/5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group flex flex-col sm:flex-row sm:items-start gap-4 py-8 hover:bg-white/[0.02] transition-colors duration-200 px-2 rounded-xl cursor-default"
          >
            <span className="text-zinc-600 text-xs font-mono pt-1 w-8 shrink-0">
              {service.number}
            </span>

            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2">
                <h3 className="text-white font-semibold text-base group-hover:text-indigo-300 transition-colors duration-200">
                  {service.title}
                </h3>
                <ArrowUpRight
                  size={14}
                  className="text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md border border-white/5 text-zinc-500 text-[11px] font-mono bg-white/[0.03]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 glass border border-white/10 rounded-2xl px-8 py-7"
      >
        <div>
          <p className="text-white font-semibold text-lg">Have a project in mind?</p>
          <p className="text-zinc-500 text-sm mt-1">Let's build something great together.</p>
        </div>
        <motion.a
          href="mailto:yishakhak@gmail.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold shrink-0 transition-all duration-200"
        >
          Start a Project
          <ArrowUpRight size={15} />
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
}

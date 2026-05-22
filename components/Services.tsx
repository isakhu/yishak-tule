"use client";

import { motion } from "framer-motion";
import { Monitor, Layers, Palette, Rocket } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Building fast, responsive, and accessible websites using modern technologies. From landing pages to complex web apps.",
    features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Cross-browser Compatible"],
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    hoverBorder: "hover:border-indigo-500/50",
    gradient: "from-indigo-500/10 to-transparent",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "End-to-end application development covering both frontend and backend. REST APIs, databases, authentication, and deployment.",
    features: ["REST API Design", "Database Architecture", "Authentication", "Cloud Deployment"],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/50",
    gradient: "from-purple-500/10 to-transparent",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting beautiful, intuitive user interfaces with a focus on user experience, accessibility, and modern design principles.",
    features: ["Wireframing", "Prototyping", "Design Systems", "Accessibility"],
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    hoverBorder: "hover:border-pink-500/50",
    gradient: "from-pink-500/10 to-transparent",
  },
  {
    icon: Rocket,
    title: "SaaS Development",
    description:
      "Building scalable software-as-a-service products with subscription models, multi-tenancy, and robust infrastructure.",
    features: ["Subscription Systems", "Multi-tenancy", "Analytics Dashboard", "Scalable Architecture"],
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/50",
    gradient: "from-cyan-500/10 to-transparent",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        label="What I Offer"
        title="Services"
        subtitle="Comprehensive development services to bring your digital vision to life."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`group glass border ${service.border} ${service.hoverBorder} rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={22} className={service.color} />
              </div>

              <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-zinc-400 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full ${service.bg.replace("bg-", "bg-").replace("/10", "")} ${service.color.replace("text-", "bg-")}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center glass border border-white/10 rounded-3xl p-10"
      >
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
          Ready to build something{" "}
          <span className="gradient-text">amazing</span>?
        </h3>
        <p className="text-zinc-500 mb-8 max-w-md mx-auto">
          Let&apos;s collaborate and turn your ideas into a polished digital product.
        </p>
        <motion.a
          href="mailto:yishakhak@gmail.com"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold glow-indigo transition-all duration-200"
        >
          Start a Project
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
}

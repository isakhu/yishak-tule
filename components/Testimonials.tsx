"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "TechFlow Inc.",
    avatar: "SM",
    content:
      "Yishak delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail, clean code, and ability to translate design concepts into pixel-perfect UIs is remarkable. The project was delivered on time and the performance metrics were outstanding.",
    rating: 5,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "Daniel Okonkwo",
    role: "CTO",
    company: "StartupHub Africa",
    avatar: "DO",
    content:
      "Working with Yishak was a fantastic experience. He built our entire backend API from scratch with Node.js and Express, implementing proper authentication, rate limiting, and documentation. His problem-solving skills and communication throughout the project were top-notch.",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Amina Hassan",
    role: "Founder",
    company: "EduTech Ethiopia",
    avatar: "AH",
    content:
      "Yishak redesigned our student platform and the results were incredible. User engagement increased by 60% after launch. He has a great eye for UI/UX and understands how to build products that users actually love. Highly recommend him for any web development project.",
    rating: 5,
    gradient: "from-cyan-500 to-indigo-500",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        label="What People Say"
        title="Testimonials"
        subtitle="Feedback from clients and collaborators I've had the pleasure of working with."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Quote icon */}
            <Quote size={24} className="text-indigo-500/40 mb-4" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Content */}
            <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-6">
              &ldquo;{t.content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                {t.avatar}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-zinc-500 text-xs">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

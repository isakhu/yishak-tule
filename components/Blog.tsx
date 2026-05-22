"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const posts = [
  {
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "A deep dive into designing RESTful APIs that can handle thousands of requests per second. We cover rate limiting, caching strategies, and database optimization.",
    category: "Backend",
    readTime: "8 min read",
    date: "May 15, 2026",
    border: "border-indigo-500/20",
    tag: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    gradient: "from-indigo-500/20 to-purple-500/20",
    image: "/blog-nodejs-api.png",
  },
  {
    title: "Mastering Framer Motion: Advanced Animation Patterns",
    excerpt:
      "Explore advanced animation techniques in Framer Motion including layout animations, shared element transitions, and gesture-driven interactions.",
    category: "Frontend",
    readTime: "6 min read",
    date: "May 8, 2026",
    border: "border-purple-500/20",
    tag: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    gradient: "from-purple-500/20 to-pink-500/20",
    image: "/blog-framer-motion.png",
  },
  {
    title: "The Future of Full Stack Development in 2026",
    excerpt:
      "Exploring the latest trends shaping full stack development — from edge computing and AI-assisted coding to the rise of server components.",
    category: "Opinion",
    readTime: "5 min read",
    date: "Apr 28, 2026",
    border: "border-cyan-500/20",
    tag: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    gradient: "from-cyan-500/20 to-indigo-500/20",
    image: "/blog-fullstack-2026.png",
  },
];

export default function Blog() {
  return (
    <SectionWrapper id="blog" className="bg-white/[0.01]">
      <SectionHeading
        label="My Thoughts"
        title="Latest Articles"
        subtitle="Sharing knowledge, insights, and lessons learned from building real-world applications."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className={`group glass border ${post.border} rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer`}
          >
            {/* Blog image */}
            <div className="relative h-44 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Category badge on image */}
              <div className="absolute top-3 left-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${post.tag}`}>
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-end mb-3">
                <span className="flex items-center gap-1 text-zinc-600 text-xs">
                  <Clock size={11} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-indigo-300 transition-colors flex-1">
                {post.title}
              </h3>

              <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-zinc-600 text-xs">{post.date}</span>
                <span className="flex items-center gap-1 text-indigo-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Read more <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-10"
      >
        <p className="text-zinc-600 text-sm">
          Blog coming soon — stay tuned for more articles.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}

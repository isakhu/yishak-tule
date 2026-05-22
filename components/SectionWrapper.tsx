"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  noAnimation?: boolean;
}

export default function SectionWrapper({ id, children, className = "", noAnimation = false }: SectionWrapperProps) {
  if (noAnimation) {
    return (
      <section id={id} className={`section-padding ${className}`}>
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`section-padding ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}

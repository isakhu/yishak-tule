"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Heart, ArrowUp, Globe, Terminal } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Code2, href: "https://github.com/isakhu", label: "GitHub" },
  { icon: Globe, href: "https://www.linkedin.com/in/yishak-tule", label: "LinkedIn" },
  { icon: Mail, href: "mailto:yishakhak@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-black/20">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg tracking-wider gradient-text">YZAK</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Software Engineer & Full Stack Developer building modern digital experiences from Ethiopia.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors duration-200"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-zinc-500 hover:text-indigo-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:yishakhak@gmail.com"
                className="block text-zinc-500 hover:text-indigo-400 text-sm transition-colors"
              >
                yishakhak@gmail.com
              </a>
              <a
                href="https://github.com/isakhu"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-500 hover:text-indigo-400 text-sm transition-colors"
              >
                github.com/isakhu
              </a>
              <p className="text-zinc-600 text-sm">Ethiopia 🇪🇹</p>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-xs text-zinc-600">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-zinc-600 text-sm flex items-center gap-1.5">
            © 2026 YZAK. All rights reserved. Made with{" "}
            <Heart size={12} className="text-red-500 fill-red-500" /> in Ethiopia
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

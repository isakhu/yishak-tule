"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-black/10 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f5b82e] to-[#d99b16] flex items-center justify-center shadow-[0_8px_22px_rgba(245,184,46,0.25)]">
            <Code2 size={16} className="text-black" />
          </div>
          <span className="font-black text-lg tracking-[0.18em] text-[#111111]">YZAK</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-[#111111]"
                      : "text-[#555555] hover:text-[#111111]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-[#f5b82e]/20 border border-[#f5b82e]/50"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="mailto:yishakhak@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm font-bold rounded-lg bg-[#f5b82e] text-[#111111] shadow-[0_8px_22px_rgba(245,184,46,0.28)] hover:bg-[#d99b16] transition-colors"
          >
            Hire Me
          </motion.a>
        </div>

        <button
          className="md:hidden text-[#3f3f3f] hover:text-[#111111] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 border-t border-black/10 overflow-hidden shadow-lg"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                        isActive
                          ? "text-[#111111] bg-[#f5b82e]/20"
                          : "text-[#555555] hover:text-[#111111] hover:bg-black/5"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="mailto:yishakhak@gmail.com"
                  className="block w-full text-center px-4 py-3 rounded-lg bg-[#f5b82e] text-[#111111] text-sm font-bold shadow-[0_8px_22px_rgba(245,184,46,0.22)]"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

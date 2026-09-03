"use client";

import { useState, useEffect } from "react";
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
      const y = window.scrollY;
      setScrolled(y > 28);

      for (const id of [...navLinks.map((link) => link.href.slice(1))].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className={`mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border px-3 sm:px-4 transition-all duration-300 ${scrolled || menuOpen ? "border-black/10 bg-white/95 shadow-[0_12px_35px_rgba(17,17,17,.10)] backdrop-blur-xl" : "border-black/5 bg-white/75 backdrop-blur-md"}`}>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f5b82e] text-[#111111] shadow-[0_7px_20px_rgba(245,184,46,.28)]">
            <Code2 size={16} />
          </div>
          <span className="font-black tracking-[0.18em] text-[#111111]">YZAK</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${active === id ? "bg-[#f5b82e]/15 text-[#111111]" : "text-[#666666] hover:text-[#111111]"}`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        <a href="mailto:yishakhak@gmail.com" className="hidden rounded-lg bg-[#111111] px-4 py-2 text-sm font-bold text-[#f5f5f5] shadow-lg transition-transform hover:-translate-y-0.5 md:block">
          Hire Me
        </a>

        <button className="rounded-lg p-2 text-[#3f3f3f] md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-black/10 bg-white/95 shadow-xl backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button onClick={() => handleNavClick(link.href)} className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-[#555555] transition-colors hover:bg-[#f5b82e]/15 hover:text-[#111111]">
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2"><a href="mailto:yishakhak@gmail.com" className="block rounded-xl bg-[#111111] px-4 py-3 text-center text-sm font-bold text-[#f5f5f5]">Hire Me</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

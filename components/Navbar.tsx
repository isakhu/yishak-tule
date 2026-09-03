"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = navLinks.map((link) => link.href.slice(1)).reverse();
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-4 sm:px-5 transition-colors ${scrolled || menuOpen ? "border-white/10 bg-[#0d0d0d]/95 backdrop-blur-xl" : "border-white/8 bg-[#050505]/75 backdrop-blur-md"}`}>
        <button onClick={() => goTo("#hero")} className="font-black tracking-[0.22em] text-sm text-[#f5f5f2]">
          YZAK
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className={`rounded-full px-3.5 py-2 text-xs font-medium transition-colors ${active === id ? "text-[#c9a24d]" : "text-[#8c8c88] hover:text-[#f5f5f2]"}`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <a href="mailto:yishakhak@gmail.com" className="hidden rounded-full bg-[#f5f5f2] px-4 py-2 text-xs font-semibold text-[#050505] transition-colors hover:bg-[#c9a24d] md:block">
          Contact Me
        </a>

        <button onClick={() => setMenuOpen((open) => !open)} className="rounded-full border border-white/10 p-2 text-[#f5f5f2] md:hidden" aria-label="Toggle menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#0d0d0d]/98 p-2 shadow-2xl backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => goTo(link.href)} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-[#b0b0aa] hover:bg-white/[0.04] hover:text-[#f5f5f2]">
              {link.label}
            </button>
          ))}
          <a href="mailto:yishakhak@gmail.com" className="mt-1 block rounded-xl bg-[#f5f5f2] px-4 py-3 text-center text-sm font-semibold text-[#050505]">
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}

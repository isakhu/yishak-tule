"use client";

import { ArrowRight, Mail, Code2, Globe, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 pointer-events-none opacity-40 hero-grid" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="min-w-0 flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-[#b0b0aa]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a24d]" />
              Open to opportunities
            </div>

            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.32em] text-[#c9a24d]">
              YZAK / SOFTWARE ENGINEERING
            </p>

            <h1 className="mb-5 text-[clamp(3.2rem,7.5vw,6.2rem)] font-black leading-[0.9] tracking-[-0.055em] text-[#f5f5f2]">
              Yishak
              <span className="block font-display font-normal italic text-[#c9a24d]">Tule.</span>
            </h1>

            <h2 className="mb-5 text-xl font-semibold tracking-[-0.02em] text-[#f5f5f2] sm:text-2xl">
              Software Engineer <span className="text-[#c9a24d]">|</span> Full-Stack Developer
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-[#8c8c88] sm:text-lg lg:mx-0">
              I build thoughtful software products that turn complex ideas into simple, reliable experiences.
              From modern web applications to full-stack systems and desktop software, I focus on clean engineering,
              usability, performance, and intentional design.
            </p>

            <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f5f5f2] px-6 py-3 text-sm font-semibold text-[#050505] transition-colors hover:bg-[#c9a24d] sm:w-auto"
              >
                View Projects
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-[#f5f5f2] transition-colors hover:border-[#c9a24d] hover:text-[#c9a24d] sm:w-auto"
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center justify-center gap-2.5 lg:justify-start">
              {[
                { icon: Code2, href: "https://github.com/isakhu", label: "GitHub" },
                { icon: Globe, href: "https://www.linkedin.com/in/yishak-tule", label: "LinkedIn" },
                { icon: Mail, href: "mailto:yishakhak@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-[#8c8c88] transition-colors hover:border-[#c9a24d]/60 hover:text-[#f5f5f2]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative shrink-0 lg:pr-5">
            <div className="absolute -inset-4 rounded-[1.6rem] border border-[#c9a24d]/20" />
            <div className="relative h-56 w-56 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#111111] shadow-[0_24px_60px_rgba(0,0,0,.45)] sm:h-64 sm:w-64">
              <Image
                src="/profile.png"
                alt="Yishak Tule — Software Engineer"
                fill
                priority
                sizes="(max-width: 640px) 224px, 256px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-lg border border-white/10 bg-[#111111] px-3 py-2 font-mono text-[10px] font-semibold text-[#b0b0aa]">
              TS · React · Next
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo("projects")}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f6f6a] transition-colors hover:text-[#c9a24d] md:flex"
        >
          Explore selected work <ArrowDown size={13} />
        </button>
      </div>
    </section>
  );
}

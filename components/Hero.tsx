"use client";

import { ArrowRight, Mail, Code2, Globe, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#f4f3ef]">
      <div className="absolute inset-0 pointer-events-none opacity-50 hero-grid" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <div className="min-w-0 flex-1 text-center lg:text-left">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#3f3f3f] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#d99b16]" />
              Open to opportunities
            </div>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[#8a650e]">
              yzak.dev
            </p>

            <h1 className="mb-6 text-[clamp(3.4rem,8vw,6.5rem)] font-black leading-[0.9] tracking-[-0.055em] text-[#111111]">
              Yishak
              <span className="block text-[#d99b16]">Tule.</span>
            </h1>

            <div className="mb-6 h-9 text-xl font-bold sm:text-2xl text-[#111111]">
              Full Stack Developer
            </div>

            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[#555555] sm:text-lg lg:mx-0">
              Building scalable web applications and modern digital experiences with clean engineering and intentional design.
            </p>

            <div className="mb-11 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#111111] px-7 py-3.5 text-sm font-bold text-[#f5f5f5] shadow-[0_12px_30px_rgba(17,17,17,.18)] transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                View My Work
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-7 py-3.5 text-sm font-bold text-[#111111] transition-colors hover:border-[#f5b82e] hover:bg-[#f5b82e]/10 sm:w-auto"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-start">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-[#555555] shadow-sm transition-colors hover:border-[#f5b82e] hover:text-[#111111]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] border border-[#d99b16]/30" />
              <div className="relative h-64 w-64 overflow-hidden rounded-[1.7rem] border-4 border-[#f4f3ef] bg-[#d0d0d0] shadow-[0_28px_70px_rgba(17,17,17,.2)] sm:h-80 sm:w-80">
                <Image
                  src="/profile.png"
                  alt="Yishak Tule — Software Engineer"
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -right-5 -top-5 rounded-xl border border-[#f5b82e]/60 bg-[#111111] px-3 py-2 font-mono text-xs font-bold text-[#f5b82e] shadow-lg">
                &lt;dev /&gt;
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-xl border border-black/10 bg-white px-3 py-2 font-mono text-xs font-bold text-[#111111] shadow-lg">
                TS · React · Next
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#666666] transition-colors hover:text-[#111111] md:flex"
        >
          Scroll to explore <ArrowDown size={14} />
        </button>
      </div>
    </section>
  );
}

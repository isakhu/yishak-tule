"use client";

import { ArrowRight, Mail, Code2, Globe } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="flex min-h-[88vh] items-center bg-[#050505]">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="text-center lg:text-left">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-[#c9a24d]">YZAK</p>
            <h1 className="text-[clamp(3.4rem,8vw,6.5rem)] font-black leading-[0.88] tracking-[-0.06em] text-[#f5f5f2]">
              Yishak <span className="font-display font-normal italic text-[#c9a24d]">Tule.</span>
            </h1>
            <p className="mt-6 text-lg font-medium text-[#f5f5f2] sm:text-xl">Software Engineer | Full-Stack Developer</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#8c8c88] lg:text-lg">I build web apps, systems, and digital products.</p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <button onClick={() => scrollTo("projects")} className="inline-flex items-center justify-center gap-2 rounded-md bg-[#f5f5f2] px-5 py-3 text-sm font-semibold text-[#050505] hover:bg-[#c9a24d]">
                View Projects <ArrowRight size={15} />
              </button>
              <button onClick={() => scrollTo("contact")} className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-[#f5f5f2] hover:border-[#c9a24d] hover:text-[#c9a24d]">
                Contact Me
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
              {[
                { icon: Code2, href: "https://github.com/isakhu", label: "GitHub" },
                { icon: Globe, href: "https://www.linkedin.com/in/yishak-tule", label: "LinkedIn" },
                { icon: Mail, href: "mailto:yishakhak@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-[#8c8c88] hover:border-[#c9a24d]/50 hover:text-[#f5f5f2]">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto lg:mx-0">
            <div className="relative h-52 w-52 overflow-hidden rounded-full border border-white/10 bg-[#111111] sm:h-60 sm:w-60">
              <Image src="/profile.png" alt="Yishak Tule" fill priority sizes="(max-width: 640px) 208px, 240px" className="object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

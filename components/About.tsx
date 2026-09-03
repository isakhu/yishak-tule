import { GraduationCap, Briefcase, MapPin, Layers3 } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: GraduationCap, label: "Education", value: "BSc Software Engineering", detail: "Dire Dawa University · 2024–Present" },
  { icon: Briefcase, label: "Experience", value: "Software Engineering Intern", detail: "Sidama Science & Technology Agency · 2025" },
  { icon: MapPin, label: "Based in", value: "Ethiopia", detail: "Open to remote opportunities" },
  { icon: Layers3, label: "Focus", value: "Full-Stack Products", detail: "Web · Desktop · Digital experiences" },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="border-t border-white/5 bg-[#0d0d0d]">
      <SectionHeading
        label="About"
        title="Engineering with purpose, clarity, and craft."
        subtitle="I enjoy taking real problems from idea to working software, combining product thinking with practical engineering."
      />

      <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
        <div className="space-y-4 text-sm leading-7 text-[#b0b0aa] sm:text-base">
          <p>
            I&apos;m <span className="font-medium text-[#f5f5f2]">Yishak Tule</span>, a Software Engineer and Full-Stack Developer focused on building useful digital products with modern technologies.
          </p>
          <p>
            My work spans responsive web applications, full-stack systems, commerce experiences, and desktop software. I care about clear interfaces, maintainable code, dependable data flows, and solutions that work in the real world.
          </p>
          <p>
            Alongside hands-on project work, I&apos;m completing a BSc in Software Engineering and building experience through practical development and collaboration.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, label, value, detail }) => (
            <div key={label} className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <Icon size={18} className="text-[#c9a24d]" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[#6f6f6a]">{label}</p>
              <p className="mt-1 text-sm font-medium text-[#f5f5f2]">{value}</p>
              <p className="mt-1 text-xs leading-5 text-[#8c8c88]">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4 border-t border-white/8 pt-6">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#c9a24d]/30">
          <Image src="/profile.png" alt="Yishak Tule" fill className="object-cover object-top" sizes="48px" />
        </div>
        <div>
          <p className="text-sm font-medium text-[#f5f5f2]">Yishak Tule</p>
          <p className="text-xs text-[#6f6f6a]">Software Engineer | Full-Stack Developer</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

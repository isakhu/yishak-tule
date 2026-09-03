import { ArrowUpRight, Code2, LayoutDashboard, PenTool, Server } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const services = [
  { icon: Code2, title: "Full-Stack Development", description: "End-to-end web applications with thoughtful frontend architecture, APIs, data flows, and deployment-ready implementation." },
  { icon: LayoutDashboard, title: "Product & Dashboard Development", description: "Operational platforms, admin dashboards, management systems, and workflows designed around real users and business needs." },
  { icon: PenTool, title: "Frontend & UI Engineering", description: "Responsive interfaces that balance visual quality, accessibility, performance, and maintainable component systems." },
  { icon: Server, title: "Backend & Data Systems", description: "Reliable APIs and data-backed applications using practical backend technologies, databases, authentication, and integrations." },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="border-t border-white/5">
      <SectionHeading
        label="Services"
        title="What I build for clients and teams."
        subtitle="Focused services that match the kinds of products and systems represented in my work."
      />

      <div className="grid gap-3 md:grid-cols-2">
        {services.map(({ icon: Icon, title, description }, index) => (
          <div key={title} className="group rounded-xl border border-white/8 bg-[#111111] p-5 transition-colors hover:border-[#c9a24d]/30">
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-lg border border-[#c9a24d]/20 bg-[#c9a24d]/[0.07] p-2.5">
                <Icon size={18} className="text-[#c9a24d]" />
              </div>
              <span className="font-mono text-[10px] text-[#6f6f6a]">0{index + 1}</span>
            </div>
            <h3 className="mt-5 font-display text-xl text-[#f5f5f2]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#8c8c88]">{description}</p>
            <ArrowUpRight size={15} className="mt-5 text-[#6f6f6a] transition-colors group-hover:text-[#c9a24d]" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

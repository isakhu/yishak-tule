import {
  Braces,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Server,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "React", icon: Braces },
  { name: "Next.js", icon: Globe2 },
  { name: "TypeScript", icon: Braces },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: TerminalSquare },
  { name: "FastAPI", icon: Workflow },
  { name: "PostgreSQL", icon: Database },
  { name: "Supabase", icon: Layers3 },
  { name: "Git & GitHub", icon: GitBranch },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-[#0d0d0d]">
      <SectionHeading
        label="Skills"
        title="Tools I Build With"
        subtitle="A focused engineering stack for modern products, reliable systems, and polished interfaces."
      />

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-9">
        {skills.map(({ name, icon: Icon }) => (
          <div key={name} className="group flex min-h-24 flex-col items-center justify-center rounded-xl border border-white/8 bg-white/[0.02] px-2 py-4 text-center transition-colors hover:border-[#c9a24d]/35 hover:bg-white/[0.04]">
            <Icon size={22} strokeWidth={1.6} className="text-[#b0b0aa] transition-colors group-hover:text-[#c9a24d]" />
            <span className="mt-2 text-[10px] leading-tight text-[#8c8c88] group-hover:text-[#f5f5f2]">{name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

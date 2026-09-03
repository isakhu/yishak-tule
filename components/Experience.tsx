import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="border-t border-white/5 bg-[#0d0d0d]">
      <SectionHeading
        label="Experience & Education"
        title="A practical path through software engineering."
        subtitle="Focused on learning by building, collaborating, and turning requirements into working software."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/8 bg-[#111111] p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl border border-[#c9a24d]/25 bg-[#c9a24d]/10 p-3">
              <BriefcaseBusiness size={20} className="text-[#c9a24d]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6f6f6a]">Experience</p>
              <h3 className="mt-2 font-display text-2xl text-[#f5f5f2]">Software Engineering Intern</h3>
              <p className="mt-1 text-sm font-medium text-[#c9a24d]">Sidama Science and Technology Agency</p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#8c8c88]">
                <span>Mar 2025 – Jul 2025</span><span>•</span><span>Hawassa, Ethiopia</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-[#b0b0aa]">
            Contributed to practical software work using modern web technologies, collaborating on implementation, debugging, version control, and responsive interfaces.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["React", "Node.js", "Express", "Git", "Tailwind CSS"].map((tech) => <span key={tech} className="rounded-md border border-white/8 px-2.5 py-1 text-[10px] text-[#8c8c88]">{tech}</span>)}
          </div>
        </article>

        <article className="rounded-2xl border border-white/8 bg-[#111111] p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl border border-[#c9a24d]/25 bg-[#c9a24d]/10 p-3">
              <GraduationCap size={20} className="text-[#c9a24d]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6f6f6a]">Education</p>
              <h3 className="mt-2 font-display text-2xl text-[#f5f5f2]">BSc in Software Engineering</h3>
              <p className="mt-1 text-sm font-medium text-[#c9a24d]">Dire Dawa University</p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#8c8c88]">
                <span>2024 – Present</span><span>•</span><span>Dire Dawa, Ethiopia</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-[#b0b0aa]">
            Building a strong foundation in software engineering principles while applying them through independent projects, product development, and hands-on technical work.
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs text-[#8c8c88]">
            <MapPin size={14} className="text-[#c9a24d]" /> Ethiopia · Open to remote opportunities
          </div>
        </article>
      </div>
    </SectionWrapper>
  );
}

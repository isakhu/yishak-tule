import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="border-t border-white/5 bg-[#0d0d0d]">
      <SectionHeading label="Experience" title="Experience & Education." />
      <div className="divide-y divide-white/8 border-y border-white/8">
        <div className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h3 className="text-lg font-medium text-[#f5f5f2]">Software Engineering Intern</h3>
            <p className="mt-1 text-sm text-[#c9a24d]">Sidama Science and Technology Agency</p>
          </div>
          <p className="text-xs leading-5 text-[#8c8c88] sm:text-right">Mar 2025 – Jul 2025<br />Hawassa, Ethiopia</p>
        </div>
        <div className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h3 className="text-lg font-medium text-[#f5f5f2]">BSc in Software Engineering</h3>
            <p className="mt-1 text-sm text-[#c9a24d]">Dire Dawa University</p>
          </div>
          <p className="text-xs leading-5 text-[#8c8c88] sm:text-right">2024 – Present<br />Dire Dawa, Ethiopia</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

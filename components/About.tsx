import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <SectionWrapper id="about" className="border-t border-white/5 bg-[#0d0d0d]">
      <SectionHeading label="About" title="A little about me." />
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl text-sm leading-7 text-[#b0b0aa] sm:text-base">
          <p>I&apos;m Yishak Tule, a Software Engineer and Full-Stack Developer based in Ethiopia. I build web applications, business systems, and desktop software.</p>
          <p className="mt-4">Currently studying Software Engineering at Dire Dawa University and building practical experience through projects and internship work.</p>
        </div>
        <div className="flex items-center gap-4 lg:border-l lg:border-white/8 lg:pl-8">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#c9a24d]/25">
            <Image src="/profile.png" alt="Yishak Tule" fill className="object-cover object-top" sizes="56px" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#f5f5f2]">Yishak Tule</p>
            <p className="text-xs text-[#6f6f6a]">Hawassa, Ethiopia</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

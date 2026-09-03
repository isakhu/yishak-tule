import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-[#0d0d0d]">
      <SectionHeading label="Skills" title="" />
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        {skills.map(({ name, src }) => (
          <div key={name} className="group flex h-16 w-16 items-center justify-center rounded-xl border border-white/8 bg-white/[0.02] p-3 transition-colors hover:border-[#c9a24d]/35" title={name} aria-label={name}>
            <img src={src} alt={name} className="h-9 w-9 object-contain opacity-85 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0" loading="lazy" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

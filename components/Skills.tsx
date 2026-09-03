import SectionWrapper from "./SectionWrapper";

const skills = [
  { name: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "FastAPI", src: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Supabase", src: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "Git", src: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="border-t border-white/5 bg-[#0d0d0d]">
      <div className="mb-7 flex items-end justify-between gap-4">
        <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-[#f5f5f2] sm:text-4xl">Skills</h2>
        <span className="text-xs text-[#6f6f6a]">Stack</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-5 sm:gap-x-9">
        {skills.map(({ name, src }) => (
          <img key={name} src={src} alt={name} title={name} className="h-8 w-8 object-contain opacity-80 hover:opacity-100 sm:h-9 sm:w-9" loading="lazy" />
        ))}
      </div>
    </SectionWrapper>
  );
}

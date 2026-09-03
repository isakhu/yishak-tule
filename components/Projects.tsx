import { ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Happy Bingo",
    description: "Offline Windows Bingo management software with automated number calling, up to 100 cards, claim verification, prize calculations, printing, and protected card management.",
    tech: ["Electron", "React", "TypeScript", "Vite"],
    github: "https://github.com/isakhu/happy-bingo",
    demo: "https://github.com/isakhu/happy-bingo",
    image: "https://image.thum.io/get/width/1200/https://github.com/isakhu/happy-bingo",
  },
  {
    title: "Tule Resort",
    description: "Luxury resort guest experience and ordering platform with visual menus, persistent cart, Supabase data, room and service workflows, and staff administration.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/isakhu/Tule-Resort",
    demo: "https://github.com/isakhu/Tule-Resort",
    image: "https://image.thum.io/get/width/1200/https://github.com/isakhu/Tule-Resort",
  },
  {
    title: "Hawassa Tabor School",
    description: "Modern school management platform covering role-based administration, academic workflows, student and teacher management, and responsive web interfaces.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/isakhu/hawassa-tabor-school",
    demo: "https://hawassa-tabor-school.vercel.app",
    image: "https://image.thum.io/get/width/1200/https://hawassa-tabor-school.vercel.app",
  },
  {
    title: "Yzak Luxury Brand",
    description: "Luxury e-commerce experience for fashion, watches, accessories, and premium products with a refined shopping interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/isakhu/yzak-luxury-brand",
    demo: "https://yzak-luxury-brand.vercel.app",
    image: "https://image.thum.io/get/width/1200/https://yzak-luxury-brand.vercel.app",
  },
  {
    title: "Yzak Fashion Store",
    description: "Full-stack fashion commerce platform with product management, orders, and operational admin workflows.",
    tech: ["FastAPI", "SQLAlchemy", "Python", "SQLite"],
    github: "https://github.com/isakhu/YZ-fashion-store",
    demo: "https://yzak-fashion-store-1.onrender.com",
    image: "https://image.thum.io/get/width/1200/https://yzak-fashion-store-1.onrender.com",
  },
];

const moreProjects = [
  { title: "Student Task Planner", href: "https://github.com/isakhu/DDU-Student-task-planner" },
  { title: "Personal Portfolio", href: "https://github.com/isakhu/yishak-tule" },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="Selected Work"
        title="Projects Built for Real Use"
        subtitle="Five projects that best represent my approach to product engineering, full-stack development, and software design."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className={`group overflow-hidden rounded-2xl border border-white/8 bg-[#111111] ${index === 0 ? "lg:col-span-2" : ""}`}>
            <div className={`${index === 0 ? "h-56" : "h-44"} relative overflow-hidden bg-[#0d0d0d]`}>
              <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-[#c9a24d]/30 bg-[#050505]/75 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#e0c47a] backdrop-blur">
                {index < 3 ? "Featured" : "Selected"}
              </span>
            </div>

            <div className="flex h-full flex-col p-5">
              <h3 className="font-display text-xl text-[#f5f5f2]">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#8c8c88]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => <span key={tech} className="rounded-md border border-white/8 px-2 py-1 text-[10px] text-[#b0b0aa]">{tech}</span>)}
              </div>
              <div className="mt-5 flex items-center border-t border-white/8 pt-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-[#b0b0aa] hover:text-[#f5f5f2]">
                  <Code2 size={14} /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-2 text-xs font-medium text-[#c9a24d] hover:text-[#e0c47a]">
                  <ExternalLink size={14} /> {project.demo.startsWith("https://github.com") ? "View Project" : "Live Demo"}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 border-t border-white/8 pt-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-[#6f6f6a]">More Projects</span>
          <div className="flex flex-wrap gap-4">
            {moreProjects.map((project) => (
              <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#b0b0aa] transition-colors hover:text-[#c9a24d]">{project.title} ↗</a>
            ))}
            <a href="https://github.com/isakhu" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#c9a24d] hover:text-[#e0c47a]">GitHub ↗</a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

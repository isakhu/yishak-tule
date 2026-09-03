import { ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const projects = [
  { title: "Happy Bingo", description: "Offline Windows bingo caller and management software.", tech: ["Electron", "React", "TypeScript"], github: "https://github.com/isakhu/happy-bingo", demo: "https://github.com/isakhu/happy-bingo", image: "https://image.thum.io/get/width/1200/https://github.com/isakhu/happy-bingo" },
  { title: "Tule Resort", description: "Guest menu, ordering, rooms, and staff workflows for Tule Resort.", tech: ["Next.js", "TypeScript", "Supabase"], github: "https://github.com/isakhu/Tule-Resort", demo: "https://github.com/isakhu/Tule-Resort", image: "https://image.thum.io/get/width/1200/https://github.com/isakhu/Tule-Resort" },
  { title: "Hawassa Tabor School", description: "School management system with role-based admin and academic workflows.", tech: ["Next.js", "TypeScript", "PostgreSQL"], github: "https://github.com/isakhu/hawassa-tabor-school", demo: "https://hawassa-tabor-school.vercel.app", image: "https://image.thum.io/get/width/1200/https://hawassa-tabor-school.vercel.app" },
  { title: "Yzak Luxury Brand", description: "Luxury e-commerce storefront for fashion and accessories.", tech: ["Next.js", "TypeScript", "Tailwind CSS"], github: "https://github.com/isakhu/yzak-luxury-brand", demo: "https://yzak-luxury-brand.vercel.app", image: "https://image.thum.io/get/width/1200/https://yzak-luxury-brand.vercel.app" },
  { title: "Yzak Fashion Store", description: "Full-stack fashion store with products, orders, and admin tools.", tech: ["FastAPI", "Python", "SQLAlchemy"], github: "https://github.com/isakhu/YZ-fashion-store", demo: "https://yzak-fashion-store-1.onrender.com", image: "https://image.thum.io/get/width/1200/https://yzak-fashion-store-1.onrender.com" },
];

const moreProjects = [
  { title: "Student Task Planner", href: "https://github.com/isakhu/DDU-Student-task-planner" },
  { title: "Personal Portfolio", href: "https://github.com/isakhu/yishak-tule" },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading label="Projects" title="Selected work." />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className={`overflow-hidden border border-white/8 bg-[#111111] ${index === 0 ? "lg:col-span-2" : ""}`}>
            <div className={`${index === 0 ? "h-60" : "h-44"} relative overflow-hidden bg-[#0d0d0d]`}>
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" unoptimized />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl text-[#f5f5f2]">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#8c8c88]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => <span key={tech} className="text-[10px] text-[#6f6f6a]">{tech}</span>)}
              </div>
              <div className="mt-5 flex items-center gap-5 border-t border-white/8 pt-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-[#b0b0aa] hover:text-[#f5f5f2]"><Code2 size={14} /> Code</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-[#c9a24d] hover:text-[#e0c47a]"><ExternalLink size={14} /> {project.demo.startsWith("https://github.com") ? "View Project" : "Live Demo"}</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/8 pt-5 text-sm">
        <span className="text-xs uppercase tracking-[0.18em] text-[#6f6f6a]">More</span>
        {moreProjects.map((project) => <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="text-[#8c8c88] hover:text-[#c9a24d]">{project.title} ↗</a>)}
        <a href="https://github.com/isakhu" target="_blank" rel="noopener noreferrer" className="text-[#c9a24d]">GitHub ↗</a>
      </div>
    </SectionWrapper>
  );
}

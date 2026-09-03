"use client";

import Image from "next/image";
import { ArrowUpRight, Code2, Globe2, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const projects = [
  { title: "Temar AI", category: "AI / Education", description: "An AI-powered learning product designed to make studying more personal, practical, and accessible.", stack: "Next.js · TypeScript · AI", href: "https://github.com/isakhu/Temar-AI", image: "/project-codevault.png" },
  { title: "Negade Pay", category: "FinTech", description: "A modern digital payment concept focused on simple financial experiences for everyday users.", stack: "Web · Payments · Product Design", href: "https://github.com/isakhu/Negade-pay", image: "/project-devcollab.png" },
  { title: "Metoriya", category: "Digital Product", description: "A product experiment built around a focused user experience and a clean modern interface.", stack: "Web · TypeScript · UI/UX", href: "https://github.com/isakhu/Metoriya", image: "/project-ecotrack.png" },
  { title: "Happy Bingo", category: "Desktop Software", description: "Offline Windows bingo management software with automated calling, verification, TV display, and game accounting.", stack: "Electron · React · TypeScript", href: "https://github.com/isakhu/happy-bingo", image: "/project-planner.png" },
  { title: "Tule Resort", category: "Hospitality Platform", description: "A digital resort experience covering menus, rooms, services, ordering, and staff workflows.", stack: "Next.js · Supabase · TypeScript", href: "https://github.com/isakhu/Tule-Resort", image: "/project-codevault.png" },
  { title: "Hawassa Tabor School", category: "Management System", description: "A school platform for administration, academic workflows, users, and role-based management.", stack: "Next.js · PostgreSQL · TypeScript", href: "https://hawassa-tabor-school.vercel.app", image: "/project-devcollab.png" },
];

const services = ["Web Design", "Web Development", "Full-Stack Systems", "SaaS Products", "Desktop Applications", "UI / UX Design"];
const skills = ["JavaScript", "TypeScript", "Python", "Java", "C++", "React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS", "PostgreSQL", "MongoDB", "MySQL", "Supabase", "Git", "Vercel"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <main className="site-shell">
      <header className="site-header">
        <nav className="nav-inner">
          <button className="brand" onClick={() => navigate("home")}>YZAK<span>.</span></button>
          <div className="desktop-nav">
            {["work", "about", "contact"].map((id) => <button key={id} onClick={() => navigate(id)}>{id[0].toUpperCase() + id.slice(1)}</button>)}
          </div>
          <a className="nav-cta" href="mailto:yishakhak@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </nav>
        {menuOpen && <div className="mobile-nav">{["work", "about", "contact"].map((id) => <button key={id} onClick={() => navigate(id)}>{id[0].toUpperCase() + id.slice(1)}</button>)}</div>}
      </header>

      <section id="home" className="hero-section section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">SOFTWARE ENGINEER · FULL-STACK DEVELOPER</p>
          <h1>I build <em>digital products</em> that solve real problems.</h1>
          <p className="hero-lede">I&apos;m Yishak Tule, a Software Engineering student and developer from Ethiopia. I design and build web applications, business systems, AI products, and practical software experiences.</p>
          <div className="hero-actions">
            <button className="dark-button" onClick={() => navigate("work")}>Explore my work <ArrowUpRight size={16} /></button>
            <a className="text-link" href="mailto:yishakhak@gmail.com">Start a conversation <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame"><Image src="/profile.png" alt="Yishak Tule" fill priority sizes="(max-width: 900px) 80vw, 430px" className="portrait-image" /></div>
          <div className="portrait-note"><span>01</span><p>Based in Ethiopia<br />Available for opportunities</p></div>
        </div>
      </section>

      <section className="marquee-strip" aria-label="Services">{services.map((service) => <span key={service}>{service}<b>✦</b></span>)}</section>

      <section id="work" className="section-wrap content-section">
        <div className="section-intro"><p className="eyebrow">SELECTED WORK</p><h2>Things I&apos;ve <em>built.</em></h2><p>From product ideas to working systems, these are some of the projects I&apos;ve been building while growing as an engineer.</p></div>
        <div className="work-grid">
          {projects.map((project, index) => <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className={`work-card ${index === 0 ? "featured" : ""}`}>
            <div className="work-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 100vw, 50vw" className="cover-image" /><span className="project-index">0{index + 1}</span></div>
            <div className="work-info"><div><span className="category">{project.category}</span><h3>{project.title}</h3></div><ArrowUpRight className="card-arrow" size={20} /><p>{project.description}</p><span className="stack">{project.stack}</span></div>
          </a>)}
        </div>
        <a className="all-work" href="https://github.com/isakhu" target="_blank" rel="noopener noreferrer">View all projects on GitHub <ArrowUpRight size={16} /></a>
      </section>

      <section id="about" className="about-section section-wrap content-section">
        <div className="section-intro"><p className="eyebrow">ABOUT ME</p><h2>Engineer with a <em>builder&apos;s mindset.</em></h2></div>
        <div className="about-grid">
          <div className="about-text"><p>I enjoy turning ideas into useful software. My work sits between engineering, product thinking, and interface design — from the first sketch to deployment.</p><p>I&apos;m currently studying Software Engineering and building a portfolio of real-world projects across AI, fintech, education, hospitality, e-commerce, and desktop software.</p><p>I care about clean interfaces, maintainable code, useful products, and learning by actually building.</p></div>
          <div className="facts"><div><span>01</span><strong>Full-Stack</strong><p>Frontend, backend, database, deployment.</p></div><div><span>02</span><strong>Product Focus</strong><p>Designing around real users and real problems.</p></div><div><span>03</span><strong>Always Learning</strong><p>Exploring AI, systems, UI/UX, and software architecture.</p></div></div>
        </div>
      </section>

      <section className="skills-section section-wrap content-section">
        <div className="section-intro compact"><p className="eyebrow">TOOLKIT</p><h2>Technologies I <em>work with.</em></h2></div>
        <div className="skills-list">{skills.map((skill, i) => <span key={skill}><small>{String(i + 1).padStart(2, "0")}</small>{skill}</span>)}</div>
      </section>

      <section id="contact" className="contact-section section-wrap">
        <div className="contact-main"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let&apos;s make something <em>meaningful.</em></h2><a href="mailto:yishakhak@gmail.com" className="contact-button">Get in touch <ArrowUpRight size={18} /></a></div>
        <div className="contact-details"><div><Mail size={17} /><span>EMAIL</span><a href="mailto:yishakhak@gmail.com">yishakhak@gmail.com</a></div><div><MapPin size={17} /><span>LOCATION</span><p>Hawassa, Ethiopia</p></div></div>
      </section>

      <footer className="footer">
        <div className="footer-top"><span className="brand">YZAK<span>.</span></span><p>Designing. Building. Learning.</p><div className="socials"><a href="https://github.com/isakhu" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Code2 size={18} /></a><a href="https://www.linkedin.com/in/yishak-tule" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Globe2 size={18} /></a><a href="mailto:yishakhak@gmail.com" aria-label="Email"><Mail size={18} /></a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Yishak Tule</span><button onClick={() => navigate("home")}>Back to top ↑</button></div>
      </footer>
    </main>
  );
}

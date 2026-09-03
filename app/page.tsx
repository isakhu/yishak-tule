"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Moon,
  Sun,
  UserRound,
  BriefcaseBusiness,
  Languages,
  Home as HomeIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

type Language = "en" | "am";
type Theme = "light" | "dark";

type Project = {
  title: string;
  category: { en: string; am: string };
  description: { en: string; am: string };
  stack: string;
  github: string;
  live?: string;
  image: string;
};

const screenshot = (url: string) =>
  `https://image.thum.io/get/width/1400/crop/820/noanimate/${url}`;

const siteSnapshot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1400`;

const brandIcon = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const projects: Project[] = [
  {
    title: "Temar AI",
    category: { en: "AI / Education", am: "AI / ትምህርት" },
    description: {
      en: "An AI-powered study workspace for learning, practice, notes, quizzes, flashcards, and study planning.",
      am: "ለመማር፣ ልምምድ፣ ማስታወሻ፣ ፈተና፣ ፍላሽካርድ እና የጥናት እቅድ የተሰራ በAI የሚንቀሳቀስ የጥናት መድረክ።",
    },
    stack: "Next.js · TypeScript · AI",
    live: "https://temar-ai.vercel.app/",
    github: "https://github.com/isakhu/Temar-AI",
    image: screenshot("https://temar-ai.vercel.app/"),
  },
  {
    title: "Negade Pay",
    category: { en: "FinTech", am: "ፋይናንስ / FinTech" },
    description: {
      en: "A digital payment product concept focused on simple, practical financial experiences.",
      am: "ቀላል እና ተግባራዊ የዲጂታል ክፍያ ልምድ ላይ ያተኮረ የFinTech ምርት ሀሳብ።",
    },
    stack: "Web · Payments · Product Design",
    github: "https://github.com/isakhu/Negade-pay",
    image: "https://opengraph.githubassets.com/1/isakhu/Negade-pay",
  },
  {
    title: "Metoriya",
    category: { en: "Digital Product", am: "ዲጂታል ምርት" },
    description: {
      en: "A focused digital product experiment built around a clean, modern user experience.",
      am: "በንፁህ እና ዘመናዊ የተጠቃሚ ልምድ ዙሪያ የተሰራ የዲጂታል ምርት ሙከራ።",
    },
    stack: "Web · TypeScript · UI/UX",
    github: "https://github.com/isakhu/Metoriya",
    image: "https://opengraph.githubassets.com/1/isakhu/Metoriya",
  },
  {
    title: "Happy Bingo",
    category: { en: "Desktop Software", am: "ዴስክቶፕ ሶፍትዌር" },
    description: {
      en: "Offline Windows bingo management software with automated calling, verification, TV display, and game accounting.",
      am: "በWindows ላይ ያለ ኢንተርኔት የሚሰራ የBingo አስተዳደር ሶፍትዌር፣ አውቶማቲክ ጥሪ፣ ማረጋገጫ፣ TV ማሳያ እና የጨዋታ ሂሳብን ያካትታል።",
    },
    stack: "Electron · React · TypeScript",
    github: "https://github.com/isakhu/happy-bingo",
    image: "https://i.etsystatic.com/42134370/r/il/c6fc38/5014518999/il_fullxfull.5014518999_f5ga.jpg",
  },
  {
    title: "Tule Resort",
    category: { en: "Hospitality Platform", am: "የሆቴል / ሪዞርት መድረክ" },
    description: {
      en: "A digital resort experience covering menus, rooms, services, ordering, and staff workflows.",
      am: "ሜኑ፣ ክፍሎች፣ አገልግሎቶች፣ ትዕዛዞች እና የሰራተኞች ስራ ሂደቶችን የሚያካትት ዲጂታል የሪዞርት ልምድ።",
    },
    stack: "Next.js · Supabase · TypeScript",
    live: "https://tule-resort.vercel.app/",
    github: "https://github.com/isakhu/Tule-Resort",
    image: siteSnapshot("https://tule-resort.vercel.app/"),
  },
  {
    title: "Hawassa Tabor School",
    category: { en: "Management System", am: "የአስተዳደር ስርዓት" },
    description: {
      en: "A school platform for administration, academic workflows, users, and role-based management.",
      am: "ለትምህርት ቤት አስተዳደር፣ የትምህርት ስራ ሂደቶች፣ ተጠቃሚዎች እና ሚና-ተኮር አስተዳደር የተሰራ መድረክ።",
    },
    stack: "Next.js · PostgreSQL · TypeScript",
    live: "https://hawassa-tabor-school.vercel.app/",
    github: "https://github.com/isakhu/hawassa-tabor-school",
    image: screenshot("https://hawassa-tabor-school.vercel.app/"),
  },
  {
    title: "YZAK Luxury Brand",
    category: { en: "E-Commerce / Fashion", am: "ኢ-ኮሜርስ / ፋሽን" },
    description: {
      en: "A luxury fashion storefront focused on premium presentation, product browsing, and brand identity.",
      am: "በፕሪሚየም አቀራረብ፣ የምርት አሰሳ እና የብራንድ ማንነት ላይ የተተኮረ የሎግዠሪ ፋሽን መደብር።",
    },
    stack: "Next.js · TypeScript · E-Commerce",
    live: "https://yzak-luxury-brand.vercel.app/",
    github: "https://github.com/isakhu/yzak-luxury-brand",
    image: screenshot("https://yzak-luxury-brand.vercel.app/"),
  },
];

const skills = [
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "Java", icon: "openjdk" },
  { name: "C++", icon: "cplusplus" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "Supabase", icon: "supabase" },
  { name: "Git", icon: "git" },
  { name: "Vercel", icon: "vercel" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/isakhu", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yishak-tule", icon: "linkedin" },
  { label: "Telegram", href: "https://t.me/yzak_22", icon: "telegram" },
];

const copy = {
  en: {
    navHome: "Home", navWork: "Work", navAbout: "About", navContact: "Contact",
    heroEyebrow: "SOFTWARE ENGINEER · FULL-STACK DEVELOPER",
    heroTitle: "I build digital products that solve real problems.",
    heroLead: "I’m Yishak Tule, a Software Engineering student and developer from Ethiopia. I design and build web applications, business systems, AI products, and practical software experiences.",
    explore: "Explore my work", talk: "Start a conversation", based: "Based in Ethiopia", available: "Available for opportunities",
    workEyebrow: "SELECTED WORK", workTitle: "Things I’ve built.",
    workLead: "From product ideas to working systems, these are projects I’ve built while growing as an engineer.",
    allProjects: "See all projects on GitHub", liveDemo: "Live demo", sourceCode: "Source code",
    aboutEyebrow: "ABOUT ME", aboutTitle: "Engineer with a builder’s mindset.",
    about1: "I enjoy turning ideas into useful software. My work sits between engineering, product thinking, and interface design — from the first sketch to deployment.",
    about2: "I’m currently studying Software Engineering and building real-world projects across AI, fintech, education, hospitality, e-commerce, and desktop software.",
    about3: "I care about clean interfaces, maintainable code, useful products, and learning by actually building.",
    fullstack: "Full-Stack", fullstackText: "Frontend, backend, database, deployment.", product: "Product Focus",
    productText: "Designing around real users and real problems.", learning: "Always Learning",
    learningText: "Exploring AI, systems, UI/UX, and software architecture.", toolkit: "TOOLKIT",
    toolkitTitle: "Technologies I work with.", contactEyebrow: "HAVE A PROJECT IN MIND?",
    contactTitle: "Let’s make something meaningful.", getInTouch: "Get in touch", location: "LOCATION",
    footer: "Designing. Building. Learning.", theme: "Theme", language: "Language",
  },
  am: {
    navHome: "መነሻ", navWork: "ስራዎች", navAbout: "ስለእኔ", navContact: "አግኙኝ",
    heroEyebrow: "የሶፍትዌር ኢንጂነር · FULL-STACK DEVELOPER",
    heroTitle: "እውነተኛ ችግሮችን የሚፈቱ ዲጂታል ምርቶችን እሰራለሁ።",
    heroLead: "እኔ ይሻክ ቱሌ ነኝ፣ ከኢትዮጵያ የመጣሁ የSoftware Engineering ተማሪ እና ዴቨሎፐር ነኝ። የድር መተግበሪያዎችን፣ የንግድ ስርዓቶችን፣ AI ምርቶችን እና ተግባራዊ የሶፍትዌር ልምዶችን እገነባለሁ።",
    explore: "ስራዎቼን ይመልከቱ", talk: "እንወያይ", based: "ኢትዮጵያ ውስጥ", available: "ለስራ እድሎች ክፍት",
    workEyebrow: "የተመረጡ ስራዎች", workTitle: "የገነባኋቸው ነገሮች።",
    workLead: "ከምርት ሀሳቦች እስከ ሙሉ ስርዓቶች፣ በኢንጂነርነት ልምዴን እያሳደግሁ የገነባኋቸው ፕሮጀክቶች ናቸው።",
    allProjects: "ሁሉንም ፕሮጀክቶች በGitHub ይመልከቱ", liveDemo: "የቀጥታ ማሳያ", sourceCode: "የምንጭ ኮድ",
    aboutEyebrow: "ስለእኔ", aboutTitle: "በመገንባት አስተሳሰብ የሚሰራ ኢንጂነር።",
    about1: "ሀሳቦችን ወደ ጠቃሚ ሶፍትዌር መቀየር እወዳለሁ። ስራዬ በኢንጂነሪንግ፣ በምርት አስተሳሰብ እና በUI/UX ዲዛይን መካከል ይገኛል።",
    about2: "በአሁኑ ጊዜ Software Engineering እየተማርኩ ሲሆን AI፣ FinTech፣ ትምህርት፣ ሆስፒታሊቲ፣ ኢ-ኮሜርስ እና ዴስክቶፕ ሶፍትዌር ዘርፎች ውስጥ እውነተኛ ፕሮጀክቶችን እገነባለሁ።",
    about3: "ንፁህ ኢንተርፌሶችን፣ ለማስተዳደር ቀላል ኮድን፣ ጠቃሚ ምርቶችን እና በመገንባት መማርን እጠብቃለሁ።",
    fullstack: "Full-Stack", fullstackText: "Frontend፣ backend፣ database እና deployment።", product: "የምርት ትኩረት",
    productText: "በተጠቃሚዎችና በእውነተኛ ችግሮች ዙሪያ ዲዛይን ማድረግ።", learning: "ሁልጊዜ እማራለሁ",
    learningText: "AI፣ systems፣ UI/UX እና software architecture እያሰሳሁ።", toolkit: "መሳሪያዎቼ",
    toolkitTitle: "የምሰራባቸው ቴክኖሎጂዎች።", contactEyebrow: "ፕሮጀክት አለዎት?",
    contactTitle: "ትርጉም ያለው ነገር እንስራ።", getInTouch: "ያነጋግሩኝ", location: "አካባቢ",
    footer: "እንዲነድፍ። እንዲገነባ። እንዲማር።", theme: "ገጽታ", language: "ቋንቋ",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [active, setActive] = useState("home");
  const t = copy[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("yzak-language") as Language | null;
    const savedTheme = window.localStorage.getItem("yzak-theme") as Theme | null;
    if (savedLanguage === "en" || savedLanguage === "am") setLanguage(savedLanguage);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("yzak-theme", theme);
  }, [theme]);

  useEffect(() => { window.localStorage.setItem("yzak-language", language); }, [language]);

  const navigate = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => navigate("home")}>YZAK<span>.</span></button>
        <div className="top-actions">
          <button className="control-button" onClick={() => setLanguage(language === "en" ? "am" : "en")} aria-label={`${t.language}: ${language === "en" ? "Amharic" : "English"}`}>
            <Languages size={16} /><span>{language === "en" ? "አማ" : "EN"}</span>
          </button>
          <button className="control-button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={t.theme}>
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </header>

      <section id="home" className="hero-section section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p><h1>{t.heroTitle}</h1><p className="hero-lede">{t.heroLead}</p>
          <div className="hero-actions"><button className="dark-button" onClick={() => navigate("work")}>{t.explore} <ArrowUpRight size={16} /></button><a className="text-link" href="mailto:yishakhak@gmail.com">{t.talk} <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="hero-portrait"><div className="portrait-frame"><Image src="/profile.png" alt="Yishak Tule" fill priority sizes="(max-width: 900px) 80vw, 430px" className="portrait-image" /></div><div className="portrait-note"><span>01</span><p>{t.based}<br />{t.available}</p></div></div>
      </section>

      <section className="marquee-strip" aria-label="Services">{["Web Design", "Web Development", "Full-Stack Systems", "SaaS Products", "Desktop Applications", "UI / UX Design"].map((service) => <span key={service}>{service}<b>✦</b></span>)}</section>

      <section id="work" className="section-wrap content-section">
        <div className="section-intro"><p className="eyebrow">{t.workEyebrow}</p><h2>{t.workTitle}</h2><p>{t.workLead}</p></div>
        <div className="work-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="work-card">
              <div className="work-image"><img src={project.image} alt={`${project.title} project preview`} className="cover-image" style={{ width: "100%", height: "100%", display: "block" }} loading="lazy" /><span className="project-index">{String(index + 1).padStart(2, "0")}</span></div>
              <div className="work-info">
                <div><span className="category">{project.category[language]}</span><h3>{project.title}</h3></div>
                <ArrowUpRight className="card-arrow" size={20} />
                <p>{project.description[language]}</p>
                <div style={{ gridColumn: "1 / -1", display: "flex", flexWrap: "wrap", gap: "18px", marginTop: "7px" }}>
                  {project.live && <a className="text-link" href={project.live} target="_blank" rel="noopener noreferrer">{t.liveDemo} <ArrowUpRight size={14} /></a>}
                  <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">{t.sourceCode} <ArrowUpRight size={14} /></a>
                </div>
                <span className="stack">{project.stack}</span>
              </div>
            </article>
          ))}
        </div>
        <a className="all-work" href="https://github.com/isakhu" target="_blank" rel="noopener noreferrer">{t.allProjects} <ArrowUpRight size={16} /></a>
      </section>

      <section id="about" className="about-section section-wrap content-section"><div className="section-intro"><p className="eyebrow">{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2></div><div className="about-grid"><div className="about-text"><p>{t.about1}</p><p>{t.about2}</p><p>{t.about3}</p></div><div className="facts"><div><span>01</span><strong>{t.fullstack}</strong><p>{t.fullstackText}</p></div><div><span>02</span><strong>{t.product}</strong><p>{t.productText}</p></div><div><span>03</span><strong>{t.learning}</strong><p>{t.learningText}</p></div></div></div></section>

      <section id="skills" className="skills-section section-wrap content-section"><div className="section-intro compact"><p className="eyebrow">{t.toolkit}</p><h2>{t.toolkitTitle}</h2></div><div className="skills-list">{skills.map((skill, i) => <span key={skill.name}><small>{String(i + 1).padStart(2, "0")}</small><img className="skill-icon" src={brandIcon(skill.icon)} alt={`${skill.name} logo`} width={22} height={22} loading="lazy" /><strong className="skill-name">{skill.name}</strong></span>)}</div></section>

      <section id="contact" className="contact-section section-wrap"><div className="contact-main"><p className="eyebrow">{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><a href="mailto:yishakhak@gmail.com" className="contact-button">{t.getInTouch} <ArrowUpRight size={18} /></a></div><div className="contact-details"><div><Mail size={17} /><span>EMAIL</span><a href="mailto:yishakhak@gmail.com">yishakhak@gmail.com</a></div><div><MapPin size={17} /><span>{t.location}</span><p>Hawassa, Ethiopia</p></div></div></section>

      <footer className="footer"><div className="footer-top"><span className="brand">YZAK<span>.</span></span><p>{t.footer}</p><div className="socials">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label}><img className="social-icon" src={brandIcon(social.icon)} alt="" width={17} height={17} /></a>)}<a href="mailto:yishakhak@gmail.com" aria-label="Email" title="Email"><Mail size={17} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Yishak Tule</span><span>Hawassa · Ethiopia</span></div></footer>

      <nav className="floating-nav" aria-label="Primary navigation"><button className={active === "home" ? "active" : ""} onClick={() => navigate("home")} aria-label={t.navHome}><HomeIcon size={17} /><span>{t.navHome}</span></button><button className={active === "work" ? "active" : ""} onClick={() => navigate("work")} aria-label={t.navWork}><BriefcaseBusiness size={17} /><span>{t.navWork}</span></button><button className={active === "about" ? "active" : ""} onClick={() => navigate("about")} aria-label={t.navAbout}><UserRound size={17} /><span>{t.navAbout}</span></button><button className={active === "contact" ? "active" : ""} onClick={() => navigate("contact")} aria-label={t.navContact}><Mail size={17} /><span>{t.navContact}</span></button></nav>
    </main>
  );
}

"use client";

const projects = [
  {
    name: "Temar AI",
    text: "AI-powered study platform for learning, practice, notes, quizzes, flashcards, and study planning.",
    stack: "Next.js · TypeScript · AI",
  },
  {
    name: "Happy Bingo",
    text: "Offline Windows bingo management application with automated calling, verification, TV display, game accounting, and 100-player card management.",
    stack: "Electron · React · TypeScript",
  },
  {
    name: "Tule Resort",
    text: "Digital resort platform covering menus, rooms, services, ordering, and staff workflows.",
    stack: "Next.js · Supabase · TypeScript",
  },
  {
    name: "Hawassa Tabor School",
    text: "School management platform covering administration, academic workflows, users, and role-based management.",
    stack: "Next.js · PostgreSQL · TypeScript",
  },
  {
    name: "YZAK Luxury Brand",
    text: "Luxury fashion storefront focused on premium presentation, product browsing, and brand identity.",
    stack: "Next.js · TypeScript · E-Commerce",
  },
];

const skills = [
  "JavaScript", "TypeScript", "Python", "Java", "C++", "React", "Next.js", "Node.js",
  "FastAPI", "Tailwind CSS", "PostgreSQL", "MongoDB", "MySQL", "Supabase", "Git",
  "Vercel", "Electron", "UI/UX",
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-actions no-print">
        <a href="/" className="resume-back">← Portfolio</a>
        <button onClick={() => window.print()} className="resume-print">Print / Save PDF</button>
      </div>

      <article className="resume-paper">
        <header className="resume-header">
          <div>
            <h1>Yishak Tule</h1>
            <p className="resume-role">Software Engineer · Full-Stack Developer</p>
          </div>
          <div className="resume-contact">
            <span>Hawassa, Ethiopia</span>
            <a href="mailto:yishakhak@gmail.com">yishakhak@gmail.com</a>
            <a href="https://github.com/isakhu" target="_blank" rel="noreferrer">github.com/isakhu</a>
            <a href="https://www.linkedin.com/in/yishak-tule" target="_blank" rel="noreferrer">linkedin.com/in/yishak-tule</a>
          </div>
        </header>

        <section>
          <h2>Profile</h2>
          <p>Software Engineering student and full-stack developer building practical digital products across AI, education, hospitality, e-commerce, business systems, and desktop software. Focused on clean interfaces, maintainable code, and shipping useful products from idea to deployment.</p>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <div className="resume-skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </section>

        <section>
          <h2>Selected Projects</h2>
          <div className="resume-projects">
            {projects.map((project) => (
              <div className="resume-project" key={project.name}>
                <div className="resume-project-title"><strong>{project.name}</strong><span>{project.stack}</span></div>
                <p>{project.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Education</h2>
          <p><strong>BSc in Software Engineering</strong> · Diredawa University · Expected graduation: 2027</p>
        </section>

        <section>
          <h2>Internship</h2>
          <p><strong>Software Engineering Intern</strong> · Sidama Science and Technology · 2-month internship</p>
          <p>Contributed to practical software work while developing experience in application development, deployment, databases, and collaborative engineering workflows.</p>
        </section>

        <section>
          <h2>Tools & Platforms</h2>
          <p>GitHub · VS Code · Vercel · Render · PostgreSQL · Supabase · MongoDB · MySQL</p>
        </section>

        <section>
          <h2>Languages</h2>
          <p>English · Amharic</p>
        </section>
      </article>

      <style jsx global>{`
        .resume-page {
          min-height: 100vh;
          padding: 40px 20px;
          background: #ece8df;
          color: #171717;
          font-family: Arial, Helvetica, sans-serif;
        }
        .resume-actions {
          width: min(850px, 100%);
          margin: 0 auto 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .resume-back, .resume-print {
          border: 1px solid #c9c2b8;
          background: #f8f6f1;
          color: #171717;
          padding: 10px 14px;
          font-size: 12px;
          text-decoration: none;
          cursor: pointer;
        }
        .resume-print { font-weight: 700; }
        .resume-paper {
          width: min(850px, 100%);
          margin: 0 auto;
          padding: 54px 58px;
          background: #fffdfa;
          box-shadow: 0 18px 70px rgba(0,0,0,.1);
        }
        .resume-header {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          padding-bottom: 22px;
          border-bottom: 2px solid #171717;
        }
        .resume-header h1 { margin: 0; font-size: 34px; letter-spacing: -.04em; }
        .resume-role { margin: 5px 0 0; color: #9a6b3f; font-size: 14px; font-weight: 700; }
        .resume-contact { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; font-size: 9.5px; color: #625f59; line-height: 1.45; }
        .resume-contact a { color: inherit; text-decoration: none; }
        .resume-paper section { margin-top: 22px; }
        .resume-paper h2 { margin: 0 0 9px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
        .resume-paper p { margin: 0 0 7px; font-size: 10.5px; line-height: 1.55; }
        .resume-skills { display: flex; flex-wrap: wrap; gap: 6px 9px; }
        .resume-skills span { font-size: 9.5px; color: #3d3a36; }
        .resume-skills span:not(:last-child)::after { content: " ·"; color: #9a6b3f; margin-left: 7px; }
        .resume-projects { display: grid; gap: 11px; }
        .resume-project { padding-bottom: 9px; border-bottom: 1px solid #ddd7cc; }
        .resume-project-title { display: flex; justify-content: space-between; gap: 20px; align-items: baseline; }
        .resume-project-title strong { font-size: 11px; }
        .resume-project-title span { font-size: 9px; color: #777169; }
        .resume-project p { margin-top: 3px; }
        @media (max-width: 650px) {
          .resume-page { padding: 15px; }
          .resume-paper { padding: 32px 24px; }
          .resume-header { flex-direction: column; gap: 16px; }
          .resume-contact { align-items: flex-start; }
          .resume-project-title { flex-direction: column; gap: 3px; }
        }
        @media print {
          .no-print { display: none !important; }
          .resume-page { padding: 0; background: white; }
          .resume-paper { width: 100%; box-shadow: none; padding: 0; }
          @page { size: A4; margin: 14mm; }
        }
      `}</style>
    </main>
  );
}

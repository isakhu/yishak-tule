"use client";

const projects = [
  {
    name: "Temar AI",
    text: "AI-powered study platform for learning, practice, notes, quizzes, flashcards, and study planning.",
    stack: "Next.js · TypeScript · AI",
    github: "https://github.com/isakhu/Temar-AI",
  },
  {
    name: "Happy Bingo",
    text: "Offline Windows bingo management application with automated calling, verification, TV display, game accounting, and 100-player card management.",
    stack: "Electron · React · TypeScript",
    github: "https://github.com/isakhu/happy-bingo",
  },
  {
    name: "Tule Resort",
    text: "Digital resort platform covering menus, rooms, services, ordering, and staff workflows.",
    stack: "Next.js · Supabase · TypeScript",
    github: "https://github.com/isakhu/Tule-Resort",
  },
  {
    name: "Hawassa Tabor School",
    text: "School management platform for administration, academic workflows, users, and role-based management.",
    stack: "Next.js · PostgreSQL · TypeScript",
    github: "https://github.com/isakhu/hawassa-tabor-school",
  },
  {
    name: "YZAK Luxury Brand",
    text: "Luxury fashion storefront focused on premium presentation, product browsing, and brand identity.",
    stack: "Next.js · TypeScript · E-Commerce",
    github: "https://github.com/isakhu/yzak-luxury-brand",
  },
];

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "SQL / PostgreSQL", "Git / GitHub",
  "Tailwind CSS", "Python / FastAPI", "Node.js", "MongoDB", "MySQL", "Supabase",
  "Electron", "Vercel",
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
            <p className="resume-eyebrow">SOFTWARE ENGINEER · FULL-STACK WEB DEVELOPER</p>
            <h1>Yishak Tule</h1>
            <p className="resume-summary">Software Engineering student focused on problem solving, practical software development, and building reliable products for real users.</p>
          </div>
          <div className="resume-contact">
            <span>Hawassa, Ethiopia</span>
            <span>0994781422</span>
            <a href="mailto:yishakhak@gmail.com">yishakhak@gmail.com</a>
            <a href="https://github.com/isakhu" target="_blank" rel="noreferrer">github.com/isakhu</a>
            <a href="https://yishak-tule.vercel.app/" target="_blank" rel="noreferrer">yishak-tule.vercel.app</a>
            <a href="https://www.linkedin.com/in/yishak-tule" target="_blank" rel="noreferrer">linkedin.com/in/yishak-tule</a>
          </div>
        </header>

        <section>
          <h2>Profile</h2>
          <p>Software Engineering student and Full-Stack Web Developer with hands-on experience building and deploying real-world web applications, business systems, AI products, e-commerce experiences, and desktop software. I enjoy solving practical problems with clean interfaces, maintainable code, and modern development tools.</p>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <div className="resume-skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </section>

        <section>
          <h2>Experience</h2>
          <div className="resume-experience">
            <div className="resume-entry">
              <div className="resume-entry-title"><strong>Software Engineering Intern</strong><span>Sidama Science and Technology · March–July 2026</span></div>
              <p>Worked with a mentor and team on web development and software engineering activities, including website development, web application features, frontend implementation, and collaborative delivery.</p>
            </div>
            <div className="resume-entry">
              <div className="resume-entry-title"><strong>Freelance Web Developer</strong><span>Client Projects</span></div>
              <p>Built websites for resorts/hotels and schools/education organizations, translating practical business and organizational needs into modern, responsive web experiences.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Selected Projects</h2>
          <div className="resume-projects">
            {projects.map((project) => (
              <div className="resume-project" key={project.name}>
                <div className="resume-project-title">
                  <strong>{project.name}</strong>
                  <span>{project.stack}</span>
                </div>
                <p>{project.text}</p>
                <a className="resume-project-link" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Education</h2>
          <p><strong>BSc in Software Engineering</strong> · Dire Dawa University · Started October 2023</p>
          <p>Expected Graduation: 2027</p>
        </section>

        <section>
          <h2>Additional</h2>
          <p><strong>Projects:</strong> 20+ GitHub projects built across software engineering, web development, AI, education, hospitality, e-commerce, and desktop software.</p>
          <p><strong>Languages:</strong> English (Professional working proficiency) · Amharic (Fluent) · Sidama (Basic)</p>
          <p><strong>Certifications:</strong> None yet</p>
          <p><strong>References:</strong> Available upon request</p>
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
          padding: 50px 56px;
          background: #fffdfa;
          box-shadow: 0 18px 70px rgba(0,0,0,.1);
        }
        .resume-header {
          display: grid;
          grid-template-columns: 1fr auto;
          justify-content: space-between;
          gap: 42px;
          padding-bottom: 20px;
          border-bottom: 2px solid #171717;
        }
        .resume-eyebrow {
          margin: 0 0 6px;
          color: #9a6b3f;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .15em;
        }
        .resume-header h1 { margin: 0; font-size: 36px; letter-spacing: -.04em; }
        .resume-summary { max-width: 520px; margin: 8px 0 0; color: #5e5a54; font-size: 10.5px; line-height: 1.5; }
        .resume-contact { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; font-size: 9.3px; color: #625f59; line-height: 1.45; text-align: right; }
        .resume-contact a { color: inherit; text-decoration: none; }
        .resume-paper section { margin-top: 20px; }
        .resume-paper h2 { margin: 0 0 8px; font-family: Arial, Helvetica, sans-serif; font-size: 10.5px; letter-spacing: .13em; text-transform: uppercase; color: #171717; }
        .resume-paper p { margin: 0 0 6px; font-size: 10px; line-height: 1.5; }
        .resume-skills { display: flex; flex-wrap: wrap; gap: 4px 8px; }
        .resume-skills span { font-size: 9.2px; color: #3d3a36; }
        .resume-skills span:not(:last-child)::after { content: " ·"; color: #9a6b3f; margin-left: 6px; }
        .resume-experience { display: grid; gap: 10px; }
        .resume-entry { padding-bottom: 8px; border-bottom: 1px solid #ddd7cc; }
        .resume-entry-title, .resume-project-title { display: flex; justify-content: space-between; gap: 20px; align-items: baseline; }
        .resume-entry-title strong, .resume-project-title strong { font-size: 10.5px; }
        .resume-entry-title span, .resume-project-title span { font-size: 8.8px; color: #777169; text-align: right; }
        .resume-entry p { margin-top: 3px; }
        .resume-projects { display: grid; gap: 8px; }
        .resume-project { padding-bottom: 7px; border-bottom: 1px solid #ddd7cc; }
        .resume-project p { margin-top: 3px; margin-bottom: 2px; }
        .resume-project-link { font-size: 8.5px; color: #9a6b3f; text-decoration: none; font-weight: 700; }
        @media (max-width: 650px) {
          .resume-page { padding: 15px; }
          .resume-paper { padding: 32px 24px; }
          .resume-header { grid-template-columns: 1fr; gap: 16px; }
          .resume-contact { align-items: flex-start; text-align: left; }
          .resume-entry-title, .resume-project-title { flex-direction: column; gap: 3px; }
          .resume-entry-title span, .resume-project-title span { text-align: left; }
        }
        @media print {
          .no-print { display: none !important; }
          .resume-page { padding: 0; background: white; }
          .resume-paper { width: 100%; box-shadow: none; padding: 0; }
          @page { size: A4; margin: 13mm; }
        }
      `}</style>
    </main>
  );
}

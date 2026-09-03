import { ArrowUp, Code2, ExternalLink, Mail, MessageCircle } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Code2, href: "https://github.com/isakhu", label: "GitHub" },
  { icon: ExternalLink, href: "https://www.linkedin.com/in/yishak-tule", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://t.me/yzak_22", label: "Telegram" },
  { icon: Mail, href: "mailto:yishakhak@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#050505]">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#c9a24d] text-[#050505]"><Code2 size={15} /></div>
              <span className="text-sm font-black tracking-[0.2em] text-[#f5f5f2]">YZAK</span>
            </div>
            <p className="mt-2 text-xs text-[#6f6f6a]">Software Engineer | Full-Stack Developer</p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => <a key={link.href} href={link.href} className="text-xs text-[#8c8c88] transition-colors hover:text-[#c9a24d]">{link.label}</a>)}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} className="flex h-8 w-8 items-center justify-center rounded-md border border-white/8 text-[#8c8c88] transition-colors hover:border-[#c9a24d]/40 hover:text-[#c9a24d]">
                <Icon size={14} />
              </a>
            ))}
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="ml-1 flex h-8 w-8 items-center justify-center rounded-md border border-white/8 text-[#8c8c88] transition-colors hover:border-[#c9a24d]/40 hover:text-[#c9a24d]"><ArrowUp size={14} /></button>
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-2 border-t border-white/8 pt-5 text-[11px] text-[#5f5f5b] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 YZAK. All rights reserved.</span>
          <span>Built with care in Ethiopia.</span>
        </div>
      </div>
    </footer>
  );
}

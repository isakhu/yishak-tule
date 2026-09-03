import { ArrowUpRight, Code2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const contacts = [
  { icon: Mail, label: "Email", value: "yishakhak@gmail.com", href: "mailto:yishakhak@gmail.com" },
  { icon: Phone, label: "Phone", value: "+251 994 781 422", href: "tel:+251994781422" },
  { icon: MessageCircle, label: "Telegram", value: "@yzak_22", href: "https://t.me/yzak_22" },
  { icon: Code2, label: "GitHub", value: "github.com/isakhu", href: "https://github.com/isakhu" },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="border-t border-white/5 bg-[#0d0d0d]">
      <SectionHeading
        label="Contact"
        title="Let&apos;s build something worth shipping."
        subtitle="For projects, collaborations, or opportunities, the fastest way to reach me is by email or Telegram."
      />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-2xl border border-[#c9a24d]/25 bg-[#111111] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c9a24d]">Start a conversation</p>
          <h3 className="mt-4 font-display text-3xl leading-tight text-[#f5f5f2] sm:text-4xl">Have an idea, product, or problem to solve?</h3>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#8c8c88]">Tell me what you are building, what you need, or where you are stuck. I&apos;ll get back to you through the contact channel you choose.</p>
          <a href="mailto:yishakhak@gmail.com" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#f5f5f2] px-5 py-3 text-sm font-semibold text-[#050505] transition-colors hover:bg-[#c9a24d]">
            Contact Me <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-center gap-4 rounded-xl border border-white/8 bg-[#111111] p-4 transition-colors hover:border-[#c9a24d]/30">
              <div className="rounded-lg border border-[#c9a24d]/20 bg-[#c9a24d]/[0.07] p-2.5"><Icon size={18} className="text-[#c9a24d]" /></div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#6f6f6a]">{label}</p>
                <p className="mt-1 truncate text-sm text-[#f5f5f2] group-hover:text-[#c9a24d]">{value}</p>
              </div>
            </a>
          ))}
          <div className="flex items-center gap-3 px-1 pt-2 text-xs text-[#6f6f6a]"><MapPin size={14} className="text-[#c9a24d]" /> Ethiopia · Open to remote opportunities</div>
        </div>
      </div>
    </SectionWrapper>
  );
}

import { Code2, Mail, MessageCircle, Phone } from "lucide-react";
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
      <SectionHeading label="Contact" title="Get in touch." />
      <div className="grid gap-3 sm:grid-cols-2">
        {contacts.map(({ icon: Icon, label, value, href }) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-4 border border-white/8 bg-[#111111] p-4 hover:border-[#c9a24d]/35">
            <Icon size={18} className="shrink-0 text-[#c9a24d]" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#6f6f6a]">{label}</p>
              <p className="mt-1 truncate text-sm text-[#f5f5f2]">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}

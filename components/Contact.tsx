"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, CheckCircle2, Code2, Globe, Phone, MessageCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl glass border border-white/10 bg-transparent text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200";

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "yishakhak@gmail.com",
      href: "mailto:yishakhak@gmail.com",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251 994 781 422",
      href: "tel:+251994781422",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@yzak_22",
      href: "https://t.me/yzak_22",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
    },
    {
      icon: Code2,
      label: "GitHub",
      value: "github.com/isakhu",
      href: "https://github.com/isakhu",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      icon: Globe,
      label: "LinkedIn",
      value: "linkedin.com/in/yishak-tule",
      href: "https://www.linkedin.com/in/yishak-tule",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ethiopia 🇪🇹",
      href: null,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
    },
  ];

  return (
    <SectionWrapper id="contact" noAnimation>
      <SectionHeading
        label="Get In Touch"
        title="Contact Me"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Let&apos;s work together</h3>
            <p className="text-zinc-400 leading-relaxed">
              I&apos;m currently open to freelance projects, internship opportunities, and full-time
              roles. Whether you have a project idea or just want to connect, feel free to reach out.
            </p>
          </div>

          <div className="space-y-3">
            {contactItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 glass border ${item.border} rounded-xl p-4`}
              >
                <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                  <item.icon size={18} className={item.color} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`${item.color} text-sm font-medium hover:underline`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass border border-green-500/30 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-green-400" />
              </div>
              <h3 className="text-white font-bold text-xl">Message Sent!</h3>
              <p className="text-zinc-400 text-sm max-w-xs">
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="mt-2 text-indigo-400 text-sm hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-zinc-400 text-xs mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-zinc-400 text-xs mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-zinc-400 text-xs mb-2 font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-zinc-400 text-xs mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(99,102,241,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold glow-indigo transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

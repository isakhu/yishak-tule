import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yishak.T | YZAK — Software Engineer & Full Stack Developer",
  description:
    "Yishak Tule (YZAK) is a Software Engineer and Full Stack Developer from Ethiopia, specializing in React, Next.js, Node.js, and modern web applications.",
  keywords: [
    "Yishak Tule",
    "YZAK",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Ethiopia",
    "Web Developer",
  ],
  authors: [{ name: "Yishak Tule", url: "https://github.com/isakhu" }],
  creator: "Yishak Tule",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Yishak.T | YZAK — Software Engineer & Full Stack Developer",
    description:
      "Software Engineer and Full Stack Developer from Ethiopia building scalable web applications and modern digital experiences.",
    siteName: "YZAK Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yishak.T | YZAK — Software Engineer & Full Stack Developer",
    description:
      "Software Engineer and Full Stack Developer from Ethiopia building scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050508] text-zinc-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

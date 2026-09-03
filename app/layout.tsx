import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yishak Tule | YZAK — Software Engineer | Full-Stack Developer",
  description:
    "Yishak Tule (YZAK) is a Software Engineer and Full-Stack Developer from Ethiopia, building modern web applications, full-stack systems, and software products.",
  keywords: [
    "Yishak Tule",
    "YZAK",
    "Software Engineer",
    "Full-Stack Developer",
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
    title: "Yishak Tule | YZAK — Software Engineer | Full-Stack Developer",
    description:
      "Software Engineer and Full-Stack Developer building modern digital products and reliable software systems.",
    siteName: "YZAK Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yishak Tule | YZAK — Software Engineer | Full-Stack Developer",
    description:
      "Software Engineer and Full-Stack Developer building modern software products.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

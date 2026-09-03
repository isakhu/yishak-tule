import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yishak Tule — Software Engineer & Full-Stack Developer",
  description: "Yishak Tule is a Software Engineer and Full-Stack Developer from Ethiopia building digital products, business systems, AI experiences, and modern web applications.",
  keywords: ["Yishak Tule", "YZAK", "Software Engineer", "Full-Stack Developer", "React", "Next.js", "TypeScript", "Ethiopia"],
  authors: [{ name: "Yishak Tule", url: "https://github.com/isakhu" }],
  creator: "Yishak Tule",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Yishak Tule — Software Engineer & Full-Stack Developer",
    description: "Software Engineer and Full-Stack Developer building useful digital products and reliable software systems.",
    siteName: "Yishak Tule",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yishak Tule — Software Engineer & Full-Stack Developer",
    description: "Software Engineer and Full-Stack Developer building modern digital products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}

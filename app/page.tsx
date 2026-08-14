import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import LoadingIntro from "@/components/LoadingIntro";

export default function Home() {
  return (
    <>
      <LoadingIntro />
      <Navbar />
      <main>
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Resume /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Reveal><Footer /></Reveal>
    </>
  );
}

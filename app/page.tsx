import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import TimeLine from "./components/TimeLine";
import ContactCard from "./components/ContactCard";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <TimeLine />
      <Projects />
      <ContactCard />
    </div>
  );
}

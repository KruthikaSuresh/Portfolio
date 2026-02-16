import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

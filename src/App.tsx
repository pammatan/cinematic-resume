import { useEffect } from "react";
import { profile } from "./content/profile";
import { About } from "./components/About";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Boot } from "./components/Boot";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Nav } from "./components/Nav";
import { Work } from "./components/Work";
import { MotionProvider } from "./motion/MotionContext";

export function App() {
  useEffect(() => {
    document.title = `${profile.name} — เรซูเม่`;
  }, []);

  return (
    <MotionProvider>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        ข้ามไปเนื้อหา
      </a>
      <Boot />
      <Nav />
      <main id="content">
        <Hero />
        <Work />
        <About />
        <Journey />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}

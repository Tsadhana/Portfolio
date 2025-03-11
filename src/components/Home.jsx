import React from "react";
import { About } from "./About";
import { useTheme } from "../hooks/useTheme";
import Skills from "./Skills";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Home = () => {
  const [isDark] = useTheme();
  return (
    <main className={` ${isDark ? "dark" : ""}`}>
      <About />
      <div className="bg-[linear-gradient(38.73deg,rgba(204,0,187,0.15)_0%,rgba(201,32,184,0)_50%),linear-gradient(141.27deg,rgba(0,70,209,0)_50%,rgba(0,70,209,0.15)_100%)]">
        <Skills />
        <Experience />
      </div>
      <Projects />
      <div className="bg-[linear-gradient(38.73deg,rgba(204,0,187,0.15)_0%,rgba(201,32,184,0)_50%),linear-gradient(141.27deg,rgba(0,70,209,0)_50%,rgba(0,70,209,0.15)_100%)]">
        <Education />
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};

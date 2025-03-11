import React from "react";
import "../App.css";
import MegaData from "../MegaData"; // Import the object
import { SkillCard } from "./SkillCard";

export default function Skills() {
  return (
    <div id="skills">
      <div className="skill-container">Skills</div>
      <div className="skill-text">
        Here are some of my skills on which I have been learning.
      </div>
      <div className="skill-card">
        {/* Map over MegaData.technologies instead of MegaData */}
        {MegaData.technologies.map((technology) => (
          <SkillCard
            key={technology.title}
            title={technology.title}
            skills={technology.skills}
          />
        ))}
      </div>
    </div>
  );
}

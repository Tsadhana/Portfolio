import React from "react";
import Tabs from "./Tabs";

export const Projects = () => {
  return (
    <div id="projects text-center">
      <div className="all-project">
        <div className="Project-container">Projects</div>
        <div className="projectText">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </div>
        <div>
          <Tabs />
        </div>
      </div>
    </div>
  );
};

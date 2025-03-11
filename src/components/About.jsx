import React from "react";
import UserImage from "../assets/userProfile.png";
import Typewriter from "typewriter-effect";
import SVGComponent from "./SVGComponent";

export const About = () => {
  return (
    <div className="about dark:bg-[#1212184f]">
      <div
        className="about-container flex flex-col items-center justify-center px-4 py-12 sm:px-8 md:flex-col md:px-16 lg:mx-auto lg:block lg:flex-row lg:justify-between lg:px-24 lg:text-center"
        id="about"
      >
        {/* Text Content Section */}
        <div className="about-content max-w-lg text-center md:text-center lg:text-left">
          <h1 className="myname">
            Hello , I'm <br /> Sadhana Telvekar
          </h1>
          <p className="role">
            I am a &nbsp;
            <span>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Fullstack Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Web Developer")
                    .start();
                }}
              />
            </span>
          </p>
          <p className="leading-[32px]">
            I am a Full-Stack Developer with a B.Tech in Computer Science
            Engineering and freelance experience. Skilled in both front-end and
            back-end development, I enjoy building scalable and user-friendly
            applications. I am seeking opportunities in the IT sector to
            contribute to impactful software projects and enhance user
            experiences through innovative solutions.
          </p>
          <div className="resume-container my-5 py-5">
            <button className="resume rounded-xl">
              <a
                href="https://raw.githubusercontent.com/Tsadhana/Resume/main/Sadhana%20Fullstack%20Dev%202025.pdf"
                download="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-[600]"
              >
                Check Resume
              </a>
            </button>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="profile-image mt-8 flex flex-col items-center lg:mt-0">
          <SVGComponent />
          <div className="image h-48 w-48 overflow-hidden sm:h-56 sm:w-56 md:w-[100%] lg:h-64 lg:w-64">
            <img
              src={UserImage}
              alt="Profile"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const Footer = () => {
  const handleMailClick = () => {
    window.location.href = "mailto:sadhanatelvekar2000@gmail.com";
  };
  return (
    <footer className="mx-auto flex w-[100%] max-w-[fit-content] flex-col gap-6 text-center">
      <h1 className="!text-[20px] font-[600] text-[#854ce6]">
        Sadhana Telvekar
      </h1>
      <nav className="footer-nav flex justify-evenly gap-[20px]">
        <a href="#about" className="nav !text-[20px] hover:text-purple-500">
          About
        </a>
        <a href="#skills" className="nav !text-[19.2px] hover:text-purple-500">
          Skills
        </a>
        <a
          href="#experience"
          className="nav !text-[19.2px] hover:text-purple-500"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="nav !text-[19.2px] hover:text-purple-500"
        >
          Projects
        </a>
        <a
          href="#education"
          className="nav !text-[19.2px] hover:text-purple-500"
        >
          Education
        </a>
      </nav>
      <div className="flex justify-center gap-6">
        <a href="github.com" target="_blank">
          <i className="fa-brands fa-github !text-[20px]"></i>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sadhanatelvekar2000@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-envelope !text-[20px]"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sadhana-telvekar-681161173/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin !text-[20px]"></i>
        </a>
        <a href="https://www.instagram.com/sadh.s.04/" target="_blank">
          <i className="fa-brands fa-instagram !text-[20px]"></i>
        </a>
      </div>
      <p className="mt-[1.5rem] text-center text-[0.9rem]">
        © 2025 Sadhana Telvekar. All rights reserved.
      </p>
    </footer>
  );
};

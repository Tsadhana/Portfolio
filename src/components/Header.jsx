import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import Logo from "../assets/user-icon.gif";

const Header = () => {
  const [isDark, setIsDark] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`header-container fixed top-0 z-50 w-full ${isDark ? "dark" : ""}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center text-xl font-bold dark:text-white"
        >
          <img src={Logo} alt="Logo" className="h-8 w-8 rounded-full" />
          <span className="ml-3">Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden space-x-6 lg:flex dark:text-gray-300">
          <a href="#about" className="font-[500] hover:text-purple-500">
            About
          </a>
          <a href="#skills" className="hover:text-purple-500">
            Skills
          </a>
          <a href="#experience" className="hover:text-purple-500">
            Experience
          </a>
          <a href="#projects" className="hover:text-purple-500">
            Projects
          </a>
          <a href="#education" className="hover:text-purple-500">
            Education
          </a>
        </nav>

        {/* Buttons (GitHub & Theme Toggle) */}
        <div className="hidden items-center space-x-4 lg:flex">
          <a
            href="https://github.com/TSadhana?tab=repositories"
            target="_blank"
            className="rounded-2xl border-2 border-purple-500 px-4 py-2 text-purple-500 transition hover:bg-purple-500 hover:text-white"
          >
            Github Profile
          </a>
          <button
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem("isDarkMode", !isDark);
            }}
            className="flex items-center space-x-2 hover:text-purple-500 dark:text-gray-300"
          >
            <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
            <span>{isDark ? "Light" : "Dark"} Mode</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white lg:hidden dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${menuOpen ? "block" : "hidden"} bg-white py-4 shadow-lg lg:hidden dark:bg-gray-900`}
      >
        <nav className="flex flex-col items-center space-y-4 text-gray-700 dark:text-gray-300">
          <a
            href="#about"
            className="hover:text-purple-500"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-purple-500"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-purple-500"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-purple-500"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#education"
            className="hover:text-purple-500"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="https://github.com/TSadhana?tab=repositories"
            target="_blank"
            className="rounded-2xl border-2 border-purple-500 px-4 py-2 text-purple-500 transition hover:bg-purple-500 hover:text-white"
          >
            Github Profile
          </a>
          <button
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem("isDarkMode", !isDark);
              setMenuOpen(false);
            }}
            className="flex items-center space-x-2 text-gray-800 hover:text-purple-500 dark:text-gray-300"
          >
            <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
            <span>{isDark ? "Light" : "Dark"} Mode</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

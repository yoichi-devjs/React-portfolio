// Navigation bar component: controls page switching via props

import React from "react";

const NavBar = ({ currentPage, onNavClick }) => {
  // Helper function to apply an "active" class to the current page link
  const getLinkClass = (pageName) =>
    currentPage === pageName ? "nav-link nav-link-active" : "nav-link";

  return (
    <header className="navbar">
      {/* Logo / name section (you can change text to your own branding) */}
      <div className="navbar-brand">
        {/* Change "Yoichi" to your preferred brand or name */}
        <span className="brand-name">Yoichi</span>
        <span className="brand-role">Frontend Developer</span>
      </div>

      {/* Navigation links */}
      <nav className="navbar-links">
        {/* Each button changes the current page via onNavClick */}
        <button
          className={getLinkClass("home")}
          onClick={() => onNavClick("home")}
        >
          Home
        </button>
        <button
          className={getLinkClass("about")}
          onClick={() => onNavClick("about")}
        >
          About
        </button>
        <button
          className={getLinkClass("projects")}
          onClick={() => onNavClick("projects")}
        >
          Projects
        </button>
        <button
          className={getLinkClass("skills")}
          onClick={() => onNavClick("skills")}
        >
          Skills
        </button>
        <button
          className={getLinkClass("contact")}
          onClick={() => onNavClick("contact")}
        >
          Contact
        </button>
        <button
          className={getLinkClass("github")}
          onClick={() => onNavClick("github")}
        >
          GitHub
        </button>
      </nav>
    </header>
  );
};

export default NavBar;

import React from "react";

const Github = () => {
  return (
    <section className="page">
      {/* Page title */}
      <h2 className="page-title">GitHub</h2>

      {/* Intro text */}
      <p className="page-text">
        {/* Explain how you use GitHub and what visitors can expect to find there. */}
        Quick gateaway section to my GitHub profile, where my code, contributions, and
        ongoing projects can be explored.
      </p>

      {/* GitHub profile link */}
      <p className="page-text">
        <strong>Profile:</strong>{" "}
        <a
          href="https://github.com/yoichi-devjs"
          target="_blank"
          rel="noreferrer"
        >
          github.com/yoichi-devjs
        </a>
      </p>

      {/* highlight key repository */}
      <div className="github-repos">
        <h3 className="skills-title">Highlighted repositories</h3>
        <ul className="skills-list">
          
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Habit Tracker (main portfolio project)
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Socialboost-Studio
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Clothing brand landing page
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Github;

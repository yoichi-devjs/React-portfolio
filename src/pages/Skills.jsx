// Skills page: list your technical and soft skills

import React from "react";

const Skills = () => {
  return (
    <section className="page">
      {/* Page title */}
      <h2 className="page-title">Skills</h2>

      {/* Intro text */}
      <p className="page-text">
        {/* Use this section to clearly show what you can do for clients. */}
        List the technologies, tools, and practices you’re comfortable with, so potential clients know exactly how you
        can contribute to their projects.
      </p>

      {/* Technical skills list: replace items with your actual skills */}
      <div className="skills-section">
        <h3 className="skills-title">Technical skills</h3>
        <ul className="skills-list">
          <li>React (hooks, component architecture, state management)</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & semantic markup</li>
          <li>CSS3 (Flexbox, Grid, responsive design)</li>
          <li>REST APIs integration</li>
          <li>Version control (Git, GitHub)</li>
        </ul>
      </div>

      {/* Soft skills list: replace items with your own strengths */}
      <div className="skills-section">
        <h3 className="skills-title">Soft skills</h3>
        <ul className="skills-list">
          <li>Clear communication with non‑technical stakeholders</li>
          <li>Attention to detail and UX‑focused mindset</li>
          <li>Reliable and deadline‑oriented</li>
          <li>Collaborative and open to feedback</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

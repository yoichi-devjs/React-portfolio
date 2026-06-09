import React from "react";

const About = () => {
  return (
    <section className="page">
      {/* Page title */}
      <h2 className="page-title">About</h2>

      {/* Placeholder text */}
      <p className="page-text">
        {/* Main paragraph as message */}
        I'm a self-taught JavaScript developer who began coding full-time in March 2026 after relocating and 
        leaving my job in hospitality. I learn by building, experimenting, staying up-to-date with new feautres
        and improving every day. My focus is frontend development with JavaScript, and I'm currently expanding into React and full-stack technologies. My goal is to create useful, polished, and reliable digital products for real people and real businesses.
      </p>

      <p className="page-text">
        {/* Achievements section paragraph */}
        Learning Frontend development since 1st of March. My path focuses on the web page fundamentals, such as
        HTML5, CSS3, JavaScript (ES6+) and now using React because it makes web pages and web applications easier
        to maintain, scale, and develop as they grow in complexity.
        
        My main achievements are: <br /> 
        - Converted JS-only exercises into fully styled and interactive web apps <br />
        - Use Git and GitHub for version control and conttinous project development <br />
        - Practiced and praticing debugging and adding feature enhancement on ongoing peprsonal projects
      </p>
    </section>
  );
};

export default About;

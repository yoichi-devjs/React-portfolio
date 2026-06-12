import React from "react";

const Projects = () => {
  return (
    <section className="page">
      {/* Page title */}
      <h2 className="page-title">Projects</h2>

      {/* Project approach explanation */}
      <p className="page-text">
        I approach projects by first identifying the user's needs and defining
        the core functionality before implementation. Focus on building responsive,
        intuitive and accessible user interfaces while maintaining a clean and
        organized code. My development consist in emphasizing usability, visual
        consistency and continuos improvement through testing and debugging.
      </p>

      <div className="project-card">
        {/* Project name: Habit Tracker */}
        <h3 className="project-title">Habit Tracker</h3>

        {/* Short description */}
        <p className="project-description">
          {/* Explain/desribe its worth */}
          A modern habit-tracking web app that helps users build consistent routines with clear visual feedback and
          simple interactions. Built with a focus on usability, clean UI, and maintainable frontend architecture.
        </p>

        {/* Tech stack list */}
        <p className="project-tech">
          <strong>Tech stack:</strong> React, JavaScript, HTML, CSS
        </p>

        <a
          className="project-link"
          href="https://dev-chain-mu.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a> <br />
        <a 
          className="project-link"
          href="https://github.com/yoichi-devjs/DevChain"
          target="blank"
          rel="noreferrer"
          >
            GitHub Repo
        </a>
      </div>

      {/* Project name: Socialboost Studio */}
      <div className="project-card">
        <h3 className="project-title">SocialBoost-Studio</h3>
        <p className="project-description">
          Built a content-generation platform that creates marketing descriptions for products across multiple use cases.
          Designed the user interface, form handling, and dynamic content rendering while simulating AI-driven workflows.
        </p>
        <p className="project-tech">
          <strong>Tech stack:</strong> HTML, CSS, JavaScript
        </p>
        <a
          className="project-link"
          href="https://socialboost-studio.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a> <br />
        <a 
          className="project-link"
          href="https://github.com/yoichi-devjs/socialboost-studio"
          target="blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
      </div>

      {/* Project name: Clientella */}
      <div className="project-card">
        <h3 className="project-title">Clientella</h3>
        <p className="project-description">
          Developed a client management dashboard that allows users to organize and track their clients effectively.
        </p>
        <p className="project-tech">
          <strong>Tech stack:</strong> React, JavaScript, HTML, CSS
        </p>
        <a
          className="project-link"
          href="https://clientella.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a> <br />
        <a 
          className="project-link"
          href="https://github.com/yoichi-devjs/clientella"
          target="blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
      </div>
    </section>
  );
};

export default Projects;

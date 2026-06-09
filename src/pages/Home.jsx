import React from "react";

const Home = () => {
  return (
    <section className="page home-page">
      {/* Hero section container */}
      <div className="hero">
        {/* Left side: text content */}
        <div className="hero-text">
          {/* Main message */}
          <h1 className="hero-title">
            Hi, I'm Yoichi&nbsp;- a frontend developer
          </h1>

          {/* Secondary message about freelancing */}
          <p className="hero-subtitle">
            I'm also a dedicated freelancer, helping clients build clean, modern, and user-focused web experiences.
          </p>

          {/* Short pitch / CTA to make you more hireable */}
          <p className="hero-description">
            I craft responsive interfaces, intuitive user journeys, and performant frontend using modern JavaScript and
            React. If you're looking for someone to own the frontend of your next project, let's talk.
          </p>

          {/* Call‑to‑action buttons (you can link these to Contact / Projects later) */}
          <div className="hero-actions">
            {/* Button that could scroll to contact or switch to contact page */}
            <button
              className="primary-btn"
              onClick={() => {
                // Switch the Contact page by updating the currentPage state
                // trigger a custom event that App.jsx will listen to
                const event = new CustomEvent("navigate", {detail: "contact"});
                window.dispatchEvent(event);
              }}
            >
              Work with me
            </button>

            {/* Secondary button to highlight your main project (habit tracker) */}
            <button
              className="secondary-btn"
              onClick={() => {
                window.open("https://dev-tracker-ecru.vercel.app/", "_blank");
              }}
            >
              View my habit-tracker project
            </button>
          </div>
        </div>

        {/* Right side: avatar image */}
        <div className="hero-avatar-wrapper">
          <img
            className="hero-avatar"
            src="/photo.jpg"
            alt="Yoichi avatar"
          />
        </div>

        {/* React logo background overlay (pale) */}
        {/* This empty div is used purely for styling the pale React logo behind text and avatar */}
        <div className="hero-react-logo"></div>
      </div>
    </section>
  );
};

export default Home;

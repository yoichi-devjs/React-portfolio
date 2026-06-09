import React, { useState, useEffect } from "react";

// Import the navigation bar
import NavBar from "./components/NavBar.jsx";

// Import all page components
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Github from "./pages/Github.jsx";

const App = () => {
  // Track which page is active
  const [currentPage, setCurrentPage] = useState("home");

  // Listen for navigation events (from Home.jsx buttons)
  useEffect(() => {
    const handler = (event) => {
      setCurrentPage(event.detail);
    };

    window.addEventListener("navigate", handler);

    return () => window.removeEventListener("navigate", handler);
  }, []);

  // Render the correct page
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      case "github":
        return <Github />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      {/* Navigation bar */}
      <NavBar currentPage={currentPage} onNavClick={setCurrentPage} />

      {/* Main content */}
      <main className="main-content">{renderPage()}</main>
    </div>
  );
};

export default App;

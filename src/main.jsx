// Import React and ReactDOM
import React from "react";
import { createRoot } from "react-dom/client";

// Import the main App component
import App from "./App.jsx";

// Import global styles
import "./styles.css";

// Get the root DOM element
const container = document.getElementById("root");

// Create a React root
const root = createRoot(container);

// Render the App component inside the root
root.render(
  // StrictMode helps catch potential issues during development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

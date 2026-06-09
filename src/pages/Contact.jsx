import React, { useState } from "react";

const Contact = () => {
  // Local state to show success or error messages
  const [status, setStatus] = useState("");

  return (
    <section className="page contact-page">
      {/* Page title */}
      <h2 className="page-title">Contact Me</h2>

      {/* Contact form container */}
      <div className="contact-container">
        {/* Contact form */}
        {/* This form now sends real emails using Formspree, 
        no backend and real portfolio feature */}
        <form
          className="contact-form"
          action="https://formspree.io/f/maqzjgyv" 
          method="POST"
          onSubmit={() => setStatus("sending")}
        >
          {/* Name field */}
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email field */}
          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message field */}
          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>

        {/* Status messages */}
        {status === "sending" && (
          <p className="contact-status">Sending your message…</p>
        )}
      </div>

      {/* Additional contact info */}
      <p className="contact-note">
        You can also reach me directly at:{" "}
        <a href="mailto:your-email@example.com">yoichisagi.js@gmail.com</a>
      </p>
    </section>
  );
};

export default Contact;

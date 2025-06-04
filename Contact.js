import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  // State for login functionality
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const onLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUserName("");
    } else {
      setIsLoggedIn(true);
      setUserName("John Doe"); // Replace with actual user authentication logic
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/contact", formData);
      setResponseMessage(response.data);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhJslpRe4SSFyGNvdPGHaw3VybMsdNqa3wQ&s"
            alt="Mega Cart"
            className="logo-img"
          />
        </div>
        <div className="navbar-links">
          <a href="/user-dashboard">Home</a>
          <a href="/user-products">Products</a>
          <a href="/aboutus">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="cart-icon">
          <a href="/cart">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGd2sjxFQjvIeJHrB6h01ODTyCuzYmEwvy1w&s"
              alt="Cart"
              className="cart-img"
            />
          </a>
        </div>
        <div className="user-section">
          {isLoggedIn ? (
            <div className="user-info">
              <span>{userName}</span>
              <button className="logout-button" onClick={onLoginLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="login-signup">
              <button className="login-signup-button" onClick={onLoginLogout}>
                Login / Signup
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Form Section */}
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/aboutus">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <p>&copy; 2024 Mega Cart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;

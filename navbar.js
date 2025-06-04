// components/Navbar.jsx
import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ username }) => {
  return (
    <div className="Navbar">
      <h2 className="username">{username}</h2>
      <img src="profile.png" alt="Profile" className="profile-img" />
    </div>
  );
};

export default Navbar;



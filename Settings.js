import React, { Component, useState } from "react";
import '../styles/Settings.css' // Add custom styles for form layout

const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    contact: "",
    cnic: "",
    zipCode: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
    alert("Changes saved successfully!");
  };

  const handleDelete = () => {
    console.log("Account deleted!");
    alert("Account deleted successfully.");
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form>
        {/* First Name */}
        <div className="form-row">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
          />
        </div>

        {/* Last Name */}
        <div className="form-row">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
          />
        </div>

        {/* Email */}
        <div className="form-row">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>

        {/* Gender */}
        <div className="form-row">
          <label>Gender</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="form-row">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div className="form-row">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Address"
          />
        </div>

        {/* Contact */}
        <div className="form-row">
          <label>Contact</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter Contact Number"
          />
        </div>

        {/* CNIC */}
        <div className="form-row">
          <label>CNIC</label>
          <input
            type="text"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            placeholder="Enter CNIC"
          />
        </div>

        {/* Zip Code */}
        <div className="form-row">
          <label>Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Enter Zip Code"
          />
        </div>

        {/* City */}
        <div className="form-row">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter City"
          />
        </div>

        {/* State */}
        <div className="form-row">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter State"
          />
        </div>

        {/* Country */}
        <div className="form-row">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter Country"
          />
        </div>
      </form>

      <div className="form-actions">
        <button className="delete-button" onClick={handleDelete}>
          Delete Account
        </button>
        <button className="save-button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;

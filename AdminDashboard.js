// components/Dashboard.jsx
import React from "react";
import "../styles/AdminDashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Today Patients</h3>
          <p>0</p>
        </div>
        <div className="card">
          <h3>Monthly Patients</h3>
          <p>0</p>
        </div>
        <div className="card">
          <h3>Yearly Patients</h3>
          <p>0</p>
        </div>
      </div>
      <div className="dashboard-reports">
        <h3>Earning Reports</h3>
        <div className="chart-placeholder">[Chart Placeholder]</div>
      </div>
    </div>
  );
};

export default Dashboard;

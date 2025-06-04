import React, { useState } from 'react';
import './Glanding.css'; // Import the same CSS for styling

function UserDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUserName('');
    } else {
      setIsLoggedIn(true);
      setUserName('John Doe');
    }
  };

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} userName={userName} onLoginLogout={handleLoginLogout} />
      <div className="landing-page">
        {/* Home page background image */}
        <div className="home-background">
          <div className="content">
            <h1>Welcome to Your Dashboard</h1>
            <p>Manage your account, view your orders, and explore your preferences.</p>

            {/* Search box */}
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>

        {/* Top Selling Section */}
        <div className="top-selling">
          <h2>Top Selling Products</h2>
          <div className="top-selling-products">
            <div className="product-card">
              <img src="/images/product1.jpg" alt="Product 1" className="product-image" />
              <p>Product 1</p>
            </div>
            <div className="product-card">
              <img src="/images/product2.jpg" alt="Product 2" className="product-image" />
              <p>Product 2</p>
            </div>
            <div className="product-card">
              <img src="/images/product3.jpg" alt="Product 3" className="product-image" />
              <p>Product 3</p>
            </div>
            <div className="product-card">
              <img src="/images/product4.jpg" alt="Product 4" className="product-image" />
              <p>Product 4</p>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="top-selling">
          <h2>Featured Products</h2>
          <div className="top-selling-products">
            <div className="product-card">
              <img src="/images/product1.jpg" alt="Featured Product 1" className="product-image" />
              <p>Featured Product 1</p>
            </div>
            <div className="product-card">
              <img src="/images/product2.jpg" alt="Featured Product 2" className="product-image" />
              <p>Featured Product 2</p>
            </div>
            <div className="product-card">
              <img src="/images/product3.jpg" alt="Featured Product 3" className="product-image" />
              <p>Featured Product 3</p>
            </div>
          </div>
        </div>

        {/* Top Rated Products Section */}
        <div className="top-selling">
          <h2>Top Rated Products</h2>
          <div className="top-selling-products">
            <div className="product-card">
              <img src="/images/product1.jpg" alt="Top Rated Product 1" className="product-image" />
              <p>Top Rated Product 1</p>
            </div>
            <div className="product-card">
              <img src="/images/product2.jpg" alt="Top Rated Product 2" className="product-image" />
              <p>Top Rated Product 2</p>
            </div>
            <div className="product-card">
              <img src="/images/product3.jpg" alt="Top Rated Product 3" className="product-image" />
              <p>Top Rated Product 3</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Navbar({ isLoggedIn, userName, onLoginLogout }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhJslpRe4SSFyGNvdPGHaw3VybMsdNqa3wQ&s" alt="Mega Cart" className="logo-img" />
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/user-products">Products</a>
        <a href="/aboutus">About Us</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Cart Icon */}
      <div className="cart-icon">
        <a href="/cart">
          <img src="/cart.png" alt="Cart" className="cart-img" />
        </a>
      </div>

      <div className="user-section">
        {isLoggedIn ? (
          <div className="user-info">
            <span>{userName}</span>
            <button className="logout-button" onClick={onLoginLogout}>Logout</button>
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
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/aboutus">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p>&copy; 2024 Mega Cart. All rights reserved.</p>
    </footer>
  );
}

export default UserDashboard;

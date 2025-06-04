import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./ProductsPage.css";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <Navbar />
      <div className="products-container">
        <h2 className="products-heading">Explore Our Categories</h2>
        <div className="products-cards">
          <div className="product-card">
            <img
              src="https://www.wildfrontierstravel.com/media/cache/opengraph/upload/9c/6e/9c6ea2e2360a28e914c3416ad79831bfd1a44e5b.jpg"
              alt="Foods"
              className="product-card-image"
            />
            <h3>Foods</h3>
            <p>Delicious and fresh food items to satisfy your cravings.</p>
             <Link to="/brands/foods">
  <button className="product-card-btn">Explore Foods</button>
</Link>
          </div>

          <div className="product-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhsoavUFF0YAF2a5d-a7TmvE7m0aaGEVejmmKCWP42eFdgucAX2fpTEAfrFYnkWaxvuk&usqp=CAU.jpg"
              alt="Electronics"
              className="product-card-image"
            />
            <h3>Electronics</h3>
            <p>Latest gadgets and devices for all your tech needs.</p>
            <Link to="/brands/electronics">
  <button className="product-card-btn">Explore Electronics</button>
</Link>
          </div>

          <div className="product-card">
            <img
              src="https://premiumbeachcondos.com/wp-content/uploads/2024/05/Grocery-Cart.jpeg"
              alt="Grocery"
              className="product-card-image"
            />
            <h3>Grocery</h3>
            <p>Daily essentials and groceries delivered to your doorstep.</p>
            <Link to="/brands/groceries">
  <button className="product-card-btn">Explore Groceries</button>
</Link>
          </div>

          <div className="product-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-IfmSNENvqfHZ3yaSO8A76RijP784lBfug&s.jpg"
              alt="Clothes"
              className="product-card-image"
            />
            <h3>Clothes</h3>
            <p>Trendy and comfortable clothing for every occasion.</p>

            <Link to="/brands/clothes">
  <button className="product-card-btn">Explore Clothes</button>
</Link>

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
      <Footer />
    </div>
  );
};

export default ProductsPage;

function Navbar({ isLoggedIn, userName, onLoginLogout }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhJslpRe4SSFyGNvdPGHaw3VybMsdNqa3wQ&s" alt="Mega Cart" className="logo-img" />
      </div>
      <div className="navbar-links">
        <a href="/user-dashboard">Home</a>
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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CartPage.css'; // Add a new CSS file for styling

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user_id = localStorage.getItem('user_id');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user_id) {
      window.location.href = '/login';
      return;
    }

    axios
      .get(`http://localhost:5000/api/cart/${user_id}`)
      .then((response) => {
        setCartItems(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching cart:', err);
        setError('Error fetching cart items');
        setLoading(false);
      });
  }, [user_id]);

  const handleQuantityChange = (cart_id, newQuantity) => {
    if (newQuantity < 1) return;

    axios
      .put(`http://localhost:5000/api/cart/update/${cart_id}`, { quantity: newQuantity })
      .then(() => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.cart_id === cart_id ? { ...item, quantity: newQuantity } : item
          )
        );
      })
      .catch((err) => {
        console.error('Error updating quantity:', err);
      });
  };

  const handleRemoveItem = (cart_id) => {
    axios
      .delete(`http://localhost:5000/api/cart/remove/${cart_id}`)
      .then(() => {
        setCartItems((prevItems) => prevItems.filter((item) => item.cart_id !== cart_id));
      })
      .catch((err) => {
        console.error('Error removing item:', err);
      });
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="cart-page">
      {/* Navbar Component */}
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="Mega Cart" className="logo-img" />
        </div>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/aboutus">About Us</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="cart-icon">
          <a href="/cart">
            <img src="/images/cart-icon.png" alt="Cart" className="cart-img" />
          </a>
        </div>

        <div className="user-section">
          <div className="user-info">
            <span>John Doe</span>
            <button className="logout-button">Logout</button>
          </div>
        </div>
      </nav>

      <div className="cart-container">
        <h2>Your Cart</h2>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.cart_id}>
              <img
                src={item.image_path}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>

                <div className="quantity-selector">
                  <button
                    onClick={() => handleQuantityChange(item.cart_id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.cart_id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.cart_id)}
                  className="remove-btn"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <button
            onClick={handleProceedToCheckout}
            className="checkout-btn"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Footer Component */}
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
    </div>
  );
};

export default CartPage;

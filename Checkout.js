import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve cart data from localStorage
    const cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (cartData.length > 0) {
      setCartItems(cartData);
      // Calculate total price
      const totalPrice = cartData.reduce((acc, item) => {
        const itemPrice = item.price || 0; // Fallback for missing price
        return acc + item.quantity * itemPrice;
      }, 0);
      setTotal(totalPrice);
    } else {
      console.warn('Cart is empty or data is invalid');
    }
  }, []);

  const handleCheckout = () => {
    if (!cartItems.length) {
      alert('Cart is empty. Please add items to proceed.');
      return;
    }

    const cartId = cartItems[0]?.cart_id; // Assuming cart_id is available in the first item
    if (!cartId) {
      alert('Invalid cart data. Please try again.');
      return;
    }

    const checkoutData = {
      cartId,
      email,
      firstname,
      lastname,
      city,
      postal_code: postalCode,
      phone_number: phoneNumber,
      address,
    };

    // Send checkout data to the backend
    axios
      .post('http://localhost:5000/api/checkout', checkoutData)
      .then((response) => {
        alert('Checkout successful');
        // Clear cart data
        localStorage.removeItem('cartItems');
        setCartItems([]);
        navigate('/thank-you'); // Navigate to a thank-you page after checkout
      })
      .catch((err) => {
        console.error('Error during checkout:', err);
        alert('Checkout failed. Please try again.');
      });
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {/* Cart Items */}
      <div className="checkout-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="checkout-item" key={item.cart_id}>
              <img
                src={item.image_path}
                alt={item.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <div className="product-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty. Please add items to proceed.</p>
        )}
      </div>

      <div className="total">
        <h3>Overall Bill: ${total.toFixed(2)}</h3>
      </div>

      {/* User Information Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <button onClick={handleCheckout}>Proceed to Payment</button>
      <button onClick={goToCart} style={{ marginTop: '10px' }}>
        Go to Cart
      </button>
    </div>
  );
};

export default CheckoutPage;

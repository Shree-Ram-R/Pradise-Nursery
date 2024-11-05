import React from 'react';
import './CartPage.css';

function CartPage({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total Cost: ${total.toFixed(2)}</p>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;

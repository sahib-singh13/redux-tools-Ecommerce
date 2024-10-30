import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cart } = useSelector((state) => state);

  // Calculate total cost using a normal loop
  let totalCost = 0;
  for (let item of cart) {
    totalCost += item.price;
  }

  return (
    <div>
      {cart.length === 0 ? (
        <div>
          Your Cart is currently empty
          <br />
          <p>Click on Home button to add items</p>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
        </div>
      ) : (
        <div>
          {cart.map((data) => (
            <CartItem key={data.id} {...data} />
          ))}
          <div>
            <span>Your Cart</span>
            <span>SUMMARY</span>
            <span>
              Total Items: <span>{cart.length}</span>
            </span>
            <span>
              Total Amount: <span>{`$${totalCost}`}</span>
            </span>
            <button>Check Out Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

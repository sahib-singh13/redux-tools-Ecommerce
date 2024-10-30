import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalSum, setTotalSum] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalSum(sum);
  }, [cart]);

  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <p>Cart is Empty</p>
          <button onClick={() => navigate("/")}> 
            Home
          </button>
        </div>
      ) : (
        <div>
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div>
            <span>Your Cart</span>
            <span>Summary</span>
            <span>Total Items: {cart.length}</span>
            <span>Total Cost: ${totalSum}</span>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

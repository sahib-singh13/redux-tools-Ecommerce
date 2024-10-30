import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

const CartItem = ({ item, itemIndex }) => { // Correctly destructuring props
  return (
    <div>
      <div>
        <img src={item.image} alt={item.title} /> {/* Added alt attribute for accessibility */}
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div>
          <p>${item.price}</p>
          <div>
          <AiOutlineDelete />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

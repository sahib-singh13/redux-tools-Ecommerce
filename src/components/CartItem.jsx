import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item }) => { 
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div>
      <div>
        <img src={item.image} alt={item.title} /> 
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div>
          <p>${item.price}</p>
          <div onClick={deleteHandler}>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

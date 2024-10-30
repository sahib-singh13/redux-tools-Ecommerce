import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const Product = ({ title, description, image, price, id }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    const product = { id, title, description, image, price };
    dispatch(add(product));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 m-4 w-64 transition-transform transform hover:scale-105">
      <div className="mb-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
      <div className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-32 h-32 object-fit rounded-md" />
      </div>
      <div className="text-center">
        <p className="text-lg font-medium text-gray-800 mb-4">Price: ${price}</p>
      </div>

      {cart.some((p) => p.id === id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;

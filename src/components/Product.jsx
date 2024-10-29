import React from 'react';

const Product = ({ title, description, image, price, current, id, toggleCart }) => {
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
        {current[id] === 1 ? (
          <button
            onClick={() => toggleCart(id)}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => toggleCart(id)}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

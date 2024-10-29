import React from 'react';

const Product = ({ title, description, image, price, current, id, toggleCart }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <p>Price: ${price}</p>
        {current[id] === 1 ? (
          <button onClick={() => toggleCart(id)}>Remove From Cart</button>
        ) : (
          <button onClick={() => toggleCart(id)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;

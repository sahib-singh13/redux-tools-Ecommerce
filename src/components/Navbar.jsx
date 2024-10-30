import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className='flex flex-row justify-between bg-sky-900 h-20'>
      <NavLink to="/">
        <div className="w-40 h-40 mt-4 mx-5">
          <img src="/logo.png" alt="Logo" />
        </div>
      </NavLink>
      <div className='flex flex-row mx-12 mt-4 items-center'>
        <NavLink to="/" className="mr-8 font-bold text-3xl relative mt-2">Home</NavLink>
        <NavLink to="/cart" className="relative flex items-center">
          <img src="/favicon.ico" alt="Cart" className="mr-2" />
          <span className="absolute top-1 right-2 bg-green-500 text-white font-semibold text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
            {cart.length}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

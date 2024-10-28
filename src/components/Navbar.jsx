import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between bg-sky-900 h-20'>
      <NavLink to="/">
        <div className="w-40 h-40 mt-4 mx-5">
          <img src="/logo.png" alt="Logo" />
        </div>
      </NavLink>
      <div className='flex flex-row  mx-12 mt-4'>
        <NavLink to="/" className="mr-8 font-bold text-3xl relative mt-2">Home</NavLink> {/* Adjusted margin here */}
        <NavLink to="/cart">
          <img src="/favicon.ico" alt="Cart" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-500 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold font-customFont">Blood-Link</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-red-950 font-customFont p-2">Home</Link>
          <Link to="/about" className="text-white hover:bg-red-500 font-customFont p-2">About</Link>
          <Link to="/connect" className="text-white hover:bg-red-500 font-customFont p-2">Connect</Link>
          <Link to="/donate" className="text-white hover:bg-red-500 font-customFont p-2">Donate</Link>
          <Link to="/contact" className="text-white hover:bg-red-500 font-customFont p-2">Contact</Link>
        </div>
        <div className="hidden md:flex">
          <Link to="/donate" className="bg-white text-red-600 hover:bg-red-100 px-3 py-1 rounded transition font-customFont font-bold">Donate Now</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="bg-red-500 p-4 space-y-2">
            <Link to="/" className="block text-white hover:bg-red-400 p-2 rounded">Home</Link>
            <Link to="/about" className="block text-white hover:bg-red-400 p-2 rounded">About</Link>
            <Link to="/donate" className="block text-white hover:bg-red-400 p-2 rounded">Donate</Link>
            <Link to="/contact" className="block text-white hover:bg-red-400 p-2 rounded">Contact</Link>
            <Link to="/donate" className="block bg-white text-red-600 hover:bg-red-100 px-4 py-2 rounded transition">Donate Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
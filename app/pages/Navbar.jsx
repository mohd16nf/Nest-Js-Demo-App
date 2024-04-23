// components/Navbar.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-orange-400 py-4 px-14">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h3 className="text-black text-lg md:text-xl mr-auto">Coo!Cod3</h3>
        </div>
        {/* Hamburger Menu */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none focus:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <div className={`md:flex flex-col md:flex-row items-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <Link href="/" className="text-black mx-4 my-2 md:my-0 hover:text-gray-500">
            Home
          </Link>
          <Link href="/signin" className="text-black mx-4 my-2 md:my-0 hover:text-gray-500">
            Sign In
          </Link>
          <Link href="/signout" className="text-black mx-4 my-2 md:my-0 hover:text-gray-500">
            Sign Out
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

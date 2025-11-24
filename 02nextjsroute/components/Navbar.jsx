"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let timer;

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Delay so user can move mouse into dropdown
  };

  return (
    <nav className="backdrop-blur-lg bg-gray-800 text-white shadow-2xl px-10 py-2 font-serif flex justify-between items-center border-b border-gray-700">
      
      {/* Logo */}
      <div className="text-3xl font-bold tracking-wide hover:text-teal-300 transition-all duration-300">
        <Link href="/">Tahir</Link>
      </div>

      {/* Menu */}
      <ul className="flex gap-10 text-lg font-medium">
        
        <li className="hover:text-teal-300 transition duration-200">
          <Link href="/">Home</Link>
        </li>

        <li className="hover:text-teal-300 transition duration-200">
          <Link href="/about">About</Link>
        </li>

        {/* PRODUCT DROPDOWN */}
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="cursor-pointer hover:text-teal-300 transition duration-200 flex items-center gap-1">
            <Link href="/product"> Product </Link>
            <span className="text-sm opacity-70">▾</span>
          </span>

          {/* Dropdown */}
          <div
            className={`absolute left-0 mt-3 w-48 bg-gray-800/90 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700 transform transition-all duration-300 origin-top ${
              isOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col py-3">
              <li className="px-5 py-2 hover:bg-gray-700/60 rounded-md transition duration-200">
                <Link href="/product/scooters">Electric Scooters</Link>
              </li>

              <li className="px-5 py-2 hover:bg-gray-700/60 rounded-md transition duration-200">
                <Link href="/product/bikes">Electric Bikes</Link>
              </li>

              <li className="px-5 py-2 hover:bg-gray-700/60 rounded-md transition duration-200">
                <Link href="/product/parts">Spare Parts</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="hover:text-teal-300 transition duration-200">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

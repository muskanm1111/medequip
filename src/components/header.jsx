"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute    inset-0 top-5 z-10  ">
      <div className="container mx-auto max-w-[80.8rem] flex bg-white shadow px-6 py-3  justify-between items-center  rounded-2xl">
        {/* Logo */}
        <div className="flex items-center space-x-2 ">
          <Image
            src="/img/logo.png"
            alt="casaRoyal Logo"
            width="200"
            height="200"
           
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-violet-400 ">
          <a href="/" className="text-black hover:text-violet-500">
            HOME
          </a>
          <a href="/about" className=" text-black hover:text-violet-500">
            ABOUT
          </a>
          <a href="/products" className="text-black hover:text-violet-500">
            EQUIPMENT 
          </a>
          {/* <a href="#" className="text-black hover:text-violet-500">
            PAGES <span className="text-sm">▼</span>
          </a> */}
          <a href="/contact" className="text-black hover:text-violet-500">
            CONTACT US
          </a>
        </div>

        {/* Appointment Button */}
        <div className="hidden md:block">
          <button className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-lg font-semibold">
            MAKE APPOINTMENT
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-violet-400"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 text-violet-400 font-semibold bg-violet-100 py-4 rounded-lg">
          <a href="#" className="text-violet-500 hover:text-violet-300">
            HOME
          </a>
          <a href="#" className="hover:text-violet-300">
            ABOUT
          </a>
          <a href="#" className="hover:text-violet-300">
            EQUIPMENT
          </a>
          <a href="#" className="hover:text-violet-300">
            PAGES
          </a>
          <a href="#" className="hover:text-violet-300">
            CONTACT US
          </a>
          <button className="bg-violet-400 hover:bg-violet-500 text-white px-6 py-2 rounded-lg font-semibold">
            MAKE APPOINTMENT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;

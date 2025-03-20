"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute    inset-0 top-5 z-10  ">
      <div className="container mx-auto max-w-[80.8rem] flex bg-white shadow px-6 py-3  justify-between items-center  rounded-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 ">
          <Image
            src="/img/logo.png"
            alt="casaRoyal Logo"
            width="200"
            height="200"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-violet-400 ">
          <Link href="/" className="text-black hover:text-violet-500">
            HOME
          </Link>
          <Link href="/about" className=" text-black hover:text-violet-500">
            ABOUT
          </Link>
          <Link href="/products" className="text-black hover:text-violet-500">
            EQUIPMENT
          </Link>
          {/* <a href="#" className="text-black hover:text-violet-500">
            PAGES <span className="text-sm">▼</span>
          </a> */}
          <Link href="/contact" className="text-black hover:text-violet-500">
            CONTACT US
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/contact" className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-lg font-semibold">
            APPOINTMENT
          </Link>
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
          <Link
            onClick={() => setIsOpen(false)}
            href="/"
            className="text-violet-500 hover:text-violet-300"
          >
            HOME
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/about"
            className="hover:text-violet-300"
          >
            ABOUT
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/products"
            className="hover:text-violet-300"
          >
            EQUIPMENT
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            href="/contact"
            className="hover:text-violet-300"
          >
            CONTACT US
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/contact"
            className="bg-violet-400 hover:bg-violet-500 text-white px-6 py-2 rounded-lg font-semibold"
          >
            APPOINTMENT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;

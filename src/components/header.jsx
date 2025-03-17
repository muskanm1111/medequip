"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white p-5 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image src="/img/logo.svg" width={150} height={150} alt="logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Items */}
        <nav
          className={`md:flex items-center space-x-6 font-semibold ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative bg-white md:bg-transparent w-full md:w-auto left-0 top-16 z-50 md:top-auto p-5 md:p-0 shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col z-50 bg-white text-xl md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li onClick={() => setIsOpen(false)}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="/products">Product</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="/about">About</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="/blog">Blog</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Right Navigation Item */}
        <div className="hidden md:flex">
          <button className="rounded-full bg-black p-3 md:p-4 text-white border-x w-32 md:w-48">
            Read More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

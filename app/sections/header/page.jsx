"use client";

import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="logo-icon" height={50} width={50} />
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Founder&apos;s Friday
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            <a
              href="#home"
              className="text-gray-600 font-semibold hover:text-purple-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 font-semibold hover:text-purple-600"
            >
              About Us
            </a>
            <a
              href="#gallery"
              className="text-gray-600 font-semibold hover:text-purple-600"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-gray-600 font-semibold hover:text-purple-600"
            >
              Contact Us
            </a>
          </nav>
          <a
            href="#register"
            className="border border-purple-600 text-purple-600 px-6 py-2 rounded-xl hover:bg-purple-600 hover:text-white transition"
          >
            Register <span className="ml-2">→</span>
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden flex items-center text-gray-600 hover:text-purple-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md absolute top-full left-0 w-full z-40">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <a href="#home" className="text-gray-600 hover:text-purple-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-purple-600">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="text-gray-600 hover:text-purple-600"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-purple-600"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#register"
                className="block border border-purple-600 text-purple-600 px-6 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition"
              >
                Register <span className="ml-2">→</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

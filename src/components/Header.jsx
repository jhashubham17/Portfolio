import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Header Section */}
      <header className="bg-gray-900 text-white p-4 fixed w-full top-0 left-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">Shubham.</div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed md:relative top-0 left-0 w-3/4 md:w-auto h-full md:h-auto bg-gray-900 md:bg-transparent md:flex items-center transition-transform duration-300 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-6 md:p-0">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-lg font-medium hover:text-gray-400 transition"
                      onClick={closeMenu}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919060917383?text=Hello%20Shubham!%20I%20want%20to%20talk%20about%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
};

export default Header;

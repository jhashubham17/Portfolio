import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent body scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Header Section */}
      <header className="bg-gray-900 text-white p-4 fixed w-full top-0 left-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Shubham<span className="text-blue-400">.</span>
          </div>

          {/* Mobile Menu Button (only shows on mobile) */}
          <div className="md:hidden">
            <button
              className="focus:outline-none p-2 rounded-full hover:bg-gray-700 transition"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-white" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Desktop Navigation (only shows on desktop) */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-lg font-medium hover:text-blue-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>

        {/* Mobile Full-screen Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900 z-50 animate-screen-fade-in">
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors duration-300"
              aria-label="Close Menu"
            >
              <FaTimes className="w-8 h-8" />
            </button>

            {/* Navigation Menu */}
            <nav className="h-full w-full flex flex-col items-center justify-center">
              <ul className="flex flex-col items-center space-y-8 text-center">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item, index) => (
                    <li
                      key={item}
                      className="w-full overflow-hidden"
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-3xl font-medium text-white hover:text-blue-400 transition-colors duration-300 py-4 px-8 block transform hover:scale-105 active:scale-95"
                        onClick={closeMenu}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* Social Media Buttons */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
              <a
                href="https://wa.me/919060917383?text=Hello%20Shubham!%20I%20want%20to%20talk%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center hover:scale-110"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="text-2xl" />
              </a>

              <a
                href="https://github.com/jhashubham17"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all flex items-center justify-center hover:scale-110"
                aria-label="View GitHub Profile"
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center hover:scale-110"
                aria-label="View LinkedIn Profile"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Social Media Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a
          href="https://wa.me/919060917383?text=Hello%20Shubham!%20I%20want%20to%20talk%20about%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>

        <a
          href="https://github.com/jhashubham17"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all flex items-center justify-center hover:scale-110"
          aria-label="View GitHub Profile"
        >
          <FaGithub className="text-2xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/shubham-jha-776203262/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center hover:scale-110"
          aria-label="View LinkedIn Profile"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </>
  );
};

export default Header;

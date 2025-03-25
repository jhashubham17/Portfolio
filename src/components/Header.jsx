import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion"; // Added for animations

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <>
      {/* Header Section */}
      <motion.header
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 fixed w-full top-0 left-0 z-50 shadow-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-extrabold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative">
              Shubham
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400/50 rounded-full animate-pulse"></span>
            </span>
            <span className="text-blue-400">.</span>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <motion.li
                    key={item}
                    whileHover={{ y: -2, color: "#60A5FA" }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-lg font-medium transition-colors duration-300 relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Full-screen Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <motion.button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-white hover:text-blue-400"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <FaTimes className="w-8 h-8" />
            </motion.button>

            {/* Navigation Menu */}
            <nav className="h-full flex flex-col items-center justify-center">
              <ul className="flex flex-col items-center space-y-10">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item, index) => (
                    <motion.li
                      key={item}
                      custom={index}
                      variants={navItemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-3xl font-semibold text-white hover:text-blue-400 transition-colors duration-300"
                        onClick={closeMenu}
                      >
                        {item}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </nav>

            {/* Social Media Buttons */}
            <motion.div
              className="absolute bottom-10 left-0 right-0 flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                {
                  Icon: FaWhatsapp,
                  href: "https://wa.me/919060917383?text=Hello%20Shubham!%20I%20want%20to%20talk%20about%20a%20project.",
                  color: "bg-green-500 hover:bg-green-600",
                },
                {
                  Icon: FaGithub,
                  href: "https://github.com/jhashubham17",
                  color: "bg-gray-800 hover:bg-gray-700",
                },
                {
                  Icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/shubham-jha-776203262/",
                  color: "bg-blue-600 hover:bg-blue-700",
                },
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${color} text-white p-3 rounded-full shadow-lg transition-all`}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-2xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Media Floating Buttons */}
      <motion.div
        className="hidden md:flex fixed bottom-6 right-6 flex-col gap-4 z-40"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {[
          {
            Icon: FaWhatsapp,
            href: "https://wa.me/919060917383?text=Hello%20Shubham!%20I%20want%20to%20talk%20about%20a%20project.",
            color: "bg-green-500 hover:bg-green-600",
          },
          {
            Icon: FaGithub,
            href: "https://github.com/jhashubham17",
            color: "bg-gray-800 hover:bg-gray-700",
          },
          {
            Icon: FaLinkedin,
            href: "https://www.linkedin.com/in/shubham-jha-776203262/",
            color: "bg-blue-600 hover:bg-blue-700",
          },
        ].map(({ Icon, href, color }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${color} text-white p-3 rounded-full shadow-lg transition-all`}
            whileHover={{
              scale: 1.15,
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            title={
              Icon === FaWhatsapp
                ? "WhatsApp"
                : Icon === FaGithub
                ? "GitHub"
                : "LinkedIn"
            }
          >
            <Icon className="text-2xl" />
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default Header;

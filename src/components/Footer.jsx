import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 md:px-12 text-center relative z-10"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-8">
          {[
            {
              Icon: FaWhatsapp,
              href: "https://wa.me/919060917383?text=Hello%20Shubham!%20I%20want%20to%20talk%20about%20a%20project.",
              color: "text-green-400 hover:text-green-300",
              label: "WhatsApp",
            },
            {
              Icon: FaGithub,
              href: "https://github.com/jhashubham17",
              color: "text-gray-300 hover:text-gray-200",
              label: "GitHub",
            },
            {
              Icon: FaLinkedin,
              href: "https://www.linkedin.com/in/shubham-jha-776203262/",
              color: "text-blue-400 hover:text-blue-300",
              label: "LinkedIn",
            },
          ].map(({ Icon, href, color, label }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${color} transition-colors duration-300`}
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label={label}
              title={label}
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-300 text-sm md:text-base">
          © {new Date().getFullYear()} Shubham. Crafted with{" "}
          <span className="text-red-400 animate-pulse">❤️</span> and precision.
        </p>

        {/* Subtle Divider */}
        <div className="mt-6">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto"></div>
        </div>

        {/* Additional Info */}
        <motion.p
          className="mt-4 text-gray-400 text-xs md:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Designed & Developed by Shubham | All rights reserved
        </motion.p>
      </motion.div>

      {/* Custom Styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          );
          background-size: 30px 30px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

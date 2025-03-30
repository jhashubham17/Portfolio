import React from "react";
import { motion } from "framer-motion"; // Added for animations

const Hero = () => {
  // Animation variants
  const textVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 relative z-10">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Hey there, I'm{" "}
            <span className="relative">
              <span className="text-blue-400">Shubham</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/50 rounded-full animate-pulse"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-300 font-light tracking-wide">
            {" "}
            <span className="text-blue-300">Front-End Developer</span> &{" "}
            <span className="text-blue-300">Graphic Designs</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center md:justify-start">
            <motion.a
              href="https://drive.google.com/file/d/1fBTZIkEFlP4K_lhlYjZLuX11wgb6PFoh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
            >
              View Certificates
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1z8rBpAmpk3i5NpuSjaTlSC0okd8k2OS6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center mb-12 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-tilt"></div>
            <img
              src="./profile.jpg"
              alt="Shubham"
              className="relative rounded-full w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover shadow-2xl border-4 border-blue-400/40 group-hover:border-blue-400/60 transition-all duration-500 z-10"
            />
            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="absolute bg-blue-400/50 rounded-full animate-float"
                  style={{
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          );
          background-size: 25px 25px;
        }

        @keyframes tilt {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.8;
          }
        }

        .animate-tilt {
          animation: tilt 10s infinite ease-in-out;
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;

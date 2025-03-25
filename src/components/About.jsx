import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 relative inline-block"
            variants={childVariants}
          >
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/50 rounded-full animate-pulse"></span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
            variants={childVariants}
          >
            Hey there! I'm{" "}
            <span className="text-blue-600 font-semibold">Shubham</span>, a
            passionate{" "}
            <span className="relative">
              <span className="text-blue-600 font-semibold">
                Front-End Developer
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400/30 animate-slide"></span>
            </span>{" "}
            and{" "}
            <span className="relative">
              <span className="text-blue-600 font-semibold">
                Graphic Designer
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400/30 animate-slide delay-200"></span>
            </span>
            . I specialize in crafting responsive, pixel-perfect websites and
            creating visually stunning designs that blend creativity with
            seamless user experiences.
          </motion.p>

          {/* Additional Info Cards */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={childVariants}
          >
            {[
              {
                title: "Experience",
                value: "2+ Years",
                desc: "Building modern web solutions",
              },
              {
                title: "Projects",
                value: "15+",
                desc: "Completed with excellence",
              },
              {
                title: "Passion",
                value: "Design & Code",
                desc: "Creating impactful digital art",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl font-bold text-blue-600">
                  {item.value}
                </h3>
                <p className="text-gray-800 font-semibold mt-1">{item.title}</p>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px
          );
          background-size: 30px 30px;
        }

        @keyframes slide {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        .animate-slide {
          animation: slide 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default About;

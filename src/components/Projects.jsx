import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const projects = [
    {
      image: "./project01.png",
      title: "PS Sansara",
      description:
        "Designed and developed a modern landing page for PS Sansara, a construction company, showcasing its expertise and services. Features a clean design with service highlights, project galleries, and client testimonials. Built with React and Tailwind CSS for performance and responsiveness.",
      link: "https://pssansara.com/",
      certificate:
        "https://drive.google.com/file/d/1hyvqiKqmkzePAFsRnWe6sJTY_6O4iaaU/view?usp=drivesdk",
    },
    {
      image: "./project02.jpg",
      title: "Harine General Store",
      description:
        "An e-commerce platform for Harine General Store, offering household essentials like soap and rice. Built with React, it includes product listings and a shopping cart, with plans for authentication and payment integration. Focuses on convenience and affordability.",
      link: "https://harinestore.netlify.app/",
    },
    {
      image: "./project03.png",
      title: "Kitaabkhana",
      description:
        "A community-driven book reader platform where users can explore, rate, and review books. Built with React and Firebase, it offers authentication, real-time updates, and a responsive design. Includes book search and user profile features.",
      link: "https://kitaabkhana.netlify.app/",
    },
    {
      image: "./project04.png",
      title: "DreamList",
      description:
        "Your wishlist website will be a place where you can store and manage your wishlist items and other personal data. Since you're using React for the frontend and storing data locally, it will likely be a single-user application without a backend.",
      link: "https://ourdream.netlify.app/",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 relative inline-block"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/50 rounded-full animate-pulse"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Image with Overlay */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mt-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex-grow">
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {expanded[index]
                    ? project.description
                    : `${project.description.substring(0, 100)}...`}
                </p>
                {project.description.length > 100 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-blue-500 hover:text-blue-700 text-sm mt-2 font-medium transition-colors duration-300 focus:outline-none"
                  >
                    {expanded[index] ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  View Project
                </motion.a>
                {project.certificate && (
                  <motion.a
                    href={project.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Certificate
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/jhashubham17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Explore More on GitHub
          </motion.a>
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

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Projects;

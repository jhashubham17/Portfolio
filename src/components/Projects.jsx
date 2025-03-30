import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [expanded, setExpanded] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
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
      technologies: ["React", "Tailwind CSS", "Responsive Design", "API"],
      features: [
        "Interactive service showcase",
        "Project gallery with filtering",
        "Testimonial carousel",
        "Contact form with validation",
      ],
      year: "2025",
    },
    {
      image: "./project02.jpg",
      title: "Harine General Store",
      description:
        "An e-commerce platform for Harine General Store, offering household essentials like soap and rice. Built with React, it includes product listings and a shopping cart, with plans for authentication and payment integration. Focuses on convenience and affordability.",
      link: "https://harinestore.netlify.app/",
      technologies: [
        "React",
        "LocalStorage",
        "CSS3",
        "Tailwind CSS",
        "E-commerce",
        "UI/UX Design",
      ],
      features: [
        "Product catalog with categories",
        "Shopping cart functionality",
        "Responsive mobile-first design",
        "Order summary",
      ],
      year: "2025",
    },
    {
      image: "./project03.png",
      title: "Kitaabkhana",
      description:
        "A community-driven book reader platform where users can explore, rate, and review books. Built with React and Firebase, it offers authentication, real-time updates, and a responsive design. Includes book search and user profile features.",
      link: "https://kitaabkhana.netlify.app/",
      technologies: [
        "React",
        "Firebase",
        "Authentication",
        "Tailwind CSS",
        "Real-time Database",
        "UI/UX Design",
      ],
      features: [
        "User authentication and profiles",
        "Book search and filtering",
        "Rating and review system",
        "Responsive book display",
      ],
      year: "2024",
    },
    {
      image: "./project04.png",
      title: "DreamList",
      description:
        "Your wishlist website will be a place where you can store and manage your wishlist items and other personal data. Since you're using React for the frontend and storing data locally, it will likely be a single-user application without a backend.",
      link: "https://ourdream.netlify.app/",
      technologies: [
        "React",
        "LocalStorage",
        "CSS",
        "Tailwind CSS",
        "UI/UX Design",
      ],
      features: [
        "Add and manage wishlist items",
        "Categorize items",
        "Set priority levels",
        "Data persistence using LocalStorage",
      ],
      year: "2024",
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.05, duration: 0.4 },
    }),
  };

  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            transition: {
              duration: 6,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="h-1 w-40 mt-3 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full relative overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: "10rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-white/50"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group h-full cursor-pointer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => openModal(project)}
            >
              {/* Responsive Image Container */}
              <div className="relative overflow-hidden rounded-t-xl aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  srcSet={`
                    ${project.image}?w=400 400w,
                    ${project.image}?w=800 800w,
                    ${project.image}?w=1200 1200w
                  `}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full text-white">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/70 backdrop-blur-sm rounded-full mb-2">
                      {project.year}
                    </span>
                    <motion.div
                      className="font-bold"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Click to view details
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
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
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(index);
                      }}
                      className="text-blue-500 hover:text-blue-700 text-sm mt-2 font-medium transition-colors duration-300 focus:outline-none"
                    >
                      {expanded[index] ? "Show Less" : "Read More"}
                    </button>
                  )}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies &&
                    project.technologies.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  {project.technologies && project.technologies.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{project.technologies.length - 2} more
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Site
                  </motion.a>
                  {project.certificate && (
                    <motion.a
                      href={project.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Certificate
                    </motion.a>
                  )}
                </div>
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
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Explore More on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
            >
              {/* Modal Content */}
              <motion.div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Responsive Modal Image Header */}
                <div className="relative w-full aspect-video">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    srcSet={`
                      ${selectedProject.image}?w=800 800w,
                      ${selectedProject.image}?w=1200 1200w,
                      ${selectedProject.image}?w=1600 1600w
                    `}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6 md:p-8 w-full">
                      <motion.div
                        className="flex items-center justify-between"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {selectedProject.title}
                        </h2>
                        <span className="px-3 py-1 bg-blue-500/80 text-white text-sm rounded-full backdrop-blur-sm">
                          {selectedProject.year}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-300"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Project Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies &&
                        selectedProject.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-300"
                            custom={i}
                            variants={tagVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {tech}
                          </motion.span>
                        ))}
                    </div>
                  </div>

                  {/* Features */}
                  {selectedProject.features && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedProject.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2 text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                          >
                            <svg
                              className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      View Live Project
                    </motion.a>

                    {selectedProject.certificate && (
                      <motion.a
                        href={selectedProject.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        View Certificate
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
      `}</style>
    </section>
  );
};

export default Projects;

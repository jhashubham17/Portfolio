import React, { useState } from "react";

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
        "Designing and developing the landing page for PS Sansara, a construction company, to showcase its expertise and services effectively. The website features a modern design with sections for services, projects, and client testimonials. Built with React and Tailwind CSS for optimal performance and responsiveness across all devices.",
      link: "https://pssansara.com/",
      certificate:
        "https://drive.google.com/file/d/1hyvqiKqmkzePAFsRnWe6sJTY_6O4iaaU/view?usp=drivesdk",
    },
    {
      image: "./project02.jpg",
      title: "Harine General Store",
      description:
        "Harine General Store is a local retail store offering essential household items such as soap, rice, and mustard oil. Serving the community with quality products at affordable prices, the store aims to provide convenience and reliability to its customers. The React-based e-commerce platform includes product listings, a shopping cart, and basic checkout functionality. Future updates will include user authentication and payment gateway integration.",
      link: "https://harinestore.netlify.app/",
    },
    {
      image: "./project03.png",
      title: "Kitaabkhana",
      description:
        "Kitaabkhana is a book reader website where users can explore, rate, and review books. It allows users to add book names, provide details, and give ratings, making it a community-driven platform for book enthusiasts. The application features Firebase authentication, real-time database updates, and a responsive design. Additional features include book search functionality and user profile management.",
      link: "https://kitaabkhana.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-56 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <div className="flex-grow">
                <p className="mt-2 text-gray-600">
                  {expanded[index]
                    ? project.description
                    : `${project.description.substring(0, 100)}...`}
                </p>
                {project.description.length > 100 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-blue-500 hover:text-blue-700 text-sm mt-2 focus:outline-none"
                  >
                    {expanded[index] ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  View Project
                </a>
                {project.certificate && (
                  <a
                    href={project.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors duration-300"
                  >
                    Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/jhashubham17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

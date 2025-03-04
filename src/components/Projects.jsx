import React from "react";

const Projects = () => {
  const projects = [
    {
      image: "./project01.jpg",
      title: "Project 1",
      description: "A responsive e-commerce website built with React.",
      link: "https://harinestore.netlify.app/", // Replace with actual project URL
    },
    {
      image: "./project02.png",
      title: "Project 2",
      description: "A branding design for a Travel People.",
      link: "https://travellist99.netlify.app/", // Replace with actual project URL
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-56 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

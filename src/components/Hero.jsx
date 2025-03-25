import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-gray-900 text-white py-24 md:py-32">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-6 md:mt-0 leading-tight">
            Hi, I'm <span className="text-blue-400">Shubham</span>
          </h1>
          <p className="text-xl md:text-2xl mt-4 md:mt-6 text-gray-300">
            Front-End Developer & Graphic Designer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1fBTZIkEFlP4K_lhlYjZLuX11wgb6PFoh/view?usp=sharing"
              target="_blank"
              className="inline-block bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View Certificates
            </a>
            <a
              href="https://drive.google.com/file/d/1keIurNJ3XJnBDqIqKCphexXdKBYgPVg7/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="relative">
            <img
              src="./profile.jpg"
              alt="Shubham"
              className="rounded-full w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover shadow-xl border-4 border-blue-400/30 hover:border-blue-400/50 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-blue-400/20 animate-ping opacity-0 hover:opacity-100 transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

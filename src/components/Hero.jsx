import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mt-6 md:mt-0 leading-tight">
            Hi, I'm Shubham
          </h1>
          <p className="text-lg md:text-xl mt-3 md:mt-5">
            Front-End Developer & Graphic Designer
          </p>
          <a
            href="https://drive.google.com/file/d/1keIurNJ3XJnBDqIqKCphexXdKBYgPVg7/view?usp=drive_link"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition hover:bg-blue-700"
          >
            Hire Me
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="./profile.jpg"
            alt="Shubham"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

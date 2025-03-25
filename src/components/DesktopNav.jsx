import React from "react";

const DesktopNav = ({ closeMenu }) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative text-lg font-medium group"
              onClick={closeMenu}
            >
              <span className="text-white group-hover:text-blue-400 transition-all duration-300">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;

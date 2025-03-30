import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: "HTML", percentage: 80, color: "bg-orange-500", icon: "💻" },
    { name: "CSS", percentage: 80, color: "bg-blue-500", icon: "🎨" },
    { name: "Tailwind CSS", percentage: 60, color: "bg-teal-500", icon: "🌊" },
    { name: "JavaScript", percentage: 70, color: "bg-yellow-500", icon: "⚡" },
    { name: "React", percentage: 60, color: "bg-cyan-500", icon: "⚛️" },
    {
      name: "Adobe Photoshop",
      percentage: 50,
      color: "bg-purple-500",
      icon: "🖌️",
    },
    { name: "Figma", percentage: 40, color: "bg-pink-500", icon: "✏️" },
  ];

  const handleSkillClick = (skill) => {
    if (activeSkill === skill.name) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skill.name);
    }
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1], // Custom spring-like ease
      },
    }),
  };

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  return (
    <section
      id="skills"
      className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>

        <motion.div
          animate={floatingAnimation}
          className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            ...floatingAnimation,
            transition: {
              ...floatingAnimation.transition,
              delay: 1.5,
            },
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            ...floatingAnimation,
            transition: {
              ...floatingAnimation.transition,
              delay: 0.8,
            },
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading with enhanced decoration */}
          <motion.div className="mb-16" variants={skillVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3 inline-block">
              My Skills
            </h2>
            <div className="relative h-1 w-40 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-full"
                animate={{
                  width: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Skills Grid with improved layout */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`${
                  activeSkill === skill.name ? skill.color : "bg-gray-800"
                } text-white px-6 py-3 rounded-xl font-semibold shadow-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center relative overflow-hidden cursor-pointer`}
                variants={skillVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSkillClick(skill)}
              >
                {/* Skill Content */}
                <div className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>

                {/* Sparkle Effect on Hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-glow"></div>

                {/* Background Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-45"
                  initial={{ left: "-100%" }}
                  animate={
                    activeSkill === skill.name
                      ? { left: "100%" }
                      : { left: "-100%" }
                  }
                  transition={{
                    duration: 1.5,
                    repeat: activeSkill === skill.name ? Infinity : 0,
                    repeatDelay: 0.5,
                  }}
                ></motion.div>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar with improved visual */}
          {activeSkill && (
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex justify-between text-sm text-gray-300">
                <span>{activeSkill}</span>
                <span className="font-semibold">
                  {skills.find((s) => s.name === activeSkill)?.percentage}%
                </span>
              </div>
              <motion.div
                className="bg-gray-700/50 rounded-full h-6 overflow-hidden backdrop-blur-sm border border-white/10"
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className={`h-full ${
                    skills.find((s) => s.name === activeSkill)?.color
                  } relative`}
                  variants={progressBarVariants}
                  custom={
                    skills.find((s) => s.name === activeSkill)?.percentage
                  }
                >
                  {/* Animated Particles Inside Progress Bar */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-20">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-8 bg-white/80 rotate-45"
                          style={{
                            left: `${i * 25}%`,
                            animationDelay: `${i * 0.2}s`,
                            animation: "moveParticle 2s infinite linear",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}

          {/* Enhanced Description */}
          <motion.div
            className="mt-16 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            variants={skillVariants}
          >
            <p className="leading-relaxed">
              Continuously learning and mastering modern technologies to create
              impactful digital experiences. Click on a skill to see my
              proficiency level.
            </p>
          </motion.div>
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
          background-size: 30px 30px;
        }

        @keyframes glow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-glow {
          animation: glow 1.5s infinite linear;
        }

        @keyframes moveParticle {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(500%) rotate(45deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

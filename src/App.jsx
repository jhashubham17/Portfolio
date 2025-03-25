import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import welcomeSound from "./assets/welcome.mp3"; // Make sure this file exists

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed here (30ms per 1%)

    // Main loading timer
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        // Play sound when content loads
        if (audioRef.current) {
          audioRef.current.volume = 0.8;
          audioRef.current
            .play()
            .catch((e) => console.log("Audio play failed:", e));
        }
      }, 500); // Matches fade-out duration
    }, 3000); // Total splash screen duration

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (loading) {
    return (
      <>
        {/* Hidden audio element */}
        <audio ref={audioRef} preload="auto">
          <source src={welcomeSound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Splash Screen */}
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50 transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Animated Logo Container */}
          <div className="relative">
            {/* Logo Text with Animation */}
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white relative overflow-hidden">
                <span className="inline-block">
                  <span
                    className="block"
                    style={{
                      animation: "slideIn 0.8s ease-out forwards",
                      transform: "translateY(100%)",
                      opacity: 0,
                    }}
                  >
                    Shubham
                  </span>
                </span>
                <span
                  className="text-blue-400 inline-block ml-1"
                  style={{
                    animation: "pulse 2s infinite",
                  }}
                >
                  .
                </span>
              </h1>
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-1.5 bg-gray-700 rounded-full mt-8 overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Loading Spinner */}
            <div className="mt-6 flex justify-center">
              <div
                className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
                style={{ animation: "spin 1s linear infinite" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Global Styles for Animations */}
        <style jsx global>{`
          @keyframes slideIn {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

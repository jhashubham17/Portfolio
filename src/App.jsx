import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import welcomeSound from "./assets/welcome.mp3";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef(null);

  // Handle user interaction and attempt audio playback
  const handleUserInteraction = () => {
    if (!userInteracted) {
      setUserInteracted(true);
      playAudio();
    }
  };

  // Separate function to handle audio playback
  const playAudio = () => {
    if (audioRef.current && !loading) {
      audioRef.current.volume = 0.5; // Reduced volume for better UX
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio playing successfully");
          })
          .catch((error) => {
            console.warn("Audio playback failed:", error);
            // Retry after a short delay if failed
            setTimeout(playAudio, 1000);
          });
      }
    }
  };

  useEffect(() => {
    // Setup audio
    audioRef.current = new Audio(welcomeSound);
    audioRef.current.preload = "auto";

    // Event listeners for interaction
    const events = ["click", "touchstart", "mousemove"];
    events.forEach((event) => {
      document.addEventListener(event, handleUserInteraction);
    });

    // Progress animation with easing
    let animationFrame;
    const startTime = Date.now();
    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const easedProgress = Math.min(
        100,
        (elapsed / 20) * (2 - elapsed / 2000)
      );
      setProgress(easedProgress);

      if (easedProgress < 100) {
        animationFrame = requestAnimationFrame(animateProgress);
      }
    };
    animationFrame = requestAnimationFrame(animateProgress);

    // Loading sequence
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        if (userInteracted) {
          playAudio();
        }
      }, 600);
    }, 2000);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timer);
      events.forEach((event) => {
        document.removeEventListener(event, handleUserInteraction);
      });
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [userInteracted]);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 z-50 transition-all duration-600 ${
          fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
        onClick={handleUserInteraction}
      >
        <div className="relative text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white relative overflow-hidden">
            <span
              className="inline-block animate-slideIn"
              style={{ animationDelay: "0.2s" }}
            >
              Shubham
            </span>
            <span className="text-blue-400 inline-block ml-1 animate-pulse">
              .
            </span>
          </h1>

          <div className="w-64 h-2 bg-gray-700 rounded-full mt-8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-20 animate-pulse" />
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

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
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-slideIn {
            animation: slideIn 0.8s ease-out forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="App min-h-screen bg-gray-50 animate-fadeIn">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

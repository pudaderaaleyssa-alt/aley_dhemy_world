import { useState } from "react";
import { useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Landing Page - Mini Interaction Game
 * Design: Clean blue minimalist aesthetic
 * Feature: Playful "NO" button that moves away on hover
 * Action: "YES" button navigates to main AJ & Jana's World page
 */

export default function Landing() {
  const { theme, toggleTheme } = useTheme();
  const [, setLocation] = useLocation();
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [showResponse, setShowResponse] = useState(false);

  const handleYes = () => {
    setShowResponse(true);
    setTimeout(() => {
      setLocation("/world");
    }, 1500);
  };

  const handleNoHover = () => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 50;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    setNoButtonPos({
      x: randomX,
      y: randomY,
    });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"} transition-colors duration-300 relative overflow-hidden`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors z-10"
        title="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      {/* Main Container */}
      <div className="w-full max-w-md px-4">
        {/* Content */}
        <div className="text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'Quicksand' }}>
            Do you love me?
          </h1>

          {/* Decorative Hearts */}
          <div className="flex justify-center gap-3 mb-8 text-3xl">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>💙</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💙</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💙</span>
          </div>

          {/* Subtitle */}
          <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg" style={{ fontFamily: 'Poppins' }}>
            Welcome to our special world
          </p>

          {/* Response Message */}
          {showResponse && (
            <div className="mb-8 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg border border-blue-300 dark:border-blue-700">
              <p className="text-blue-700 dark:text-blue-300 font-bold animate-bounce" style={{ fontFamily: 'Quicksand' }}>
                YES! I love you so much! 💙
              </p>
            </div>
          )}

          {/* Buttons Container */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative h-16">
            {/* YES Button */}
            <button
              onClick={handleYes}
              className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 text-lg w-32"
              style={{ fontFamily: 'Quicksand' }}
            >
              YES
            </button>

            {/* NO Button - Moves Away */}
            <button
              onMouseEnter={handleNoHover}
              onTouchStart={() => handleNoHover()}
              className="px-8 py-3 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg w-32 absolute md:relative"
              style={{
                fontFamily: 'Quicksand',
                transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              NO
            </button>
          </div>

          {/* Footer Message */}
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-12" style={{ fontFamily: 'Poppins' }}>
            (The NO button is shy 😊)
          </p>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 pointer-events-none">💙</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10 pointer-events-none">💙</div>
    </div>
  );
}

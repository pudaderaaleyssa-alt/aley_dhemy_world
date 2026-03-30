import { useState, useEffect } from "react";
import { Heart, Music, Gift, Search, User, X, Menu } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Design System: Clean Minimalist Blue
 * - Cohesive blue palette: primary (#3b82f6), secondary (#0ea5e9)
 * - Clean, minimal design with ample whitespace
 * - Subtle shadows and smooth transitions
 * - Reduced border radius (0.75rem) for modern look
 * - Typography: Quicksand (headings) + Poppins (body)
 */

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [showGift, setShowGift] = useState(false);
  const [showLoveLetter, setShowLoveLetter] = useState(false);
  const [gameResponse, setGameResponse] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const images = [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663490224127/5ZFdTcBZSFPRJ3SDvK689o/hero-couple-JkL8n8CGuuK7Pp6rerbf7z.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663490224127/5ZFdTcBZSFPRJ3SDvK689o/secondary-memory-npDjPTMRQmGjGa6cfnRfsa.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const whyILoveYou = [
    "Your beautiful smile",
    "Your kindness and compassion",
    "How you make my days brighter",
    "Your laugh that fills my heart",
    "The way you look at me",
    "Your strength and support",
  ];

  const timeline = [
    { icon: "💬", label: "First Chat", description: "When it all began" },
    { icon: "📍", label: "First Date", description: "A moment to remember" },
    { icon: "📸", label: "Favorite Memory", description: "Our special moments" },
    { icon: "💙", label: "Today", description: "Forever with you" },
  ];

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"} transition-colors duration-300`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-slate-800/95 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400" style={{ fontFamily: 'Quicksand' }}>
              AJ & Jana 💙
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={20} className="text-slate-700 dark:text-slate-300" />
          </button>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors" title="Profile">
              <User size={18} className="text-slate-600 dark:text-slate-400" />
            </button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors" title="Favorites">
              <Heart size={18} className="text-blue-500" />
            </button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors" title="Search">
              <Search size={18} className="text-slate-600 dark:text-slate-400" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
              title="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 p-4 space-y-2 bg-white dark:bg-slate-800">
            <button className="w-full text-left p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors text-sm" style={{ fontFamily: 'Poppins' }}>
              Profile
            </button>
            <button className="w-full text-left p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors text-sm" style={{ fontFamily: 'Poppins' }}>
              Favorites
            </button>
            <button className="w-full text-left p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors text-sm" style={{ fontFamily: 'Poppins' }}>
              Search
            </button>
            <button
              onClick={toggleTheme}
              className="w-full text-left p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors text-sm"
              style={{ fontFamily: 'Poppins' }}
            >
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left: Photo Carousel */}
          <div className="flex flex-col">
            <div className="relative overflow-hidden rounded-lg shadow-sm h-96 md:h-full bg-slate-200 dark:bg-slate-700">
              <img
                src={images[currentImageIndex]}
                alt="Couple"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Carousel Indicators */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Text Boxes */}
          <div className="flex flex-col gap-4 justify-center">
            {/* Text Box 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-blue-600 dark:text-blue-400 text-sm mb-2" style={{ fontFamily: 'Quicksand' }}>
                For You
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed" style={{ fontFamily: 'Poppins' }}>
                Every moment with you feels like a dream. Your presence fills my heart with endless joy and warmth.
              </p>
            </div>

            {/* Text Box 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-blue-600 dark:text-blue-400 text-sm mb-2" style={{ fontFamily: 'Quicksand' }}>
                Always
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed" style={{ fontFamily: 'Poppins' }}>
                I promise to love you through every season, every challenge, and every beautiful moment we share.
              </p>
            </div>

            {/* Text Box 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-blue-600 dark:text-blue-400 text-sm mb-2" style={{ fontFamily: 'Quicksand' }}>
                Forever
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed" style={{ fontFamily: 'Poppins' }}>
                You are my greatest blessing, my favorite person, and my forever love. I choose you, always.
              </p>
            </div>
          </div>
        </section>

        {/* Secondary Image */}
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-sm h-64 md:h-72 bg-slate-200 dark:bg-slate-700">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663490224127/5ZFdTcBZSFPRJ3SDvK689o/romantic-bg-KVSRVfXAifJiMKg72xfmtW.webp"
              alt="Romantic background"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Cute Cat Box */}
        <section className="mb-16 flex justify-center">
          <div className="bg-blue-600 dark:bg-blue-700 rounded-lg p-8 md:p-12 shadow-sm text-center max-w-sm">
            <p className="text-5xl mb-3">(=^･ω･^=)</p>
            <p className="text-white text-sm" style={{ fontFamily: 'Poppins' }}>A cute reminder that love is pure and simple</p>
          </div>
        </section>

        {/* Why I Love You Section */}
        <section className="mb-16">
          <h2 className="font-bold text-2xl md:text-3xl text-center mb-8 text-slate-900 dark:text-white" style={{ fontFamily: 'Quicksand' }}>
            Why I Love You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyILoveYou.map((reason, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer"
              >
                <p className="text-slate-700 dark:text-slate-300 text-sm flex items-center gap-2" style={{ fontFamily: 'Poppins' }}>
                  <span className="text-blue-500">💙</span>
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Memory Timeline */}
        <section className="mb-16">
          <h2 className="font-bold text-2xl md:text-3xl text-center mb-8 text-slate-900 dark:text-white" style={{ fontFamily: 'Quicksand' }}>
            Our Journey
          </h2>
          <div className="space-y-4">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-lg shadow-sm">
                    {item.icon}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 h-12 bg-blue-200 dark:bg-blue-800 mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700 flex-1 mt-1">
                  <p className="font-bold text-blue-600 dark:text-blue-400 text-sm" style={{ fontFamily: 'Quicksand' }}>
                    {item.label}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1" style={{ fontFamily: 'Poppins' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Now Playing Section */}
        <section className="mb-16">
          <div className="bg-blue-600 dark:bg-blue-700 rounded-lg p-6 shadow-sm text-white">
            <h3 className="font-bold text-lg mb-3" style={{ fontFamily: 'Quicksand' }}>
              🎧 Now Playing
            </h3>
            <p className="text-sm mb-4" style={{ fontFamily: 'Poppins' }}>
              now playing ▶ Our Love Song
            </p>

            {/* Animated Equalizer */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-white rounded-full animate-pulse"
                  style={{
                    height: `${16 + i * 8}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            <p className="text-xs text-blue-100" style={{ fontFamily: 'Poppins' }}>
              Every song reminds me of you. Every lyric speaks of my love for you.
            </p>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16 flex flex-col md:flex-row gap-3 justify-center">
          <button
            onClick={() => setShowLoveLetter(true)}
            className="px-6 py-2.5 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-lg shadow-sm hover:shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 text-sm"
            style={{ fontFamily: 'Quicksand' }}
          >
            💌 Open Letter
          </button>

          <button
            onClick={() => setShowGift(true)}
            className="px-6 py-2.5 bg-blue-500 dark:bg-blue-600 text-white font-bold rounded-lg shadow-sm hover:shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 text-sm"
            style={{ fontFamily: 'Quicksand' }}
          >
            🎁 Gift
          </button>

          <button className="px-6 py-2.5 bg-cyan-600 dark:bg-cyan-500 text-white font-bold rounded-lg shadow-sm hover:shadow-md hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-all duration-300 text-sm" style={{ fontFamily: 'Quicksand' }}>
            🎧 Spotify
          </button>
        </section>

        {/* Mini Interaction Game */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm border border-slate-200 dark:border-slate-700 text-center">
            <h3 className="font-bold text-lg mb-6 text-slate-900 dark:text-white" style={{ fontFamily: 'Quicksand' }}>
              Do you love me?
            </h3>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setGameResponse("YES! I love you so much! 💙");
                  setTimeout(() => setGameResponse(null), 3000);
                }}
                className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm"
                style={{ fontFamily: 'Quicksand' }}
              >
                YES
              </button>
              <button
                onMouseEnter={(e) => {
                  const x = Math.random() * (window.innerWidth - 100);
                  const y = Math.random() * (window.innerHeight - 100);
                  e.currentTarget.style.position = "fixed";
                  e.currentTarget.style.left = `${x}px`;
                  e.currentTarget.style.top = `${y}px`;
                }}
                className="px-6 py-2 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-400 dark:hover:bg-slate-500 transition-colors text-sm"
                style={{ fontFamily: 'Quicksand' }}
              >
                NO
              </button>
            </div>
            {gameResponse && (
              <p className="font-bold text-blue-600 dark:text-blue-400 mt-4 text-sm animate-bounce" style={{ fontFamily: 'Quicksand' }}>
                {gameResponse}
              </p>
            )}
          </div>
        </section>
      </main>

      {/* Gift Modal */}
      {showGift && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-sm w-full shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white" style={{ fontFamily: 'Quicksand' }}>
                A Gift For You
              </h3>
              <button
                onClick={() => setShowGift(false)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Gift Animation */}
            <div className="text-center mb-6">
              <div className="inline-block text-5xl animate-bounce mb-4">🎁</div>
              <div className="text-4xl mb-4">💐</div>
            </div>

            <p className="text-center text-slate-700 dark:text-slate-300 text-sm mb-6" style={{ fontFamily: 'Poppins' }}>
              This is for you 💐<br />
              I love you always 💙
            </p>

            <button
              onClick={() => setShowGift(false)}
              className="w-full px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm"
              style={{ fontFamily: 'Quicksand' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Love Letter Modal */}
      {showLoveLetter && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-sm w-full shadow-lg border border-slate-200 dark:border-slate-700 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white" style={{ fontFamily: 'Quicksand' }}>
                A Letter For You
              </h3>
              <button
                onClick={() => setShowLoveLetter(false)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="text-slate-700 dark:text-slate-300 space-y-3 text-sm leading-relaxed" style={{ fontFamily: 'Poppins' }}>
              <p>My Dearest,</p>

              <p>
                I wanted to take a moment to tell you how much you mean to me. Every day with you is a blessing I never take for granted.
              </p>

              <p>
                You have brought so much light, love, and laughter into my life. Your smile brightens even my darkest days, and your presence makes everything feel right.
              </p>

              <p>
                I love the way you care for others, your strength in difficult times, and the gentle way you hold my hand. I love all the little things—your laugh, your dreams, your kindness.
              </p>

              <p>
                I promise to stand by you, to support your dreams, and to love you with all my heart. You are my greatest adventure, my safe place, and my forever home.
              </p>

              <p>
                Thank you for being you. Thank you for choosing me. Thank you for this beautiful love story we're writing together.
              </p>

              <p>Forever yours,</p>
              <p className="font-bold text-blue-600 dark:text-blue-400" style={{ fontFamily: 'Quicksand' }}>AJ 💙</p>
            </div>

            <button
              onClick={() => setShowLoveLetter(false)}
              className="w-full mt-6 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm"
              style={{ fontFamily: 'Quicksand' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-xs" style={{ fontFamily: 'Poppins' }}>
            (made with love) 💙
          </p>
        </div>
      </footer>
    </div>
  );
}

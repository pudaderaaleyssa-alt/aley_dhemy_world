import { useState, useEffect } from "react";
import { Heart, Music, Gift, Search, User, X, Menu } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Design System: Playful Kawaii Aesthetic
 * - Soft rounded corners (24-32px)
 * - Pastel color palette: sky blue, peachy pink, lavender, cream
 * - Playful animations with bounce and scale effects
 * - Typography: Quicksand (headings) + Poppins (body)
 */

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [showGift, setShowGift] = useState(false);
  const [showLoveLetter, setShowLoveLetter] = useState(false);
  const [showMiniGame, setShowMiniGame] = useState(false);
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
    "💙 Your beautiful smile",
    "💙 Your kindness and compassion",
    "💙 How you make my days brighter",
    "💙 Your laugh that fills my heart",
    "💙 The way you look at me",
    "💙 Your strength and support",
  ];

  const timeline = [
    { icon: "💬", label: "First Chat", description: "When it all began" },
    { icon: "📍", label: "First Date", description: "A moment to remember" },
    { icon: "📸", label: "Favorite Memory", description: "Our special moments" },
    { icon: "💙", label: "Today", description: "Forever with you" },
  ];

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900" : "bg-cream"} transition-colors duration-300`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-800/80 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo Input Style */}
          <div className="flex-1">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-sky-blue to-lavender text-white font-bold text-lg shadow-md" style={{ fontFamily: 'Quicksand' }}>
              aj & jana's world 💙
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} className="text-gray-700 dark:text-gray-300" />
          </button>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4" style={{ fontFamily: 'Poppins' }}>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
              <User size={20} className="text-gray-700 dark:text-gray-300" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
              <Heart size={20} className="text-peachy-pink" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
              <Search size={20} className="text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-3" style={{ fontFamily: 'Poppins' }}>
            <button className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2">
              <User size={20} /> Profile
            </button>
            <button className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2">
              <Heart size={20} /> Favorites
            </button>
            <button className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2">
              <Search size={20} /> Search
            </button>
            <button
              onClick={toggleTheme}
              className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section - Two Column Layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left: Photo Carousel */}
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-3xl shadow-lg h-96 md:h-full">
              <img
                src={images[currentImageIndex]}
                alt="Couple"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentImageIndex ? "bg-white w-8" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Text Boxes */}
          <div className="flex flex-col gap-4 justify-center">
            {/* Text Box 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md border-2 border-sky-blue/20 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-sky-blue text-lg mb-2" style={{ fontFamily: 'Quicksand' }}>💙 For You</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Poppins' }}>
                Every moment with you feels like a dream. Your presence fills my heart with endless joy and warmth.
              </p>
            </div>

            {/* Text Box 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md border-2 border-peachy-pink/20 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-peachy-pink text-lg mb-2" style={{ fontFamily: 'Quicksand' }}>💕 Always</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Poppins' }}>
                I promise to love you through every season, every challenge, and every beautiful moment we share.
              </p>
            </div>

            {/* Text Box 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md border-2 border-lavender/20 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lavender text-lg mb-2" style={{ fontFamily: 'Quicksand' }}>✨ Forever</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Poppins' }}>
                You are my greatest blessing, my favorite person, and my forever love. I choose you, always.
              </p>
            </div>
          </div>
        </section>

        {/* Secondary Image */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-3xl shadow-lg h-64 md:h-80">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663490224127/5ZFdTcBZSFPRJ3SDvK689o/romantic-bg-KVSRVfXAifJiMKg72xfmtW.webp"
              alt="Romantic background"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Cute Cat Box */}
        <section className="mb-12 flex justify-center">
          <div className="bg-gradient-to-br from-sky-blue to-lavender rounded-3xl p-8 md:p-12 shadow-lg text-center">
            <p className="text-4xl md:text-5xl text-white drop-shadow-lg" style={{ fontFamily: 'Quicksand' }}>(=^･ω･^=)</p>
            <p className="text-white mt-4 text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>A cute reminder that love is pure and simple</p>
          </div>
        </section>

        {/* Why I Love You Section */}
        <section className="mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-center mb-8 text-gray-800 dark:text-white" style={{ fontFamily: 'Quicksand' }}>
            Why I Love You 💙
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyILoveYou.map((reason, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <p className="text-gray-700 dark:text-gray-300" style={{ fontFamily: 'Poppins' }}>{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Memory Timeline */}
        <section className="mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-center mb-8 text-gray-800 dark:text-white" style={{ fontFamily: 'Quicksand' }}>
            Our Journey 📍
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-blue to-lavender hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4 md:gap-8 items-center`}>
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <p className="font-bold text-lg text-sky-blue mb-2" style={{ fontFamily: 'Quicksand' }}>{item.label}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm" style={{ fontFamily: 'Poppins' }}>{item.description}</p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-blue to-lavender rounded-full flex items-center justify-center text-xl shadow-lg">
                      {item.icon}
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="md:hidden text-3xl">{item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Now Playing Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-sky-blue to-peachy-pink rounded-3xl p-8 shadow-lg text-white">
            <h3 className="font-bold text-2xl mb-4" style={{ fontFamily: 'Quicksand' }}>🎧 Now Playing</h3>
            <p className="text-lg mb-6" style={{ fontFamily: 'Poppins' }}>now playing ▶ Our Love Song</p>

            {/* Animated Equalizer */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-white rounded-full animate-pulse"
                  style={{
                    height: `${20 + i * 10}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            <p className="text-sm text-white/90" style={{ fontFamily: 'Poppins' }}>
              Every song reminds me of you. Every lyric speaks of my love for you.
            </p>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-12 flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => setShowLoveLetter(true)}
            className="px-8 py-4 bg-gradient-to-r from-peachy-pink to-lavender text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ fontFamily: 'Quicksand' }}
          >
            💌 Open Me
          </button>

          <button
            onClick={() => setShowGift(true)}
            className="px-8 py-4 bg-gradient-to-r from-sky-blue to-lavender text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ fontFamily: 'Quicksand' }}
          >
            🎁 Gift
          </button>

          <button className="px-8 py-4 bg-gradient-to-r from-lavender to-peachy-pink text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" style={{ fontFamily: 'Quicksand' }}>
            🎧 Spotify
          </button>
        </section>

        {/* Mini Interaction Game */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg text-center">
            <h3 className="font-bold text-2xl mb-6 text-gray-800 dark:text-white" style={{ fontFamily: 'Quicksand' }}>
              Do you love me? 💙
            </h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setGameResponse("YES! I love you so much! 💙💙💙");
                  setTimeout(() => setGameResponse(null), 3000);
                }}
                className="px-8 py-3 bg-sky-blue text-white font-bold rounded-full hover:scale-110 transition-transform duration-300"
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
                className="px-8 py-3 bg-peachy-pink text-white font-bold rounded-full hover:scale-110 transition-transform duration-300"
                style={{ fontFamily: 'Quicksand' }}
              >
                NO
              </button>
            </div>
            {gameResponse && (
              <p className="text-xl text-sky-blue mt-6 animate-bounce" style={{ fontFamily: 'Quicksand' }}>{gameResponse}</p>
            )}
          </div>
        </section>
      </main>

      {/* Gift Modal */}
      {showGift && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl animate-bounce">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white" style={{ fontFamily: 'Quicksand' }}>🎁 A Gift For You</h3>
              <button
                onClick={() => setShowGift(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Gift Animation */}
            <div className="text-center mb-6">
              <div className="inline-block text-6xl animate-bounce mb-4">🎁</div>
              <div className="text-5xl mb-4">💐</div>
            </div>

            <p className="text-center text-gray-700 dark:text-gray-300 text-lg mb-6" style={{ fontFamily: 'Poppins' }}>
              This is for you 💐<br />
              I love you always 💙
            </p>

            <button
              onClick={() => setShowGift(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-sky-blue to-lavender text-white font-bold rounded-full hover:shadow-lg transition-all"
              style={{ fontFamily: 'Quicksand' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Love Letter Modal */}
      {showLoveLetter && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white" style={{ fontFamily: 'Quicksand' }}>💌 A Letter For You</h3>
              <button
                onClick={() => setShowLoveLetter(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="text-gray-700 dark:text-gray-300 space-y-4 text-sm leading-relaxed" style={{ fontFamily: 'Poppins' }}>
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
              <p className="font-bold text-sky-blue" style={{ fontFamily: 'Quicksand' }}>AJ 💙</p>
            </div>

            <button
              onClick={() => setShowLoveLetter(false)}
              className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-peachy-pink to-lavender text-white font-bold rounded-full hover:shadow-lg transition-all"
              style={{ fontFamily: 'Quicksand' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm" style={{ fontFamily: 'Poppins' }}>(made with love) 💙</p>
        </div>
      </footer>
    </div>
  );
}

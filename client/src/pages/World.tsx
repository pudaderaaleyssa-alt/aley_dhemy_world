import { useState, useEffect } from "react";
import {
  Heart,
  Search,
  User,
  X,
  Menu,
  MessageCircle,
  MapPin,
  Camera,
  Gift,
  Flower2,
  Headphones,
  Mail,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function World() {
  const { theme } = useTheme();
  const [showGift, setShowGift] = useState(false);
  const [showLoveLetter, setShowLoveLetter] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact Palette Mapping from reference image
  const palette = {
    A6B5E3: "#A6B5E3", // Deepest (for accents, text, highlights)
    BACEF0: "#BACEF0", // Secondary (for buttons, gifts)
    C1D5F0: "#C1D5F0", // Medium (for timelines, secondary cards)
    D5E3F0: "#D5E3F0", // Light (for hover states, backgrounds)
    EAF9FF: "#EAF9FF", // Lightest (for main section backgrounds)
  };

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
    { icon: <MessageCircle className="w-5 h-5" />, label: "First Chat", description: "When it all began" },
    { icon: <MapPin className="w-5 h-5" />, label: "First Date", description: "A moment to remember" },
    { icon: <Camera className="w-5 h-5" />, label: "Favorite Memory", description: "Our special moments" },
    { icon: <Heart className="w-5 h-5" />, label: "Today", description: "Forever with you" },
  ];

  // Logic for section background colors
  const sectionBg = theme === "dark" ? "#1e293b" : "#ffffff";
  const textColor = theme === "dark" ? "#f1f5f9" : "#334155";
  const subtextColor = theme === "dark" ? "#cbd5e1" : "#475569";
  const modalBg = theme === "dark" ? "rgba(15, 23, 42, 0.9)" : "rgba(234, 249, 255, 0.9)"; // EAF9FF

  return (
    <div className={`min-h-screen transition-colors duration-300`} style={{ backgroundColor: theme === "dark" ? "#0f172a" : "#f1f5f9" }}>
      <header className="sticky top-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: theme === "dark" ? "rgba(30, 41, 59, 0.9)" : "rgba(255, 255, 255, 0.9)", borderColor: theme === "dark" ? "#334155" : palette.C1D5F0 }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-xl font-bold" style={{ fontFamily: "Quicksand", color: palette.A6B5E3 }}>
              Aley & Dhemy
            </h1>
          </div>

          <button
            className="md:hidden p-2 rounded transition-colors"
            style={{ color: textColor, backgroundColor: "transparent" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = palette.EAF9FF)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={20} />
          </button>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded transition-colors" title="Profile" style={{ color: subtextColor }}>
              <User size={18} />
            </button>
            <button className="p-2 rounded transition-colors" title="Favorites" style={{ color: palette.A6B5E3 }}>
              <Heart size={18} />
            </button>
            <button className="p-2 rounded transition-colors" title="Search" style={{ color: subtextColor }}>
              <Search size={18} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t p-4 space-y-2" style={{ backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff", borderColor: theme === "dark" ? "#334155" : palette.C1D5F0 }}>
            {["Profile", "Favorites", "Search"].map((item) => (
              <button key={item} className="w-full text-left p-2 rounded transition-colors text-sm" style={{ fontFamily: "Poppins", color: textColor, backgroundColor: "transparent" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = palette.EAF9FF)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col">
            <div className="relative overflow-hidden rounded-lg shadow-sm h-96 md:h-full" style={{ backgroundColor: theme === "dark" ? "#334155" : palette.D5E3F0 }}>
              <img src={images[currentImageIndex]} alt="Couple" className="w-full h-full object-cover transition-opacity duration-500" />
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                {images.map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`${idx === currentImageIndex ? "bg-white w-6" : "bg-white/50"} w-2 h-2 rounded-full transition-all`} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            {["For You", "Always", "Forever"].map((title, i) => (
              <div key={title} className="rounded-lg p-5 shadow-sm border transition-shadow" style={{ backgroundColor: sectionBg, borderColor: theme === "dark" ? "#334155" : palette.C1D5F0 }}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)")}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}>
                <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "Quicksand", color: palette.A6B5E3 }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "Poppins", color: textColor }}>
                  {i === 0 && "Every moment with you feels like a dream. Your presence fills my heart with endless joy and warmth."}
                  {i === 1 && "I promise to love you through every season, every challenge, and every beautiful moment we share."}
                  {i === 2 && "You are my greatest blessing, my favorite person, and my forever love. I choose you, always."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-sm h-64 md:h-72" style={{ backgroundColor: theme === "dark" ? "#334155" : palette.D5E3F0 }}>
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663490224127/5ZFdTcBZSFPRJ3SDvK689o/romantic-bg-KVSRVfXAifJiMKg72xfmtW.webp" alt="Romantic background" className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-bold text-2xl md:text-3xl text-center mb-8" style={{ fontFamily: "Quicksand", color: textColor }}>
            Why I Love You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyILoveYou.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: sectionBg, borderColor: theme === "dark" ? "#334155" : palette.C1D5F0 }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"; e.currentTarget.style.borderColor = palette.BACEF0; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = palette.C1D5F0; }}>
                <p className="text-sm flex items-center gap-2" style={{ fontFamily: "Poppins", color: textColor }}>
                  <Heart className="w-4 h-4" style={{ color: palette.A6B5E3 }} />
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-bold text-2xl md:text-3xl text-center mb-8" style={{ fontFamily: "Quicksand", color: textColor }}>
            Our Journey
          </h2>
          <div className="space-y-4">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shadow-sm" style={{ backgroundColor: palette.A6B5E3, color: palette.EAF9FF }}>
                    {item.icon}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 h-12 mt-2" style={{ backgroundColor: palette.C1D5F0 }}></div>
                  )}
                </div>

                <div className="rounded-lg p-4 shadow-sm border flex-1 mt-1" style={{ backgroundColor: sectionBg, borderColor: theme === "dark" ? "#334155" : palette.C1D5F0 }}>
                  <p className="font-bold text-sm" style={{ fontFamily: "Quicksand", color: palette.A6B5E3 }}>{item.label}</p>
                  <p className="text-sm mt-1" style={{ fontFamily: "Poppins", color: textColor }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="rounded-lg p-6 shadow-sm text-sky-900 dark:text-sky-100" style={{ backgroundColor: palette.EAF9FF }}>
            <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Quicksand", color: palette.A6B5E3 }}>
              <Headphones className="inline-block w-6 h-6 mr-2" /> Now Playing
            </h3>
            <p className="text-sm mb-4" style={{ fontFamily: "Poppins", color: textColor }}>now playing ▶ Our Love Song</p>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 rounded-full animate-pulse"
                  style={{ backgroundColor: palette.BACEF0, height: `${16 + i * 8}px`, animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <p className="text-xs" style={{ fontFamily: "Poppins", color: subtextColor }}>Every song reminds me of you. Every lyric speaks of my love for you.</p>
          </div>
        </section>

        <section className="mb-16 flex flex-col md:flex-row gap-3 justify-center">
          <button onClick={() => setShowLoveLetter(true)} className="px-6 py-2.5 text-white font-bold rounded-lg shadow-sm transition-all duration-300 text-sm" style={{ backgroundColor: palette.A6B5E3, fontFamily: "Quicksand" }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
            <Mail className="inline-block w-4 h-4 mr-1" /> Open Letter
          </button>
          <button onClick={() => setShowGift(true)} className="px-6 py-2.5 font-bold rounded-lg shadow-sm transition-all duration-300 text-sm" style={{ backgroundColor: palette.BACEF0, color: "#334155", fontFamily: "Quicksand" }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
            <Gift className="inline-block w-4 h-4 mr-1" /> Gift
          </button>
          <button className="px-6 py-2.5 font-bold rounded-lg shadow-sm transition-all duration-300 text-sm border" style={{ backgroundColor: "#ffffff", color: palette.A6B5E3, borderColor: palette.C1D5F0, fontFamily: "Quicksand" }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
            <Headphones className="inline-block w-4 h-4 mr-1" /> Spotify
          </button>
        </section>
      </main>

      {/* Modals are unchanged except for palette colors */}
      {showGift && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div className="rounded-lg p-6 max-w-sm w-full shadow-lg border" style={{ backgroundColor: sectionBg, borderColor: palette.C1D5F0 }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg" style={{ fontFamily: "Quicksand", color: textColor }}>A Gift For You</h3>
              <X size={20} className="cursor-pointer" style={{ color: textColor }} onClick={() => setShowGift(false)} />
            </div>
            <div className="text-center mb-6">
              <Gift className="w-12 h-12 text-5xl animate-bounce mb-4" style={{ color: palette.BACEF0 }} />
              <Flower2 className="w-10 h-10 text-4xl mb-4" style={{ color: palette.A6B5E3 }} />
            </div>
            <p className="text-center text-sm mb-6" style={{ fontFamily: "Poppins", color: textColor }}>
              This is for you <Flower2 className="inline-block w-4 h-4 text-pink-400 align-text-bottom" /><br />
              I love you always <Heart className="inline-block w-4 h-4 align-text-bottom" style={{ color: palette.A6B5E3 }} />
            </p>
            <button onClick={() => setShowGift(false)} className="w-full px-4 py-2 text-white font-bold rounded-lg text-sm" style={{ backgroundColor: palette.A6B5E3, fontFamily: "Quicksand" }}>Close</button>
          </div>
        </div>
      )}

      {showLoveLetter && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div className="rounded-lg p-6 max-w-sm w-full shadow-lg border max-h-96 overflow-y-auto" style={{ backgroundColor: sectionBg, borderColor: palette.C1D5F0 }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg" style={{ fontFamily: "Quicksand", color: textColor }}>A Letter For You</h3>
              <X size={20} className="cursor-pointer" style={{ color: textColor }} onClick={() => setShowLoveLetter(false)} />
            </div>
            <div className="space-y-3 text-sm leading-relaxed" style={{ fontFamily: "Poppins", color: textColor }}>
              <p>My Dearest,</p>
              <p>I wanted to take a moment to tell you how much you mean to me. Every day with you is a blessing I never take for granted.</p>
              <p>You have brought so much light, love, and laughter into my life. Your smile brightens even my darkest days, and your presence makes everything feel right.</p>
              <p>I promise to stand by you, to support your dreams, and to love you with all my heart. You are my greatest adventure, my safe place, and my forever home.</p>
              <p>Forever yours,</p>
              <p className="font-bold" style={{ fontFamily: "Quicksand", color: palette.A6B5E3 }}>Aley</p>
            </div>
            <button onClick={() => setShowLoveLetter(false)} className="w-full mt-6 px-4 py-2 text-white font-bold rounded-lg text-sm" style={{ backgroundColor: palette.A6B5E3, fontFamily: "Quicksand" }}>Close</button>
          </div>
        </div>
      )}

      <footer className="border-t py-6 mt-12" style={{ borderColor: theme === "dark" ? "#334155" : palette.C1D5F0 }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs" style={{ fontFamily: "Poppins", color: subtextColor }}>
            (made with love) <Heart className="inline-block w-4 h-4 align-text-bottom" style={{ color: palette.A6B5E3 }} />
          </p>
        </div>
      </footer>
    </div>
  );
}
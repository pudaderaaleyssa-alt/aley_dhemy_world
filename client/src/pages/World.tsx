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
  import { useTheme } from "../contexts/ThemeContext";
  import bouquetImg from "../assets/bouquet.png";
  import photo1 from '../assets/picture1.jpeg';
  import photo2 from '../assets/picture2.jpeg';
  import photo3 from '../assets/picture3.jpeg';
  


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
  photo3, // This refers to the import at the top
  photo2, // This refers to the import at the top
];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    const whyILoveYou = [
      "Dhemy's smile and laugh that fills Aley's heart.",
      "Dhemy's kindness and generosity.",
      "Dhemy's cute anger that Aley finds adorable.",
      "Dhemy's unwavering support and belief in Aley.",
      "Dhemy's adventurous spirit and love for exploring life.",
      "Dhemy's ability to make Aley feel safe and loved.",
    ];

    const timeline = [
      { icon: <MessageCircle className="w-5 h-5" />, label: "First Chat", description: "When it all began" },
      { icon: <MapPin className="w-5 h-5" />, label: "First Date", description: "A moment to remember" },
      { icon: <Camera className="w-5 h-5" />, label: "Favorite Memory", description: "Our special moments" },
      { icon: <Heart className="w-5 h-5" />, label: "Today", description: "Forever with you" },
    ];

    const landmarks = [
      { icon: <MessageCircle className="w-5 h-5" />, type: "Beginning", label: "Where Two of them Met", description: "It all began during the first meeting of Unleashed, the school publication. The moment Aley first saw you, you seemed shy—yet somehow intimidating at the same time.Not long after, Aley invited you to join them for pamahaw at Megaworld. The two of you sat side by side, unaware that this simple moment would be the beginning of something more—that one day, you would end up together. " },
      { icon: <MapPin className="w-6 h-6" />, type: "Memory", label: "First Date", description: "Aley and Dhemy’s first date was supposed to be at an art gallery, but things didn’t go as planned—the Orange Project was closed. So instead, the two of them decided to grab a frappe at City Mall. It may not have been the original plan, but it turned out to be even more special. Somewhere between sips and laughter, they held each other’s hands for the very first time." },
      { icon: <Flower2 className="w-6 h-6" />, type: "Present", label: "Today", description: "Today, they continue to grow together, choosing each other every day as they build a healthier and stronger relationship. It hasn’t always been easy—they’ve faced their share of ups and downs—but through it all, they keep trying, keep understanding, and keep holding on." },
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
    
            </button>

          
          </div>
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
              {["To Dhemy, ", "To Sweetie, ", "To Sol, "].map((title, i) => (
                <div key={title} className="rounded-lg p-5 shadow-sm border transition-shadow" style={{ backgroundColor: sectionBg, borderColor: theme === "dark" ? "#334155" : palette.C1D5F0 }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}>
                  <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "Quicksand", color: palette.A6B5E3 }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "Poppins", color: textColor }}>
                    {i === 0 && "May our relationship always feel like home."}
                    {i === 1 && "May we always choose each other, even during difficult times."}
                    {i === 2 && "May our love be as calm as the night and as bright as the stars."}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="relative overflow-hidden rounded-lg shadow-sm h-64 md:h-72" style={{ backgroundColor: theme === "dark" ? "#334155" : palette.D5E3F0 }}>
              <img 
                src={photo1} alt="Romantic background"className="w-full h-full object-cover"/>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-bold text-2xl md:text-3xl text-center mb-8" style={{ fontFamily: "Quicksand", color: textColor }}>
              Reasons why Aley loves Dhemy
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
      Aley's and Dhemy's shared world
    </h2>
    
    <div className="relative max-w-2xl mx-auto px-4">
      {/* The "Constellation" Path (Desktop line) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 opacity-30" 
          style={{ backgroundColor: palette.C1D5F0, backgroundImage: `linear-gradient(to right, ${palette.A6B5E3} 50%, transparent 50%)`, backgroundSize: '20px 1px' }}>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {landmarks.map((landmark, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center group">
            
            {/* Landmark Pin/Icon */}
            <div className="z-10 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform group-hover:scale-110 duration-300" 
                style={{ backgroundColor: palette.A6B5E3, color: palette.EAF9FF, border: `4px solid ${sectionBg}` }}>
              {landmark.icon}
            </div>

            {/* Text Content */}
            <div className="mt-4 rounded-xl p-4 shadow-sm border w-full" 
                style={{ backgroundColor: sectionBg, borderColor: theme === "dark" ? "#334155" : palette.C1D5F0 }}>
              <p className="font-bold text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "Quicksand", color: palette.A6B5E3 }}>
                {landmark.type}
              </p>
              <h3 className="font-bold text-base mb-2" style={{ fontFamily: "Quicksand", color: textColor }}>
                {landmark.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "Poppins", color: textColor, opacity: 0.9 }}>
                {landmark.description}
              </p>
            </div>
            
            {/* Mobile Connector Line */}
            {idx < landmarks.length - 1 && (
              <div className="md:hidden w-0.5 h-8 my-2" style={{ backgroundColor: palette.C1D5F0 }}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
{/* Updated Music Section */}
<section 
  className="grid grid-cols-1 md:grid-cols-5 gap-8 p-6 md:p-10 rounded-2xl border mb-16 transition-all shadow-sm"
  style={{ 
    backgroundColor: sectionBg, 
    borderColor: theme === "dark" ? "#334155" : palette.C1D5F0 
  }}
>
  {/* Left Column: Top Result */}
  <div className="md:col-span-2 flex flex-col">
    <h3 
      className="font-bold text-xl mb-6" 
      style={{ fontFamily: "Quicksand", color: palette.A6B5E3 }}
    >
      Songs that remind Aley of Dhemy
    </h3>
    <div 
      className="group relative transition-all duration-300 p-6 rounded-2xl border flex flex-col items-center text-center md:items-start md:text-left h-full"
      style={{ 
        backgroundColor: palette.EAF9FF, 
        borderColor: palette.BACEF0 
      }}
    >
      <div className="relative w-40 h-40 mb-6 shadow-lg rounded-lg overflow-hidden">
        <img 
          src="https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a1/e8/27/a1e82732-6bc6-c983-f93d-e5734ea3f8a7/5054197482304.jpg/600x600bf-60.jpg" 
          alt="Cover Art" 
          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
           <Headphones className="text-white w-10 h-10" />
        </div>
      </div>
      
      <h4 className="text-2xl font-bold truncate w-full" style={{ fontFamily: "Quicksand", color: textColor }}>
        Our Love Song
      </h4>
      
      <div className="flex items-center gap-2 mt-3">
        <span 
          className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
          style={{ backgroundColor: palette.A6B5E3, color: "#ffffff" }}
        >
          Good Care
        </span>
        <span className="text-sm font-medium" style={{ fontFamily: "Poppins", color: subtextColor }}>
          HYBS, slchld, asiatic. wav
        </span>
      </div>
    </div>
  </div>

  {/* Right Column: Songs List */}
<div className="md:col-span-3 flex flex-col">
  <h3 
    className="font-bold text-xl mb-6" 
    style={{ fontFamily: "Quicksand", color: palette.A6B5E3 }}
  >
    Song List
  </h3>

  <div className="flex flex-col gap-1">
    {[
      { 
        title: "Tip Toe", 
        artist: "HYBS", 
        time: "2:50",
        image: "https://i1.sndcdn.com/artworks-harH1dzydvW0biym-BhcU3Q-t500x500.jpg"
      },
      { 
        title: "Inside Out", 
        artist: "keshi", 
        time: "3:43",
        image: "https://i1.sndcdn.com/artworks-hlvo7oV3yye86koq-6pBhJA-t1080x1080.jpg  "
      },
      { 
        title: "Risk It All", 
        artist: "Bruno Mars", 
        time: "3:03",
        image: "https://i1.sndcdn.com/artworks-1Ia6hO0xopmN-0-t500x500.jpg"
      },
      { 
        title: "8 Letters", 
        artist: "Why Don't We", 
        time: "3:21",
        image: "https://upload.wikimedia.org/wikipedia/en/8/88/Why_Don%27t_We_-_8_Letters.png"
      }
    ].map((song, index) => (
      <div 
        key={index} 
        className="group flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer border border-transparent hover:shadow-sm"
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = palette.D5E3F0;
          e.currentTarget.style.borderColor = palette.C1D5F0;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.borderColor = "transparent";
        }}
      >
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 flex-shrink-0">
            <img 
              src={song.image} 
              alt={song.title} 
              className="w-full h-full rounded-md shadow-sm object-cover"
            />
          </div>

          <div className="flex flex-col max-w-[180px] sm:max-w-xs">
            <span 
              className="font-semibold truncate leading-tight transition-colors" 
              style={{ fontFamily: "Poppins", color: textColor }}
            >
              {song.title}
            </span>
            <span 
              className="text-xs mt-0.5" 
              style={{ fontFamily: "Poppins", color: subtextColor }}
            >
              {song.artist}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span 
            className="text-xs font-medium" 
            style={{ fontFamily: "Poppins", color: subtextColor }}
          >
            {song.time}
          </span>

          <Heart 
            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
            style={{ color: palette.A6B5E3 }} 
          />
        </div>
      </div>
    ))}
  </div>
</div>
</section>

          <section className="mb-16 flex flex-col md:flex-row gap-3 justify-center">
  {[
    { label: "Open Letter", icon: <Mail className="inline-block w-4 h-4 mr-1" />, onClick: () => setShowLoveLetter(true) },
    { label: "Gift", icon: <Gift className="inline-block w-4 h-4 mr-1" />, onClick: () => setShowGift(true) },
    { label: "Spotify", icon: <Headphones className="inline-block w-4 h-4 mr-1" />, onClick: () => window.open("https://open.spotify.com/playlist/7lQG9mTLVNlZCl35KFjtDH?si=h1AVEv7ZQvyT8f7VjHhtFw&pi=OCDGYlfkR-KOY", "_blank") },
  ].map((btn, idx) => (
    <button
      key={idx}
      onClick={btn.onClick}
      className="px-6 py-2.5 text-white font-bold rounded-lg shadow-sm transition-all duration-300 text-sm"
      style={{ backgroundColor: palette.A6B5E3, fontFamily: "Quicksand" }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
      onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {btn.icon} {btn.label}
    </button>
  ))}
</section>
        </main>

        {/* Modals are unchanged except for palette colors */}
        {showGift && (
  <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
    <div className="rounded-lg p-6 max-w-md w-full shadow-lg border" style={{ backgroundColor: sectionBg, borderColor: palette.C1D5F0 }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg" style={{ fontFamily: "Quicksand", color: textColor }}>Flowers for you</h3>
        <X size={20} className="cursor-pointer" style={{ color: textColor }} onClick={() => setShowGift(false)} />
      </div>
      
      <div className="text-center mb-6">
        {/* Bigger bouquet image */}
        <img 
          src={bouquetImg} // <-- replace with your bouquet image URL
          alt="Bouquet Gift" 
          className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-4 object-cover rounded-lg shadow-lg" 
        />
      </div>
      
      <p className="text-center text-sm mb-6" style={{ fontFamily: "Poppins", color: textColor }}>
        I asked Anniecah to draw this ^_^<br />
        I love you always!!
      </p>
      
      <button onClick={() => setShowGift(false)} className="w-full px-4 py-2 text-white font-bold rounded-lg text-sm" style={{ backgroundColor: palette.A6B5E3, fontFamily: "Quicksand" }}>
        Close
      </button>
    </div>
  </div>
)}

        {showLoveLetter && (
          <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
            <div className="rounded-lg p-6 max-w-sm w-full shadow-lg border max-h-96 overflow-y-auto" style={{ backgroundColor: sectionBg, borderColor: palette.C1D5F0 }}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg" style={{ fontFamily: "Quicksand", color: textColor }}>A Letter For Dhemy</h3>
                <X size={20} className="cursor-pointer" style={{ color: textColor }} onClick={() => setShowLoveLetter(false)} />
              </div>
              <div className="space-y-3 text-sm leading-relaxed" style={{ fontFamily: "Poppins", color: textColor }}>
                <p>My Sol,</p>
                <p>I just want to write this letter to tell you that I made this website for you — a small reminder that I still love you and that I am truly sorry.</p>
                <p>I know I haven’t been very affectionate lately and that I’ve been too focused on my own struggles, failing to give you the reassurance you deserve. I realize now that my personal or family issues should not have affected you or our relationship, and I regret that they did.</p>
                <p>Even though I might not always show it, I want you to know that I love you. I might be emotionally unavailable at times, and I know it may have made you feel invalidated, but please know that my feelings for you haven’t changed.</p>
                <p>I hope this website and this letter can remind you that despite my flaws and struggles, my love for you is real and constant.</p>
                <p>With all my heart,</p>
                <p className="font-bold" style={{ fontFamily: "Quicksand", color: palette.A6B5E3 }}>Aley</p>
              </div>
              <button onClick={() => setShowLoveLetter(false)} className="w-full mt-6 px-4 py-2 text-white font-bold rounded-lg text-sm" style={{ backgroundColor: palette.A6B5E3, fontFamily: "Quicksand" }}>Close</button>
            </div>
          </div>
        )}

        <footer className="border-t py-6 mt-12" style={{ borderColor: theme === "dark" ? "#334155" : palette.C1D5F0 }}>
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs" style={{ fontFamily: "Poppins", color: subtextColor }}>
              (Aley & Dhemy) <Heart className="inline-block w-4 h-4 align-text-bottom" style={{ color: palette.A6B5E3 }} />
            </p>
          </div>
        </footer>
      </div>
    );
  }
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";

export default function Landing() {
  const { theme } = useTheme();
  const [, setLocation] = useLocation();
  const noButtonRef = useRef<HTMLButtonElement | null>(null);
  const navigateTimeoutRef = useRef<number | null>(null);
  const [noButtonPos, setNoButtonPos] = useState({ x: 170, y: 0 });
  const [isLoadingLove, setIsLoadingLove] = useState(false);

  const moveNoButton = (nextX: number, nextY: number) => {
    const buttonRect = noButtonRef.current?.getBoundingClientRect();
    const buttonWidth = buttonRect?.width ?? 128;
    const buttonHeight = buttonRect?.height ?? 52;
    const margin = 24;
    const maxX = Math.max(margin, window.innerWidth - buttonWidth - margin);
    const maxY = Math.max(margin, window.innerHeight - buttonHeight - margin);

    setNoButtonPos({
      x: Math.min(Math.max(nextX, margin), maxX),
      y: Math.min(Math.max(nextY, margin), maxY),
    });
  };

  const handleYes = () => {
    if (isLoadingLove) return;

    setIsLoadingLove(true);
    navigateTimeoutRef.current = window.setTimeout(() => {
      setLocation("/world");
    }, 2200);
  };

  const handleNoHover = () => {
    const currentButton = noButtonRef.current;
    if (!currentButton) return;

    const rect = currentButton.getBoundingClientRect();
    const jitter = 40 + Math.random() * 40;
    const horizontalDirection = rect.left < window.innerWidth / 2 ? 1 : -1;
    const verticalDirection = rect.top < window.innerHeight / 2 ? 1 : -1;

    moveNoButton(
      rect.left + horizontalDirection * jitter,
      rect.top + verticalDirection * (jitter * 0.7),
    );
  };

  useEffect(() => {
    const handlePointerMove = (event: MouseEvent) => {
      const currentButton = noButtonRef.current;
      if (!currentButton) return;

      const rect = currentButton.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      const dx = buttonCenterX - event.clientX;
      const dy = buttonCenterY - event.clientY;
      const distance = Math.hypot(dx, dy);
      const dodgeRadius = 130;

      if (distance === 0 || distance > dodgeRadius) return;

      const escapeBoost = ((dodgeRadius - distance) / dodgeRadius) * 110 + 30;
      const jitterX = (Math.random() - 0.5) * 28;
      const jitterY = (Math.random() - 0.5) * 20;

      moveNoButton(
        rect.left + (dx / distance) * escapeBoost + jitterX,
        rect.top + (dy / distance) * escapeBoost + jitterY,
      );
    };

    const handleResize = () => {
      moveNoButton(noButtonPos.x, noButtonPos.y);
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [noButtonPos.x, noButtonPos.y]);

  useEffect(() => {
    return () => {
      if (navigateTimeoutRef.current !== null) {
        window.clearTimeout(navigateTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme === "dark" ? "bg-slate-900" : "bg-slate-50"
      } transition-colors duration-300 relative overflow-hidden`}
    >
      <div className="w-full max-w-lg px-4">
        <div className="text-center">
          <div className="mb-10 rounded-[2rem] border border-sky-100/80 bg-white/85 px-6 py-8 shadow-[0_20px_60px_rgba(125,184,255,0.12)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/85 md:px-8 md:py-8">
            <div
              className="mx-auto mt-1 mb-5 text-slate-600 dark:text-slate-400 text-[11px] leading-5 sm:text-sm sm:leading-6 md:text-sm"
              style={{ fontFamily: "Poppins" }}
            >
              <p className="text-center whitespace-nowrap">Before you proceed to aley &amp; dhemy&apos;s world.</p>
              <p className="mt-0 text-center whitespace-nowrap">I have a question for you</p>
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold leading-[1.15] text-slate-900 dark:text-white"
              style={{ fontFamily: "Quicksand" }}
            >
              Do you still love Aley even tho she always ragebait you??
            </h1>

          </div>

          {isLoadingLove && (
            <div className="mb-8 rounded-2xl border border-sky-200 bg-sky-50/90 px-5 py-5 shadow-[0_12px_30px_rgba(125,184,255,0.18)] dark:border-sky-800 dark:bg-sky-950/60">
              <div className="flex items-center justify-center gap-3">
                <div className="flex gap-1">
                  <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-sky-400 [animation-delay:-0.3s]"></span>
                  <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-sky-400 [animation-delay:-0.15s]"></span>
                  <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-sky-400"></span>
                </div>
                <p
                  className="text-sky-700 dark:text-sky-300 font-bold text-base md:text-lg"
                  style={{ fontFamily: "Quicksand" }}
                >
                  Aley loves you too ^_^
                </p>
              </div>
              <p
                className="mt-3 text-center text-xs text-sky-500 dark:text-sky-300/80"
                style={{ fontFamily: "Poppins" }}
              >
                Loading your world...
              </p>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative h-14">
            <button
              onClick={handleYes}
              disabled={isLoadingLove}
              className="px-8 py-3 bg-sky-400 dark:bg-sky-400 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-sky-500 dark:hover:bg-sky-500 transition-all duration-300 text-base tracking-[0.14em] w-32 disabled:cursor-not-allowed disabled:opacity-80"
              style={{ fontFamily: "Quicksand" }}
            >
              {isLoadingLove ? "LOADING" : "YES"}
            </button>

            <button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              onTouchStart={() => handleNoHover()}
              className="px-8 py-3 bg-slate-300 dark:bg-slate-600 text-slate-900 dark:text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-transform duration-200 text-base tracking-[0.14em] w-32 fixed z-20"
              style={{
                fontFamily: "Quicksand",
                left: `${noButtonPos.x}px`,
                top: `${noButtonPos.y}px`,
              }}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

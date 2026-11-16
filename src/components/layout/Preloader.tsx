import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

const MIN_VISIBLE_MS = 900;
const MAX_WAIT_MS = 15000;

// Full-screen loader that stays up until the page, fonts and 3D assets are ready
const Preloader = () => {
  const { progress, active } = useProgress();
  const [pageLoaded, setPageLoaded] = useState(document.readyState === "complete");
  const [fontsReady, setFontsReady] = useState(false);
  const [minElapsed, setMinElapsed] = useState(false);
  const [settled, setSettled] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!pageLoaded) {
      const onLoad = () => setPageLoaded(true);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, [pageLoaded]);

  useEffect(() => {
    document.fonts.ready.then(() => setFontsReady(true));
    const t1 = setTimeout(() => setMinElapsed(true), MIN_VISIBLE_MS);
    // Allow time for the 3D canvas to start requesting its assets
    const t2 = setTimeout(() => setSettled(true), 1500);
    const t3 = setTimeout(() => setTimedOut(true), MAX_WAIT_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const assetsReady = settled && !active;
  const ready = timedOut || (pageLoaded && fontsReady && minElapsed && assetsReady);

  // Smooth the bar towards the real progress, then fill it when everything is ready
  useEffect(() => {
    const target = ready ? 100 : Math.min(progress, 95);
    const id = setInterval(() => {
      setShown((s) => (s < target ? Math.min(s + 2, target) : s));
    }, 20);
    return () => clearInterval(id);
  }, [progress, ready]);

  useEffect(() => {
    document.body.style.overflow = hidden ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  useEffect(() => {
    if (ready && shown >= 100) {
      const t = setTimeout(() => setHidden(true), 350);
      return () => clearTimeout(t);
    }
  }, [ready, shown]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[2147483000] flex flex-col items-center justify-center bg-[#06110b] px-6 transition-opacity duration-500 ${
        ready && shown >= 100 ? "opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
    >
      <img src="/logo.svg" alt="" className="aura mb-6 h-16 w-16 animate-pulse" />
      <p className="font-display text-gold mb-1 text-[14px] uppercase tracking-[0.3em]">
        Hunter Exam
      </p>
      <p className="font-display mb-6 text-[28px] font-bold uppercase text-white">
        Preparing the site
      </p>
      <div className="h-2 w-full max-w-[320px] overflow-hidden rounded-full border border-[#2c6a45] bg-[#0d1f15]">
        <div
          className="nen-gradient h-full rounded-full transition-[width] duration-100"
          style={{ width: `${shown}%` }}
        />
      </div>
      <p className="font-display text-gon mt-3 text-[13px] tracking-[0.2em]">
        {Math.round(shown)}%
      </p>
    </div>
  );
};

export default Preloader;

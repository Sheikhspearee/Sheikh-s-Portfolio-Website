import { useEffect } from "react";

import {
  About,
  Certifications,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { config } from "./constants/config";
import Preloader from "./components/layout/Preloader";

const App = () => {
  useEffect(() => {
    document.title = config.html.title;
  }, []);

  return (
    <div className="bg-primary relative z-0">
      <Preloader />
      <div className="hero-bg">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Certifications />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <footer className="text-secondary border-t border-[#1c3a29] py-6 text-center text-[13px]">
        © {new Date().getFullYear()} {config.html.fullName} · Hunter x Hunter is
        © Yoshihiro Togashi — this is an unofficial fan-style theme.
      </footer>
    </div>
  );
};

export default App;

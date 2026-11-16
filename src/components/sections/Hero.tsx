import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 top-[120px] z-10 mx-auto max-w-7xl ${styles.paddingX} pointer-events-none flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="aura bg-gon h-5 w-5 rounded-full" />
          <div className="nen-gradient-v h-40 w-1 sm:h-80" />
        </div>

        <div>
          <p className="font-display border-gold text-gold mb-3 inline-block border px-3 py-1 text-[12px] uppercase tracking-[0.25em] sm:text-[14px]">
            {config.hero.tag}
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="nen-text">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <div className="pointer-events-auto mt-6 flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                });
              }}
              className="nen-gradient glow-btn font-display text-primary rounded-md px-6 py-3 font-bold uppercase tracking-wider"
            >
              Get in touch
            </a>
            <a
              href={config.html.resume}
              download
              target="_blank"
              rel="noreferrer"
              className="font-display border-gold text-gold hover:bg-gold hover:text-primary rounded-md border px-6 py-3 font-bold uppercase tracking-wider transition-colors"
            >
              Download resume
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-32 z-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-gon flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-gon mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

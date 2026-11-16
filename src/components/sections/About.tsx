import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { nenTypes } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import type { TNenType } from "../../types";

const NenCard: React.FC<TNenType & { index: number }> = ({
  index,
  title,
  role,
  icon,
  blurb,
}) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    glareColor="#3fcf6a"
  >
    <div className="xs:w-[250px] w-full max-w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="nen-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-8 py-5">
          <span className="text-[56px]">{icon}</span>
          <div className="text-center">
            <h3 className="font-display text-gold text-[24px] font-bold uppercase">
              {title}
            </h3>
            <p className="text-gon text-[14px] font-semibold">{role}</p>
            <p className="text-secondary mt-2 text-[13px]">{blurb}</p>
          </div>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const LicenseCard = () => (
  <motion.div variants={fadeIn("left", "spring", 0.2, 0.9)} className="w-full max-w-[380px]">
    <Tilt
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      glareEnable
      glareMaxOpacity={0.25}
      glareColor="#f5c542"
      glareBorderRadius="16px"
      scale={1.02}
      transitionSpeed={1500}
    >
      <div className="license-card shimmer aura shadow-card relative w-full overflow-hidden rounded-2xl p-5">
        <div className="font-display text-gold flex items-center justify-between text-[13px] uppercase tracking-[0.2em]">
          <span>Hunter License</span>
          <span>◆ Pro</span>
        </div>
        <div className="mt-4 aspect-[3/4] w-full overflow-hidden rounded-lg border border-[#2c6a45]">
          <img
            src={config.html.photo}
            alt={config.html.fullName}
            className="h-full w-full object-cover object-[center_25%]"
          />
        </div>
        <div className="mt-4 space-y-1 text-[14px]">
          <p className="font-display text-[22px] font-bold uppercase text-white">
            {config.html.fullName}
          </p>
          <p className="text-secondary">
            Class: <span className="text-white">Full-Stack Developer</span>
          </p>
          <p className="text-secondary">
            Specialty: <span className="text-white">Java · Web · Cloud · Releases</span>
          </p>
          <p className="text-secondary">
            Base: <span className="text-white">Johannesburg, ZA</span>
          </p>
        </div>
        <div className="font-display text-gon mt-4 border-t border-dashed border-[#2c6a45] pt-3 text-[12px] tracking-[0.3em]">
          NO. 0736-925-330
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const stats = [
  { value: "1+", label: "Year of hands-on development work" },
  { value: "5", label: "Areas covered: frontend, backend, cloud, releases, support" },
  { value: "4", label: "Languages in daily use: Java, JavaScript, TypeScript, Python" },
];

const About = () => (
  <>
    <Header useMotion={true} {...config.sections.about} />

    <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-start">
      <div className="flex-1">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.about.content}
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-tertiary rounded-xl border border-[#1c3a29] p-4"
            >
              <p className="font-display nen-text text-[36px] font-bold">
                {s.value}
              </p>
              <p className="text-secondary text-[13px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <LicenseCard />
    </div>

    <p className="font-display text-gold mt-16 text-[18px] uppercase tracking-[0.2em]">
      Nen type · my focus areas
    </p>
    <div className="mt-6 flex flex-wrap gap-10 max-sm:justify-center">
      {nenTypes.map((t, index) => (
        <NenCard key={t.title} index={index} {...t} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");

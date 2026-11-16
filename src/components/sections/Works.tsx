import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import type { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  icon,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      glareColor="#3fcf6a"
    >
      <div className="bg-tertiary w-full rounded-2xl border border-[#1c3a29] p-5 sm:w-[340px]">
        <div className="relative flex h-[160px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#123d25] via-[#0a1710] to-[#3a2f0a]">
          <span className="text-[64px]">{icon}</span>
          <span className="font-display text-gold absolute left-3 top-3 text-[12px] uppercase tracking-[0.25em]">
            Hunt #{index + 1}
          </span>
        </div>
        <div className="mt-5">
          <h3 className="text-[22px] font-bold text-white">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => (
  <>
    <Header useMotion={true} {...config.sections.works} />

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
    >
      {config.sections.works.content}
    </motion.p>

    <div className="mt-16 flex flex-wrap gap-7 max-sm:justify-center">
      {projects.map((project, index) => (
        <ProjectCard key={project.name} index={index} {...project} />
      ))}
    </div>

    <div className="bg-tertiary mt-14 flex flex-col items-start gap-4 rounded-2xl border border-[#1c3a29] p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-display text-[22px] font-bold text-white">
          More hunts on GitHub
        </h3>
        <p className="text-secondary text-[14px]">
          Python · Java · JavaScript — backend, web and cloud work.
        </p>
      </div>
      <a
        href={config.html.github}
        target="_blank"
        rel="noreferrer"
        className="nen-gradient glow-btn font-display text-primary rounded-md px-6 py-3 font-bold uppercase tracking-wider"
      >
        Visit my GitHub
      </a>
    </div>
  </>
);

export default SectionWrapper(Works, "hunts");

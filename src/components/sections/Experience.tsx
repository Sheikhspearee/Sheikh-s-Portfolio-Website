import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import type { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#0e1f16",
      color: "#fff",
      border: "1px solid #1c3a29",
    }}
    contentArrowStyle={{ borderRight: "7px solid #1c3a29" }}
    date={experience.date}
    dateClassName="!text-secondary"
    iconStyle={{ background: experience.iconBg, boxShadow: "0 0 0 4px #3fcf6a" }}
    icon={
      <div className="font-display flex h-full w-full flex-col items-center justify-center text-center text-[11px] font-bold uppercase leading-tight text-white">
        {experience.stage.split(" ").map((w) => (
          <span key={w} className="block">
            {w}
          </span>
        ))}
      </div>
    }
  >
    <div>
      <p className="font-display text-gold text-[13px] uppercase tracking-[0.2em]">
        {experience.stage}
      </p>
      <h3 className="text-[22px] font-bold text-white">{experience.title}</h3>
      <p
        className="text-gon text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.companyName}
      </p>
    </div>

    <ul className="ml-5 mt-5 list-disc space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 pl-1 text-[14px] tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <Header useMotion={true} {...config.sections.experience} />

    <div className="timeline-hxh mt-20 flex flex-col">
      <VerticalTimeline lineColor="#2c6a45">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "exam");

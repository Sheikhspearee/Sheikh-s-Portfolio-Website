import { SectionWrapper } from "../../hoc";
import { nenOrbs, otherSkills } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const suits = ["♠", "♥", "♦", "♣"];

const icons: Record<string, string> = {
  Java: "java",
  "Spring Boot": "spring",
  React: "react",
  Angular: "angular",
  "Node.js": "nodejs",
  JavaScript: "javascript",
  TypeScript: "typescript",
  SQL: "sql",
  Python: "python",
  "AWS Cloud": "aws",
  Docker: "docker",
  Kubernetes: "kubernetes",
  Git: "git",
};

const Tech = () => (
  <>
    <Header useMotion={true} {...config.sections.tech} />

    <div className="mt-16 flex flex-row flex-wrap justify-center gap-6">
      {nenOrbs.map((orb, i) => {
        const suit = suits[i % suits.length];
        const red = suit === "♥" || suit === "♦";
        return (
          <div
            key={orb.name}
            className="skill-card shadow-card relative flex h-[190px] w-[136px] flex-col items-center justify-between rounded-xl p-3"
            style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3))}deg)` }}
          >
            <span className={`self-start text-[20px] leading-none ${red ? "text-[#e0245e]" : "text-gold"}`}>
              {suit}
            </span>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-[64px] w-[64px] items-center justify-center rounded-xl bg-white/90 p-2">
                <img
                  src={`/tech/${icons[orb.name]}.svg`}
                  alt={orb.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="font-display text-secondary mt-3 text-[13px] uppercase tracking-wider">
                {orb.name}
              </p>
            </div>
            <span className={`rotate-180 self-end text-[20px] leading-none ${red ? "text-[#e0245e]" : "text-gold"}`}>
              {suit}
            </span>
          </div>
        );
      })}
    </div>

    <div className="mt-12 flex flex-wrap justify-center gap-3">
      {otherSkills.map((skill) => (
        <span
          key={skill}
          className="text-gon rounded-full border border-[#2c6a45] bg-tertiary px-4 py-1 text-[13px]"
        >
          {skill}
        </span>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "nen");

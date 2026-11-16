import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { certifications, education } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Certifications = () => (
  <>
    <Header useMotion={true} {...config.sections.certifications} />

    <div className="mt-12 grid gap-4 md:grid-cols-2">
      {certifications.map((cert, index) => {
        const done = cert.status === "completed";
        return (
          <motion.div
            key={cert.name}
            variants={fadeIn("up", "spring", index * 0.2, 0.7)}
            className={`bg-tertiary flex items-start gap-4 rounded-xl border p-4 ${
              done ? "border-gon" : "border-gold border-dashed"
            }`}
          >
            <span className="text-[28px]">{done ? "🏅" : "⏳"}</span>
            <div>
              <p className="font-semibold text-white">{cert.name}</p>
              <p
                className={`font-display text-[12px] uppercase tracking-[0.2em] ${
                  done ? "text-gon" : "text-gold"
                }`}
              >
                {done
                  ? "License acquired"
                  : cert.status === "scheduled"
                    ? "Exam scheduled"
                    : "Exam in progress"}
                {cert.note ? ` · ${cert.note}` : ""}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>

    <h3 className="font-display text-gold mt-16 text-[18px] uppercase tracking-[0.2em]">
      Education
    </h3>
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {education.map((e) => (
        <div
          key={e.title}
          className="bg-tertiary rounded-xl border border-[#1c3a29] p-5"
        >
          <p className="text-[18px] font-bold text-white">{e.title}</p>
          <p className="text-gon">{e.place}</p>
          <p className="text-secondary text-[13px]">{e.date}</p>
        </div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Certifications, "certs");

import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const { html } = config;

const contactItems = [
  { label: "Email", value: html.email, href: `mailto:${html.email}`, icon: "✉️" },
  { label: "Phone", value: html.phoneDisplay, href: `tel:${html.phone}`, icon: "📞" },
  { label: "LinkedIn", value: "Connect with me", href: html.linkedin, icon: "🔗" },
  { label: "GitHub", value: "Sheikhspearee", href: html.github, icon: "💻" },
  { label: "Location", value: html.location, icon: "📍" },
];

const Contact = () => (
  <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="bg-black-100 flex-[0.75] rounded-2xl border border-[#1c3a29] p-8"
    >
      <Header useMotion={false} {...config.sections.contact} />
      <p className="text-secondary mt-4 text-[16px] leading-[28px]">
        {config.sections.contact.content}
      </p>

      <ul className="mt-8 flex flex-col gap-5">
        {contactItems.map((item) => (
          <li key={item.label} className="flex items-center gap-4">
            <span className="bg-tertiary flex h-12 w-12 items-center justify-center rounded-lg border border-[#2c6a45] text-[20px]">
              {item.icon}
            </span>
            <div>
              <p className="font-display text-gold text-[12px] uppercase tracking-[0.2em]">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="hover:text-gon font-medium text-white"
                >
                  {item.value}
                </a>
              ) : (
                <span className="font-medium text-white">{item.value}</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <a
        href={config.html.resume}
        download
        target="_blank"
        rel="noreferrer"
        className="nen-gradient glow-btn font-display text-primary mt-8 inline-block rounded-md px-6 py-3 font-bold uppercase tracking-wider"
      >
        Download resume
      </a>
    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
    >
      <EarthCanvas />
    </motion.div>
  </div>
);

export default SectionWrapper(Contact, "contact");

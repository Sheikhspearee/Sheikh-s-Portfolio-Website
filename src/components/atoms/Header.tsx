import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { textVariant } from "../../utils/motion";

interface IHeader {
  useMotion: boolean;
  p: string;
  h2: string;
}

export const Header: React.FC<IHeader> = ({ useMotion, p, h2 }) => {
  const content = (
    <>
      <p className={styles.sectionSubText}>{p}</p>
      <h2 className={styles.sectionHeadText}>
        {h2.replace(/\.$/, "")}
        <span className="text-gon">.</span>
      </h2>
    </>
  );

  return useMotion ? (
    <motion.div variants={textVariant()}>{content}</motion.div>
  ) : (
    content
  );
};

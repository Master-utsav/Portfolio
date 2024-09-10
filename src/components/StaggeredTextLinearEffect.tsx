import { motion } from "framer-motion";
import React from "react";

interface StaggeredTextLinearEffectProps{
  text: string
}

const StaggeredTextLinearEffect: React.FC<StaggeredTextLinearEffectProps> = ({text}) => {

  const textArray = text.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className={char === " " ? "whitespace-pre" : ""}
    >
      {char}
    </motion.span>
  ));

  return (
    <>
      {textArray}
    </>
  );
};

export default StaggeredTextLinearEffect;

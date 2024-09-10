import { motion } from "framer-motion";
import React from "react";

const text = "UTSAV";

const StaggeredBlurText: React.FC = () => {
  // Split text into individual letters and span elements
  const textArray = text.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, scale: 1.5, filter: "blur(2px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0)",}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={char === " " ? "whitespace-pre" : ""}
    >
      {char}
    </motion.span>
  ));

  return (
    <a href="/" className='text-neutral-400 font-bold sm:text-2xl text-xl hover:text-white transition-colors'>
          {textArray}
    </a>
  );
};

export default StaggeredBlurText;

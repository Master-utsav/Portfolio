import { motion } from "framer-motion";
import React from "react";

const text = "Hi, I am UTSAV ";

const StaggeredText: React.FC = () => {
  // Split text into individual letters and span elements
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
    <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
      {textArray}
      <motion.span
        initial={{ opacity: 0, scale: 0}}
        animate={{ opacity: 1,  scale: 1}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1.8 }}
        className="waving-hand inline-block relative"
      >
        👋
      </motion.span>
    </p>
  );
};

export default StaggeredText;

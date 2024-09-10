import { motion } from 'framer-motion';

interface TextBoxBounceEffectProps {
  text: string;
}

const TextBoxBounceEffect: React.FC<TextBoxBounceEffectProps> = ({ text }) => {
  const textAlpha = text.split("");

  return (
    
      textAlpha.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1, rotate: 45, y: index % 2 === 0 ? -80 : 80 }} // Even comes from top, odd from bottom
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{  
            type: "spring", 
            stiffness: 100, 
            damping: 1, 
            mass: 0.1, 
            delay: 0.5 + index * 0.1, }}
          className="inline-block hero_tag text-gray_gradient"
        >
          {char === " " ? "\u00A0" : char} 
        </motion.span>
      ))
  );
};

export default TextBoxBounceEffect;

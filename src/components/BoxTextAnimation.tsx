import { motion } from "framer-motion";

interface BoxAnimationTextProps {
    text: string;
  }
const BoxAnimationText: React.FC<BoxAnimationTextProps> = (props) => {
  return (
     <div className="lg:h-[80px] h-[90px] sm:h-[60px] md:h-[80px] mx-auto overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeIn" , delay:1}}
        className="hero_tag text-gray_gradient relative"
      >
       { props.text}
      </motion.p>

     </div>
  );
};

export default BoxAnimationText;
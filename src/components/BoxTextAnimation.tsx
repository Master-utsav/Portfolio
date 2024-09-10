import { motion } from "framer-motion";

interface BoxAnimationTextProps {
    text: string;
  }
const BoxAnimationText: React.FC<BoxAnimationTextProps> = (props) => {
  return (
     <div className="h-auto mx-auto overflow-hidden">
      {/* lg:h-[80px] h-[40px] sm:h-[60px] md:h-[50px]  */}
      <motion.p
        initial={{ opacity: 0, rotateX: 0}}
        animate={{ opacity: 1, rotateX : 360}}
        transition={{ duration: 0.2, ease: "easeIn" , delay:1}}
        className="hero_tag text-gray_gradient relative"
      >
       { props.text}
      </motion.p>

     </div>
  );
};

export default BoxAnimationText;
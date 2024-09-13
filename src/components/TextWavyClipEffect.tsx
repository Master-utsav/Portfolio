import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface HoverEffectWrapperProps {
  text: string;
}

const TextWavyClipEffect: React.FC<HoverEffectWrapperProps> = ({ text}) => {
  const maskRef = useRef<HTMLSpanElement | null>(null);
  const para = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    
    if (para.current) {
        gsap.fromTo(para.current, 
            { opacity: 0 },  
            { opacity: 1, delay: 0.7, ease: "none" }  
        );
    }

    if (maskRef.current) {
      const mask = maskRef.current;

      gsap.set(mask, { 
        position: "absolute", 
        height: "1%",
        width: "110%", 
        rotate: "0deg",
        x: "0%", 
        y: "0%", 
        left: "0%", 
        right: "0%",
        bottom: "0%",
        overflow: "hidden",
        backgroundColor: "#000",
        transformOrigin: "top left",
        zIndex: 1 
      });
      gsap.fromTo(mask, { 
            y: "0%",
            height: "150%",
            rotate: "10deg",
            duration : 3,
            ease: "none"
       }, {
            y: "-100%",
            height: "0%",
            rotate: "-10deg", 
            duration: 3, 
             ease: "none"
       })
    }
},[]);
  
  return (
    <>
      <span className="hidden mask sm:block -z-10" ref={maskRef}></span>
      <h2 ref={para} className="inline-block hero_tag text-gray_gradient">
        {text}
      </h2>
    </>
  );
};

export default TextWavyClipEffect;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface HoverEffectWrapperProps {
  text: string;
  isHovered: boolean;
}

const TextHoverLinearClipEffect: React.FC<HoverEffectWrapperProps> = ({ text, isHovered }) => {
  const maskRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (maskRef.current) {
      const mask = maskRef.current;

      gsap.set(mask, { 
        position: "absolute", 
        width: "200%", 
        height: "200%", 
        x: "0%", 
        y: "100%",
        top: "-50%", 
        left: "-50%", 
        backgroundColor: "#000", 
        transformOrigin: "bottom left", 
        zIndex: 1
      });
  
      // Initial setup for the animation
      gsap.set(".mask", { 
        
      });

      if (isHovered) {
        gsap.to(mask, { 
          x: "0%", 
          y: "-100%", 
          duration: 0.5, 
          ease: "power2.out" 
        });
      } else {
        gsap.to(mask, { 
          x: "0%", 
          y: "100%", 
          duration: 0.5, 
          ease: "power2.out" 
        });
      }
    }
  }, [isHovered]);
  
  return (
    <>
      <span className="hidden mask sm:block z-50" ref={maskRef}></span>
      {text}
    </>
  );
};

export default TextHoverLinearClipEffect;

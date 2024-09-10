import { useEffect } from "react";
import gsap from "gsap";
import { navLinks } from "@/constants/index";

const NavItems: React.FC = () => {
  useEffect(() => {
    const masks = document.querySelectorAll(".mask");

    gsap.set(".nav-li", { position: "relative", overflow: "hidden" });
    gsap.set(masks, { 
      position: "absolute", 
      width: "200%", 
      height: "200%", 
      top: "-50%", 
      left: "-50%", 
      backgroundColor: "#000", 
      transformOrigin: "bottom left", 
      zIndex: 1 
    });

    // Initial setup for the animation
    gsap.set(".mask", { 
      x: "0%", 
      y: "100%" 
    });

    document.querySelectorAll(".nav-li").forEach(item => {
      item.addEventListener("mouseenter", () => {
        const mask = item.querySelector(".mask");
        if (mask) {
          gsap.to(mask, { 
            x: "0%", 
            y: "-100%", 
            duration: 0.5, 
            ease: "power2.out"
          });
        }
      });
      
      item.addEventListener("mouseleave", () => {
        const mask = item.querySelector(".mask");
        if (mask) {
          gsap.to(mask, { 
            x: "0%", 
            y: "100%", 
            duration: 0.5, 
            ease: "power2.out"
          });
        }
      });
    });

  }, []);

  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li className="nav-li" key={item.id}>
          <a href={item.href} className="nav-li_a">
            <span className="hidden mask sm:block"></span>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;

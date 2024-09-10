import React, { useState } from "react";
// import TextHoverLinearClipEffect from "./TextHoverLinearClipEffect";
import { navLinks } from "@/constants/index";
import TextHoverWavyClipEffect from "./TextHoverWavyClipEffect";

const NavItems: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li
          className="nav-li"
          key={item.id}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
        <a href={item.href} className="nav-li_a z-10">
          <TextHoverWavyClipEffect text={`${item.name}`} isHovered={hoveredId === item.id} />
        </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;

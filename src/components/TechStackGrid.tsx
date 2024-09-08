import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

// Helper function to preload images
const preloadImages = (imageUrls: string[]) => {
  return Promise.all(
    imageUrls.map((url: string) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      })
    )
  );
};

const TechStackGrid = () => {
    const techStacks = React.useMemo(() => [
        {
          title: 'Frontend Stack ',
          description: 'Expert in building dynamic and responsive web interfaces using Next.js, React, TypeScript, and Tailwind CSS. Skilled in creating animations and interactive elements with Framer Motion and Three.js.',
          image: 'assets/frontend_tech_stack.png',
        },
        {
          title: 'Backend Stack',
          description: 'Proficient in server-side development with Node.js and Express. Experienced in managing databases with MongoDB and PostgreSQL, and optimizing performance with Redis and Docker.',
          image: 'assets/backend_tech_stack.png',
        },
        {
          title: 'Cross-platform Mobile Stack',
          description: 'Developing mobile applications with Expo and React Native, utilizing Supabase for backend services, MongoDB for data management, Express for server-side operations, and Redux for state management.',
          image: 'assets/mobile_tech_stack.png',
        },
        {
          title: 'Web3 Technologies',
          description: 'Building decentralized applications with React, Next.js, and TypeScript, while leveraging Solidity for smart contracts, TailwindCSS for styling, and Rust for performance and security.',
          image: 'assets/web3_tech_stack.png',
        },
        {
          title: `Software's & Tools`,
          description: 'Proficient in Blender for 3D modeling, Premiere Pro for video editing, Photoshop for graphic design, Notion for organization, Postman for API testing, and GitHub for version control.',
          image: 'assets/software_tools_tech_stack.png',
        },
      ], []);

  const [currentTech, setCurrentTech] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const imageUrls = techStacks.map((tech) => tech.image);
    preloadImages(imageUrls)
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error('Error preloading images:', err));

    const interval = setInterval(() => {
      setCurrentTech((prevTech) => (prevTech + 1) % techStacks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [techStacks]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="grid-container overflow-hidden min-h-[580px] relative block">
      <AnimatePresence>
        {imagesLoaded && (
          <motion.div
            key={currentTech}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-2 flex flex-col items-center justify-start"
          >
            <motion.div
              className="image-container"
              variants={imageVariants}
              transition={{ duration: 0.6 }}
            >
              <img
                src={techStacks[currentTech].image}
                alt={techStacks[currentTech].title}
                className="w-full lg:h-[450px] h-[350px] xl:h-auto object-contain"
              />
            </motion.div>
            <motion.div
              className="space-y-2"
              variants={textVariants}
              transition={{ duration: 0.6 }}
            >
              <p className="grid-headtext text-center">{techStacks[currentTech].title}</p>
              <p className="grid-subtext text-center">{techStacks[currentTech].description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechStackGrid;

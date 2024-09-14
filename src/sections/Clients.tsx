/* eslint-disable react-hooks/exhaustive-deps */
import  { useState, useEffect } from 'react';
import { clientReviews } from '../constants/index.js';
import { motion, useAnimation } from 'framer-motion';

const Clients = () => {
  const controls = useAnimation(); // Controls for manual animation handling
  const [isHovered, setIsHovered] = useState(false);

  const startScrolling = async () => {
    await controls.start({
      x: '-100%',
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 20, 
        },
      },
    });
  };

  useEffect(() => {
    if (isHovered) {
      controls.stop(); 
    } else {
      startScrolling(); 
    }
  }, [isHovered]);

  return (
    <section className="c-space my-20 relative">
      <h3 className="head-text">What my Clients say</h3>

      <div
        className="client-container relative md:h-[30vh] h-[50vh] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-[10%] pointer-events-none bg-gradient-to-r from-black to-transparent z-10" />

        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-[10%] pointer-events-none bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-8 md:w-[40%] w-[90%] relative"
          animate={controls} 
        >
          {clientReviews.map((item) => (
            <div
              key={`review-${item.id}`}
              className="client-review flex-shrink-0 flex  items-center overflow-hidden w-[100%]"
            >
              <div>
                <p className="text-white-800 font-light">{item.review}</p>
                <div className="client-content">
                  <div className="flex gap-3">
                    <img
                      src={item.img}
                      alt="reviewer"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-white-800">{item.name}</p>
                      <p className="text-white-500 md:text-base text-sm font-light">
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex self-end items-center gap-2 h-auto">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <img
                        key={index}
                        src="/assets/star.png"
                        alt="star"
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate client reviews to create an infinite scroll effect */}
          {clientReviews.map((item) => (
            <div
              key={`review-duplicate-${item.id}`}
              className="client-review flex-shrink-0 flex items-center overflow-hidden"
            >
              <div>
                <p className="text-white-800 font-light">{item.review}</p>
                <div className="client-content">
                  <div className="flex gap-3">
                    <img
                      src={item.img}
                      alt="reviewer"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-white-800">{item.name}</p>
                      <p className="text-white-500 md:text-base text-sm font-light">
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex self-end items-center gap-2 h-auto">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <img
                        key={index}
                        src="/assets/star.png"
                        alt="star"
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

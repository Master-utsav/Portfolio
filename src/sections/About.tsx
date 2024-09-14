import {useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
// import { useInView } from 'react-intersection-observer';
// import LocationIcon from '@/components/LocationIcon';
import Button from '../components/Button.jsx';
import TechStackGrid from '@/components/TechStackGrid';
import { useInView } from 'react-intersection-observer';
import { SparklesCore } from '@/components/Sparkles.js';
// import { Canvas } from '@react-three/fiber';
// import { PerspectiveCamera } from '@react-three/drei';
// import * as THREE from 'three';
// import { Leva, useControls } from 'leva';

// Function to convert lat/lng to Three.js coordinates on a sphere
// const latLngToPosition = (lat:number, lng:number, radius:number) => {
//   const phi = (90 - lat) * (Math.PI / 180);
//   const theta = (lng + 180) * (Math.PI / 180);

//   const x = -(radius * Math.sin(phi) * Math.cos(theta));
//   const z = radius * Math.sin(phi) * Math.sin(theta);
//   const y = radius * Math.cos(phi);

//   return new THREE.Vector3(x, y, z);
// };

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef = useRef<any>(null); // Using `any` as the type for the globe instance
//   const [iconVisible, setIconVisible] = useState(false); 
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation happens once
    threshold: 0.5, // Trigger when half of the globe is visible
  });

  const handleCopy = () => {
    navigator.clipboard.writeText('https://www.linkedin.com/in/master-utsav/');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  // Trigger the icon animation when the globe is in view
//   useEffect(() => {
//     if (inView) {
//       setIconVisible(true);
//     }
//   }, [inView]);

  // Set the globe radius and position the icon accordingly
//   const globeRadius = 10;
//   const locationPosition = latLngToPosition(22.719568, 75.857727, globeRadius);
   
   useEffect(() => {
    if (inView && globeRef.current) {
      const globe = globeRef.current;

      // Center the globe on the target position
      globe.controls().autoRotate = true; // Disable auto-rotation
      globe.controls().enableZoom = true; // Optionally disable zoom
    //   globe.controls().
    }
  }, [inView]);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-4 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Utsav Jaiswal</p>
              <p className="grid-subtext">
              {"I’m a full-stack developer with expertise in "}<span className='font-bold'>MERN</span>, <span className='font-bold'>Next.js</span>, and <span className='font-bold'>React Native</span>.{" From web to mobile apps, I create seamless experiences across platforms. Currently, I’m diving into "}<span className='font-bold'>Web3</span>{" to unlock the future of decentralized apps. Stay tuned!"}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <TechStackGrid />
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div ref={ref} className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center relative">
              <Globe
                ref={globeRef}
                height={380}
                width={380}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 22.719568, lng: 75.857727, text: 'Master Utsav', color: 'red', size: 800 , labelTypeFace: 'top' ,}]}

              />
              {/* {iconVisible && (
                <Canvas>
                  <PerspectiveCamera makeDefault position={[0, 0, 350]} />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[5, 5, 5]} />
                  <LocationIcon position={locationPosition} scale={[5, 5, 5]} />
                </Canvas>
              )} */}
            </div>
            <div className='z-1 '>
                <p className="grid-headtext">Building Your Projects Remotely</p>
                <p className="grid-subtext">
                Based in Indore, India, but distance is no barrier. I collaborate with clients globally, delivering top-tier projects wherever you are. Let’s turn your ideas into reality, no matter the location.
                </p>
                <div className="relative w-full z-10  mt-4">
                    <a href="#contact" className="w-fit">
                    <Button name="Contact me" isBeam containerClass=" w-full font-generalsans"/>
                    <div className=" h-40 absolute left-0 right-0 w-full -z-10 c-space ">
                    {/* Gradients */}
                    <div className="absolute left-[10%] right-[10%] top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute left-[10%] right-[10%] top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute left-[40%] right-[40%]  top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute left-[40%] right-[40%] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={1200}
                      className="w-full h-full -z-10"
                      particleColor="#FFFFFF"
                    />
            
                    <div className="absolute inset-0 w-full h-fit -z-10 bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                  </div>
                  </a>
                  <div className="mt-2 sm:mt-0 text-center z-20">
                      <p className="text-lg font-semibold mt-4 text-white/90">What Clients Say:</p>
                      <blockquote className="italic text-gray-400">
                      "Utsav has been a game-changer for our projects. His remote collaboration was seamless, and his expertise brought our ideas to life with precision and creativity. Highly recommend!"
                      </blockquote>
                      <a href="https://www.linkedin.com/in/master-utsav/" className="mt-6 text-blue-200 text-sm font-generalsans">Ready to start your project? Reach out today and let's make it happen!</a>
                  </div>
                </div>
                
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/language_tech_stack.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
            <p className="grid-headtext">Mastering the Art of Code</p>
            <p className="grid-subtext">
            From JavaScript and TypeScript to C++ and Rust, my passion for programming fuels my journey through a diverse landscape of technologies. Whether it’s crafting efficient algorithms in C, developing smart contracts with Solidity, or building dynamic applications in TypeScript, I’m driven by the challenge of mastering new languages and pushing the boundaries of what’s possible.
            </p>

            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white font-generalsans"><a href='https://www.linkedin.com/in/master-utsav/'>Master_Utsav</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
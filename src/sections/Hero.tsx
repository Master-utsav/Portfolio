import React from "react";
import CanvasLoader from "@/components/CanvasLoader";
import HackerRoom from "@/components/HackerRoom";
import ReactLogo from "@/components/ReactLogo";
import Target from "@/components/Target";
import { calculateSizes } from "@/constants";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import Cube from "@/components/Cube";
import Rings from "@/components/Rings";
import HeroCamera from "@/components/HeroCamera";
import Button from "@/components/Button";
import { SparklesCore } from "@/components/Sparkles";
import StaggeredTextLinearEffect from "@/components/StaggeredTextLinearEffect";
import { motion } from "framer-motion";
import TextWavyClipEffect from "@/components/TextWavyClipEffect";
import MongoDB from "@/components/MongoDB";
import TypeScript from "@/components/TypeScript";

const Hero = () => {
  // const room = useControls("HackerRoom", {
  //   scale:{
  //     value: 0.01,
  //     min: 0.01,
  //     max: 10
  //   },
  //   positionX:{
  //     value: 2.5,
  //     min: -20,
  //     max: 20
  //   },
  //   positionY:{
  //     value: 2.5,
  //     min: -20,
  //     max: 20
  //   },
  //   positionZ:{
  //     value: 2.5,
  //     min: -20,
  //     max: 20
  //   },
  //   rotationX:{
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY:{
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ:{
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   }
  // });
const isSmall = useMediaQuery({ maxWidth: 440 });
const isMobile = useMediaQuery({ maxWidth: 768 });
const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

const sizes = calculateSizes(isSmall, isMobile, isTablet);

return (
    <section id="home" className="min-h-screen w-full flex-col relative">
      <div  className="w-full mx-auto flex flex-col sm:mt-24 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
        <StaggeredTextLinearEffect text="Hi, I am UTSAV "/>
          <motion.span
          initial={{ opacity: 0, scale: 0}}
          animate={{ opacity: 1,  scale: 1}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.8 }}
          className="waving-hand inline-block relative"
          >
          👋
          </motion.span>
        </p>
        <div className="h-auto mx-auto overflow-hidden z-10 relative">
          {/* <TextBoxBounceEffect text="Let me build it for you..." /> */}
          <TextWavyClipEffect text="Let me build it for you..." />
       
        </div>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva/> */}
        <Canvas className="h-full w-full">
          <React.Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            {/* <HackerRoom
            // scale={room.scale}
            // position={[room.positionX, room.positionY, room.positionZ]}
            // rotation={[room.rotationX, room.rotationY, room.rotationZ]} 
            /> */}
            <HeroCamera isMobile={isMobile}>
             <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition as [number, number, number]} rotation={[0.2, -Math.PI, 0]} />
            </HeroCamera>
             <group>
                <Target position={sizes.targetPosition  as [number, number, number]}/>
                <ReactLogo position={sizes.reactLogoPosition as [number , number , number]}/>
                <Cube position={sizes.cubePosition}/>
                <Rings position={sizes.ringPosition}/>
                <MongoDB position={sizes.mongodbPosition as [number , number , number]} scale={0.1} />
                <TypeScript position={sizes.typescriptPosition as [number , number , number]} scale={0.12} />
                {/* <TypeScript position={[room.positionX, room.positionY, room.positionZ]} rotation={[room.rotationX, room.rotationY, room.rotationZ]} scale={room.scale}/> */}
                {/* <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} /> */}
             </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </React.Suspense>
        </Canvas>
      </div>
      <div className="absolute sm:bottom-20 bottom-24 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
        <Button name="let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        <div className=" h-40 absolute sm:-bottom-30 -bottom-40 left-0 right-0 w-full -z-10 c-space ">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute left-[40%] right-[40%]  top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      </a>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { useGLTF, PerspectiveCamera, useTexture, Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TypeScript: React.FC<JSX.IntrinsicElements["group"]> = (props) => {
  const { nodes, materials } = useGLTF("/models/ts.glb");
  const texture = useTexture("/textures/white.jpg");
  const textureBack = useTexture("/textures/blue.jpg");

  const typescriptRef = React.useRef<THREE.Group>(null);
  const [hovered, setHovered] = React.useState(false);

  // GSAP animation for flipping
  useGSAP(() => {
    if (typescriptRef.current) {
      gsap.to(typescriptRef.current.rotation, {
        y: hovered ? Math.PI * 2 : 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          if (hovered && typescriptRef.current) {
            gsap.to(typescriptRef.current.rotation, {
              y: 0,
              duration: 1,
              ease: "power2.inOut",
            });
          }
        },
      });
    }
  }, [hovered]);

  return (
    <Float floatIntensity={0.02}>
      <group
      {...props}
      dispose={null}
      ref={typescriptRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <PerspectiveCamera
        makeDefault={false}
        far={10000}
        near={0.001}
        fov={54.432}
        position={[0, 0, 274.084]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.LOGO as THREE.Mesh).geometry}
        material={materials.logo}
        position={[0.534, -0.996, 0.644]}
      >
        <meshMatcapMaterial map={texture} toneMapped={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.back as THREE.Mesh).geometry}
        material={materials.back}
      >
        <meshMatcapMaterial map={textureBack} toneMapped={false} />
      </mesh>
    </group>
    </Float>
    
  );
};

useGLTF.preload("/models/ts.glb");

export default TypeScript;

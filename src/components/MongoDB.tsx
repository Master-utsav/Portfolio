import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import {
  useGLTF,
  PerspectiveCamera,
  useTexture,
  Float,
} from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const MongoDB: React.FC<JSX.IntrinsicElements["group"]> = (props) => {
  const { nodes, materials } = useGLTF("/models/mongoDB.glb");
  const texture = useTexture("/textures/mongodb.png");
  const textureback = useTexture("/textures/cube_nextjs.png");

  const mongoDBRef = React.useRef<THREE.Group>(null);
  const [hovered, setHovered] = React.useState(false);

  // GSAP animation for flipping
  useGSAP(() => {
    if (mongoDBRef.current) {
      gsap.to(mongoDBRef.current.rotation, {
        y: hovered ? Math.PI * 2 : 0, 
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          if (hovered && mongoDBRef.current) {
            gsap.to(mongoDBRef.current.rotation, {
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
        ref={mongoDBRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)} 
      >
        <PerspectiveCamera
          makeDefault={false}
          far={10000}
          near={0.001}
          fov={54.432}
          position={[0, 0, 274.084]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.LOGO_1 as THREE.Mesh).geometry}
          material={materials.logo_1}
          position={[1.481, -0.622, 0.558]}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.LOGO as THREE.Mesh).geometry}
          material={materials.logo}
          position={[-0.142, -0.017, 0.72]}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.back as THREE.Mesh).geometry}
          material={materials.back}
        >
          <meshMatcapMaterial matcap={textureback} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/mongoDB.glb");

export default MongoDB;

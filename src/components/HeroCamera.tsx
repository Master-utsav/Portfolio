import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React from 'react'
import * as THREE from "three"
interface HeroCameraProps {
    children: React.ReactNode;
    isMobile: boolean;
  }

const HeroCamera = ({children , isMobile} : HeroCameraProps) => {
    const groupRef = React.useRef<THREE.Group>(null);

    useFrame((state , delta) => {
        easing.damp3(state.camera.position , [0, 0, 20] , 0.25 , delta)

        if(!isMobile && groupRef.current){
            easing.dampE(groupRef.current.rotation , [-state.pointer.y / 3 , state.pointer.x / 4, 0] , 0.25 , delta)
        }
    })
  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.2}>
        {children}
    </group>
  )
}

export default HeroCamera

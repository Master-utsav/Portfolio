import { useGLTF } from '@react-three/drei'
import React from 'react'
import * as THREE from "three"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

const Target: React.FC<JSX.IntrinsicElements['mesh']> = (props) => {

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current?.position, {
                y: targetRef.current?.position.y + 0.5,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
            })
        }
    })
    const targetRef = React.useRef<THREE.Mesh>(null);
    const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf");
    return (
        <mesh {...props} ref={targetRef} rotation={[0 , Math.PI / 5 , 0]} scale={1.5}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Target
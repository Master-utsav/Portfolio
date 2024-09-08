import React from 'react';
import { Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const LocationIcon: React.FC<JSX.IntrinsicElements['group']> = (props) => {
  // Use `useGLTF` to load the model, cast to the correct types
  const { nodes, materials } = useGLTF('models/location_icon.glb');

  return (
    <Float floatIntensity={0.1}>
      <group {...props} dispose={null}>
        {nodes && materials ? (
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_2 as THREE.Mesh).geometry}
            material={materials.None}
            
          />
        ) : null}
      </group>
    </Float>
  );
};

// Preload the GLTF model for better performance
useGLTF.preload('models/location_icon.glb');

export default LocationIcon;

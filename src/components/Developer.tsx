import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import * as THREE from 'three';

interface DeveloperProps extends GroupProps {
  animationName?: 'standup' | 'bore_idle' | 'arm_strech' | 'dancing' | 'happy_idle' | string;
}

const Developer: React.FC<DeveloperProps> = ({ animationName = 'standup', ...props }) => {
  const { nodes, materials } = useGLTF('/models/master_3d_model.glb');
  const groupRef = useRef<THREE.Group>(null);

  const standup = useFBX('/models/animations/standing_up.fbx');
  const bore_idle = useFBX('/models/animations/bore_idle.fbx');
  const arm_strech = useFBX('/models/animations/arm_streching.fbx');
  const dancing = useFBX('/models/animations/dancing.fbx');
  const happy_idle = useFBX('/models/animations/happy_idle.fbx');

  // Rename the animation clips to match the expected names
  standup.animations[0].name = 'standup';
  bore_idle.animations[0].name = 'bore_idle';
  arm_strech.animations[0].name = 'arm_strech';
  dancing.animations[0].name = 'dancing';
  happy_idle.animations[0].name = 'happy_idle';

  // Filter out animation tracks that don't have corresponding bones in the GLTF model
  const filterTracks = (clip: THREE.AnimationClip) => {
    clip.tracks = clip.tracks.filter((track) => {
      const boneName = track.name.split('.')[0];
      return !!nodes[boneName];
    });
  };

  [standup, bore_idle, arm_strech, dancing, happy_idle].forEach((animation) => {
    animation.animations.forEach(filterTracks);
  });

  const { actions } = useAnimations(
    [
      ...standup.animations,
      ...bore_idle.animations,
      ...arm_strech.animations,
      ...dancing.animations,
      ...happy_idle.animations,
    ],
    groupRef
  );

  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    }

    return () => {
      if (actions && actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [actions, animationName]);

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <primitive object={nodes.Hips} />

      <skinnedMesh
        name="EyeLeft"
        geometry={(nodes.EyeLeft as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye as THREE.Material}
        skeleton={(nodes.EyeLeft as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.EyeLeft as THREE.SkinnedMesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.EyeLeft as THREE.SkinnedMesh).morphTargetInfluences}
      />

      <skinnedMesh
        name="EyeRight"
        geometry={(nodes.EyeRight as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye as THREE.Material}
        skeleton={(nodes.EyeRight as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.EyeRight as THREE.SkinnedMesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.EyeRight as THREE.SkinnedMesh).morphTargetInfluences}
      />

      <skinnedMesh
        name="Wolf3D_Head"
        geometry={(nodes.Wolf3D_Head as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Skin as THREE.Material}
        skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.Wolf3D_Head as THREE.SkinnedMesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.Wolf3D_Head as THREE.SkinnedMesh).morphTargetInfluences}
      />

      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Teeth as THREE.Material}
        skeleton={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).morphTargetInfluences}
      />

      <skinnedMesh
        geometry={(nodes.Wolf3D_Hair as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Hair as THREE.Material}
        skeleton={(nodes.Wolf3D_Hair as THREE.SkinnedMesh).skeleton}
      />

      <skinnedMesh
        geometry={(nodes.Wolf3D_Body as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Body as THREE.Material}
        skeleton={(nodes.Wolf3D_Body as THREE.SkinnedMesh).skeleton}
      />

      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Bottom as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Bottom as THREE.Material}
        skeleton={(nodes.Wolf3D_Outfit_Bottom as THREE.SkinnedMesh).skeleton}
      />

      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Footwear as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Footwear as THREE.Material}
        skeleton={(nodes.Wolf3D_Outfit_Footwear as THREE.SkinnedMesh).skeleton}
      />

      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Top as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Top as THREE.Material}
        skeleton={(nodes.Wolf3D_Outfit_Top as THREE.SkinnedMesh).skeleton}
      />
    </group>
  );
};

useGLTF.preload('/models/master_3d_model.glb');

export default Developer;

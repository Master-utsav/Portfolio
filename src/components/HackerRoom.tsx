
import * as THREE from "three"
import { useGLTF, useTexture } from '@react-three/drei';

export default function HackerRoom(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');
  const monitortxt = useTexture('textures/desk/silver_texture.jpg');
  const screenTxt = useTexture('textures/desk/screen.png');

  return (
    <group {...props} dispose={null}>
       <mesh geometry={(nodes.screen_screens_0 as THREE.Mesh).geometry} material={materials.screens}>
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      <mesh geometry={(nodes.screen_glass_glass_0 as THREE.Mesh).geometry} material={materials.glass} />
      <mesh geometry={(nodes.table_table_mat_0_1 as THREE.Mesh).geometry} material={materials.table_mat} />
      <mesh geometry={(nodes.table_table_mat_0_2 as THREE.Mesh).geometry} material={materials.computer_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={(nodes.table_table_mat_0_3 as THREE.Mesh).geometry} material={materials.server_mat} />
      <mesh geometry={(nodes.table_table_mat_0_4 as THREE.Mesh).geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={(nodes.table_table_mat_0_5 as THREE.Mesh).geometry} material={materials.stand_mat} />
      <mesh geometry={(nodes.table_table_mat_0_6 as THREE.Mesh).geometry} material={materials.mat_mat} />
      <mesh geometry={(nodes.table_table_mat_0_7 as THREE.Mesh).geometry} material={materials.arm_mat} />
      <mesh geometry={(nodes.table_table_mat_0_8 as THREE.Mesh).geometry} material={materials.tv_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={(nodes.table_table_mat_0_9 as THREE.Mesh).geometry} material={materials.cables_mat} />
      <mesh geometry={(nodes.table_table_mat_0_10 as THREE.Mesh).geometry} material={materials.props_mat} />
      <mesh geometry={(nodes.table_table_mat_0_11 as THREE.Mesh).geometry} material={materials.ground_mat} />
      <mesh geometry={(nodes.table_table_mat_0_12 as THREE.Mesh).geometry} material={materials.key_mat} />
    </group>
  );
}

useGLTF.preload('/models/hacker-room.glb');
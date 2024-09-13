import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const NextJsCoin: React.FC<JSX.IntrinsicElements["group"]> = (props) => {
  const { nodes, materials } = useGLTF("/models/coin.glb");
  const texture = useTexture("/textures/nextjs_2.png")
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_4 as THREE.Mesh).geometry}
        material={materials.Coin}
      >
        <meshMatcapMaterial matcap={texture} toneMapped={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_5 as THREE.Mesh).geometry}
        material={materials.CoinRim}
      >
        <meshMatcapMaterial matcap={texture} toneMapped={false} />
      </mesh>
    </group>
  );
};

useGLTF.preload("/models/coin.glb");

export default NextJsCoin;

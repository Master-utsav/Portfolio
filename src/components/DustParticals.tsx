import { useMemo } from "react";
import { Points, PointMaterial, Float } from "@react-three/drei";

interface DustParticalsProps{
    floatIntensity : number,
    color : string,
    size : number,
}
export default function DustParticles(props : DustParticalsProps) {
  const points = useMemo(() => {
    const numParticles = 10000;
    const positions = new Float32Array(numParticles * 3);
    for (let i = 0; i < numParticles; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100; // x position
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // y position
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // z position
    }
    return positions;
  }, []);

  return (
    <Float floatIntensity={props.floatIntensity}>
        <Points positions={points}>
        <PointMaterial size={props.size} transparent color={props.color} />
        </Points>
    </Float>
  );
}
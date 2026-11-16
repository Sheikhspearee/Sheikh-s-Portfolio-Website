import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload } from "@react-three/drei";
import { CanvasTexture } from "three";

import CanvasLoader from "../layout/Loader";

// Draws the skill label onto a texture so no external icon assets are needed
const makeLabelTexture = (label: string, color: string) => {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#06110b";
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 10;
  ctx.strokeStyle = color;
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const fontSize = label.length > 4 ? 56 : label.length > 2 ? 72 : 96;
  ctx.font = `700 ${fontSize}px Oswald, sans-serif`;
  ctx.fillText(label.toUpperCase(), size / 2, size / 2 + 4);

  const texture = new CanvasTexture(canvas);
  texture.anisotropy = 8;
  return texture;
};

const Orb: React.FC<{ label: string; color: string }> = ({ label, color }) => {
  const texture = useMemo(() => makeLabelTexture(label, color), [label, color]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#d8ffe4"
          emissive={color}
          emissiveIntensity={0.15}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={texture}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<{ label: string; color: string }> = ({
  label,
  color,
}) => (
  <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enablePan={false} enableZoom={false} />
      <Orb label={label} color={color} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;

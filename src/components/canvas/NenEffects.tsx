import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLES = 120;

const makeParticleTexture = () => {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(255,255,255,0.35)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
};

// Rising Nen aura: glowing particles that spiral up from the base of the scene
const Aura = () => {
  const points = useRef<THREE.Points>(null);
  const ring = useRef<THREE.Mesh>(null);

  const { positions, colors, seeds, texture } = useMemo(() => {
    const positions = new Float32Array(PARTICLES * 3);
    const colors = new Float32Array(PARTICLES * 3);
    const seeds = new Float32Array(PARTICLES * 3);
    const green = new THREE.Color("#3fcf6a");
    const gold = new THREE.Color("#f5c542");
    for (let i = 0; i < PARTICLES; i++) {
      seeds[i * 3] = Math.random() * Math.PI * 2; // angle
      seeds[i * 3 + 1] = 2.5 + Math.random() * 4; // radius
      seeds[i * 3 + 2] = Math.random(); // phase
      const col = Math.random() > 0.25 ? green : gold;
      colors.set([col.r, col.g, col.b], i * 3);
    }
    return { positions, colors, seeds, texture: makeParticleTexture() };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const attr = points.current?.geometry.attributes.position;
    if (attr) {
      for (let i = 0; i < PARTICLES; i++) {
        const life = (seeds[i * 3 + 2] + t * 0.12) % 1;
        const angle = seeds[i * 3] + t * 0.35 + life * 2;
        const r = seeds[i * 3 + 1] * (1 - life * 0.55);
        positions[i * 3] = Math.cos(angle) * r;
        positions[i * 3 + 1] = -4.5 + life * 9;
        positions[i * 3 + 2] = Math.sin(angle) * r - 1.5;
      }
      attr.needsUpdate = true;
    }
    const pulse = 1 + Math.sin(t * 2) * 0.06;
    if (ring.current) {
      ring.current.scale.setScalar(pulse);
      ring.current.rotation.z = t * 0.2;
    }
  });

  return (
    <group>
      <points ref={points} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLES}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={PARTICLES}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          map={texture}
          size={0.22}
          vertexColors
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <mesh ref={ring} position={[0, -4.3, -1.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4.2, 0.04, 8, 96]} />
        <meshBasicMaterial color="#3fcf6a" transparent opacity={0.45} />
      </mesh>
    </group>
  );
};

const CARDS = [
  { label: "JAVA", suit: "♠" },
  { label: "SPRING", suit: "♥" },
  { label: "TS", suit: "♦" },
  { label: "SQL", suit: "♣" },
  { label: "AWS", suit: "♠" },
  { label: "DOCKER", suit: "♥" },
  { label: "REACT", suit: "♦" },
];

const makeCardTexture = (label: string, suit: string) => {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 360;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#0d1f15";
  ctx.fillRect(0, 0, 256, 360);
  ctx.strokeStyle = "#f5c542";
  ctx.lineWidth = 8;
  ctx.strokeRect(10, 10, 236, 340);
  ctx.strokeStyle = "#3fcf6a";
  ctx.lineWidth = 2;
  ctx.strokeRect(22, 22, 212, 316);
  const red = suit === "♥" || suit === "♦";
  ctx.fillStyle = red ? "#e0245e" : "#f5c542";
  ctx.font = "bold 90px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(suit, 128, 150);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 40px Oswald, Impact, sans-serif";
  ctx.fillText(label, 128, 255);
  ctx.font = "bold 36px serif";
  ctx.fillStyle = red ? "#e0245e" : "#f5c542";
  ctx.fillText(suit, 48, 52);
  ctx.fillText(suit, 208, 310);
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
};

// Hisoka-style playing cards orbiting the desk, one per skill
const Cards = () => {
  const group = useRef<THREE.Group>(null);
  const cardRefs = useRef<(THREE.Mesh | null)[]>([]);
  const textures = useMemo(
    () => CARDS.map((c) => makeCardTexture(c.label, c.suit)),
    []
  );

  useFrame(({ clock, pointer, camera }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y +=
        (pointer.x * 0.4 - group.current.rotation.y * 0.2) * 0.02;
    }
    cardRefs.current.forEach((m, i) => {
      if (!m) return;
      const a = (i / CARDS.length) * Math.PI * 2 + t * 0.3;
      m.position.set(
        2.5 + Math.cos(a) * 6.5,
        0.2 + Math.sin(t * 1.2 + i) * 0.3,
        Math.sin(a) * 4 - 3
      );
      m.lookAt(camera.position);
      m.rotateZ(Math.sin(t + i) * 0.25);
    });
  });

  return (
    <group ref={group}>
      {CARDS.map((c, i) => (
        <mesh
          key={c.label}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
        >
          <planeGeometry args={[0.95, 1.33]} />
          <meshBasicMaterial map={textures[i]} transparent opacity={0.92} />
        </mesh>
      ))}
    </group>
  );
};

const NenEffects = ({ cards = true }: { cards?: boolean }) => (
  <>
    <Aura />
    {cards && <Cards />}
  </>
);

export default NenEffects;

import { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, MeshTransmissionMaterial, Text } from "@react-three/drei";
import type * as THREE from "three";

function useInView(rootMargin = "200px") {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !mounted) setMounted(true);
        setVisible(entry.isIntersecting);
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, mounted]);
  return { ref, mounted, visible };
}

function Scene({ path, company }: { path: string; company: string }) {
  const ref = useRef<THREE.Group>(null);
  const gltf = useGLTF(path) as unknown as { nodes: Record<string, THREE.Mesh> };
  const { viewport } = useThree();

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.003;
  });

  const meshes = Object.values(gltf.nodes).filter((node): node is THREE.Mesh => node.isMesh);

  return (
    <>
      <Text
        position={[0, 0, -0.5]}
        fontSize={viewport.width / 5.5}
        fontWeight={700}
        color="#e8e9f3"
        anchorX="center"
        anchorY="middle"
        letterSpacing={-0.03}
      >
        {company.toUpperCase()}
      </Text>
      <group ref={ref} scale={viewport.width / 7}>
        {meshes.map((mesh, i) => (
          <mesh key={i} geometry={mesh.geometry}>
            <MeshTransmissionMaterial
              samples={2}
              thickness={0.8}
              roughness={0}
              transmission={1}
              ior={1.6}
              chromaticAberration={0.04}
              distortion={0.15}
              distortionScale={0.3}
              backside={true}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}

export default function LogoModel({ path, company }: { path: string; company: string }) {
  const { ref, mounted, visible } = useInView("200px");
  return (
    <div ref={ref} style={{ width: "100%", height: "clamp(180px, 40vw, 260px)", background: "#272635" }}>
      {mounted && (
        <Canvas
          style={{ width: "100%", height: "100%" }}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          frameloop={visible ? "always" : "never"}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.5} />
          <directionalLight intensity={3} position={[5, 5, 5]} />
          <directionalLight intensity={1} position={[-5, -5, -5]} />
          <Suspense fallback={null}>
            <Scene path={path} company={company} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

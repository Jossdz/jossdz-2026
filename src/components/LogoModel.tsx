import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, MeshTransmissionMaterial, Text } from "@react-three/drei";
import type * as THREE from "three";

function Scene({ path, company }: { path: string; company: string }) {
  const ref = useRef<THREE.Group>(null);
  const gltf = useGLTF(path) as unknown as { nodes: Record<string, THREE.Mesh> };
  const { viewport } = useThree();

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.008;
  });

  const meshes = Object.values(gltf.nodes).filter((node): node is THREE.Mesh => node.isMesh);

  return (
    <>
      <Text
        position={[0, 0, -0.5]}
        fontSize={viewport.width / 8}
        fontWeight={700}
        color="#e8e9f3"
        anchorX="center"
        anchorY="middle"
        letterSpacing={-0.03}
      >
        {company.toUpperCase()}
      </Text>
      <group ref={ref} scale={viewport.width / 10}>
        {meshes.map((mesh, i) => (
          <mesh key={i} geometry={mesh.geometry}>
            <MeshTransmissionMaterial
              thickness={0.8}
              roughness={0}
              transmission={1}
              ior={1.6}
              chromaticAberration={0.04}
              distortion={0.15}
              distortionScale={0.3}
              temporalDistortion={0.05}
              backside={true}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}

export default function LogoModel({ path, company }: { path: string; company: string }) {
  return (
    <div style={{ width: "100%", height: 260, background: "#272635" }}>
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight intensity={3} position={[5, 5, 5]} />
        <directionalLight intensity={1} position={[-5, -5, -5]} />
        <Suspense fallback={null}>
          <Scene path={path} company={company} />
        </Suspense>
      </Canvas>
    </div>
  );
}

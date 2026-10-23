"use client";

import { ContactShadows, Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Component, Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

type BoundaryProps = { children: React.ReactNode };
type BoundaryState = { failed: boolean };

class CharacterBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <AvatarUnavailable /> : this.props.children; }
}

export function CharacterCanvas() {
  const [webGLAvailable, setWebGLAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2", { failIfMajorPerformanceCaveat: true }) ?? canvas.getContext("webgl", { failIfMajorPerformanceCaveat: true });
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    const frame = requestAnimationFrame(() => setWebGLAvailable(Boolean(context)));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (webGLAvailable === null) return <div className="flex h-full items-center justify-center"><div className="avatar-loader"><span/>Checking 3D support</div></div>;
  if (!webGLAvailable) return <AvatarUnavailable/>;

  return <CharacterBoundary><Canvas camera={{ position: [0, .15, 4.8], fov: 32 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} shadows="basic">
    <ambientLight intensity={1.15}/><directionalLight castShadow position={[-3,5,5]} intensity={3.8} color="#ffffff"/><spotLight position={[4,4,3]} intensity={22} angle={.45} penumbra={.9} color="#9f7aea"/><pointLight position={[-3,2,2]} intensity={9} color="#a855f7"/>
    <Suspense fallback={<ModelLoader/>}><RiggedAvatar/><ContactShadows position={[0,-2.22,0]} scale={4.2} opacity={.48} blur={2.5} far={4}/></Suspense>
  </Canvas></CharacterBoundary>;
}

function ModelLoader() { return <Html center><div className="avatar-loader"><span/>Building human presence</div></Html>; }
function AvatarUnavailable() { return <div className="flex h-full items-center justify-center text-center font-mono text-[9px] uppercase tracking-[.24em] text-muted">Interactive 3D requires WebGL<br/>The rest of the experience remains available</div>; }

function RiggedAvatar() {
  const root = useRef<THREE.Group>(null);
  const wavingArm = useRef<THREE.Group>(null);
  const elapsed = useRef(0);

  useFrame((state, delta) => {
    elapsed.current += delta;
    const t = elapsed.current;
    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, state.pointer.x * .1 - .08, .045);
      root.current.rotation.x = THREE.MathUtils.lerp(root.current.rotation.x, -state.pointer.y * .025, .04);
      root.current.position.y = -2.15 + Math.sin(t * 1.15) * .012;
    }
    if (wavingArm.current) wavingArm.current.rotation.z = -.35 + Math.sin(t * 3.2) * .16;
  });

  const skin = "#d99a72", shirt = "#cadf46", dark = "#14181b";
  return <group ref={root} position={[.55,-2.15,0]} scale={1.08}>
    <mesh castShadow position={[0,2.48,0]}><sphereGeometry args={[.42,32,24]}/><meshStandardMaterial color={skin} roughness={.72}/></mesh>
    <mesh castShadow position={[0,2.72,-.1]} scale={[1.02,.52,1.02]}><sphereGeometry args={[.43,32,16]}/><meshStandardMaterial color={dark} roughness={.86}/></mesh>
    <mesh castShadow position={[0,1.45,0]} scale={[.75,1.05,.38]}><capsuleGeometry args={[.55,1.05,12,24]}/><meshStandardMaterial color={shirt} roughness={.68}/></mesh>
    <mesh castShadow position={[-.72,1.55,0]} rotation={[0,0,-.22]}><capsuleGeometry args={[.14,1.12,8,16]}/><meshStandardMaterial color={skin}/></mesh>
    <group ref={wavingArm} position={[.63,2.02,0]} rotation={[0,0,-.35]}>
      <mesh castShadow position={[.2,.58,0]} rotation={[0,0,-.3]}><capsuleGeometry args={[.14,1.12,8,16]}/><meshStandardMaterial color={skin}/></mesh>
      <mesh castShadow position={[.55,1.2,0]}><sphereGeometry args={[.19,20,16]}/><meshStandardMaterial color={skin}/></mesh>
    </group>
    <mesh castShadow position={[-.3,.2,0]}><capsuleGeometry args={[.21,1.6,8,16]}/><meshStandardMaterial color={dark}/></mesh>
    <mesh castShadow position={[.3,.2,0]}><capsuleGeometry args={[.21,1.6,8,16]}/><meshStandardMaterial color={dark}/></mesh>
  </group>;
}

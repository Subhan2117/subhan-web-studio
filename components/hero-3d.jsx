"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei"
import { useRef, Suspense } from "react"

function FloatingShape() {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial color="#14b8a6" roughness={0.1} metalness={0.8} distort={0.3} speed={2} />
      </mesh>
    </Float>
  )
}

function FloatingRing() {
  const ringRef = useRef(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ringRef} position={[1.5, 0.5, -1]} scale={1.2}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <MeshDistortMaterial color="#0d9488" roughness={0.2} metalness={0.9} distort={0.2} speed={3} />
      </mesh>
    </Float>
  )
}

function FloatingSphere() {
  const sphereRef = useRef(null)

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3 - 0.5
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh ref={sphereRef} position={[-1.8, -0.5, -0.5]} scale={0.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial color="#5eead4" roughness={0.3} metalness={0.6} distort={0.4} speed={4} />
      </mesh>
    </Float>
  )
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#14b8a6" />
          <FloatingShape />
          <FloatingRing />
          <FloatingSphere />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

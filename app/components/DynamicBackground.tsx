"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2
      sphereRef.current.scale.set(
        1 + Math.sin(clock.getElapsedTime() * 2) * 0.1,
        1 + Math.sin(clock.getElapsedTime() * 2) * 0.1,
        1 + Math.sin(clock.getElapsedTime() * 2) * 0.1,
      )
    }
  })

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]}>
      <meshPhongMaterial color="#00FFFF" transparent opacity={0.6} />
    </Sphere>
  )
}

export default function DynamicBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}


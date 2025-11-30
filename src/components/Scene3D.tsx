import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function FloatingOrb({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.y = time * 0.3
    }
  })

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <>
      <FloatingOrb position={[-3, 0, -2]} color="#38bdf8" speed={0.8} />
      <FloatingOrb position={[3, 1, -3]} color="#8b5cf6" speed={1.2} />
      <FloatingOrb position={[0, -2, -4]} color="#ec4899" speed={1} />
      <FloatingOrb position={[-2, 2, -1]} color="#f97316" speed={0.9} />
    </>
  )
}
"use client";

import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

type AnimatedCubeProps = {
  initialPosition?: [number, number, number];
  textureUrls?: string[] | string;
  bounds?: { x: number; y: number; z: number };
};

export function AnimatedCube({
  initialPosition = [0, 0, 0],
  textureUrls,
  bounds = { x: 5, y: 5, z: 5 },
}: AnimatedCubeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Convert string to array if one texture is provided
  const textures = useLoader(
    THREE.TextureLoader,
    Array.isArray(textureUrls) ? textureUrls : Array(6).fill(textureUrls)
  );

  // Ensure it's always an array
  const textureArray = Array.isArray(textures)
    ? textures
    : Array(6).fill(textures);

  // Build six materials from six textures
  const materials = textureArray.map(
    (tex) =>
      new THREE.MeshStandardMaterial({
        map: tex,
        emissive: new THREE.Color(0x222222),
        color: 0xffffff,
        //transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide,
      })
  );

  // Velocity vector stored as ref (mutable state)
  const velocity = useRef<THREE.Vector3>(
    new THREE.Vector3(
      (Math.random() - 0.5) * 0.05,
      (Math.random() - 0.5) * 0.05,
      (Math.random() - 0.5) * 0.05
    )
  );

  // Create random phase offsets for smooth random motion per axis
  // useMemo so they don't change on every render
  /*  const randomPhases = useMemo(
    () => ({
      x: Math.random() * Math.PI * 2,
      y: Math.random() * Math.PI * 2,
      z: Math.random() * Math.PI * 2,
    }),
    []
  ); */

  useFrame(() => {
    if (meshRef.current) {
      const pos = meshRef.current.position;
      const halfSize = 1;
      // Move cube
      pos.x += velocity.current.x;
      pos.y += velocity.current.y;
      pos.z += velocity.current.z;

      if (pos.x + halfSize > bounds.x || pos.x - halfSize < -bounds.x) {
        velocity.current.x *= -1;
      }
      if (pos.y + halfSize > bounds.y || pos.y - halfSize < -bounds.y) {
        velocity.current.y *= -1;
      }
      if (pos.z + halfSize > bounds.z || pos.z - halfSize < -bounds.z) {
        velocity.current.z *= -1;
      }

      // Optional: Rotate as it moves
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={initialPosition} material={materials}>
      <boxGeometry args={[2, 2, 2]} />
    </mesh>
  );
}

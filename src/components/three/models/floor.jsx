import { useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import React, { useRef } from 'react';
import * as THREE from 'three';
import { RGBELoader } from 'three-stdlib';

function Floor() {
  const mesh = useRef();
  const texture = useTexture('src/assets/textures/floor wood.png');
  const hdrTexture = useLoader(RGBELoader, 'src/assets/textures/environment.hdr');

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(35, 35);

  hdrTexture.mapping = THREE.EquirectangularReflectionMapping;

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} scale={[5, 5, 1]} receiveShadow>
      <planeGeometry args={[40, 40]} />
      <meshPhysicalMaterial
        map={texture}
        envMap={hdrTexture}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        metalness={0.9}
        roughness={0.5}
      />
    </mesh>
  );
}

export default Floor;

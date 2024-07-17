import { useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useEffect, useState } from 'react'
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/Addons.js';

function GoalPost() {
    const [isLoaded, setIsLoaded] = useState(false);
    const obj = useLoader(OBJLoader, 'src/assets/model/goal post.obj');
    const texture = useTexture('src/assets/textures/goal post diffuse.jpg');
    const modelScale = 0.014;

    useEffect(() => {
        if (obj) {
          obj.traverse((child) => {
            if (child.isMesh) {
              child.material = new THREE.MeshStandardMaterial({ map: texture });
              child.material.needsUpdate = true;
            }
          });
          setIsLoaded(true);
        }
      }, [obj, texture]);
    
      if (!isLoaded) {
        return null;
      }
    return (
        <group scale={modelScale} position={[0, 0, -2]} rotation={[-Math.PI / 2, 0, 0]} >
            {obj.children.map((child, index) => (
                <primitive key={index} object={child} castShadow receiveShadow />
            ))}
        </group>
    );
}

export default GoalPost
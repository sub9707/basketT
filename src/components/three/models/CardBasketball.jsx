import React, { useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const BasketballModel = () => {
    const [model, setModel] = useState(null);

    useEffect(() => {
      const loader = new GLTFLoader();
      loader.load(
        'src/assets/model/basketball.glb',
        (gltf) => {
          setModel(gltf.scene);
        },
        undefined,
        (error) => {
          console.error('Error loading GLTF model:', error);
        }
      );
    }, []);
  
    return model ? (
      <primitive object={model} scale={[1.5, 1.5, 1.5]} rotation={[0,1.5,0]} />
    ) : null;
};

export default BasketballModel;

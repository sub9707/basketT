import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import styles from './BackgroundCourt.module.scss';
import GoalPost from './models/GoalPost';
import Floor from './models/floor';

function RotatingCamera() {
  const { camera } = useThree();
  const [angle, setAngle] = useState(0);

  useFrame(() => {
    setAngle((prevAngle) => prevAngle + 0.001);
    camera.position.x = 7 * Math.sin(angle);
    camera.position.z = 7 * Math.cos(angle);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function BackgroundCourt() {
  return (
    <Canvas className={styles.webgl} shadows camera={{ position: [0, 7, 6] }}>
      <ambientLight intensity={2} />
      <spotLight
        position={[0, 4, 0]}
        intensity={100}
        penumbra={0.1}
        castShadow
      />
      <spotLight
        position={[1, 4, 0]}
        intensity={100}
        penumbra={0.1}
        castShadow
      />
      <spotLight
        position={[0, 4, 1]}
        intensity={100}
        penumbra={0.1}
        castShadow
      />
      <GoalPost />
      <Floor />
      <color attach="background" args={['black']} />
      <fogExp2 attach="fog" args={['black', 0.02]} />
      <RotatingCamera />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

export default BackgroundCourt;

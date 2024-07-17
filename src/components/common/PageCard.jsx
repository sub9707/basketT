import React, { Suspense } from 'react'
import styles from './PageCard.module.scss';
import { Canvas } from '@react-three/fiber';
import BasketballModel from '../three/models/CardBasketball';
import { OrbitControls } from '@react-three/drei';

function PageCard() {
  return (
    <div className={styles.cardBox}>
      <div className={styles.circleWrapper}>
        <Canvas style={{ borderRadius: '50%', width: '10rem', height: '10rem' }}>
            <ambientLight intensity={2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Suspense fallback={null}>
              <BasketballModel />
            </Suspense>
            <OrbitControls dampingFactor={0.002} />
          </Canvas>
      </div>
      <div className={styles.info}>
        <div className={styles.date}>게임 일정 : 2000.00.00</div>
        <div className={styles.location}>게임 장소: 서울특별시</div>
        <div className={styles.participants}>참여 인원 : 0 / 0</div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.joinButton}>참여하기</button>
      </div>
    </div>
  )
}

export default PageCard
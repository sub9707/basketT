import React from 'react'
import styles from './DefaultPageLayout.module.scss';
import BackgroundCourt from '../components/three/BackgroundCourt';

function DefaultPageLayout({children}) {
  return (
    <div className={styles.mainScreen}>
        <div className={styles.screenWrapper}>
            {children}
        </div>
        <BackgroundCourt className={styles.backgroundThree} />
    </div>
  )
}

export default DefaultPageLayout
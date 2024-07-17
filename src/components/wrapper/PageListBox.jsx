import React from 'react'
import styles from './PageListBox.module.scss';
import PageCard from '../common/PageCard';
import HorizontalScroll from 'react-horizontal-scrolling'

function PageListBox() {
  
  return (
    <div className={styles.listBoxWrapper}>
      <HorizontalScroll className={styles.listBoxLine}>
        <PageCard/>
        <PageCard/>
        <PageCard/>
        <PageCard/>
        <PageCard/>
      </HorizontalScroll>
    </div>
  )
}

export default PageListBox
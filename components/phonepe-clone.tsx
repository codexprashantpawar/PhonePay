"use client"
import StatusBar from "./status-bar"
import PhonePeApp from "./phonepe-app"
import styles from "./phonepe-clone.module.css"

export default function PhonePeClone() {
  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneInner}>
        <div className={styles.phoneNotch}></div>
        <StatusBar />
        <div className={styles.phoneContent}>
          <PhonePeApp />
        </div>
        <div className={styles.phoneNavBar}>
          <div className={styles.homeIndicator}></div>
        </div>
      </div>
    </div>
  )
}


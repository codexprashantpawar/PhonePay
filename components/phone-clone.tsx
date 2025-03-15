"use client"
import StatusBar from "./status-bar"
import PaymentApp from "./payment-app"
import styles from "./phone-clone.module.css"

export default function PhoneClone() {
  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneInner}>
        <div className={styles.phoneNotch}></div>
        <StatusBar />
        <div className={styles.phoneContent}>
          <PaymentApp />
        </div>
        <div className={styles.phoneNavBar}>
          <div className={styles.homeIndicator}></div>
        </div>
      </div>
    </div>
  )
}


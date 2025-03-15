"use client"

import { useState } from "react"
import HomeScreen from "./screens/home-screen"
import PaymentScreen from "./screens/payment-screen"
import BottomNavigation from "./bottom-navigation"
import styles from "./phonepe-app.module.css"

export type ScreenType = "home" | "payment" | "history" | "profile"
export type PaymentType = "mobile" | "dth" | "electricity" | "water" | null

export default function PhonePeApp() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>("home")
  const [paymentType, setPaymentType] = useState<PaymentType>(null)

  const handlePaymentSelect = (type: PaymentType) => {
    setPaymentType(type)
    setActiveScreen("payment")
  }

  const handleBackToHome = () => {
    setActiveScreen("home")
    setPaymentType(null)
  }

  return (
    <div className={styles.phonePeApp}>
      <div className={styles.appContent}>
        {activeScreen === "home" && <HomeScreen onPaymentSelect={handlePaymentSelect} />}
        {activeScreen === "payment" && <PaymentScreen type={paymentType} onBack={handleBackToHome} />}
       
      </div>
      <BottomNavigation activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  )
}


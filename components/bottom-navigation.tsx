"use client"

import { Home, Clock, User, BarChart3 } from "lucide-react"
import type { ScreenType } from "./phonepe-app"
import styles from "./bottom-navigation.module.css"

interface BottomNavigationProps {
  activeScreen: ScreenType
  setActiveScreen: (screen: ScreenType) => void
}

export default function BottomNavigation({ activeScreen, setActiveScreen }: BottomNavigationProps) {
  return (
    <div className={styles.bottomNav}>
      <div
        className={`${styles.navItem} ${activeScreen === "home" ? styles.active : ""}`}
        onClick={() => setActiveScreen("home")}
      >
        <Home size={22} />
        <span>Home</span>
      </div>
      <div
        className={`${styles.navItem} ${activeScreen === "history" ? styles.active : ""}`}
        onClick={() => setActiveScreen("history")}
      >
        <Clock size={22} />
        <span>History</span>
      </div>
      <div
        className={`${styles.navItem} ${activeScreen === "payment" ? styles.active : ""}`}
        onClick={() => setActiveScreen("payment")}
      >
        <BarChart3 size={22} />
        <span>Stores</span>
      </div>
      <div
        className={`${styles.navItem} ${activeScreen === "profile" ? styles.active : ""}`}
        onClick={() => setActiveScreen("profile")}
      >
        <User size={22} />
        <span>Profile</span>
      </div>
    </div>
  )
}


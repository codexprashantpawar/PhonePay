"use client"

import type { TabType } from "./payment-app"
import { Smartphone, FileText, Zap } from "lucide-react"
import styles from "./tab-navigation.module.css"

interface TabNavigationProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

export default function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  return (
    <div className={styles.tabNav}>
      <div
        className={`${styles.tabItem} ${activeTab === "recharge" ? styles.active : ""}`}
        onClick={() => setActiveTab("recharge")}
      >
        <Smartphone size={20} />
        <span>Recharge</span>
      </div>
      <div
        className={`${styles.tabItem} ${activeTab === "bill" ? styles.active : ""}`}
        onClick={() => setActiveTab("bill")}
      >
        <FileText size={20} />
        <span>Bill</span>
      </div>
      <div
        className={`${styles.tabItem} ${activeTab === "electricity" ? styles.active : ""}`}
        onClick={() => setActiveTab("electricity")}
      >
        <Zap size={20} />
        <span>Electricity</span>
      </div>
    </div>
  )
}


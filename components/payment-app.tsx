"use client"

import { useState } from "react"
import TabNavigation from "./tab-navigation"
import RechargeTab from "./tabs/recharge-tab"
import BillTab from "./tabs/bill-tab"
import ElectricityTab from "./tabs/electricity-tab"
import styles from "./payment-app.module.css"

export type TabType = "recharge" | "bill" | "electricity"

export default function PaymentApp() {
  const [activeTab, setActiveTab] = useState<TabType>("recharge")

  return (
    <div className={styles.paymentApp}>
      <div className={styles.appHeader}>
        <h1 className={styles.appTitle}>PayEase</h1>
      </div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={styles.tabContent}>
        {activeTab === "recharge" && <RechargeTab />}
        {activeTab === "bill" && <BillTab />}
        {activeTab === "electricity" && <ElectricityTab />}
      </div>
    </div>
  )
}


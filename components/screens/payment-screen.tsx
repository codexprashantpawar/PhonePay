"use client"

import { ArrowLeft, Smartphone, Tv, Zap, Droplet } from "lucide-react"
import type { PaymentType } from "../phonepe-app"
import PaymentForm from "../payment-form"
import styles from "./payment-screen.module.css"

interface PaymentScreenProps {
  type: PaymentType
  onBack: () => void
}

export default function PaymentScreen({ type, onBack }: PaymentScreenProps) {
  const getTitle = () => {
    switch (type) {
      case "mobile":
        return "Mobile Recharge"
      case "dth":
        return "DTH Recharge"
      case "electricity":
        return "Electricity Bill"
      case "water":
        return "Water Bill"
      default:
        return "Payment"
    }
  }

  const getIcon = () => {
    switch (type) {
      case "mobile":
        return <Smartphone size={20} />
      case "dth":
        return <Tv size={20} />
      case "electricity":
        return <Zap size={20} />
      case "water":
        return <Droplet size={20} />
      default:
        return null
    }
  }

  const getLabel = () => {
    switch (type) {
      case "mobile":
        return "Mobile Number"
      case "dth":
        return "DTH/Customer ID"
      case "electricity":
        return "Consumer Number"
      case "water":
        return "Consumer Number"
      default:
        return "Account Number"
    }
  }

  const getPlaceholder = () => {
    switch (type) {
      case "mobile":
        return "Enter 10-digit mobile number"
      case "dth":
        return "Enter DTH/Customer ID"
      case "electricity":
        return "Enter consumer number"
      case "water":
        return "Enter consumer number"
      default:
        return "Enter account number"
    }
  }

  return (
    <div className={styles.paymentScreen}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          <ArrowLeft size={20} />
        </button>
        <h2 className={styles.headerTitle}>{getTitle()}</h2>
      </div>
      <div className={styles.content}>
        <PaymentForm
          title={getTitle()}
          inputLabel={getLabel()}
          inputPlaceholder={getPlaceholder()}
          paymentType={type || "mobile"}
          icon={getIcon()}
        />
      </div>
    </div>
  )
}


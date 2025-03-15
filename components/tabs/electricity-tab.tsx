import PaymentForm from "../payment-form"
import { Zap } from "lucide-react"
import styles from "./tab.module.css"

export default function ElectricityTab() {
  return (
    <div className={styles.tabContent}>
      <PaymentForm
        title="Electricity Bill Payment"
        inputLabel="Consumer Number"
        inputPlaceholder="Enter consumer/meter number"
        paymentType="electricity"
        icon={<Zap size={24} />}
      />
    </div>
  )
}


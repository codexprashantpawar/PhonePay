import PaymentForm from "../payment-form"
import { Smartphone } from "lucide-react"
import styles from "./tab.module.css"

export default function RechargeTab() {
  return (
    <div className={styles.tabContent}>
      <PaymentForm
        title="Mobile Recharge"
        inputLabel="Mobile Number"
        inputPlaceholder="Enter 10-digit mobile number"
        paymentType="mobile"
        icon={<Smartphone size={24} />}
      />
    </div>
  )
}


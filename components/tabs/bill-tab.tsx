import PaymentForm from "../payment-form"
import { FileText } from "lucide-react"
import styles from "./tab.module.css"

export default function BillTab() {
  return (
    <div className={styles.tabContent}>
      <PaymentForm
        title="Bill Payment"
        inputLabel="Account Number"
        inputPlaceholder="Enter account/customer number"
        paymentType="bill"
        icon={<FileText size={24} />}
      />
    </div>
  )
}


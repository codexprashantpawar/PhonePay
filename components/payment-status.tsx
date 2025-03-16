import { useEffect } from "react"
import { CheckCircle, XCircle, Loader } from "lucide-react"
import styles from "./payment-status.module.css"

interface PaymentStatusProps {
  status: "processing" | "success" | "error"
  message: string
  randomNumber?: string
  onReset: () => void
}

export default function PaymentStatus({ status, message, randomNumber, onReset }: PaymentStatusProps) {
  useEffect(() => {
    if (status === "success") {
      const successSound = new Audio("/sound.mpeg") 
      successSound.play()
    }
  }, [status])

  if (status === "processing") {
    return (
      <div className={styles.processing}>
        <div className={styles.loader}>
          <Loader size={40} className={styles.spinningLoader} />
        </div>
        <h4 className={styles.statusTitle}>Processing Payment</h4>
        <p className={styles.statusMessage}>Please wait while we process your payment...</p>
      </div>
    )
  }

  return (
    <div className={status === "success" ? styles.success : styles.error}>
      <div className={styles.statusIcon}>
        {status === "success" ? <CheckCircle size={50} /> : <XCircle size={50} />}
      </div>

      <h4 className={styles.statusTitle}>{status === "success" ? "Processed Successfully!" : "Payment Failed"}</h4>

      <p className={styles.statusMessage}>{message}</p>

      {randomNumber && (
        <div className={styles.transactionId}>
          <strong>Transaction ID:</strong> {randomNumber}
        </div>
      )}

      <button className={styles.resetButton} onClick={onReset}>
        Make Another Payment
      </button>
    </div>
  )
}

"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import styles from "./check-balance.module.css"

export default function CheckBalance() {
  const router = useRouter();

  return (
    <div className={styles.balancePage}>
      <div className={styles.header}>
        <ArrowLeft size={24} onClick={() => router.back()} className={styles.backIcon} />
        <h2>Balance Fetched Successfully</h2>
      </div>

      <div className={styles.balanceCard}>
        <div className={styles.bankLabel}>Cosmos Bank Account</div>
        <div className={styles.accountNumber}>XXXX XXXX 7819</div>
        <div className={styles.balanceAmount}>₹1,005,556.50</div>
      </div>
    </div>
  );
}

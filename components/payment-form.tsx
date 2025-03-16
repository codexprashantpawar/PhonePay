"use client"

import type React from "react"
import { useState } from "react"
import PaymentStatus from "./payment-status"

interface PaymentFormProps {
  title: string
  inputLabel: string
  inputPlaceholder: string
  paymentType: "mobile" | "dth" | "electricity" | "water" |"tomobile"
  icon: React.ReactNode
}

// Default recharge plans for mobile recharge
const rechargePlans = [
  { amount: 199, data: "1GB/day", validity: "28 days", calls: "Unlimited" },
  { amount: 299, data: "1.5GB/day", validity: "28 days", calls: "Unlimited" },
  { amount: 399, data: "2GB/day", validity: "56 days", calls: "Unlimited" },
  { amount: 599, data: "3GB/day", validity: "84 days", calls: "Unlimited" },
]

export default function PaymentForm({ title, inputLabel, inputPlaceholder, paymentType, icon }: PaymentFormProps) {
  const [number, setNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [selectedPlan, setSelectedPlan] = useState<typeof rechargePlans[0] | null>(null)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [randomNumber, setRandomNumber] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const random = Math.floor(1000000000 + Math.random() * 9000000000).toString()
    setRandomNumber(random)
    setPaymentStatus("processing")

    setTimeout(() => {
      if (Math.random() > 0.2) {
        setPaymentStatus("success")
        setMessage(`Payment of ₹${amount} successful to ${number}!`)
      } else {
        setPaymentStatus("error")
        setMessage("Payment failed: Insufficient funds or network error")
      }
    }, 1500)
  }

  const handlePlanSelect = (plan: typeof rechargePlans[0]) => {
    setAmount(plan.amount.toString())
    setSelectedPlan(plan)
  }

  const resetForm = () => {
    setNumber("")
    setAmount("")
    setSelectedPlan(null)
    setPaymentStatus("idle")
    setMessage("")
    setRandomNumber("")
  }

  return (
    <div style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "400px", margin: "auto" }}>
      {paymentStatus === "idle" ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor={`${paymentType}-number`} style={{ display: "block", fontWeight: "bold" }}>
              {inputLabel}
            </label>
            <input
              type="text"
              id={`${paymentType}-number`}
              placeholder={inputPlaceholder}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor={`${paymentType}-amount`} style={{ display: "block", fontWeight: "bold" }}>
              Amount (₹)
            </label>
            <input
              type="number"
              id={`${paymentType}-amount`}
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
                setSelectedPlan(null)
              }}
              required
              min="1"
              style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>

          {/* Recharge Plans (only for mobile recharge) */}
          {paymentType === "mobile" && (
            <div style={{ marginBottom: "10px" }}>
              <strong>Available Plans:</strong>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "5px" }}>
                {rechargePlans.map((plan, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handlePlanSelect(plan)}
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      cursor: "pointer",
                      backgroundColor: selectedPlan?.amount === plan.amount ? "#007bff" : "#f8f8f8",
                      color: selectedPlan?.amount === plan.amount ? "#fff" : "#000",
                    }}
                  >
                    ₹{plan.amount}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Display Selected Plan Details */}
          {selectedPlan && (
            <div
              style={{
                marginTop: "10px",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                background: "#f9f9f9",
              }}
            >
              <strong>Plan Details:</strong>
              <p>📶 {selectedPlan.data}</p>
              <p>📅 {selectedPlan.validity}</p>
              <p>📞 {selectedPlan.calls}</p>
            </div>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            PROCEED TO PAY
          </button>
        </form>
      ) : (
        <PaymentStatus status={paymentStatus} message={message} randomNumber={randomNumber} onReset={resetForm} />
      )}
    </div>
  )
}

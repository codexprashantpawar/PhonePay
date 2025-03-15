"use client"

import { useEffect, useState } from "react"
import { Battery, Signal, Wifi } from "lucide-react"
import styles from "./status-bar.module.css"

export default function StatusBar() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      setTime(`${hours}:${minutes < 10 ? "0" + minutes : minutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.statusBar}>
      <div className={styles.time}>{time}</div>
      <div className={styles.icons}>
        <Signal size={16} />
        <Wifi size={16} />
        <Battery size={16} />
      </div>
    </div>
  )
}


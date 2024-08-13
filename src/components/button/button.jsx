"use client"
import styles from './button.module.css'
export default function Button({label}) {
  return (
    <button className={styles.logout} onClick={() => { console.log("logout") }}>{label}</button>
  )
}

import Footer from '@/components/Footer/footer'
import React from 'react'
import styles from './page.module.css'

export default function MyPageLayout({ children }) {
  return (
    <div className={styles.container}>
    {/* <div className="container"> */}
      <header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
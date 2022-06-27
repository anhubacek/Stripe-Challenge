import React from 'react'
import styles from '../styles/ConfigureCheckout.module.css'

export default function ConfigureCheckout (){
    return(
        <div className={styles.ConfigureCheckout}>
            <div className={styles.Content}>
                <div className={styles.Bar}>
                    <div className={styles.ChromeButtons}>
                        <div className={styles.FakeChromeButton}></div>
                        <div className={styles.FakeChromeButton}></div>
                        <div className={styles.FakeChromeButton}></div>
                    </div>
                    <div className={styles.ChromeBar}>
                    <span>checkoutstripe.com</span>
                    </div>
                </div>
                <div className={styles.Checkout}>
                <div className={styles.Left}></div>
                <div className={styles.Right}></div>
                </div>
            </div>
        </div>
    )
}
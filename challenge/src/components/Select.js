import React from 'react'
import styles from '../styles/select.module.css'

export default function Select(){
    return(
        <div className={styles.SelectPage}>
            <div className={styles.NavBarContent}>
                <div className={styles.NavBarLeft}>
                    <div className={styles.NavBarTitle}>
                        <h1>Checkout</h1>
                        <div className={styles.NavBarSubheading}>
                            <span>Choose your use case</span>
                            <span>1 of 3</span>
                        </div>
                    </div>
                </div>
                <div className={styles.NavBarRight}>
                
                </div>
            </div>
        <div className={styles.App}>
            <iframe src="http://localhost:3001/recurringpayments" title="Recurring-Payments" width="100%" height="100%" scrolling='no'/>
        </div>
        
        </div>
    )
}
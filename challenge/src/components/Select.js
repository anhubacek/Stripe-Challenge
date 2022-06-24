import React, { useState } from 'react'
import styles from '../styles/select.module.css'
import { DollarCircleFilled } from '@ant-design/icons'

export default function Select(){

    const [option, setOption] = useState({
        oneTimePayments : false,
        recurringPayments: false,
    })

    function handleFocus(e){
        e.preventDefault(e);
        setOption({
            oneTimePayments : false,
        recurringPayments: false,
       [e.target.value]: true,
        })
        
    }
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
                <button className={styles.SelectButton} onFocus={handleFocus} value="oneTimePayments" >
                    <div className={styles.Icon}>
                    <DollarCircleFilled />
                    </div>
                    <div className={styles.Text}>
                        <h3>One-Time Payments</h3>
                        <p>Digital of physical goods and services</p>
                    </div>
                </button>
                <button className={styles.SelectButton} onFocus={handleFocus} value="recurringPayments"  >
                    <div className={styles.Icon}>
                    <DollarCircleFilled />
                    </div>
                    <div className={styles.Text}>
                        <h3>Recurring Payments</h3>
                        <p>Subscription or SaaS business</p>
                    </div>
                </button>
                </div>
            </div>
        <div className={styles.App}>
            <iframe src={option.oneTimePayments === true? "http://localhost:3001/onetimepayments": "http://localhost:3001/recurringpayments"} title="Recurring-Payments" width="100%" height="100%" scrolling='no'/>
        </div>
        
        </div>
    )
}
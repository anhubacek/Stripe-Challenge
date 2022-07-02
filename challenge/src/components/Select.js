import React, { useState } from 'react'
import styles from '../styles/select.module.css'
import { DollarCircleFilled, RightOutlined } from '@ant-design/icons'

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
                        <h1>Explore Checkout</h1>
                    </div>
                    
                </div>
                <div className={styles.NavBarSubheading}>
                            <span>Choose your use case</span>
                            <p>1 of 3</p>
                        </div>
                <div className={styles.NavBarRight}>
               
                <button className={option.oneTimePayments === true? styles.Selected:styles.SelectButton} onFocus={handleFocus} value="oneTimePayments" >
                    <div className={styles.Icon}>
                    <DollarCircleFilled />
                    </div>
                    <div className={styles.Text}>
                        <h3>One-Time Payments</h3>
                        <p>Digital of physical goods and services</p>
                    </div>
                </button>
                <button className={option.recurringPayments === true? styles.Selected:styles.SelectButton} onFocus={handleFocus} value="recurringPayments"  >
                    <div className={styles.Icon}>
                    <DollarCircleFilled />
                    </div>
                    <div className={styles.Text}>
                        <h3>Recurring Payments</h3>
                        <p>Subscription or SaaS business</p>
                    </div>
                </button>
              
                </div>
                <a href={option.oneTimePayments === true? "/configure": "/"} className={option.oneTimePayments === true ? styles.NextStep : styles.disabled}><span>Next</span><RightOutlined className={styles.NextIcon}/></a>
            </div>
        <div className={styles.App}>
            <iframe src={option.oneTimePayments === true? "http://localhost:3001/onetimepayments": "http://localhost:3001/recurringpayments"} title="Recurring-Payments" width="100%" height="100%" scrolling='no'/>
        </div>
        
        </div>
    )
}
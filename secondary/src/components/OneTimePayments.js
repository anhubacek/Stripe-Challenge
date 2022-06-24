import React from 'react'
import styles from '../styles/OneTimePayments.module.css'
import template from '../images/OneTimePayments.png'

export default function OneTimePayments (){
    return(
        <div className={styles.OneTimePayments}>
            <div className={styles.Template}>
                <img src={template} alt="One Time Payments"/>
            </div>
        </div>
    )
}
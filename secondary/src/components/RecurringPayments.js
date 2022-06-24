import React from 'react'
import styles from '../styles/RecurringPayments.module.css'
import template from '../images/RecurringPayments.png'

export default function RecurringPayments (){
    return(
        <div className={styles.RecurringPayments}>
            <div className={styles.Template}>
                <img src={template} alt="Recurring Payments"/>
            </div>
        </div>
    )
}
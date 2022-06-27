import React, {useState} from 'react'
import styles from '../styles/preview.module.css'
import { ArrowLeftOutlined, MobileOutlined, 
    InfoCircleFilled, DesktopOutlined } from '@ant-design/icons'
import {Popover} from 'antd'

export default function Preview(){

    const[back, setBack] = useState(false)

    function mouseOver(){
        setBack(true);
    }

    function mouseOut(){
        setBack(false);
    }

    function handleChange(){

    }

    return(
        <div className={styles.PreviewPage}>
        <div className={styles.NavBarContent}>
      
            <div className={styles.NavBarLeft}>
                <div className={styles.NavBarTitle}>
                    <h1>Checkout</h1>
                </div>
            </div>
            <div className={styles.NavBarRight}>
            <ArrowLeftOutlined className={styles.LeftArrow}/>
            <div className={styles.NavBarSubheading}>
            
                        <span className={styles.CurrentText}>Try it Out</span>
                        <p>3 of 3</p>
                        
                        <a href="/configure" className={styles.BackLink}>
                        
                        <span className={back === true? styles.BackText : styles.BackNone}
                         onMouseEnter={mouseOver} onMouseLeave={mouseOut}> Back</span>
                         </a>
                    </div>
            <div className={styles.OptionsDashboard}>
                <div className={styles.Device}>
                     <button className={styles.Left}><DesktopOutlined /></button>
                     <button className={styles.Right}><MobileOutlined /></button>
                </div>
                <button className={styles.Language}> <label>Customer location  <Popover  ><InfoCircleFilled/></Popover> | </label>
                <select type="select"  onChange={handleChange} defaultValue="United States">
                    <option value="Argentina">Argentina</option>
                    <option value="United States">United States</option>
                </select>
                </button>
            </div>
            </div>
           
        </div>
    
    <div className={styles.App}>
            {/* <iframe src={option.oneTimePayments === true? "http://localhost:3001/onetimepayments": "http://localhost:3001/recurringpayments"} title="Recurring-Payments" width="100%" height="100%" scrolling='no'/> */}
        </div>
    </div>
    )
}

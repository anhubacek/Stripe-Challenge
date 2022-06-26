import React, { useState }  from 'react'
import styles from '../styles/configure.module.css'
import {RightOutlined, InfoCircleFilled } from '@ant-design/icons'
import {Switch} from 'antd'



export default function Configure(){
    const [option, setOption] = useState({
        
    })



    return(
        <div className={styles.ConfigurePage}>
        <div className={styles.NavBarContent}>
            <div className={styles.NavBarLeft}>
                <div className={styles.NavBarTitle}>
                    <h1>Checkout</h1>
                </div>
                
            </div>
            <div className={styles.NavBarRight}>
            <div className={styles.NavBarSubheading}>
                        <span>Customize</span>
                        <p>2 of 3</p>
                    </div>
            <div className={styles.OptionsDashboard}>
                <div className={styles.OptionLeft}>
                    <div className={styles.OptionName}>
                        <span>Brand Colors</span>
                        <div className={styles.InfoIcon}><InfoCircleFilled /></div>
                    </div>
                    <div className={styles.ColorOptions}>
                        <button className={styles.White}/>
                        <button  className={styles.Blue}/>
                    </div>
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Coupons</span>
                        <div className={styles.InfoIcon}><InfoCircleFilled /></div>
                    </div>
                    <Switch className={styles.SwitchInput} />
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Shipping</span>
                        <div className={styles.InfoIcon}><InfoCircleFilled /></div>
                    </div>
                    <Switch className={styles.SwitchInput} />
                
                </div>
                <div className={styles.OptionLeft}>
                    <div className={styles.OptionName}>
                        <span>Store policies</span>
                        <div className={styles.InfoIcon}><InfoCircleFilled /></div>
                    </div>
                    <Switch className={styles.SwitchInput} />
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Tax support</span>
                        <div className={styles.InfoIcon}><InfoCircleFilled /></div>
                    </div>
                    <Switch className={styles.SwitchInput} />
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Phone number</span>
                        <div className={styles.InfoIcon}><InfoCircleFilled /></div>
                    </div>
                    <Switch className={styles.SwitchInput} />
                
                </div>
            </div>
            <a href="/preview" className={styles.NextStep}><span>Next</span><RightOutlined className={styles.NextIcon}/></a>
            </div>
           
        </div>
    <div className={styles.App}>
        {/* <iframe src="#" width="100%" height="100%" scrolling='no'/> */}
    </div>
    <div className={styles.App}>
            {/* <iframe src={option.oneTimePayments === true? "http://localhost:3001/onetimepayments": "http://localhost:3001/recurringpayments"} title="Recurring-Payments" width="100%" height="100%" scrolling='no'/> */}
        </div>
    </div>
    )
}
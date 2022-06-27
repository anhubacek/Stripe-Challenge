import React, { useState }  from 'react'
import styles from '../styles/configure.module.css'
import {RightOutlined, InfoCircleFilled, ArrowLeftOutlined } from '@ant-design/icons'
import {Switch, Popover} from 'antd'



export default function Configure(){
    // const [option, setOption] = useState({
        
    // })

    const[back, setBack] = useState(false)

    function mouseOver(){
        setBack(true);
    }

    function mouseOut(){
        setBack(false);
    }

    return(
        <div className={styles.ConfigurePage}>
        <div className={styles.NavBarContent}>
      
            <div className={styles.NavBarLeft}>
             
                <div className={styles.NavBarTitle}>
                    <h1>Checkout</h1>
                </div>
                
            </div>
            <div className={styles.NavBarRight}>
            <ArrowLeftOutlined className={styles.LeftArrow}/>
            <div className={styles.NavBarSubheading}>
            
                        <span className={styles.CurrentText}>Customize</span>
                        <p>2 of 3</p>
                        
                        <a href="/" className={styles.BackLink}>
                        
                        <span className={back === true? styles.BackText : styles.BackNone}
                         onMouseEnter={mouseOver} onMouseLeave={mouseOut}> Back</span>
                         </a>
                    </div>
            <div className={styles.OptionsDashboard}>
                <div className={styles.OptionLeft}>
                    <div className={styles.OptionName}>
                        <span>Brand Colors</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content="Customize Checkout's colors to match your brand." > <InfoCircleFilled /></Popover></div>
                    </div>
                    <div className={styles.ColorOptions}>
                        <button className={styles.White}/>
                        <button  className={styles.Blue}/>
                    </div>
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Coupons</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content="Create discount and promo codes to reward your most loyal customers." > <InfoCircleFilled /></Popover></div>
                    </div>
                    <Switch className={styles.SwitchInput} />
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Shipping</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content="Collect your customer's shipping information and shipping method preference during checkout." > <InfoCircleFilled /></Popover></div>
                    </div>
                    <Switch className={styles.SwitchInput} />
                
                </div>
                <div className={styles.OptionLeft}>
                    <div className={styles.OptionName}>
                        <span>Store policies</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content="Highlight your return policies, support information, or terms of service." > <InfoCircleFilled /></Popover></div>
                    </div>
                    <Switch className={styles.SwitchInput} />
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Tax support</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content={"Set tax rates by region to collect the right amount based on your customer's location."} > <InfoCircleFilled /></Popover></div>
                    </div>
                    <Switch className={styles.SwitchInput} />
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Phone number</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content="Collect your customer's phone number if you need to contact them regarding the transaction." > <InfoCircleFilled /></Popover></div>
                    </div>
                    <Switch className={styles.SwitchInput} />
                
                </div>
            </div>
            <a href="/preview" className={styles.NextStep}><span>Next</span><RightOutlined className={styles.NextIcon}/></a>
            </div>
           
        </div>
    <div className={styles.App}>
            {/* <iframe src={option.oneTimePayments === true? "http://localhost:3001/onetimepayments": "http://localhost:3001/recurringpayments"} title="Recurring-Payments" width="100%" height="100%" scrolling='no'/> */}
        </div>
    </div>
    )
}
import React, { useState, useContext }  from 'react'
import styles from '../styles/configure.module.css'
import {RightOutlined, InfoCircleFilled, ArrowLeftOutlined } from '@ant-design/icons'
import {Switch, Popover} from 'antd'
import {useOptionsContext, useOptionsUpdateColorContext, 
    useOptionsUpdateCouponsContext, useOptionsUpdateShippingContext} from "./Options"



export default function Configure(){
   
    const options = useOptionsContext()
    const updateColor = useOptionsUpdateColorContext()
    const updateCoupons = useOptionsUpdateCouponsContext()
    const updateShipping = useOptionsUpdateShippingContext()
    console.log("Options:", options)

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
                    <h1>Explore Checkout</h1>
                </div>
                
            </div>
                        <div className={styles.NavBarSubheading}>
            
                        <span className={styles.CurrentText}>Customize</span>
                        <p>2 of 3</p>
                        
                        <a href="/" className={styles.BackLink}>
                        
                        <span className={back === true? styles.BackText : styles.BackNone}
                         onMouseEnter={mouseOver} onMouseLeave={mouseOut}> Back</span>
                         </a>
                    </div>
            <div className={styles.NavBarRight}>
            <ArrowLeftOutlined className={styles.LeftArrow}/>

            <div className={styles.OptionsDashboard}>
                <div className={styles.OptionLeft}>
                    <div className={styles.OptionName}>
                        <span>Brand Colors</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content="Customize Checkout's colors to match your brand." > <InfoCircleFilled /></Popover></div>
                    </div>
                    <div className={styles.ColorOptions}>
                        <button className={styles.White} onFocus={updateColor} name="color" value="Light"/>
                        <button  className={styles.Blue} onFocus={updateColor} name="color" value="Dark"/>
                    </div>
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Coupons</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content="Create discount and promo codes to reward your most loyal customers." > <InfoCircleFilled /></Popover></div>
                    </div>
                    <Switch size="small" className={styles.SwitchInput} name="coupons" onChange={updateCoupons} />
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Shipping</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content="Collect your customer's shipping information and shipping method preference during checkout." > <InfoCircleFilled /></Popover></div>
                    </div>
                    <Switch size="small" className={styles.SwitchInput} name="shipping" onChange={updateShipping} />
                
                </div>
                <div className={styles.OptionLeft}>
                    <div className={styles.OptionName}>
                        <span>Store policies</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content="Highlight your return policies, support information, or terms of service." > <InfoCircleFilled /></Popover></div>
                    </div>
                    <Switch size="small" className={styles.SwitchInput}  checked={false} />
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Tax support</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content={"Set tax rates by region to collect the right amount based on your customer's location."} > <InfoCircleFilled /></Popover></div>
                    </div>
                    <Switch size="small" className={styles.SwitchInput} checked={false} />
                
                </div>
                <div className={styles.Option}>
                    <div className={styles.OptionName}>
                        <span>Phone number</span>
                        <div className={styles.InfoIcon}><Popover placement="top"  content="Collect your customer's phone number if you need to contact them regarding the transaction." > <InfoCircleFilled /></Popover></div>
                    </div>
                    <Switch size="small" className={styles.SwitchInput} checked={false} />
                
                </div>
            </div>
           
            </div>
            <a href={`/preview${options.color === "Dark" ? "?color=Dark" : "?color=Light"}${options.coupons === true? "&coupons=true": ""}${options.shipping === true? "&shipping=true": ""}`} className={styles.NextStep}><span>Next</span><RightOutlined className={styles.NextIcon}/></a>
        </div>
    <div className={styles.App}>
             <iframe src={`http://localhost:3001/configurecheckout${options.color === "Dark" ? "?color=Dark" : "?color=Light"}${options.coupons === true? "&coupons=true": ""}${options.shipping === true? "&shipping=true": ""}`}
             title="Configure-Checkout" width="100%" height="100%" scrolling='no'/> 
        </div>
    </div>
    )
}
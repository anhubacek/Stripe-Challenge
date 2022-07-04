import React, {useState,  useEffect} from 'react'
import styles from '../styles/preview.module.css'
import { ArrowLeftOutlined, MobileOutlined, 
    InfoCircleFilled, DesktopOutlined } from '@ant-design/icons'
import {Popover} from 'antd'

import { useParams, useSearchParams } from 'react-router-dom'




export default function Preview(){
   
    const [searchParams, setSearchParams] = useSearchParams();
    const [options, setOptions] = useState({
        color: "light",
        coupons: false,
        shipping:false,

    })

    const [device, setDevice] = useState({
        desktop: true,
        mobile: false
    })

   useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setOptions({
        color: currentParams.color,
        coupons: currentParams.coupons,
        shipping: currentParams.shipping,
    })
   
 }, [searchParams]);

    const[back, setBack] = useState(false)

    function mouseOver(){
        setBack(true);
    }

    function mouseOut(){
        setBack(false);
    }

    function handleFocusDevice(e){
           e.preventDefault();
        setDevice({
            ...device,
            [e.target.name] : true,
        })
    }
    function handleBlurDevice(e){
           e.preventDefault();
        setDevice({
            ...device,
            [e.target.name] : false,
        })
    }

    const [language, setLanguage] = useState("en")

    function handleLanguage (e){
        e.preventDefault();
        setLanguage([e.target.value])
    }


   let iframeSource= `http://localhost:3001/preview${options.color === "dark" ? "?color=dark" : "?color=light"}${options.coupons === "true"? "&coupons=true": ""}${options.shipping === "true"? "&shipping=true": ""}${device.desktop === true? "&desktop=true": ""}${device.mobile === true? "&mobile=true": ""}${language[0] === "en"? "&lan=en": ""}${language[0] === "es"? "&lan=es": ""}`


    return(
        <div className={styles.PreviewPage}>
        <div className={styles.NavBarContent}>
      
            <div className={styles.NavBarLeft}>
                <div className={styles.NavBarTitle}>
                    <h1>Explore Checkout</h1>
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
                     <button className={styles.Left} name="desktop"  autoFocus={true} onFocus={handleFocusDevice} onBlur={handleBlurDevice}><DesktopOutlined /></button>
                     <button className={styles.Right} name="mobile"  onFocus={handleFocusDevice} onBlur={handleBlurDevice} ><MobileOutlined /></button>
                </div>
                <button className={styles.Language}> <label>Customer location  <Popover content="Checkout adapts to your costumer's location and preferences to show the language and payment methods most likely to increase conversion." className={styles.Popover}><InfoCircleFilled/></Popover> | </label>
                <select onChange={handleLanguage} type="select" defaultValue="en">
                    <option value="es">Argentina</option>
                    <option value="en">United States</option>
                </select>
                </button>
            </div>
            </div>
           
        </div>
    
    <div className={device.mobile === true ? styles.MobileApp : styles.App}>
    <iframe src={iframeSource}
             title="Configure-Checkout" width="100%" height="100%" scrolling="yes"/> 
        </div>
    </div>




    
    )
}

//${device.desktop === "true"? "&desktop=true": ""}${device.mobile === "true"? "&mobile=true": ""}
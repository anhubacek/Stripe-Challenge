import React, {useState,  useEffect} from 'react'
import styles from '../styles/preview.module.css'
import { ArrowLeftOutlined, MobileOutlined, 
    InfoCircleFilled, DesktopOutlined } from '@ant-design/icons'
import {Popover} from 'antd'

import { useParams, useSearchParams } from 'react-router-dom'




export default function Preview(){
   
    const [searchParams, setSearchParams] = useSearchParams();
    const [options, setOptions] = useState({
        color: "Light",
        coupons: false,
        shipping:false,

    })
   useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams, "CurrentParams preview principal "); 
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

    function handleChange(){

    }

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
                     <button className={styles.Left}><DesktopOutlined /></button>
                     <button className={styles.Right}><MobileOutlined /></button>
                </div>
                <button className={styles.Language}> <label>Customer location  <Popover content="Checkout adapts to your costumer's location and preferences to show the language and payment methods most likely to increase conversion." className={styles.Popover}><InfoCircleFilled/></Popover> | </label>
                <select type="select"  onChange={handleChange} defaultValue="United States">
                    <option value="Argentina">Argentina</option>
                    <option value="United States">United States</option>
                </select>
                </button>
            </div>
            </div>
           
        </div>
    
    <div className={styles.App}>
    <iframe src={`http://localhost:3001/preview${options.color === "Dark" ? "?color=dark" : "?color=Light"}${options.coupons === "true"? "&coupons=true": ""}${options.shipping === "true"? "&shipping=true": ""}`}
             title="Configure-Checkout" width="100%" height="100%" scrolling={options.shipping === "true" ? "yes" : "no"}/> 
        </div>
    </div>
    )
}

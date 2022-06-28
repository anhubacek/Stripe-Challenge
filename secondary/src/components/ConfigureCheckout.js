import {React, useEffect, useState}  from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import styles from '../styles/ConfigureCheckout.module.css'


export default function ConfigureCheckout (){
    const [searchParams, setSearchParams] = useSearchParams();
    const [options, setOptions] = useState({
        color: "Light",

    })
    const colorMode = searchParams.get("color")
    console.log(colorMode)

    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams]);
        console.log(currentParams); 
        currentParams.color? setOptions({
            color: currentParams.color
        })
      : setOptions({
        color: "Light"
    }) }, [searchParams]);
 
    return(
        <div className={styles.ConfigureCheckout}>
            <div className={styles.Content}>
                <div className={styles.Bar}>
                    <div className={styles.ChromeButtons}>
                        <div className={styles.FakeChromeButton}></div>
                        <div className={styles.FakeChromeButton}></div>
                        <div className={styles.FakeChromeButton}></div>
                    </div>
                    <div className={styles.ChromeBar}>
                    <span>checkoutstripe.com</span>
                    </div>
                </div>
                <div className={styles.Checkout}>
                    <div className={options.color === "Light" ? styles.LightLeft : styles.DarkLeft}>
                    {/* <div className={styles.DarkLeft}></div> */}

                    </div> 

                    <div className={styles.Right}></div>
                </div>
            </div>
        </div>
    )
}
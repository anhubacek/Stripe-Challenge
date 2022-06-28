import {React, useEffect, useState}  from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import styles from '../styles/ConfigureCheckout.module.css'
import {TrademarkCircleFilled} from '@ant-design/icons'


export default function ConfigureCheckout (){
    const [searchParams, setSearchParams] = useSearchParams();
    const [options, setOptions] = useState({
        color: "Light",

    })
   

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
                        <div className={styles.Logo}>
                        <TrademarkCircleFilled />
                        <span>Rebill</span>
                        </div>
                        <div className={styles.Price}>
                            <div className={styles.GrayTemplate}></div>
                            <span>$129,00</span>
                        </div>
                        <div className={styles.Detail}>
                            <div className={styles.DetailTemplate}>
                                <div className={styles.Image}></div>
                                <div className={styles.Middle}>
                                    <div className={styles.GrayTemplateTop}></div>
                                    <div className={styles.GrayTemplateBottom}></div>
                                </div>
                                <div className={styles.RightTemplate}></div>
                            </div>
                            <div className={styles.DetailTemplate}>
                                <div className={styles.Image}></div>
                                <div className={styles.Middle}>
                                    <div className={styles.GrayTemplateTop}></div>
                                    <div className={styles.GrayTemplateBottom}></div>
                                </div>
                                <div className={styles.RightTemplate}></div>
                            </div>
                        </div>
                        <div className={styles.CouponsTop}>
                            <div className={styles.GrayTemplate}></div>
                            <div className={styles.GrayTemplate}></div>
                        </div>
                        <div className={styles.CouponsButton}>
                            <span>Add promotion code</span>
                        </div>
                        <div className={styles.Shipping}>
                            <div className={styles.ShippingDetails}>
                                <span>Free Shipping</span>
                                <span>5-7 business days</span>
                            </div>
                                <span>Free</span>
                        </div>
                        <div className={styles.CouponsBottom}>
                            <div className={styles.GrayTemplate}></div>
                            <div className={styles.GrayTemplate}></div>
                        </div>
                        <div className={styles.Footer}>
                            <div className={styles.GrayTemplate}></div>
                            <span>|</span>
                            <div className={styles.GrayTemplate}></div>
                        </div>


                    </div> 

                    <div className={styles.Right}></div>
                </div>
            </div>
        </div>
    )
}
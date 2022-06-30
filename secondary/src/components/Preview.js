import {React, useEffect, useState}  from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import styles from '../styles/Preview.module.css'
import {TrademarkCircleFilled, ArrowLeftOutlined, DownOutlined,
    CheckOutlined, LockFilled} from '@ant-design/icons'


export default function Preview (){
    const [searchParams, setSearchParams] = useSearchParams();
    const [options, setOptions] = useState({
        color: "Light",
        coupons: false,
        shipping:false,

    })
    useEffect(() => console.log(options, "Preview Iframe Options"))
    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams]);
      console.log(currentParams, "ESTO ES CURRENT PARAMS"); 
        setOptions({
            color: currentParams.color,
            coupons: currentParams.coupons,
            shipping: currentParams.shipping,
        })
       
     }, [searchParams]);
 
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
                    <span><LockFilled className={styles.LockedIcon}/> checkoutstripe.com</span>
                    </div>
                </div>
                <div className={styles.Checkout}>
                    <div className={options.color === "Light" ? styles.LightLeft : styles.DarkLeft}>
                        <div className={styles.Logo}>
                        <ArrowLeftOutlined className={styles.LeftArrow}/>
                        <div className={styles.BrandIcon}>R</div>
                        <span>Rebill</span>
                        <p>TEST MODE</p>
                        </div>
                        <div className={styles.Price}>
                            <div className={styles.GrayTemplate}>Pay Rebill</div>
                            <span>$129,00</span>
                        </div>
                        <div className={styles.Detail}>
                            <div className={styles.DetailTemplate}>
                                <div className={styles.Image}></div>
                                <div className={styles.Middle}>
                                    <div className={styles.GrayTemplateTop}>The Pure Set</div>
                                    <div className={styles.GrayTemplateBottom}>Qty</div>
                                </div>
                                <div className={styles.RightTemplate}>$65,00</div>
                            </div>
                            <div className={styles.DetailTemplate}>
                                <div className={styles.Image}></div>
                                <div className={styles.Middle}>
                                    <div className={styles.GrayTemplateTop}>Pure glow cream</div>
                                    <div className={styles.GrayTemplateBottom}>Qty</div>
                                </div>
                                <div className={styles.RightTemplate}>$64,00</div>
                            </div>
                        </div>
                        <div className={options.coupons === "true"|| options.shipping === "true"? styles.CouponsTop : styles.CouponsTopHidden}>
                            <div className={styles.GrayTemplate}></div>
                            <div className={styles.GrayTemplate}></div>
                        </div>
                        <div className={options.coupons === "true" ? styles.CouponsButton : styles.CouponsButtonHidden}>
                            <span>Add promotion code</span>
                        </div>
                        <div className={options.shipping === "true"? styles.Shipping : styles.ShippingHidden}>
                            <div className={styles.ShippingDetails}>
                                <span>Free Shipping</span>
                                <span>5-7 business days</span>
                            </div>
                                <span>Free</span>
                        </div>
                        <div className={options.coupons === "true"|| options.shipping === "true"? styles.CouponsBottom : styles.CouponsBottomHidden}>
                            <div className={styles.GrayTemplate}></div>
                            <div className={styles.GrayTemplate}></div>
                        </div>
                        <div className={styles.Footer}>
                            <div className={styles.GrayTemplate}></div>
                            <span>|</span>
                            <div className={styles.GrayTemplate}></div>
                        </div>


                    </div> 

                    <div className={styles.Right}>
                        <div className={styles.Content}>
                            <div className={styles.TemplateOne}></div>
                            <div className={styles.TemplateTwo}>
                                <div className={styles.Line}></div>
                                <div className={styles.Middle}></div>
                                <div className={styles.Line}></div>
                            </div>
                            <div className={options.shipping === "true" ? styles.TemplateMiddle : styles.TemplateMiddleHidden}>
            
                            </div>
                            <div className={styles.TemplateThree}>
                            <div className={styles.Top}></div>
                            <div className={styles.Bottom}></div>
                            </div>
                            <div className={options.shipping === "true" ? styles.Shipping : styles.ShippingHidden}>
                            <label className={styles.AddressLabel}>Shipping Adress</label>
                                <div className={styles.Name}>Name</div>
                                <div className={styles.Country}><span>United States</span> <DownOutlined /></div>
                                <div className={styles.AddressInput}>Address</div>
                                <label className={styles.EnterAddressLabel}>Enteradress manually</label>
                                <label className={styles.MethodLabel}>Shipping Method</label>
                                <div className={styles.Free}>
                                    <div className={styles.Left}> </div>
                                    <div className={styles.Middle}>
                                        <span>Free Shipping</span>
                                        <p>5-7 business days</p>
                                    </div>
                                    <div className={styles.Right}>Free</div>
                                </div>
                                <div className={styles.Next}>
                                    <div className={styles.Left}></div>
                                    <div className={styles.Middle}>
                                    <span>Next day air</span>
                                        <p>1 business days</p>
                                    </div>
                                    <div className={styles.Right}>$15,00</div>
                                </div>
                            </div>
                            <div className={options.shipping === "true" ? styles.TemplateFourHidden : styles.TemplateFour}>
                            <div className={styles.Top}></div>
                            <div className={styles.Bottom}></div>
                            </div>
                            <div className={options.shipping === "true" ? styles.TemplateFiveHidden : styles.TemplateFive}>
                            <div className={styles.Top}></div>
                            <div className={styles.Bottom}></div>
                            </div>
                            <div className={styles.TemplateSix}>
                            <div className={styles.Top}></div>
                            <div className={styles.Bottom}></div>
                            </div>
                            <div className={options.shipping === "true" ? styles.Checked : styles.CheckedHidden}>
                            <CheckOutlined />
                            <span>Billing address is same as shipping</span>
                            </div>
                            <button className={styles.PayButton}>Pay $65,00</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
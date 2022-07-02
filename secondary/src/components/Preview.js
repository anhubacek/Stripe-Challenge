import {React, useEffect, useState, useContext}  from 'react'
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
                            <div className={styles.GrayTemplate}>Subtotal</div>
                            <div className={styles.GrayTemplate}>$129,00</div>
                        </div>
                        <div className={options.coupons === "true" ? styles.CouponsButton : styles.CouponsButtonHidden}>
                            <span>Add promotion code</span>
                        </div>
                        <div className={options.shipping === "true"? styles.Shipping : styles.ShippingHidden}>
                            <div className={styles.ShippingDetails}>
                                <span>Shipping</span>
                                <p>Free Shipping (5-7 business days)</p>
                            </div>
                                <span>Free</span>
                        </div>
                        <div className={options.coupons === "true"|| options.shipping === "true"? styles.CouponsBottom : styles.CouponsBottomHidden}>
                            <div className={styles.GrayTemplate}>Total due</div>
                            <div className={styles.GrayTemplate}>$129,00</div>
                        </div>
                        <div className={styles.Footer}>
                            {/* <div className={styles.GrayTemplate}>Powered by</div>  */}
                            <span>Powered by</span>
                            <span className={styles.Stripe}>stripe</span>
                            <span>|</span>
                            <span>Terms privacy</span>
                            {/* <div className={styles.GrayTemplate}>Terms  Privacy</div> */}
                        </div>


                    </div> 

                    <div className={styles.Right}>
                        <div className={styles.Content}>
                            <div className={styles.TemplateOne}>Pay</div>
                            <div className={styles.TemplateTwo}>
                                <div className={styles.Line}></div>
                                <div className={styles.Middle}>Or pay with card</div>
                                <div className={styles.Line}></div>
                            </div>
                            <div className={options.shipping === "true" ? styles.TemplateMiddle : styles.TemplateMiddleHidden}>
                                Shipping information
                            </div>
                            <div className={styles.TemplateThree}>
                            <div className={styles.Top}>Email</div>
                            <input type="text" className={styles.Bottom}/>
                            </div>
                            <div className={options.shipping === "true" ? styles.Shipping : styles.ShippingHidden}>
                            <label className={styles.AddressLabel}>Shipping Adress</label>
                                <input type="text" className={styles.Name} placeholder="Name"/>
                                <select className={styles.Country}type="select"  defaultValue="United States" >
                                    <option value="Argentina">Argentina</option>
                                    <option value="United States">United States</option>
                                 </select>
                                <input type="text" className={styles.AddressInput} placeholder="Address"/>
                                <label className={styles.EnterAddressLabel}>Enter adress manually</label>
                                <label className={styles.MethodLabel}>Shipping Method</label>
                                <div className={styles.Free}>
                                    <input type="radio" className={styles.Left}/>
                                    <div className={styles.Middle}>
                                        <span>Free Shipping</span>
                                        <p>5-7 business days</p>
                                    </div>
                                    <div className={styles.RightShipping}>Free</div>
                                </div>
                                <div className={styles.Next}>
                                <input type="radio"className={styles.Left}/>
                                    <div className={styles.Middle}>
                                    <span>Next day air</span>
                                        <p>1 business days</p>
                                    </div>
                                    <div className={styles.RightShipping}>$15,00</div>
                                </div>
                            </div>
                            <div className={options.shipping === "true" ? styles.PaymentDetails : styles.PaymentDetailsHidden}>
                                Payment details
                            </div>
                            <div className={styles.TemplateFour}>
                            <div className={styles.Top}>Card information</div>
                            <input type="text" className={styles.Bottom}/>
                            <div className={styles.Other}>
                            <input type="text" className={styles.Data1}/>
                            <input type="text" className={styles.Data2}/>
                            </div>
                            </div>
                            <div className={options.shipping === "true" ? styles.TemplateFiveHidden : styles.TemplateFive}>
                            <div className={styles.Top}>Name on card</div>
                            <input type="text" className={styles.Bottom}/>
                            </div>
                            <div className={options.shipping === "true" ? styles.TemplateSixHidden :styles.TemplateSix}>
                            <div className={styles.Top}>Country or region</div>
                            <select className={styles.Country}type="select"  defaultValue="United States" >
                                    <option value="Argentina">Argentina</option>
                                    <option value="United States">United States</option>
                                 </select>
                            <input type="text" placeholder="ZIP" className={styles.Bottom}/>
                            </div>
                            <div className={options.shipping === "true" ? styles.Checked : styles.CheckedHidden}>
                            <input type="checkbox"/>
                            <span>Billing address is same as shipping</span>
                            </div>
                            <button className={styles.PayButton}>Pay</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
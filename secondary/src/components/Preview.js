import {React, useEffect, useState, useContext}  from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import styles from '../styles/Preview.module.css'
import {TrademarkCircleFilled, ArrowLeftOutlined, DownOutlined,
    CheckOutlined, LockFilled} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';


export default function Preview (){
    const [t, i18n] = useTranslation("global")
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

    const [input, setInput] = useState({
        email: "",
    })

    const[language, setLanguage] =useState("en");
    console.log(language)
    // useEffect(() => i18n.changeLanguage(language), [searchParams, language])
    useEffect(() => {changeLanguage()}, [language])
    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams]);
      console.log(currentParams, "CURRENT PARAMS"); 
        setOptions({
            color: currentParams.color,
            coupons: currentParams.coupons,
            shipping: currentParams.shipping,
        })
        setDevice({
            desktop: currentParams.desktop,
            mobile: currentParams.cel
        })
        setLanguage(currentParams.lan)
        
       
     }, [searchParams]);

     function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })

     }

     function changeLanguage(){
        i18n.changeLanguage(language)
     }
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
                <div className={styles.ResponsiveHeader}>
                    <div className={options.color === "light" ? styles.ResponsiveLightHeader : styles.ResponsiveDarkHeader} >
                        <ArrowLeftOutlined className={styles.LeftArrow}/>
                        <div className={styles.BrandIcon}>R</div>
                        <span>Rebill</span>
                        <p>TEST MODE</p>
                        </div>
                        </div>
                <div className={styles.Checkout}>
                    <div className={options.color === "light" ? styles.LightLeft : styles.DarkLeft}>
                    <div className={styles.ResponsiveLeft}>
                    <div className={styles.BigItems} >
                            <div className={styles.ImgItems} >

                            </div>
                        </div>
                    </div>
                        <div className={styles.Logo}>
                        <ArrowLeftOutlined className={styles.LeftArrow}/>
                        <div className={styles.BrandIcon}>R</div>
                        <span>Rebill</span>
                        <p>TEST MODE</p>
                        </div>
                       
                        <div className={styles.Price}>
                            <div className={styles.GrayTemplate}>{t("left.Pay-Rebill")}</div>
                            <span>{t("left.$129")}</span>
                        </div>
                        <div className={styles.Detail}>
                            <div className={styles.DetailTemplate}>
                                <div className={styles.Image}></div>
                                <div className={styles.Middle}>
                                    <div className={styles.GrayTemplateTop}>The Pure Set</div>
                                    <div className={styles.GrayTemplateBottom}>{t("left.Qty")}</div>
                                </div>
                                <div className={styles.RightTemplate}>{t("left.$65")}</div>
                            </div>
                            <div className={styles.DetailTemplate}>
                                <div className={styles.Image}></div>
                                <div className={styles.Middle}>
                                    <div className={styles.GrayTemplateTop}>Pure glow cream</div>
                                    <div className={styles.GrayTemplateBottom}>{t("left.Qty")}</div>
                                </div>
                                <div className={styles.RightTemplate}>{t("left.$64")}</div>
                            </div>
                        </div>
                        <div className={options.coupons === "true"|| options.shipping === "true"? styles.CouponsTop : styles.CouponsTopHidden}>
                            <div className={styles.GrayTemplate}>Subtotal</div>
                            <div className={styles.GrayTemplate}>{t("left.$129")}</div>
                        </div>
                        <div className={options.coupons === "true" ? styles.CouponsButton : styles.CouponsButtonHidden}>
                            <span>{t("left.Add-promotion-code")}</span>
                        </div>
                        <div className={options.shipping === "true"? styles.Shipping : styles.ShippingHidden}>
                            <div className={styles.ShippingDetails}>
                                <span>{t("left.Shipping")}</span>
                                <p>{t("left.Free-Shipping-(5-7-business-days)")}</p>
                            </div>
                                <span>{t("left.Free")}</span>
                        </div>
                        <div className={options.coupons === "true"|| options.shipping === "true"? styles.CouponsBottom : styles.CouponsBottomHidden}>
                            <div className={styles.GrayTemplate}>{t("left.Total-due")}</div>
                            <div className={styles.GrayTemplate}>{t("left.$129")}</div>
                        </div>
                        <div className={styles.Footer}>
                            <span>Powered by</span>
                            <span className={styles.Stripe}>stripe</span>
                            <span>|</span>
                            <span>{t("left.Terms-privacy")}</span>
                        </div>


                    </div> 
                    
                    <div className={styles.Right}>
                        <div className={styles.Content}>
                            <div className={styles.TemplateOne}>Pay</div>
                            <div className={styles.TemplateTwo}>
                                <div className={styles.Line}></div>
                                <div className={styles.Middle}>{t( "right.or-pay-with-card")}</div>
                                <div className={styles.Line}></div>
                            </div>
                            <div className={options.shipping === "true" ? styles.TemplateMiddle : styles.TemplateMiddleHidden}>
                                { t("right.Shipping-information")}
                            </div>
                            <div className={styles.TemplateThree}>
                            <div className={styles.Top}> { t("right.Email")} </div>
                            <input type="text" 
                            name="email" 
                            autoComplete='off' 
                            value={input.email}
                            onChange={handleChange}
                            className={!input.email || !input.email.match(
                            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i )? styles.ErrorInput : styles.Bottom}/>
                            { !input.email ? <p className={styles.Errors}>{t("right.Please-complete-your-email")}</p> : null}
                            { input.email && !input.email.match(
                            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ) ? <p className={styles.Errors}>{t("right.Please-enter-a-valid-email")}</p> : null}
                            </div>
                            <div className={options.shipping === "true" ? styles.Shipping : styles.ShippingHidden}>
                            <label className={styles.AddressLabel}>{t("right.Shipping-Adress")}</label>
                                <input type="text" className={styles.Name} placeholder={t("right.Name")}/>
                                <select className={styles.Country}type="select"  defaultValue="United States" >
                                    <option value="Argentina">Argentina</option>
                                    <option value="United States">{t("right.United-States")}</option>
                                 </select>
                                <input type="text" className={styles.AddressInput} placeholder={t("right.Address")}/>
                                <label className={styles.EnterAddressLabel}>{t("right.Enter-address-manually")}</label>
                                <label className={styles.MethodLabel}>{t("right.Shipping-Method")}</label>
                                <div className={styles.Free}>
                                    <input type="radio" className={styles.Left}/>
                                    <div className={styles.Middle}>
                                        <span>{t("right.Free-Shipping")}</span>
                                        <p>{t("right.5-7-business-days")}</p>
                                    </div>
                                    <div className={styles.RightShipping}>{t("right.Free")}</div>
                                </div>
                                <div className={styles.Next}>
                                <input type="radio"className={styles.Left}/>
                                    <div className={styles.Middle}>
                                    <span>{t("right.Next-day-air")}</span>
                                        <p>{t("right.1-business-days")}</p>
                                    </div>
                                    <div className={styles.RightShipping}>$15,00</div>
                                </div>
                            </div>
                            <div className={options.shipping === "true" ? styles.PaymentDetails : styles.PaymentDetailsHidden}>
                               {t("right.Payment-details")}
                            </div>
                            <div className={styles.TemplateFour}>
                            <div className={styles.Top}>{t("right.Card-information")}</div>
                            <input type="text" className={styles.Bottom}/>
                            <div className={styles.Other}>
                            <input type="text" className={styles.Data1}/>
                            <input type="text" className={styles.Data2}/>
                            </div>
                            </div>
                            <div className={options.shipping === "true" ? styles.TemplateFiveHidden : styles.TemplateFive}>
                            <div className={styles.Top}>{t("right.Name-on-card")}</div>
                            <input type="text" className={styles.Bottom}/>
                            </div>
                            <div className={options.shipping === "true" ? styles.TemplateSixHidden :styles.TemplateSix}>
                            <div className={styles.Top}>{t("right.Country-or-region")}</div>
                            <select className={styles.Country}type="select"  defaultValue="United States" >
                                    <option value="Argentina">Argentina</option>
                                    <option value="United States">{t("right.United-States")}</option>
                                 </select>
                            <input type="text" placeholder={t("right.ZIP")} className={styles.Bottom}/>
                            </div>
                            <div className={options.shipping === "true" ? styles.Checked : styles.CheckedHidden}>
                            <input type="checkbox"/>
                            <span>{t("right.Billing-address-is-same-as-shipping")}</span>
                            </div>
                            <button className={styles.PayButton}>{t("right.Pay")}</button>
                        </div>
                        
                    </div>
                    <div className={styles.ResponsiveFooter}>
                        <div className={styles.TopResponsiveFooter}>
                            <span>Powered by </span>
                            <span className={styles.Stripe}>stripe</span>
                            </div>
                            <div className={styles.BottomResponsiveFooter}>    
                            <span>{t("left.Terms-privacy")}</span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
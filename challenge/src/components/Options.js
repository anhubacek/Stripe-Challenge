import React,{useContext, useState } from 'react'

const OptionsContext = React.createContext()
const OptionsUpdateColorContext = React.createContext()
const OptionsUpdateCouponsContext = React.createContext()
const OptionsUpdateShippingContext = React.createContext()

export function useOptionsContext(){
    return useContext(OptionsContext)
}

export function useOptionsUpdateColorContext(){
    return useContext(OptionsUpdateColorContext)
}

export function useOptionsUpdateCouponsContext(){
    return useContext(OptionsUpdateCouponsContext)
}

export function useOptionsUpdateShippingContext(){
    return useContext(OptionsUpdateShippingContext)
}


export function Options({children}){

    const [options, setOptions] = useState({
        color: "Light",
        coupons: false,
        shipping: false,

    });

    function handleChangeColor(e){
        e.preventDefault();
        setOptions({
            ...options,
            [e.target.name] : e.target.value
          
        })
    }

    const onChangeCoupons = (checked) => {
        setOptions({
            ...options,
            coupons : checked
        });
      };

      const onChangeShipping = (checked) => {
        setOptions({
            ...options,
            shipping : checked
        });
      };

      return(
        <OptionsContext.Provider value={options}>
            <OptionsUpdateColorContext.Provider value={handleChangeColor} >
            <OptionsUpdateCouponsContext.Provider value={onChangeCoupons} >
            <OptionsUpdateShippingContext.Provider value={onChangeShipping}>
                {children}
            </OptionsUpdateShippingContext.Provider>
            </OptionsUpdateCouponsContext.Provider>
            </OptionsUpdateColorContext.Provider>
           
        </OptionsContext.Provider>
      )

}
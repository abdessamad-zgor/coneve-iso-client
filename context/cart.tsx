
import React, { createContext,  useContext, useReducer } from "react";

let initialState  = ():{dispatch:(obj: {type?:string, payload?:any})=>void,state:{products: Array<any>}}=>{
    return {
        dispatch: ()=>{},
        state: {
            products: []
        }
    }
}

let CartContext = createContext(initialState())

let cartReducer = (state:any, action:any)=>{
    switch(action?.type){
        case "ADD_PRODUCT":
            return {products: [...state.products, action?.payload]}
        case "REMOVE_PRODUCT":
            let newCart = state.products.filter((v:any)=>v.slug!=action.payload.slug)
            return {products: newCart}
        default:
            return state
    }
}

export let useCart = ()=>useContext(CartContext)


export function CartProvider(props: {children: React.ReactNode}){
    let [state, dispatch] = useReducer(cartReducer, initialState())
    // @ts-ignore
    return <CartContext.Provider value={{state, dispatch}}>{props.children}</CartContext.Provider>
}
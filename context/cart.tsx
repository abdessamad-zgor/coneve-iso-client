
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
            return {...state, state: {products: [...state.state.products, action?.payload]}}
        case "REMOVE_PRODUCT":
            let newCart = state.state.products.filter((v:any)=>v.slug!=action.payload.slug)
            return {...state, state: {products: newCart}}
        default:
            return state
    }
}

export let useCart = ()=>{return useContext(CartContext)}


export function CartProvider(props: {children: React.ReactNode}){
    let [state, dispatch] = useReducer(cartReducer, initialState())
    // @ts-ignore
    return <CartContext.Provider value={{state, dispatch}}>{props.children}</CartContext.Provider>
}
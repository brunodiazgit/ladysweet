/* eslint-disable react/prop-types */
import { cartContext } from "./CartContext"
import { useState } from "react"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (obj)=>{
        setCart([...cart, obj])
    }

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0 )
    
    const getTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <cartContext.Provider value={{cart, addToCart, totalQuantity, getTotal}}>
            {children} 
        </cartContext.Provider>
    )
}

export default CartProvider


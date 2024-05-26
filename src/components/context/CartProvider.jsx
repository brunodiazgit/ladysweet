/* eslint-disable react/prop-types */
import { cartContext } from "./CartContext"
import { useState } from "react"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (obj) => {
        const itemInCart = cart.find(item => item.id === obj.id);

        if (itemInCart) {
            const updatedCart = cart.map(item => {
                if (item.id === obj.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {

            setCart([...cart, { ...obj, quantity: 1 }]);
        }
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
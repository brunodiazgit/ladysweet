/* eslint-disable react/prop-types */
import { useCart } from './context/CartContext'
import { useState } from 'react'

function ItemCount({ product }) {
    const [quantity, setQuantity] = useState(1)
    const { addToCart} = useCart()

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart({ ...product, quantity })
            setQuantity(1)
        }
    }

    const handleInputValue = e => {
        const value = parseInt(e.target.value, 10)
        setQuantity(value >= 1 ? value : 1)
    }


    return (
        <div className="flex gap-x-8">
            <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                className="w-16 px-2 py-1 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-800 focus:border-pink-800 text-center"
                onChange={handleInputValue}
            />
            <button onClick={handleAddToCart} className="flex justify-center items-center h-14 w-48 rounded-xl bg-pink-500 text-white text-xl hover:bg-pink-800">Add to cart</button>
        </div>
    )
}

export default ItemCount
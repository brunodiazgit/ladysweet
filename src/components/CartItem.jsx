/* eslint-disable react/prop-types */
import { useCart } from "./context/CartContext"

function CartItem({item}) {

    const {updateCartQuantity, removeFromCart} = useCart() 

    return (
        <div className="flex justify-between items-center w-full max-w-4xl gap-x-10 mb-4">
            <div className="flex items-center gap-x-10">
                <img src={item.image_link} alt={item.name} />
                <div>
                    <h1 className=" text-xl">{item.name}</h1>
                    <p className="text-xl">U$S {item.price}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    onClick={() => updateCartQuantity(item.id, -1)}
                    className="bg-red-300 text-gray-800 px-3 py-3 rounded"
                >-</button>
                <span className="px-4">{item.quantity}</span>
                <button
                    onClick={() => updateCartQuantity(item.id, 1)}
                    className="bg-green-300 text-gray-800 px-3 py-3 rounded "
                >+</button>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 "
                >
                    <img className="w-8" src="../../public/trashIcon.svg" alt="Trash Icon" />
                </button>
            </div>
        </div>
    )
}

export default CartItem
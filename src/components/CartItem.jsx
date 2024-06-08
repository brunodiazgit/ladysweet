/* eslint-disable react/prop-types */
import { useCart } from "./context/CartContext"

function CartItem({item}) {

    const {updateCartQuantity, removeFromCart} = useCart() 

    return (
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center w-full max-w-4xl  mb-4">
            <div className="flex flex-col md:flex-row items-center gap-x-10">
                <img src={item.image_link} alt={item.name} />
                <div className="">
                    <h1 className="text-xl ">{item.name}</h1>
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
                    <img className="w-8" src={`${import.meta.env.BASE_URL}trashIcon.svg`} alt="Ícono de Basura" />
                </button>
            </div>
        </div>
    )
}

export default CartItem
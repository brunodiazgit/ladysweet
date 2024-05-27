import { useCart } from "./context/CartContext";

function Cart() {
    const { cart, getTotal, updateCartQuantity, removeFromCart } = useCart();

    return (
        <div className="flex flex-col items-center pt-20 pb-20">
            {cart.map(item => (
                <div className="flex justify-between items-center w-full max-w-4xl gap-x-10 mb-4" key={item.id}>
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
            ))}
            <button className=" mt-10 flex justify-center items-center w-56 h-20 text-2xl bg-pink-700 text-white rounded-xl hover:bg-pink-500">
                Checkout  U$S {getTotal}
            </button>
        </div>
    );
}

export default Cart;

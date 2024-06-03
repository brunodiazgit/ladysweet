import { useCart } from "./context/CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

function Cart() {
    const { cart, getTotal } = useCart()

    return (
        <div className="flex flex-col items-center min-h-screen pt-20">
            {cart.map(item => (
                <CartItem item={item} key={item.id} />
            ))}
            {cart.length ? <Link to={'/checkout'}>
                <button className=" mt-10 flex justify-center items-center w-56 h-20 text-2xl bg-pink-700 text-white rounded-xl hover:bg-pink-500">
                    Checkout  U$S {getTotal}
                </button>
            </Link> : <div className="flex flex-col justify-center items-center gap-6"><h1 className=" text-3xl"><b>The cart is empty</b></h1> <Link className=" text-2xl text-pink-700 underline" to={'/'}>Go home</Link> </div>}
        </div>
    );
}

export default Cart

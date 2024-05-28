import { useCart } from "./context/CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

function Cart() {
    const { cart, getTotal} = useCart()

    return (
        <div className="flex flex-col items-center pt-20 pb-20">
            {cart.map(item => (
                <CartItem item={item} key={item.id}/>
            ))}
            <Link to={'/checkout'}>
            <button className=" mt-10 flex justify-center items-center w-56 h-20 text-2xl bg-pink-700 text-white rounded-xl hover:bg-pink-500">
                Checkout  U$S {getTotal}
            </button>
            </Link>
        </div>
    );
}

export default Cart;

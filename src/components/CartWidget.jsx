/* eslint-disable react/prop-types */
import { useCart } from "./context/CartContext"
import { Link } from "react-router-dom"

function CartWidget({ img }) {
    let { totalQuantity } = useCart()

    return (
        <Link to={'/cart'}>
            <div className="flex">
                <img src={img} alt="Icon cart" className=" object-contain md:w-8 md:h-8 laptop:w-12 laptop:h-12" />
                <p className=" text-green-500">{totalQuantity}</p>
            </div>
        </Link>
    )
}

export default CartWidget
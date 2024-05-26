import { useCart } from "./context/CartContext"
function Cart() {
    const { cart } = useCart()

    return (
        <>
            {cart.map(item => (
                <>
                    <img src={item.image_link} alt={item.name}  key={item.id} />
                    <h1>{item.name}</h1>
                    <p>{item.price}</p>
                </>
            ))}
        </>
    )
}

export default Cart
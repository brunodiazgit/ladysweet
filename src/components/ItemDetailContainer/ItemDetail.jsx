/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount"

function ItemDetail({ product }) {
    return (
        <>
            <div className="flex justify-center items-center">
                <img className="object-contain h-full w-full" src={product.image_link} alt={product.name} />
            </div>
            <div className="flex flex-col gap-4 max-w-xl">
                <h1 className="font-bold text-2xl ">{product.name}</h1>
                <p className="text-xl">{product.description}</p>
                <p className="text-2xl">U$S {product.price}</p>
                <label htmlFor="quantity" className="text-md font-medium text-gray-700">
                    Quantity:
                </label>
                <ItemCount product={product}/>
            </div>
        </>
    )
}

export default ItemDetail
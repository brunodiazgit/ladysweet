/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount"

function ItemDetail({ product }) {
    return (
        <div className="flex flex-col items-center md:flex-row md:items-start justify-center gap-5 md:gap-20">
            <div >
                <img className="object-contain h-full w-full md:mt-8" src={product.image_link} alt={product.name} />
            </div>
            <div className="flex flex-col gap-4 max-w-sm laptop:max-w-xl">
                <h1 className="font-bold text-2xl ">{product.name}</h1>
                <p className="text-xl">{product.description}</p>
                <p className="text-2xl">U$S {product.price}</p>
                <label htmlFor="quantity" className="text-md font-medium text-gray-700">
                    Quantity:
                </label>
                <ItemCount product={product}/>
            </div>
        </div>
    )
}

export default ItemDetail
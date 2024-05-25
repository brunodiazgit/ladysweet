/* eslint-disable react/prop-types */
import { Link } from "react-router-dom" 

function Item({ product }) {
    return (
        <Link to={`/item/${product.id}`}>
            <div className='h-96 w-64 transition-transform transform-gpu hover:scale-110 transition-delay duration-500' >
                <div className='flex justify-center items-center h-2/3 w-full'>
                    <img src={product.image_link} alt={product.name} className='object-contain' />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='my-2'>{product.name}</h1>
                    <p>U$S {product.price}</p>
                    <div className='flex gap-1'>
                        {product.product_colors && product.product_colors.length > 0 ? (
                            product.product_colors.map((color, index) => (
                                <span key={index} className='flex items-center'>
                                    <span
                                        className='inline-block w-4 h-4 rounded-full'
                                        style={{ backgroundColor: color.hex_value }}
                                    ></span>
                                </span>
                            ))
                        ) : ''
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item
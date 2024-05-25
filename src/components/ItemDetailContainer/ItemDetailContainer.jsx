import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function ItemDetailContainer() {
    let { id } = useParams()

    const [detail, setDetail] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json?brand=maybelline`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json()
                setDetail(data)
            } catch (e) {
                console.log("there was an error: " + e)
            }

        }
        fetchApi()
    }, [id])

    return (
        <div className="flex justify-center gap-48 items-center pt-28">
            <div className="flex justify-center items-center">
                <img className="object-contain h-full w-full" src={detail.image_link} alt={detail.name} />
            </div>
            <div className="flex flex-col gap-4 max-w-xl">
                <h1 className="font-bold text-2xl ">{detail.name}</h1>
                <p className="text-xl">{detail.description}</p>
                <p className="text-2xl">U$S {detail.price}</p>
                <button className="flex justify-center items-center h-14 w-48 rounded-xl bg-pink-500 text-white text-xl hover:bg-pink-800">Add to cart</button>
            </div>
        </div>
    )
}

export default ItemDetailContainer
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"

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
            <ItemDetail product={detail} />
        </div>
    )
}

export default ItemDetailContainer
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import Loader from "../Loader"

function ItemDetailContainer() {
    let { id } = useParams()

    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)

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
            } finally{
                setLoading(false)
            }

        }
        fetchApi()
    }, [id])

    return (
        <div className="flex justify-center gap-48 items-center pt-28">
            {loading ? <Loader/> : <ItemDetail product={detail} />}
        </div>
    )
}

export default ItemDetailContainer
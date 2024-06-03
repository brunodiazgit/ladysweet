import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    let { product_type } = useParams()
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                let response;
                if (product_type) {
                    response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=${product_type}`)
                } else {
                    response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
                }
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }

                const data = await response.json()
                setItems(data);
            } catch (e) {
                console.log("there was an error: " + e)
            } finally {
                setLoading(false)
            }
        };
        fetchAPI()
    }, [product_type])

    return (
        <div className='flex flex-wrap gap-8 p-8 justify-center items-center'>
            {loading ? <Loader/> : <ItemList products={items} />}
        </div>
    );
}

export default ItemListContainer

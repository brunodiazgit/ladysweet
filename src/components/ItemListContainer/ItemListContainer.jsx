import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [items, setItems] = useState([]);
    let { product_type } = useParams()
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                let response;
                if (product_type) {
                    response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=${product_type}`);
                } else {
                    response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
                }
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setItems(data);
            } catch (e) {
                console.log("there was an error: " + e)
            }
        };
        fetchAPI();
    }, [product_type]);

    return (
        <div className='flex flex-wrap gap-8 p-12 justify-center items-center'>
            <ItemList products={items} />
        </div>
    );
}

export default ItemListContainer;

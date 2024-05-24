/* eslint-disable react/prop-types */
import Item from "./Item"
function ItemList({ products }) {
    return (
        <>
            {products.map(item => (
                <Item product={item} key={item.id}/>
            ))}
        </>
    )
}

export default ItemList
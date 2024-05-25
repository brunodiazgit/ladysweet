/* eslint-disable react/prop-types */
function CartWidget({ img }) {
    return (
        <div className="flex"> 
            <img src={img} alt="Icon cart" />
            <p className=" text-green-500">1</p>
        </div>
    )
}

export default CartWidget
function CheckoutForm() {
    return (
            <form className=" h-96 w-96 flex flex-col ">
                <label htmlFor="">Name</label>
                <input type="text" />
                <label htmlFor="">Mail</label>
                <input type="text" />
                <label htmlFor="">Phone</label>
                <input type="text" />
            </form>
    )
}

export default CheckoutForm
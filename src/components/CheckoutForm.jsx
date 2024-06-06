import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import FormInput from "./FormInput"
import { useState } from 'react'
import { useCart } from './context/CartContext'

const MySwal = withReactContent(Swal)

function CheckoutForm() {
    const { setCart } = useCart()

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        MySwal.fire({
            title: <p>Order Created</p>,
            text: "Your order has been successfully created!",
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            setFormValues({
                name: '',
                email: '',
                phone: ''
            });
            setCart([])
        });
    };

    return (
        <div className="flex justify-center items-start pt-24 min-h-screen p-10">
            <form onSubmit={handleSubmit} className="w-[8.5in] h-[6in] md:h-[7in] md:w-[7in] flex flex-col gap-10 bg-gray-900 p-10 rounded-2xl">
                <h1 className="text-pink-500 font-bold text-5xl tracking-wide">LadySweet</h1>
                <FormInput
                    type='text'
                    ph='Name'
                    name='name'
                    value={formValues.name}
                    onChange={handleChange}
                />
                <FormInput
                    type='email'
                    ph='email@example.com'
                    name='email'
                    value={formValues.email}
                    onChange={handleChange}
                />
                <FormInput
                    type='number'
                    ph='Phone number'
                    name='phone'
                    value={formValues.phone}
                    onChange={handleChange}
                />
                <button type="submit" className="h-10 bg-pink-300 text-black font-bold py-2 px-4 rounded hover:bg-pink-400">Create order</button>
            </form>
        </div>
    );
}

export default CheckoutForm

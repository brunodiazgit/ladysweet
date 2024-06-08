/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    };

    return (
        <nav className="bg-black p-4 sticky top-0 z-10">
            <div className="flex items-center justify-between container mx-auto ">
                <Link to={'/'} className="text-pink-500 text-4xl  font-bold tracking-wide md:text-4xl laptop:text-5xl ">LadySweet</Link>
                <button
                    className="text-white text-2xl hover:text-pink-500 tracking-wide md:hidden"
                    onClick={handleMenuToggle}
                >
                    {menuOpen ? 'Close' : 'Menu'}
                </button>
                <ul className={`flex space-x-8 ${menuOpen ? 'flex-col bg-black mt-4 p-4 absolute top-14 left-0 right-0' : 'hidden'} md:mr-7 md: ml-7 md:flex md:space-x-8 md:mt-0 md:relative md:bg-transparent md:p-0`}>
                    <li>
                        <Link to={'/'} className="text-white text-2xl hover:text-pink-500 tracking-wide md:text-base laptop:text-2xl">Home</Link>
                    </li>
                    <li>
                        <Link to={'/maybelline/mascara'} className="text-white text-2xl  hover:text-pink-500 tracking-wide md:text-base laptop:text-2xl">Mascara</Link>
                    </li>
                    <li>
                        <Link to={'/maybelline/foundation'} className="text-white text-2xl hover:text-pink-500 tracking-wide md:text-base laptop:text-2xl">Foundation</Link>
                    </li>
                    <li>
                        <Link to={'/maybelline/eyeshadow'} className="text-white text-2xl hover:text-pink-500 tracking-wide md:text-base laptop:text-2xl">Eyeshadow</Link>
                    </li>
                    <li>
                        <Link to={'/maybelline/eyeliner'} className="text-white text-2xl hover:text-pink-500 tracking-wide md:text-base laptop:text-2xl">Eyeliner</Link>
                    </li>
                    <li>
                        <Link to={'/maybelline/lipstick'} className="text-white text-2xl hover:text-pink-500 tracking-wide md:text-base laptop:text-2xl">Lipstick</Link>
                    </li>
                </ul>
                <CartWidget img={`${import.meta.env.BASE_URL}shopping-cart-icon.png`} />
            </div>
        </nav>
    );
}

export default NavBar

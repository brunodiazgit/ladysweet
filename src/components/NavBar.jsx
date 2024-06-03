/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <nav className="bg-black p-4 sticky top-0 z-10">
            <div className="flex items-center justify-around container mx-auto min-h-14">
                <Link to={'/'} className="text-pink-500 font-bold text-5xl tracking-wide">LadySweet</Link>
                <ul className="flex space-x-8">
                    <li>
                        <Link to={'/'} className="text-white text-2xl hover:text-pink-500 tracking-wide">Home</Link>
                    </li>
                    <li>
                        <Link to={'/maybelline/mascara'} className="text-white text-2xl hover:text-pink-500 tracking-wide">Mascara</Link>
                    </li>
                    <li>
                        <Link to={'/maybelline/foundation'} className="text-white text-2xl hover:text-pink-500 tracking-wide">Foundation</Link>
                    </li>
                    <li>
                        <Link to={'/maybelline/eyeshadow'} className="text-white text-2xl hover:text-pink-500 tracking-wide">Eyeshadow</Link>
                    </li>
                    <li>
                        <Link to={'/maybelline/eyeliner'} className="text-white text-2xl hover:text-pink-500 tracking-wide">Eyeliner</Link>
                    </li>
                    <li>
                        <Link to={'/maybelline/lipstick'} className="text-white text-2xl hover:text-pink-500 tracking-wide">Lipstick</Link>
                    </li>
                </ul>
                <CartWidget img='../../public/shopping-cart-icon.png' />
            </div>
        </nav>
    )
}

export default NavBar

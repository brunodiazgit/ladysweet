import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart"
import CheckoutForm from "./components/CheckoutForm"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <BrowserRouter basename="/ladysweet">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/maybelline/:product_type" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App


import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from "./pages/Home"
import Products from './pages/ProductListing'
import Cart from "./pages/Cart"
import Checkout from './pages/Checkout'
import ProductPage from './pages/ProductPage'
import { BrowserRouter } from 'react-router-dom'
import PaymentPage from "./pages/PaymentPage";

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/products/:id" element={<ProductPage/>}></Route>
      <Route path="/checkout/payment_success" element={<PaymentPage/>}></Route>
     </Routes>
     
    </BrowserRouter>
  )
}

export default App

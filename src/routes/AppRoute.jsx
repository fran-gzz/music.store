import { Route, Routes } from "react-router-dom"
import { Cart, Home, ProductDetails, ProductsList } from "../screens"

export const AppRoute = () => {
    return (
        <div className="container">
            <Routes>
                <Route exact path="/" element={ <Home/> }/>
                <Route path="/category/:typeID" element={ <ProductsList/> }/>
                <Route path='/producto/:id' element={ <ProductDetails/> }/>
                <Route path='/cart' element={ <Cart/> }/>
            </Routes>
        </div>
    )
}

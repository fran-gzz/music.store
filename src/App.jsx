import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components";
import { Home, Guitars, Effects, ProductsList, ProductDetails, Cart } from "./screens";
import ScrollToTop from './helpers/ScrollToTop';
import { Provider } from './context';





// import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
// import { useEffect } from 'react';



const App = () => {
    return (
    <>
    <Provider>
        <Router>
            <Navbar />
            <ScrollToTop />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={ <ProductsList/> }/>
                    <Route exact path="/:typeID" element={<ProductsList/>}/>
                    <Route path='/producto/:id' element={<ProductDetails/>}/>
                    <Route path='/cart' element={ <Cart/> }/>
                </Routes>
            </div>    
        </Router>
    </Provider>
    </>
    )
}
export default App;
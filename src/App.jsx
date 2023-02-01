import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components";
import { Home, Guitars, Effects, ProductDetails, Cart } from "./screens";
import ScrollToTop from './helpers/ScrollToTop';
import { Provider } from './context';





const App = () => {
    return (
    <>
    <Provider>
        <Router>
            <Navbar />
            <ScrollToTop />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/guitarras" element={<Guitars/>}/>
                    <Route exact path="/efectos" element={<Effects/>}/>
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
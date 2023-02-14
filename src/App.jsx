import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components";
import { ProductsList, ProductDetails, Cart, Login} from "./screens";
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
                    <Route path='/login' element={ <Login/> }/>
                    <Route exact path="/" element={ <ProductsList/> }/>
                    <Route path="/:typeID" element={ <ProductsList/> }/>
                    <Route path='/producto/:id' element={ <ProductDetails/> }/>
                    <Route path='/cart' element={ <Cart/> }/>
                </Routes>
            </div>    
        </Router>
    </Provider>
    </>
    )
}
export default App;
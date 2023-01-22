import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components";
import { Home, Guitars, Effects, ProductDetails } from "./screens";




const App = () => {
    return (
    <>
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/guitarras" element={<Guitars/>}/>
                    <Route exact path="/efectos" element={<Effects/>}/>
                    <Route path='/producto/:id' element={<ProductDetails/>}/>
                </Routes>
            </div>    
        </Router>
    </>
    )
}
export default App;
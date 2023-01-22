import { Navbar } from "./components";
import { Home } from "./screens";




const App = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Home />
            </div>
            
        </>
    )
}
export default App;
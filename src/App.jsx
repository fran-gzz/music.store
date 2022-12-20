import { Navbar } from "./components";
import { Home } from "./screens";

const nombreUsuario = prompt('Ingrese su nombre');
// Esto es solo para probar 

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Home usuario={nombreUsuario} subtitulo='Sitio en construcción' />
            </div>
            
        </>
    )
}
export default App;
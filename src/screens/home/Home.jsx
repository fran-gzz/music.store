import { ProductList } from "../../components"

export const Home = () => {
    
    return (
        <>  
            <div className="animate__animated animate__fadeIn">

            <h1 className="title">Todos los productos</h1>
                <div className="grid">
                    <ProductList type='instrumento'/>
                    <ProductList type='efecto'/>
                </div>
            </div>
        </>
    )
}

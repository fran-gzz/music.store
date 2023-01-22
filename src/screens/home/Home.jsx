import { ProductList } from "../../components"


export const Home = () => {
    return (
        <>  
            <h1>Todos los productos</h1>
            <ProductList type='instrumento'/>
            <ProductList type='efecto'/>
        </>
    )
}

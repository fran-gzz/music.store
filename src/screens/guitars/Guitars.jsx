import { ProductList } from "../../components"



export const Guitars = () => {
    return (
        <>  
            <div className="animate__animated animate__fadeIn">
                <h1 className="title">Guitarras</h1>
                <div className="grid ">
                    <ProductList type='instrumento'/>
                </div>
            </div>
        </> 
    )
}

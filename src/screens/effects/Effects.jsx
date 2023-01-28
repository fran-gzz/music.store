import { ProductList } from "../../components"



export const Effects = () => {
    return (
        <>  
            <div className="animate__animated animate__fadeIn">
                <h1 className="title">Pedales de Efecto</h1>
                <div className="grid ">
                    <ProductList type='efecto'/>
                </div>
            </div>
        </>
    )
}

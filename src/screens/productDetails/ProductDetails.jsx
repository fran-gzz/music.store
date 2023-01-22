import { useParams } from "react-router-dom"
import { getProductById } from '../../helpers/getProductById'



export const ProductDetails = () => {
    const { id } = useParams();
    
    const producto = getProductById( id );
    
    const image = `/assets/${ id }.webp`

    return (
        <div className="product">
            <div className="product__image">
                <img src={image} alt={producto.nombre} />
            </div>
            <h1>{producto.nombre}</h1>
        </div>
    )
}

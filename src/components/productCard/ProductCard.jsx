import { Link } from "react-router-dom"
import { ShippingWidget } from "../shippingWidget/ShippingWidget"

export const ProductCard = ({ id, nombre, precio, imagen, envio }) => {
    

    return (
        <Link className="card" to={`/producto/${ id }`}>
            <img className="card__image" src={ imagen } alt={ nombre } />
            <p className="card__price">${ precio }</p>
            <h2 className="card__title">{ nombre }</h2>
            { 
                envio === true 
                ?  <ShippingWidget/> 
                : null
            }
        </Link>
    )
}

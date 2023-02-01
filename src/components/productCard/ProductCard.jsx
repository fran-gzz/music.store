import { Link } from "react-router-dom"
import { ShippingWidget } from "../shippingWidget/ShippingWidget"

export const ProductCard = ({ id, nombre, precio, imagen, envio, stock }) => {
    

    return (
        <Link className={ stock > 0 ? 'card' : 'card card--nostock' } to={`/producto/${ id }`}>
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

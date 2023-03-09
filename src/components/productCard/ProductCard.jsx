import { Link } from "react-router-dom"
import { ShippingWidget, Delete } from "../../components"

export const ProductCard = ({ product, isInCart = false }) => {
    return (
        <div className={ product.stock > 0 ? 'card' : 'card card--nostock' }>
            { isInCart ? <Delete name={ product.name }/> : null }
            <Link  to={`/producto/${ product.id }`}>

                <img className="card__image" src={ product.image } alt={ product.name } />

                <p className="card__price"> ${ product.price } </p>

                <h2 className="card__title"> { product.name } </h2>

                { isInCart ? <p className="card__quantity"> Cantidad: { product.quantity } </p> : null }
            
                <ShippingWidget shipping={ product.shipping }/>
            </Link>
        </div>
    )
}

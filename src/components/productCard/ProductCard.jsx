import { Link } from "react-router-dom"
import { ShippingWidget } from "../../components"

export const ProductCard = (
    { 
        id, 
        name, 
        price, 
        image,
        shipping,
        stock,
        quantity,
        isInCart = false,
        handleButton 
    }) =>
    isInCart ? (
            <div className='card animate__animated animate__fadeIn'>
                <i className="ri-close-fill card__delete" onClick={() => handleButton( name )}></i>

                <img className="card__image" src={ image } alt={ name } />

                <p className="card__price">
                    ${ price }
                </p>

                <h2 className="card__title">
                    { name }
                </h2>

                <p className="card__quantity">
                    Cantidad: { quantity }
                </p>

                <ShippingWidget shipping={ shipping }/>

                <Link className="button button--primary" to={`/producto/${ id }`}>
                    Ver producto
                </Link>
            </div>
        ) : (
            <Link className={stock > 0 ? 'card' : 'card card--nostock'} to={`/producto/${ id }`}>
                <img className="card__image" src={ image } alt={ name } />
                <p className="card__price">
                    ${ price }
                </p>
                <h2 className="card__title">
                    { name }
                </h2>
                <ShippingWidget shipping={ shipping } />
            </Link>
        );

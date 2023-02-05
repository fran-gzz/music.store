import { Link } from "react-router-dom"
import { ShippingWidget } from "../../components"

export const ProductCard = (
    { 
        id, 
        nombre, 
        precio, 
        imagen,
        envio,
        stock,
        cantidad,
        isInCart = false,
        handleButton 
    }) =>
    isInCart ? (
            <div className='card'>
                <i className="ri-close-fill card__delete" onClick={() => handleButton(nombre)}></i>

                <img className="card__image" src={imagen} alt={nombre} />

                <p className="card__price">
                    ${precio}
                </p>

                <h2 className="card__title">
                    {nombre}
                </h2>

                <p className="card__quantity">
                    Cantidad: {cantidad}
                </p>

                <ShippingWidget envio={envio}/>

                <Link className="button button--primary" to={`/producto/${id}`}>
                    Ver producto
                </Link>
            </div>
        ) : (
            <Link className={stock > 0 ? 'card' : 'card card--nostock'} to={`/producto/${id}`}>
                <img className="card__image" src={imagen} alt={nombre} />
                <p className="card__price">
                    ${precio}
                </p>
                <h2 className="card__title">
                    {nombre}
                </h2>
                <ShippingWidget envio={envio} />
            </Link>
        );

import { useMemo } from "react";
import { useParams } from "react-router-dom"
import { getProductById } from '../../helpers/getProductById'


export const ProductDetails = () => {
    const { id } = useParams();
    
    const producto = useMemo( () => getProductById( id ), [ id ]);

    return (
        <div className="product">
            <div className="product__image">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="product__info">
                <h1 className="product__title">{producto.nombre}</h1>
                <p className="product__price">${producto.precio}</p>
                <h2 className="product__subtitle">Descripción</h2>
                <p className="product__description">{producto.descripcion}</p>
                <div className="button--container">
                    <button className="button button--primary">Comprar</button>
                    <button className="button button--secondary">Añadir al carrito</button>
                </div>
            </div>
        </div>
    )
}

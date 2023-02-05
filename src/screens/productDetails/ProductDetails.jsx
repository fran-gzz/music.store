import { useMemo } from "react";
import { useParams } from "react-router-dom"

import { useCartContext } from "../../context";

import { getProductById } from '../../helpers/getProductById'

import { ItemCount, ShippingWidget } from '../../components';




export const ProductDetails = () => {

    
    
    const { id } = useParams();

    const { addToCart } = useCartContext();
    
    const producto = useMemo( () => getProductById( id ), [ id ]);

    const onAdd = ( cant ) => addToCart({ ...producto, cantidad: cant })
    

    return (
        <div className="product animate__animated animate__fadeIn">
            <div className="product__image">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="product__info">
                <h1 className="product__title">{producto.nombre}</h1>
                <p className="product__price">${producto.precio}</p>
                <ShippingWidget envio={producto.envio}/> 
                <ItemCount stock={ producto.stock } initialState={ 1 } onAdd={ onAdd }/>
                <h2 className="product__subtitle">Descripción</h2>
                <p className="product__description">{producto.descripcion}</p>
                
            </div>
        </div>
    )
}

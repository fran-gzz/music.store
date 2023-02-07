import { useMemo } from "react";
import { useParams } from "react-router-dom"

import { useCartContext } from "../../context";

import { getProductById } from '../../helpers/getProductById'

import { ItemCount, ShippingWidget } from '../../components';




export const ProductDetails = () => {

    
    
    const { id } = useParams();

    const { addToCart } = useCartContext();
    
    const product = useMemo( () => getProductById( id ), [ id ]);

    const onAdd = ( qty ) => addToCart({ ...product, quantity: qty })
    

    return (
        <div className="product animate__animated animate__fadeIn">
            <div className="product__image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product__info">
                <h1 className="product__title">
                    {product.name}
                </h1>
                <p className="product__price">
                    ${product.price}
                </p>
                <ShippingWidget shipping={product.shipping}/> 
                <ItemCount stock={ product.stock } onAdd={ onAdd }/>
                <h2 className="product__subtitle">
                    Descripción
                </h2>
                <p className="product__description">
                    {product.description}
                </p>
            </div>
        </div>
    )
}

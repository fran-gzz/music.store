import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

import { useCartContext } from "../../context";
import { ItemCount, ShippingWidget } from '../../components';


import { getItem } from "../../firebase/config";

export const ProductDetails = () => {
    
    const { id } = useParams();

    const [ product, setProduct ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(()=> {
        setIsLoading( true )
        const fetch = () => {
            getItem(id).then(response => setProduct(response)).finally( () => setIsLoading(false))
        }
        fetch()
    }, [id])

    const { addToCart } = useCartContext();
    const onAdd = ( qty ) => addToCart({ ...product, quantity: qty })
    

    return (
        <>
            {

                isLoading 
                ? <h1>Cargando...</h1>
                :
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
            }
        </>
    )
}

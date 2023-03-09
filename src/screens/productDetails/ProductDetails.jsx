import { useParams } from "react-router-dom"
import { useProduct } from "../../hooks";
import { ItemCount, ShippingWidget, Loader, Animated } from '../../components';

export const ProductDetails = () => {    

    const { id } = useParams();
    const { isLoading, product, onAdd } = useProduct({ id })

    return (
        isLoading 
        ? <Loader />
        :
        <Animated>
            <article className="product">
                <div className="product__image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product__info">
                    <h1 className="product__title"> {product.name} </h1>
                    
                    <p className="product__price"> ${product.price} </p>

                    <ShippingWidget shipping={product.shipping}/>
                        
                    <ItemCount stock={ product.stock } onAdd={ onAdd }/>

                    <h2 className="product__subtitle"> Descripción </h2>

                    <p className="product__description"> {product.description} </p>
                </div>
            </article>    
        </Animated>
    )
}

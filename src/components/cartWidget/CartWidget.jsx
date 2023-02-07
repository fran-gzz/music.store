import { Link } from "react-router-dom"
import { useCartContext } from "../../context"


export const CartWidget = () => {

    const { cart, totalQuantity } = useCartContext();
    
    return (
        <Link to='/cart' className="cartwidget">
            <i className="ri-shopping-cart-2-fill"></i>
            { cart.length > 0 
                ? <sup className="sup">{ totalQuantity() }</sup> 
                : null 
            }
        </Link>
    )
}

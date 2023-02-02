import { Link } from "react-router-dom"
import { useCartContext } from "../../context"


export const CartWidget = () => {
    const { cart } = useCartContext();

    if ( cart.length > 0 ) {
        return (
            <Link to='/cart' className="cartwidget">
                <i className="ri-shopping-cart-2-fill"></i>
                <sup className="sup">{ cart.length }</sup>
            </Link>
        )
    } else {
        return (
            <Link to='/cart' className="cartwidget">
                <i className="ri-shopping-cart-2-fill"></i>
            </Link>
        )
    }

    
}

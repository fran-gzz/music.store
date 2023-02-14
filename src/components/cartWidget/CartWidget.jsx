import { Link } from "react-router-dom"
import { useAppContext } from "../../context"


export const CartWidget = () => {

    const { cart, totalQuantity } = useAppContext();
    
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

import { Link } from "react-router-dom"



export const CartWidget = () => {
    return (
        <Link to='/cart'>
            <i className="ri-shopping-bag-fill"></i>
        </Link>
    )
}

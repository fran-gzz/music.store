import { Link } from "react-router-dom"
import { useCartContext } from "../../context"
import { ProductCard } from "../../components"


export const Cart = () => {

	const { cart, removeFromCart } = useCartContext()	

	if( cart.length > 0) {
		return (
			<div className="animate__animated animate__fadeIn">
				<h1 className="title">Carrito</h1>
				<div className="grid">
					{ cart.map( prod => 
						<ProductCard key={prod.id} isInCart={true} {...prod} handleButton={removeFromCart}/>
					)}	
				</div>
			</div>
		)
	} else {
		return (
			<div className="cart__empty animate__animated animate__fadeIn">
				<p className="title">El carrito está vacío.</p>
				<Link className="button button--primary w-40" to='/'>
					Sigue explorando
				</Link>

			</div>
		)
		
	}

}

import { useCartContext } from "../../context"
import { ProductCard } from "../../components"

export const Cart = () => {

	const { cart, removeFromCart } = useCartContext()	

	if( cart.length > 0) {
		return (
			<div className="animate__animated animate__fadeIn">
				<h1 className="title">Carrito</h1>
				<div className="cart">
				{ cart.map( prod => 
					<ProductCard key={prod.id} isInCart={true} {...prod} handleButton={removeFromCart}/>
				)}
{/**


<div key={prod.id} className='cart__item'>
						<img src={prod.imagen} alt="" className="cart__img"/>
						<div className="cart__info">
							<h2 className="cart__title">{prod.nombre}</h2>
							<p>Cantidad: {prod.cantidad}</p>
							<p>Precio: {prod.precio}</p>
						</div>
						<button className="button button--danger" onClick={ () => removeFromCart(prod)}>Eliminar</button>
					</div>
*/}
					
				</div>
			</div>
		)
	} else {
		return <p className="danger animate__animated animate__fadeIn">El carrito está vacío.</p>
	}

}

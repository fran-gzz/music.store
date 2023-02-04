import { useCartContext } from "../../context"

export const Cart = () => {

	const { cart, removeFromCart } = useCartContext()

	if( cart.length > 0) {
		return (
			<div className="animate__animated animate__fadeIn">
				<h1 className="title">Carrito</h1>
				<div className="cart">
				{ cart.map( prod => 
					<div key={prod.id} className='cart__item'>
						<img src={prod.imagen} alt="" className="cart__img"/>
						<div className="cart__info">
							<h2 className="cart__title">{prod.nombre}</h2>
							<p>{prod.cantidad}</p>
							<p>{prod.precio}</p>
						</div>
						<button className="button button--danger" onClick={ () => removeFromCart(prod)}>Eliminar</button>
					</div>
				)}
				</div>
			</div>
		)
	} else {
		return <p className="danger animate__animated animate__fadeIn">El carrito está vacío.</p>
	}

}

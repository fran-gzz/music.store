import { useCartContext } from "../../context"

export const Cart = () => {

	const { cart } = useCartContext()

	if( cart.length > 0) {
		return (
			<>
				<h1 className="title">Carrito</h1>
				<div className="cart">
				{ cart.map( prod => 
					<div key={prod.id} className='cart__item'>
						<img src={prod.imagen} alt="" className="cart__img"/>
						<h2 className="cart__title">{prod.nombre}</h2>
						<p>{prod.cantidad}</p>
					</div>
				)}
				</div>
				
			</>
		)
	} else {
		return <p className="danger">El carrito está vacío.</p>
	}

}

import { useCartContext } from "../../context"
import { ProductCard, Button, ButtonContainer } from "../../components"

export const Cart = () => {

	const { cart, removeFromCart, totalPrice, totalQuantity, cleanCart } = useCartContext();
   
	return cart.length > 0 ? (
		<div className="cart animate__animated animate__fadeIn">
			<div className="cart__grid">
				{cart.map( prod => (
					<ProductCard key={ prod.id } handleButton={ removeFromCart } {...prod } isInCart/>
				))}
			</div>
			<div className="resume">
				<div className="resume__container">
					<h3 className="resume__title">
						Resumen
					</h3>
					<p className="resume__text">
						Cantidad de productos: { totalQuantity() }
					</p>
  
					<p className="resume__text">
						Precio total: ${ totalPrice().toFixed(2) }
					</p>
					<ButtonContainer>
						<Button text="Finalizar compra"/>
						<Button color="secondary" text="Vaciar carrito" action={() => cleanCart()}/>
					</ButtonContainer>
		  		</div>
			</div>
	  	</div>
	) : (
	  	<div className="cart__empty animate__animated animate__fadeIn">
			<p className="title">El carrito está vacío.</p>
			<Button type="link" direction="/" text="Sigue explorando"/>
	  	</div>
	);
};
  

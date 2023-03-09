import { useCart } from "../../hooks";
import { Button, ButtonContainer, Loader, Animated, ProductsGrid } from "../../components"

export const Cart = () => {
	
	const { cart, isLoading, user, totalPrice, totalQuantity, createOrder, cleanCart } = useCart();

	return cart.length > 0 ?
		isLoading ? <Loader />
		:
		<Animated>
			<article className="cart">
				<ProductsGrid products={ cart } isInCart={ true } />
				<div className="resume">
					<div className="resume__container">
						<h3 className="resume__title"> Resumen </h3>
						<p className="resume__text"> Cantidad de productos: { totalQuantity() } </p>
						<p className="resume__text"> Precio total: ${ totalPrice().toFixed(2) } </p>
						{
							user.isLoggedIn ? null 
							: <p style={{color: '#f00'}}>Debes iniciar sesión para continuar</p>
						}
						<ButtonContainer>
							{
								user.isLoggedIn
								? <Button text="Finalizar compra" action={() => createOrder()}/>
								: <Button type="link" direction='/auth/login' text="Iniciar sesión"/>
							}
							<Button color="secondary" text="Vaciar carrito" action={() => cleanCart()}/>
						</ButtonContainer>
					</div>
				</div>
		</article>
	</Animated>
	: 
	<Animated>
		<article className="empty">
			<p className="title">El carrito está vacío.</p>
			<Button type="link" direction="/" text="Sigue explorando"/>
		</article>
	</Animated>
};
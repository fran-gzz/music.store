import { useState } from "react";
import { useAppContext } from "../../context"
import { ProductCard, Button, ButtonContainer, Loader } from "../../components"

import { addOrder } from "../../firebase/firebase";
import Swal from "sweetalert2";



export const Cart = () => {

	const { cart, removeFromCart, totalPrice, totalQuantity, cleanCart, user } = useAppContext();
	const [ isLoading, setIsLoading ] = useState( false );

	const createOrder = async () => {
		try {
			setIsLoading(true);

			const order = {}
			order.buyer = user.data
			order.items = cart.map(({ id, name, price }) => ({ id, name, price }));
			order.total = totalPrice().toFixed(2);

			const orderId = await addOrder(order);

			setIsLoading( false );
			Swal.fire({
				icon: 'success',
				title: 'Compra exitosa',
				text: `ID de la orden: ${orderId}`,
			}).then(() => cleanCart())
		} catch ( error ) {
			setIsLoading( false );
			Swal.fire({
				icon: 'error',
				title: 'Error al procesar la orden',
				text: error.message,
			});
		}
	}

	return cart.length > 0 ? (
		isLoading 
		? <Loader />
		:
		<div className="cart animate__animated animate__fadeIn">
			<div className="cart__grid">
				{cart.map( prod => (
					<ProductCard key={ prod.id } handleButton={ removeFromCart } {...prod } isInCart/>
				))}
			</div>
			
			<div className="resume" onSubmit={createOrder}>
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
					{
						user.isLoggedIn 
						? null 
						: <p style={{color: '#f00'}}>Debes iniciar sesión para continuar</p>
					}
					<ButtonContainer>
						{
							user.isLoggedIn 
							? <Button text="Finalizar compra" action={() => createOrder()}/>
							: <Button type="link" direction='/login' text="Iniciar sesión"/>
						}
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
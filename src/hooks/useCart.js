import { useState } from "react"
import { useAppContext } from "../context"
import { addOrder } from "../firebase";
import Swal from "sweetalert2";

export const useCart = () => {

    const { cart, totalPrice, totalQuantity, cleanCart, user } = useAppContext();
    
    const [ isLoading, setIsLoading ] = useState( false );

    const createOrder = async () => {
		try {
			setIsLoading(true);
			const order = {
				buyer : user.data,
				items : cart.map(({ id, name, price }) => ({ id, name, price })),
				totalPrice : totalPrice().toFixed(2),
                totalItems : totalQuantity()
			}
			const orderId = await addOrder( order );

			setIsLoading( false );
			
			Swal.fire({
				icon: 'success',
				title: 'Compra exitosa',
				text: `ID de la orden: ${ orderId }`,
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

    return {
        isLoading,
        cart,
        user,
        totalPrice,
        totalQuantity,
        createOrder,
        cleanCart
    }
}
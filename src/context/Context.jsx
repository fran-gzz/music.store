import { createContext, useContext, useState  } from "react";
import { showSuccessToast, showErrorToast } from "../components";



const Context = createContext([]);

export const useCartContext = () => useContext(Context);


export const Provider = ({ children }) => {

    const [ cart, setCart ] = useState([]);

    const addToCart = ( product ) => {
        const existing = cart.find( i => i.nombre === product.nombre) ;
        !existing ? (
            product.cantidad <= product.stock
            ? (
                setCart([...cart, product]),
                showSuccessToast()
            ) : showErrorToast(`No hay suficiente stock para agregar "${ product.nombre }" al carrito`)
        ) : (
            existing.cantidad + product.cantidad <= existing.stock
            ? (
                setCart(
                    cart.map(i =>
                    i.nombre === product.nombre
                        ? { ...i, cantidad: i.cantidad + product.cantidad }
                        : i
                    )
                ),
                showSuccessToast()
            ) : showErrorToast(`No hay suficiente stock para agregar "${ product.nombre }" al carrito`)
        )
    };
        
    const removeFromCart = ( product ) => setCart(  prevCart => prevCart.filter( i => i.nombre !== product.nombre ))

    return (
        <Context.Provider value={{
            cart,
            addToCart, removeFromCart
        }}>
            { children }
        </Context.Provider>
    )
    
}
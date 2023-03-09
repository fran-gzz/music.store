import { useState } from "react";
import { Context } from "./Context";
import { showSuccessToast, showErrorToast, showUpdatedToast } from "../components";


export const Provider = ({ children }) => {

    // Manejo del usuario
    const [ user, setUser ] = useState({ isLoggedIn: false });

    const addUser = ( userData ) => {
        const { password, confirmEmail, ...data } = userData;
        setUser({ data, isLoggedIn: true })
    }
    const removeUser = () => {
        setUser({ isLoggedIn: false });
    }

    // Manejo del carrito
    const [ cart, setCart ] = useState([]);

    const addToCart = ( product ) => {
        const existing = cart.find( i => i.name === product.name) ;
        !existing 
        ? 
            product.quantity <= product.stock
            ? (
                setCart([...cart, product]),
                showSuccessToast('Producto agregado')
            ) : showErrorToast(`No hay suficiente stock para agregar "${ product.name }" al carrito`)
        : 
            existing.quantity + product.quantity <= existing.stock
            ? (
                setCart(
                    cart.map(i =>
                    i.name === product.name
                        ? { ...i, quantity: i.quantity + product.quantity }
                        : i
                    )
                ),
                showUpdatedToast('Cantidad actualizada')
            ) : showErrorToast(`No hay suficiente stock para agregar "${ product.name }" al carrito`)
        
    };
        
    const removeFromCart = ( name ) => {
        setCart( products => products.filter( product => product.name !== name ))
    }

    const cleanCart = () => setCart([])


    const totalQuantity = () => cart.reduce(( count, objProduct ) => count += objProduct.quantity, 0)
    const totalPrice = () => cart.reduce(( count, objProduct ) => count += ( objProduct.quantity * objProduct.price ), 0)

    return (
        <Context.Provider value={{
            cart, totalQuantity, totalPrice, user,
            addToCart, removeFromCart, cleanCart, addUser, removeUser
        }}>
            { children }
        </Context.Provider>
    )
}
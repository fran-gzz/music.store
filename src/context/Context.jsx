import { createContext, useContext, useState  } from "react";
import { showSuccessToast, showErrorToast } from "../components";



const Context = createContext([]);

export const useCartContext = () => useContext(Context);


export const Provider = ({ children }) => {

    const [ cart, setCart ] = useState([]);

    const addToCart = ( product ) => {
        const existing = cart.find( i => i.name === product.name) ;
        !existing ? (
            product.quantity <= product.stock
            ? (
                setCart([...cart, product]),
                showSuccessToast()
            ) : showErrorToast(`No hay suficiente stock para agregar "${ product.name }" al carrito`)
        ) : (
            existing.quantity + product.quantity <= existing.stock
            ? (
                setCart(
                    cart.map(i =>
                    i.name === product.name
                        ? { ...i, quantity: i.quantity + product.quantity }
                        : i
                    )
                ),
                showSuccessToast()
            ) : showErrorToast(`No hay suficiente stock para agregar "${ product.name }" al carrito`)
        )
    };
        
    const removeFromCart = ( name ) => setCart( products => products.filter( product => product.name !== name ))

    const cleanCart = () => setCart([])


    const totalQuantity = () => cart.reduce(( count, objProduct ) => count += objProduct.quantity, 0)
    const totalPrice = () => cart.reduce(( count, objProduct ) => count += ( objProduct.quantity * objProduct.price ), 0)

    return (
        <Context.Provider value={{
            cart, totalQuantity, totalPrice,
            addToCart, removeFromCart, cleanCart
        }}>
            { children }
        </Context.Provider>
    )
    
}
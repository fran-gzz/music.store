import { createContext, useContext, useState  } from "react";

const Context = createContext([]);


export const useCartContext = () => useContext(Context);



export const Provider = ({ children }) => {
    const [ cart, setCart ] = useState([]);

    const addToCart = ( product ) => {
        setCart([ ...cart, product ])
    }

    return (
        <Context.Provider value={{
            cart,
            addToCart
        }}>
            { children }
        </Context.Provider>
    )
    
}
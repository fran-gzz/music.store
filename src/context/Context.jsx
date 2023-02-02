import { createContext, useContext, useState  } from "react";
import Swal from "sweetalert2";


const Context = createContext([]);

export const useCartContext = () => useContext(Context);


export const Provider = ({ children }) => {
    const [ cart, setCart ] = useState([]);

    const addToCart = ( product ) => {

        const existing = cart.find( i => i.nombre === product.nombre );

        if ( !existing ) {
            product.cantidad <= product.stock 
            ? ( setCart([ ...cart, product ]),
                Swal.fire({
                    position: 'top-end',
                    toast: true,
                    title: 'Produto agregado',
                    showConfirmButton: false,
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                })
            ) : Swal.fire({
                    title: 'Error',
                    text: `No hay suficiente stock para agregar "${product.nombre}" al carrito`,
                    icon: 'error'
                })
        }
        ( existing.cantidad + product.cantidad <= existing.stock )
            ? ( setCart(
                cart.map( i =>  
                    i.nombre === product.nombre
                        ? { ...i, cantidad: i.cantidad + product.cantidad } 
                        : i
                    )),
                Swal.fire({
                    position: 'top-end',
                    toast: true,
                    title: 'Produto agregado',
                    showConfirmButton: false,
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                }))
            :   Swal.fire({
                    title: 'Error',
                    text: `No hay suficiente stock para agregar "${product.nombre}" al carrito`,
                    icon: 'error'
                })
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
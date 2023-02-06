import { useState } from "react"
import { Link } from "react-router-dom";

export const ItemCount = ({ stock = 0, initialState = 1, onAdd }) => {

    const [ count, setCount ] = useState( initialState );

    const sumar = () => setCount( count < stock ? count + 1 : count )
    const restar = () => setCount( count > initialState ?  count - 1 : count )
    
    const handleButton = () => onAdd( count )
    
    return (
        <>
            {
                stock === 0 
                ? <p className="danger">¡Sin stock!</p>
                : 
                <div className="count">
                    <p>
                        {
                            stock === 1 
                            ? '¡Último disponible!'
                            : `${stock} unidades disponibles`
                        }
                    </p>
                    <div className="count__container">
                        <button onClick={restar} className='count__button'> - </button>
                        <label className="count__label"> {count} </label>
                        <button onClick={sumar} className='count__button'> + </button>
                    </div>
                    
                    <div className="button--container">
                        <button className="button button--primary w-60" onClick={ handleButton }>Añadir al carrito</button>
                        <Link className="button button--secondary w-40" to='/cart'>Ir al carrito</Link>
                    </div>

                </div>
                }
        </>  
    )
}

import { useState } from "react"
import { Link } from "react-router-dom";
export const ItemCount = ({ stock = 0, initialState = 1, onAdd }) => {

    const [ count, setCount ] = useState( initialState );
    const [ isInCount, setIsInCount ] = useState( true )

    const sumar = () => setCount( count < stock ? count + 1 : count )
    const restar = () => setCount( count > initialState ?  count - 1 : count )
    
    const handleButton = () => {
        onAdd( count )
        setIsInCount( false )
    }
    
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
                    {
                        isInCount ? 
                        <>
                            <div className="count__container">
                                <button onClick={restar} className='count__button'> - </button>
                                <label className="count__label"> {count} </label>
                                <button onClick={sumar} className='count__button'> + </button>
                            </div>
                            <button className="button button--primary w-100" onClick={ handleButton }>
                                Añadir al carrito
                            </button>
                        </>
                        : 
                        <div className="button__container button__container--col">
                            <Link to='/'>
                                <button className="button button--secondary w-100">Seguir comprando</button>
                            </Link>
                            <Link to='/cart'>
                                <button className="button button--primary w-100">Ir al carrito</button>
                            </Link>
                        </div>

                    }
                    
                </div>
            }
        </>  
    )
}

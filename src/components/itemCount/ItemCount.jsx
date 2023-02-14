import { useState } from "react"
import { Button, ButtonContainer } from "../buttons/Button";


export const ItemCount = ({ stock = 0, initialState = 1, onAdd }) => {

    const [ count, setCount ] = useState( initialState );
    const [ isInCount, setIsInCount ] = useState( true )

    const add = () => {
        setCount( count < stock ? count + 1 : count );
    }
    const substract = () => {
        setCount( count > initialState ?  count - 1 : count );
    }
    
    const addToCart = () => {
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
                            : `${ stock } unidades disponibles`
                        }
                    </p>
                    {
                        isInCount ? 
                        <>
                            <div className="count__container">
                                <button onClick={ substract } className='count__button'> - </button>
                                <label className="count__label"> { count } </label>
                                <button onClick={ add } className='count__button'> + </button>
                            </div>
                            <Button color="primary" text="Añadir al carrito" action={ addToCart }/>
                        </>
                        : 
                        <ButtonContainer type="col">
                            <Button type="link" direction="/" color="secondary" text="Sigue navegando"/>
                            <Button type="link" direction="/cart" text="Ir al carrito"/>
                        </ButtonContainer>
                    }
                </div>
            }
        </>  
    )
}

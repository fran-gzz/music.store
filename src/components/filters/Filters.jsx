import { useState } from 'react'

export const Filters = ({ onChange }) => {

    const [ minPrice, setMinPrice ] = useState( 0 );
    const [ shipping, setShipping ] = useState( false );

    const handleChangeMinPrice = ( e ) => {
        setMinPrice(e.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeShipping = ( e ) => {
        setShipping(e.target.checked)
        onChange(prevState => ({
            ...prevState,
            shipping: e.target.checked
        }))
    }

    return (
        <div className='filters'>
            <div className='filters__filter'>
                <label htmlFor="price">Precio desde:</label>
                <input type="range" className='filter--range' min='0' id="price" max='3000' onChange={handleChangeMinPrice}/>
                <span>${minPrice}</span>
            </div>

            <div className='filters__filter'>
                <p>Envio Gratis</p>
                <label className="switch">
                    <input type="checkbox" checked={shipping} onChange={handleChangeShipping}/>
                    <span className="slider" />
                    <div className="slider__card">
                        <span className="slider__card--face"/>
                        
                    </div>
                </label>
            </div>
        </div>
    )
}

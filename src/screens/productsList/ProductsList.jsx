import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getItems, getItemsByType } from "../../firebase"

import { ProductCard, Loader } from "../../components"

export const ProductsList = () => {

    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );
    
    const { typeID } = useParams();

    useEffect(()=> {
        setIsLoading( true )
        const fetch = () => {
            if(!typeID) {
                getItems().then((response) => {
                    setProducts(response)
                })
                .finally( () => setIsLoading( false ));
            } else {
                getItemsByType(typeID).then((response) => {
                    setProducts(response)
                })
                .finally( () => setIsLoading( false ));
            }
        }
        fetch()
    }, [typeID])

    return (
    <>
        {
            isLoading 
            ? <Loader />
            :    
            <div className="grid animate__animated animate__fadeIn">
                { products.map( product => <ProductCard key={product.id} {...product} />) }
            </div>
        }
    </>
    )
}
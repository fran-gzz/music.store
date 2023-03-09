import { useState, useEffect } from "react"
import { getItems, getItemsByType } from "../firebase"

export const useProducts = ({ typeID }) => {

    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    /*
     *  Fetch: el typeID proviene de un useParams. Si no hay typeID, devuelve todos
     *  los productos. Caso contrario, solo devuelve los productos dentro de esa
     *  categoría.
     */

    useEffect(() => {
        setIsLoading( true );
        const fetch = () => {
            if( !typeID ) {
                getItems().then( resp => {
                    setProducts( resp )
                })
                .finally( () => setIsLoading( false ));
            } else {
                getItemsByType( typeID ).then( resp => {
                    setProducts( resp )
                })
                .finally( () => setIsLoading( false ))
            }
        }
        fetch()
    }, [ typeID ]);

    /////////////////   Filtros    /////////////////////

    const [ filters, setFilters ] = useState({
        type: 'all',
        minPrice: 0,
        shipping: false
    });

    const filterProducts = () => {
        return products.filter( product => {
            return (
                product.price >= filters.minPrice && 
                (
                    filters.type === 'all' ||
                    product.type === filters.type
                ) && (
                    !filters.shipping ||
                    product.shipping
                )
            )
        })
    }

    const filteredProducts = filterProducts( products );

    return {
        isLoading,
        products: filteredProducts,
        setFilters
    }
}
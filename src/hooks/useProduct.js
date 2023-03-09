import { useState, useEffect } from "react";
import { useAppContext } from "../context";
import { getItem } from "../firebase";



export const useProduct = ({ id }) => {

    const [ product, setProduct ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    const { addToCart } = useAppContext();

    useEffect(() => {
        setIsLoading( true )
        getItem( id ).then( resp => setProduct( resp ))
        .finally(() => setIsLoading( false ))
    }, [ id ]);

    const onAdd = ( qty ) => addToCart({ ...product, quantity: qty })

    return { product, isLoading, onAdd }
}
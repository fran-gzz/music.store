import { products } from "../data/products";

export const getProductByType = ( type ) => {
    const validTypes = ['instrumento', 'efecto'];
    if( !validTypes.includes( type )) {
        throw new Error (`${ type } no es un tipo de producto válido`)
    }
    return products.filter( product => product.type === type )
}

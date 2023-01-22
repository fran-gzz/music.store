import { products } from "../data/products";

export const getProductByType = ( tipo ) => {
    const validTypes = ['instrumento', 'efecto'];
    if( !validTypes.includes( tipo )) {
        throw new Error (`${tipo} no es un tipo de producto válido`)
    }
    return products.filter( product => product.tipo === tipo )
}

import { products } from "../data/products";

export const getProductById = ( id ) => products.find( product => product.id === id )

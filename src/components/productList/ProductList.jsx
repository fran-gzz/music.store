import { getProductByType } from '../../helpers/getProductByType'
import { ProductCard } from '../productCard/ProductCard'

export const ProductList = ({ type }) => {
    const  products = getProductByType( type );
    return products.map( product => <ProductCard key={ product.id } { ...product }/> )
}

import { getProductByType } from '../../helpers/getProductByType'
import { ProductCard } from '../productCard/ProductCard'

export const ProductList = ({ type }) => {
    const products = getProductByType( type )
    return (
        <>
        <div className="grid">
            { products.map( product => (
                <ProductCard key={ product.id } { ...product }/>
            ))}
        </div>
        
        </>
    )
}

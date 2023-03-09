import { ProductCard } from "../productCard/ProductCard"

export const ProductsGrid = ({ products, isInCart = false }) => {
    return (
        <div className="grid">
            { products.map( prod => (
                <ProductCard key={ prod.id } product={ prod }  isInCart={isInCart}/>
			))}
        </div>
    )
}
